import { useState } from "react";
import { db } from "../../firebaseConfig";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart(props) {
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
        };

        await snapshot.data().x.forEach((element) => {
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

    var arrayData = data.label.map(function(d, i) {
      return {
        label: d,
        data: data.val[i],
        color: data.color[i], 
      };
    });
    
    var sortedArrayData = arrayData.sort(function(a, b) {
      return b.data - a.data;
    });
    
    var newArrayLabel = [];
    var newArrayData = [];
    var newArrayColor = [];
    sortedArrayData.forEach(function(d){
      newArrayLabel.push(d.label);
      newArrayData.push(d.data);
      newArrayColor.push(d.color);
    });


  return (
    <div>
 
      <div className="chart">
        <Doughnut
          data={{
            labels: newArrayLabel,
            
            datasets: [
              {
                label: "# of Students",
                data: newArrayData,
                backgroundColor: newArrayColor,
                borderColor: newArrayColor,
                hoverBorderColor: "#ffffff",
                hoverBorderWidth: 2,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            legend: { 
              position:"right",
              labels: {
                usePointStyle: true,
                boxWidth: 8,
                padding: 8,
                fontSize: 12,              },
              display: true },
            title: {
              display: true,
              text: data.title,
              fontSize: 15,
              fontColor: "#ffffff",
              fontSize: "14"
            },
          }}
          height={props.height ? props.height : "100%"}
          width={props.width ? props.width : "100%"}
        />
      </div>
    </div>
  );
}
