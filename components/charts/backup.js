import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { Pie } from 'react-chartjs-2';

export default function Backup() {
  const [data, setData] = useState({
    val: [],
    label: [],
    color: []
  });

  db.collection('1A Data').doc('Backup')
      .onSnapshot(
        (snapshot) => {
          let data = {
            val: [],
            label: [],
            color: []
          }

          snapshot.data().x.forEach((element) => {
            console.log(element)
            data.val.push(element.value);
            data.label.push(element.index);
            data.color.push(element.color);
          });

          setData(data)
        },
        (err) => {
          console.log('Error fetching firebase snapshot! ' + err);
        });

  return (
    <div>
      <div className="header">
        <h1 className="title">Pie Chart</h1>
      </div>
      <div className="chart">
        <Pie
          data={{
            labels: data.label,
            datasets: [
              {
                label: '# of Students',
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
              text: `What Was SYDE 2025's Backup Program?`,
            },
          }}
          height="450"
          width="450"
        />
      </div>
    </div>
  );
}