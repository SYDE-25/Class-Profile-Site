import { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { Bar } from 'react-chartjs-2';

export default function SideBar(props) {
  const [data, setData] = useState({
    bar: [],
    val: [],
    label: [],
    color: [],
  });

  const [id, setId] = useState(0);

  useEffect(() => {
    if (id <= 0) {
      db.collection('1A Data')
        .doc(props.datatype)
        .onSnapshot(
          async (snapshot) => {
            let data = {
              barlabel: [],
              barval: [],
              label: [],
              val: [],
              color: [],
              title: '',
              xAxes: '',
              yAxes: '',
            };
            await snapshot.data().x.bars.forEach((element) => {
              data.label.push(element.legendIndex);
              data.barval.push(element.barValues);
              data.color.push(element.color);
            });

            for (var i in data.barval) {
              var d = [];
              data.barval[i].forEach(function (elem, index) {
                d.push(parseFloat(elem.barValue.toFixed(2)));
                if (!data.barlabel.includes(elem.barLabel)) {
                  data.barlabel.push(elem.barLabel);
                }
              });
              data.val.push(d);
            }

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

  function dataset_chartjs(data) {
    var datasets = [];
    var datasets_sorted = [];
    for (var i = 0; i < data.val.length; i++) {
      var add_data = {
        label: data.label[i],
        data: data.val[i],
        backgroundColor: data.color[i],
        borderColor: data.color[i],
        hoverBorderWidth: 2,
        sum: data.val[i].reduce((a, b) => a + b, 0),
      };
      datasets.push(add_data);
    }
    datasets = orderBySubKey(datasets, 'sum');

    datasets.forEach(function (elem, index) {
      datasets_sorted.push(elem.value);
    });

    return datasets_sorted;
  }

  function orderBySubKey(input, key) {
    return Object.keys(input)
      .map((key) => ({ key, value: input[key] }))
      .sort((a, b) => a.value[key] - b.value[key]);
  }

  return (
    <div>
      <div className="chart">
        <Bar
          data={{
            labels: data.barlabel,
            datasets: dataset_chartjs(data),
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            tooltips: {
              enabled: true,
              callbacks: {
                label: function (tooltipItem) {
                  var label = data.label[tooltipItem.datasetIndex];
                  return label + ': ' + '%' + tooltipItem.value;
                },
              },
            },
            layout: {
              padding: -5,
            },
            legend: {
              display: true,
              position: 'right',
              labels: {
                usePointStyle: true,
                boxWidth: 8,
                padding: 8,
                fontSize: 12,
                fontColor: '#a0a0a0',
              },
            },
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
                    lineWidth: 1,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: data.xAxis,
                    fontColor: '#ffffff',
                    fontSize: 15,
                  },
                  ticks: {
                    fontColor: '#ffffff',
                    userCallback: function(tick, index, values) {
                      if(tick.length > 9  && values.length >= 3){
                        return tick.split(" ");
                      }else{
                        return tick
                      }
                    },
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
