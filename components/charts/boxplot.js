import { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import "chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot.js";

export default function BoxPlot(props) {
  const [data, setData] = useState({
    val: [],
    label: [],
    color: [],
  });

  db.collection("1A Data")
    .doc(props.datatype)
    .onSnapshot(
      async (snapshot) => {
        let data = {
          val: [],
          label: [],
          color: [],
          title: "",
          xAxes: "",
          yAxes: "",
        };
        await snapshot.data().x.values.forEach((element) => {
          data.val.push(element.plotValues);
          data.label.push(element.index);
          data.color.push(element.color);
        });
        data.title = snapshot.data().title;
        data.xAxis = snapshot.data().x.label;
        data.yAxis = snapshot.data().y.label;
        setData(data);
      },
      (err) => {
        console.log("Error fetching firebase snapshot! " + err);
      }
    );

    
    useEffect(() => {    
        let config = {
        type: 'boxplot',
        data: {
            labels: data.label,
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: '#525772',
                borderColor: 'white',
                hoverBackgroundColor: 'red',
                borderWidth: 1,
                outlierColor: '#999999',
                padding: 10,
                itemRadius: 0,
                data: data.val
            }]
        },
        options: {
            responsive: true,
            tootltips: {enabled:false}, 
            hover: {mode: null},
            maintainAspectRatio: true,
            legend: { display: false },
            title: {
                display: true,
                text: data.title,
                fontColor: "#ffffff",
                fontSize: 15,
            },
            scales: {
                xAxes: [
                {
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
                    scaleLabel: {
                    display: true,
                    labelString: data.yAxis,
                    fontColor: "#ffffff",
                    fontSize: 15,
                    },
                    ticks: {
                    fontColor: "#ffffff",
                    },
                },
                ],
            },
        },
    };
    var ctx = document.getElementById("box-plot").getContext("2d");
    window.myLine = new Chart(ctx, config);
        }, [data])

  return (
      <div className="chart">
      <canvas id="box-plot"
       height={props.height ? props.height : "100%"}
        width={props.width ? props.width : "100%"} 
    />
      </div>
  );
}
