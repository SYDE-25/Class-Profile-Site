import { useState } from "react";
import { db } from "../../firebaseConfig";
import { Pie } from "react-chartjs-2";

export default function PieChart(props) {
  const [data, setData] = useState({
    val: [],
    label: [],
    color: [],
  });

  db.collection("1A Data")
    .doc(props.datatype)
    .onSnapshot(
      (snapshot) => {
        let data = {
          val: [],
          label: [],
          color: [],
          title: "",
        };

        snapshot.data().x.forEach((element) => {
          data.val.push(element.value);
          data.label.push(element.index);
          data.color.push(element.color);
        });
        data.title = snapshot.data().title;
        setData(data);
      },
      (err) => {
        console.log("Error fetching firebase snapshot! " + err);
      }
    );

  return (
    <div>
      {/* <div className="header">
        <h1 className="title">Pie Chart</h1>
      </div> */}
      <div className="chart">
        <Pie
          data={{
            labels: data.label,
            datasets: [
              {
                label: "# of Students",
                data: data.val,
                backgroundColor: data.color,
                borderColor: data.color,
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: { display: false },
            title: {
              display: true,
              text: data.title,
            },
          }}
          height="450px"
          width="450px"
        />
      </div>
    </div>
  );
}
