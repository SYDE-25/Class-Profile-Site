import { useState } from "react";
import { db } from "../../firebaseConfig";
import { Bar } from "react-chartjs-2";

export function HistogramPercent(props) {
  const [data, setData] = useState({
    val: [],
    label: [],
    color: [],
  });

  let displayOptions = {}


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

        let values = [];

        await snapshot.data().x.values.forEach((element) => {
          values.push(element);
        })

        await snapshot.data().xLimit.enums.forEach((element) => {
          //need to take in all of the values, sort them,
          let value = values.filter(x => x === element.value).length
          data.val.push((value / values.length).toFixed(2)); //VALUE NEEDS TO BE DETERMINED BY TAKING IN ALL OF THE VALUES AND CALCULATING IT
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

  return (
    <div>
      {/* <div className="header">
        <h1 className="title">Doughnut</h1>
      </div> */}
      <div className="chart">
        <Bar
          data={{
            labels: data.label,
            datasets: [
              {
                label: "# of Students",
                data: data.val,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: data.color,
                hoverBackgroundColor: "#ffffff",
                borderWidth: 2,
                barPercentage: 1.3,
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

export function HistogramCount(props) {
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

        let values = [];

        await snapshot.data().x.values.forEach((element) => {
          values.push(parseInt((element).toFixed(2)));
        })

        values.sort((a,b) => {
          return (a-b)
        });
        console.log(values);

        let min = snapshot.data().xLimit.min;
        let max = snapshot.data().xLimit.max;

        for (let i = min; i <= max; i++) {
          data.label.push(i);
          data.val.push(0); //for each element, will push a 0 value which will be changed later

        }

        //need to go through all of the grades
        //need to check that grade is inbetween itself and its num + 1
        let counter = 0;
        let valueptr = 0;
        
        try {
          while (valueptr < values.length) { 
            console.log(values[valueptr], data.label[counter]);
            if (values[valueptr] >= data.label[counter] && values[valueptr] < data.label[counter] + 1) {
              valueptr += 1;
              console.log(valueptr);
              data.val[counter] += 1;
            } else {
              counter += 1;
            }
          }        
        } catch (err) {
          console.log(err);
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

  return (
    <div>
      {/* <div className="header">
        <h1 className="title">Doughnut</h1>
      </div> */}
      <div className="chart">
        <Bar
          data={{
            labels: data.label,
            datasets: [
              {
                label: "# of Students",
                data: data.val,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: data.color,
                hoverBackgroundColor: "#ffffff",
                borderWidth: 2,
                barPercentage: 1.3,
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
