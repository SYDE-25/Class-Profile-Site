import { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { Bar } from 'react-chartjs-2';

export default function BarGraph(props) {
  const [data, setData] = useState({
    val: [],
    label: [],
    color: '',
  });

  const [id, setId] = useState(0);

  useEffect(() => {
    if (id <= 0) {
      db.collection('1A Data')
        .doc(props.datatype)
        .onSnapshot(
          async (snapshot) => {
            let data = {
              val: [],
              label: [],
              color: '',
              title: '',
              xAxes: '',
              yAxes: '',
            };
            await snapshot.data().x.values.forEach((element) => {
              data.val.push(element.value);
              data.label.push(element.index);
            });
            data.color = snapshot.data().x.color;
            data.title = snapshot.data().title;
            data.xAxis = snapshot.data().x.label;
            data.yAxis = snapshot.data().y.label;
            setId(id + 1);
            setData(data);
          },
          (err) => {
            console.log('Error fetching firebase snapshot! ' + err);
          }
        );
    }
  });

  if (data.color[0] === undefined) {
    data.color = 'rgb(255, 99, 132)';
  }

  var x = 0;
  var len = data.val.length;
  while (x < len) {
    data.val[x] = data.val[x].toFixed(2);
    x++;
  }

  return (
    <div>
      <div className="chart">
        <Bar
          data={{
            labels: data.label,
            datasets: [
              {
                label: '% of Students',
                data: data.val,
                backgroundColor: data.color,
                borderColor: data.color,
                hoverBackgroundColor: '#ffffff',
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            legend: { display: false },
            title: {
              display: true,
              text: data.title,
              fontColor: '#ffffff',
              fontSize: 15,
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    zeroLineColor: '#fff',
                    color: 'rgba(255, 255, 255, 0.05)',
                    lineWidth: 1 // Don't add a comma on this line lol, it breaks the graphs ¯\_(ツ)_/¯
                  },
                  scaleLabel: {
                    display: true,
                    labelString: data.xAxis,
                    fontColor: '#ffffff',
                    fontSize: 15,
                  },
                  ticks: {
                    fontColor: '#ffffff',
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    zeroLineColor: '#fff',
                    color: 'rgba(255, 255, 255, 0.05)',
                    lineWidth: 1,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: data.yAxis,
                    fontColor: '#ffffff',
                    fontSize: 15,
                  },
                  ticks: {
                    beginAtZero: true,
                    fontColor: '#ffffff',
                  },
                },
              ],
            },
          }}
          height={props.height ? props.height : '100%'}
          width={props.width ? props.width : '100%'}
        />
      </div>
    </div>
  );
}
