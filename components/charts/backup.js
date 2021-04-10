import { db } from "../../firebaseConfig";
import { Pie } from "react-chartjs-2";


const backup = db.collection("1A Data").doc("Backup");
const dataVal = [];
const dataLabel = [];
const dataColor = [];


async function getData(){

const observer = await backup.onSnapshot(
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
return dataVal;
  }
  console.log(getData());
  

const data1 =  {
  labels: dataLabel,
  datasets: [
    {
      label: "# of Students",
      data: dataVal,
      backgroundColor: dataColor,
      borderColor: dataColor,
      borderWidth: 1,
    },
  ],
}


export default function Backup () {
  

  return (
    <div>
     
      <div className="header" >
        <h1 className="title">Pie Chart</h1>
      </div >
      <div className="chart">
        
        <Pie
        data={data1}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: { display: false },
            title: {
              display: true,
              text: `What Was SYDE 2025's Backup Program?`
            },
          }}
          
          height="450"
          width="450"
        />
      </div>
    </div>
  );
}
