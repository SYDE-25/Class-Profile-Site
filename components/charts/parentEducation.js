import { db } from "../../firebaseConfig";
import { Pie } from "react-chartjs-2";

const backup = db.collection("1A Data").doc("Parental Education");
const dataVal = [];
const dataLabel = [];
const dataColor = [];

const observer = backup.onSnapshot(
  (docSnapshot) => {
    docSnapshot.data().x.forEach((element) => {
      dataVal.push(element.value);
      dataLabel.push(element.index);
      dataColor.push(element.color);
    });
    // ...
  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);

const data1 = {
  labels: dataLabel,
  datasets: [
    {
      label: "# of Parents",
      data: dataVal,
      //backgroundColor: dataColor,
      //borderColor: dataColor,
      borderWidth: 1,
    },
  ],
};

export default function Education() {
  return (
    <div>
      <div className="header">
        <h1 className="title">Pie Chart</h1>
      </div>
      <div className="chart">
        <Pie
          data={data1}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: { display: false },
            title: {
              display: true,
              text: "Highest level of education for SYDE 2025's Parents",
            },
          }}
          height="450"
          width="450"
        />
      </div>
    </div>
  );
}
