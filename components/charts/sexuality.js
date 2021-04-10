import { db } from "../../firebaseConfig";
import { Bar } from "react-chartjs-2";


const backup = db.collection("1A Data").doc("Sexuality");
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

const data1 =  {
  labels: dataLabel,
  datasets: [
    {
      label: "# of Students",
      data: dataVal,
      backgroundColor: dataColor,
      borderColor: dataColor,
      borderWidth: 1,
      barPercentage: 0.5,
    },
  ],
}


export default function Sexuality() {

  return (
    <div>
     
      <div className="header" >
        <h1 className="title">Pie Chart</h1>
      </div >
      <div className="chart">
        
        <Bar
        data={data1}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: { display: false },
            title: {
              display: true,
              text: 'Sexualities in SYDE 2025'
            },
          }}
          
          height="450"
          width="450"
        />
      </div>
    </div>
  );
}

