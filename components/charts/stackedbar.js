import { useState } from "react";
import { db } from "../../firebaseConfig";
import { Bar } from "react-chartjs-2";
import { DataTextureLoader } from "three";

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
          //data.barlabel.push(l);

          
      }
      // console.log(data.val);
      // console.log(data.barlabel);


        data.title = snapshot.data().title;
        data.xAxis = snapshot.data().x.label;
        data.yAxis = snapshot.data().y.label;
        setData(data);
      },
      (err) => {
        console.log("Error fetching firebase snapshot! " + err);
      }
    );

    
  return (
    <div>
      <div className="chart">
        <Bar
          data={{
            labels: data.barlabel,            
            datasets: [
              {
                label: data.label[0],
                data: data.val[0],
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: '#003f5c',
                //hoverBackgroundColor: "#ffffff",
                borderWidth: 2,
              },
              {
                label: data.label[1],
                data: data.val[1],
                backgroundColor: "rgb(133, 99, 122)",
                borderColor: '#003f5c',
                //hoverBackgroundColor: "#ffffff",
                borderWidth: 2,
              },
              {
                label: data.label[2],
                data: data.val[2],
                backgroundColor: "rgb(231, 99, 55)",
                borderColor: '#003f5c',
                //hoverBackgroundColor: "#ffffff",
                borderWidth: 2,
              },
              {
                label: data.label[3],
                data: data.val[3],
                backgroundColor: "rgb(21, 22, 222)",
                borderColor: '#003f5c',
                //hoverBackgroundColor: "#ffffff",
                borderWidth: 2,
              },
              {
                label: data.label[4],
                data: data.val[4],
                backgroundColor: "rgb(134, 22, 122)",
                borderColor: '#003f5c',
                //hoverBackgroundColor: "#ffffff",
                borderWidth: 2,
              },
              {
                label: data.label[5],
                data: data.val[5],
                backgroundColor: "rgb(122, 43, 33)",
                borderColor: '#003f5c',
                //hoverBackgroundColor: "#ffffff",
                borderWidth: 2,
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
