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
              x: snapshot.data().x.values[i].value,
              y: snapshot.data().y.values[i].value,
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

  return (
    <div>
      <div className="chart">
        <Scatter
          data={{
            labels: data.label,
            datasets: [
              {
                label: data.label,
                data: data.val,
                backgroundColor: "rgb(255, 99, 132)", //should be data.color
                hoverBorderColor: "#ffffff",
                //borderColor: data.color,
                //borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            legend: { display: true },  
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
