import { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import "chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot.js";

export default function BoxPlot(props) {
//   const [data, setData] = useState({
//     val: [],
//     label: [],
//     color: [],
//   });
function checkIfexist(){
    return new Promise((resolve, reject) => {
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
                resolve(data);
                },
                (err) => {
                console.log("Error fetching firebase snapshot! " + err);
                reject(err);
                }
            );       
        })
}

checkIfexist().then( function(result) {
    const data = result
        console.log(result)
})
console.log(result)


    // const boxplotData = {
    //     // define label tree
    //     labels: processed_data.label, 
    //     datasets: [{
    //       label: 'Dataset 1',
    //       backgroundColor: '#525772',
    //       borderColor: 'white',
    //       borderWidth: 1,
    //       outlierColor: '#999999',
    //       padding: 10,
    //       itemRadius: 0,
    //       data: processed_data.val
    //     }]
    //   };
    
    // useEffect(() => {    
    //     var config = {
    //     type: 'boxplot',
    //     data: boxplotData, 
    //     options: {
    //         responsive: true,
    //         maintainAspectRatio: true,
    //         legend: { display: false },
    //         title: {
    //             display: true,
    //             text: processed_data.title,
    //             fontColor: "#ffffff",
    //             fontSize: 15,
    //         },
    //         scales: {
    //             xAxes: [
    //             {
    //                 scaleLabel: {
    //                 display: true,
    //                 labelString: processed_data.xAxis,
    //                 fontColor: "#ffffff",
    //                 fontSize: 15,
    //                 },
    //                 ticks: {
    //                 fontColor: "#ffffff",
    //                 },
    //             },
    //             ],
    //             yAxes: [
    //             {
    //                 scaleLabel: {
    //                 display: true,
    //                 labelString: processed_data.yAxis,
    //                 fontColor: "#ffffff",
    //                 fontSize: 15,
    //                 },
    //                 ticks: {
    //                 fontColor: "#ffffff",
    //                 },
    //             },
    //             ],
    //         },
    //     },
    // };
    // var ctx = document.getElementById("box-plot").getContext("2d");
    // window.myLine = new Chart(ctx, config);
    //     }, [])

  return (
      <div className="chart">
      <canvas id="box-plot"
       height={props.height ? props.height : "100%"}
        width={props.width ? props.width : "100%"} 
    />
      </div>
  );
}
