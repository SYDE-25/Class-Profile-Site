import { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { Scatter } from "react-chartjs-2";

export default function Scatterplot(props) {
  const [data, setData] = useState({
    val: [],
    label: [],
    title: "",
    xAxis: "",
    yAxis: "",
  });

  const [id, setId] = useState(0);

  useEffect(() => {
    if(id<=0){
      db.collection("1A Data")
      .doc(props.datatype)
      .onSnapshot(
        async (snapshot) => {
          let data = {
            val: [],
            label: [],
            color: [],
            title: "",
          };
  
          for (let i = 0; i < (await snapshot.data().x.values.length); i++) {
            data.val.push({
              x: parseFloat(snapshot.data().x.values[i].value.toFixed(2)),
              y: parseFloat(snapshot.data().y.values[i].value.toFixed(2)),
            });
            data.label.push(snapshot.data().x.values[i].index);
            data.color.push(snapshot.data().x.values[i].color);
          }
          data.title = snapshot.data().title;
          data.xAxis = snapshot.data().x.label;
          data.yAxis = snapshot.data().y.label;
          setId(id+1);
          setData(data);
        },
        (err) => {
          console.log("Error fetching firebase snapshot! " + err);
        }
      );
    }
  });

  function dataset_chartjs(data){
    var datasets = []

    if (data.label[0] !== null){
      for (var i = 0; i < data.val.length; i++){ 
        var add_data = {
            label: data.label[i],
            data: [data.val[i]],
            backgroundColor: data.color[i],
            borderColor: data.color[i],
            hoverBorderWidth: 2,
        }
      datasets.push(add_data)
    } 
  } 
  else  {
    datasets.push({
      label: "Student",
      data: data.val,
      backgroundColor: '#7582ca',
      hoverBorderColor: "#ffffff",
    })
  }
    return datasets
  }

  return (
    <div>
      <div className="chart">
        <Scatter
          data={{
            labels: data.label,
            datasets: dataset_chartjs(data)
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            tooltips: {
              enabled: true, 
              callbacks: {
                label: function(tooltipItem, data) { 
                    var label = data.labels[tooltipItem.datasetIndex];
                    if(label !== null){
                      return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
                    }
                    else{
                      return ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
                    }
                }
            }
          },
            legend: { 
              display: true,
              position: 'right',
              labels: {
                usePointStyle: true,
                boxWidth: 8,
                padding: 8,
                fontSize: 12,  
                fontColor: "#a0a0a0"           
              }
            },
            title: {
              display: true,
              text: data.title,
              fontSize: 15,
              fontColor: "#ffffff",
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    zeroLineColor: '#d9dddc',
                    color: "rgba(255, 255, 255, 0.15)",
                },
                  scaleLabel: {
                    display: true,
                    labelString: data.xAxis,
                    fontSize: 15,
                    fontColor: "#ffffff",
                  },
                  ticks: {
                    fontColor: "#ffffff",
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    zeroLineColor: '#d9dddc',
                    color: "rgba(255, 255, 255, 0.15)",
                },
                  scaleLabel: {
                    display: true,  
                    labelString: data.yAxis,
                    fontSize: 15,
                    fontColor: "#ffffff",
                  },
                  ticks: {
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
