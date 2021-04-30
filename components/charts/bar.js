import { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { Bar } from "react-chartjs-2";

export default function BarGraph(props) {
  const [data, setData] = useState({
    val: [],
    label: [],
    color: [],
  });

  const [id, setId] = useState(0);

  useEffect(() => {
    if(id <= 0){
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
            data.val.push(element.value);
            data.label.push(element.index);
            data.color.push(element.color);
          });
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
