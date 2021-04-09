import { db } from "../../firebaseConfig";
import { Pie, Line } from "react-chartjs-2";
import { Component } from "react";

const backup = db.collection("1A Data").doc("Backup");
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


class Backup extends Component { 
  constructor(props) {
    super(props);

    this.state = {
       data1: {
    
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

    }
  }

  render() {
  return (
    <div>
     
      <div className="header" >
        <h1 className="title">Pie Chart</h1>
      </div >
      <div className="chart">
        
        <Pie
        data={this.state.data1}
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
}
export default Backup;
