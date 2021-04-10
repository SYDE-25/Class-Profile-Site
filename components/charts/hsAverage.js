import { db } from "../../firebaseConfig";
import { Line } from "react-chartjs-2";


const backup = db.collection("1A Data").doc("HS Average");
const dataVal = [];
const dataLabel = [];
const dataColor = [];


const observer = backup.onSnapshot(
  (docSnapshot) => {
      
    docSnapshot.data().x.values.forEach((element) => {
      dataVal.push(element);
    });
    

  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);

const data1 =  {
  labels: dataVal,
  datasets: [
    {
      label: "Student Grade(%)",
      data: dataVal,
      backgroundColor: '#b81113' ,
      //borderColor: dataColor,
      borderWidth: 1,
    },
  ],
}

console.log(data1);


export default function HsAverage() {


  return (
    <div>
     
      <div className="header" >
        <h1 className="title">Pie Chart</h1>
      </div >
      <div className="chart">
        
        <Line
        data={data1}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: { display: false },
            title: {
              display: true,
              text: 'When was SYDE 2025 Born?'
            },
            scales: {
                y: {max: 100, min: 80 }, ticks: {stepSize : 5}
        
          }}}
          height="450"
          width="450"
        />
      </div>
    </div>
  );
}

