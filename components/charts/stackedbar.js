import { useState } from "react";
import { db } from "../../firebaseConfig";
import { Bar } from "react-chartjs-2";

export default function StackedBar(props) {
  const [data, setData] = useState({
    bar: [],
    val: [], 
    label: [],
    color: [],
  });

  db.collection("1A Data")
    .doc(props.datatype)
    .onSnapshot(
      async (snapshot) => {
        let data = {
          barlabel: [], 
          barval: [],
          label: [], 
          val: [], 
          color: [],
          title: "",
          xAxes: "",
          yAxes: "",
        };
        await snapshot.data().x.bars.forEach((element) => {
          data.label.push(element.legendIndex);
          data.barval.push(element.barValues);
          data.color.push(element.color);
        }); 

        for (var i in data.barval) {
          var d = [];
          data.barval[i].forEach(function(elem, index) { 
            d.push(elem.barValue);
            if (!data.barlabel.includes(elem.barLabel))
            {
              data.barlabel.push(elem.barLabel);
            }
          });
          data.val.push(d); 
      }

        data.title = snapshot.data().title;
        data.xAxis = snapshot.data().x.label;
        data.yAxis = snapshot.data().y.label;
        setData(data);
      },
      (err) => {
        console.log("Error fetching firebase snapshot! " + err);
      }
    );

  
  function dataset_chartjs(data){
    var datasets = []
    var datasets_sorted = []
    for (var i = 0; i < data.val.length; i++){ 
      var add_data = {
          label: data.label[i],
          data: data.val[i],
          backgroundColor: data.color[i],
          borderColor: data.color[i],
          hoverBorderWidth: 2,
          sum: data.val[i].reduce((a, b) => a + b, 0)
      }
      datasets.push(add_data)
    }  
    datasets = orderBySubKey( datasets, 'sum' )

      datasets.forEach(function(elem, index) { 
        datasets_sorted.push(elem.value);
      });
  
    return datasets_sorted
  }

  function orderBySubKey( input, key ) {
    return Object.keys( input ).map( key => ({ key, value: input[key] }) ).sort( (a, b) => a.value[key] - b.value[key] );
  }

  return (
    <div>
      <div className="chart">
        <Bar
          data={{
            labels: data.barlabel,
            datasets: dataset_chartjs(data)
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            legend: { 
              display: true,
              reverse: true, 
              position: 'right',
              labels: {
                usePointStyle: true,
                boxWidth: 8,
                padding: 8,
                fontSize: 12,
              }
             },
            title: {
              display: true,
              text: data.title,
              fontColor: "#ffffff",
              fontSize: 15,
            },
            scales: {
              xAxes: [
                {
                  stacked: true, 
                  scaleLabel: {
                    display: true,
                    labelString: data.xAxis,
                    fontColor: "#ffffff",
                    fontSize: 15,
                  },
                  ticks: {
                    fontColor: "#ffffff",
                  },
                },
              ],
              yAxes: [
                {
                  stacked: true,
                  scaleLabel: {
                    display: true,
                    labelString: data.yAxis,
                    fontColor: "#ffffff",
                    fontSize: 15,
                  },
                  ticks: {
                    beginAtZero: true,
                    fontColor: "#ffffff",
                  },
                },
              ],
            },
          }}
          height={props.height ? props.height : "100%"}
          width={props.width ? props.width : "100%"}
        />
      </div>
    </div>
  );
}




