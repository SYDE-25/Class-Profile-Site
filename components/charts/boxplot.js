import { useState, useEffect, Component, createRef } from "react";
import { db } from "../../firebaseConfig";
import "chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot.js";

class BoxPlotChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = createRef();
  }
  componentDidUpdate() {
        this.myChart.data.labels = this.props.data.label;
        this.myChart.data.datasets[0].data = this.props.data.val;
        this.myChart.data.datasets[0].backgroundColor = this.props.data.color;
        this.myChart.data.datasets[0].outlierColor = this.props.data.color;
        this.myChart.options.title.text = this.props.data.title;
        this.myChart.options.scales.xAxes[0].scaleLabel.labelString = this.props.data.xAxis;
        this.myChart.options.scales.yAxes[0].scaleLabel.labelString = this.props.data.yAxis;
        this.myChart.update();
    };

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'boxplot',
      options: {
          responsive: true,
          maintainAspectRatio: true,
          legend: { display: false },
          title: {
              display: true,
              text: this.props.data.title,
              fontColor: "#ffffff",
              fontSize: 15,
          },
          scales: {
              xAxes: [
              {
                  scaleLabel: {
                  display: true,
                  labelString: this.props.data.xAxis,
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
                  labelString: this.props.data.yAxis,
                  fontColor: "#ffffff",
                  fontSize: 15,
                  },
                  ticks: {
                  fontColor: "#ffffff",
                  },
              },
              ],
          },
      },
      data: {
        labels: this.props.data.label,
        datasets: [{
          //label: '',
          data: this.props.data.val,
          backgroundColor: this.props.data.color,
          borderColor: 'white',
          hoverBackgroundColor: 'white',
          borderWidth: 2,
          outlierColor: this.props.data.color

        }]
      }
      });
  }

  render() {
    return <canvas ref={this.chartRef}          
    height={this.props.height}
    width={this.props.width} 
    />
  }
}

///////////////////////////////////////////////////////

export default function BoxPlot(props) {
  const [data, setData] = useState({
    val: [],
    label: [],
    color: "",
  });

  const [id, setId] = useState(0);

  useEffect(() => {

    if(id <= 0){
      db.collection("1A Data")
      .doc(props.datatype)
      .get()
      .then(
        (snapshot) => {
          let data = {
            val: [],
            label: [],
            color: "",
            title: "",
            xAxes: "",
            yAxes: "",
          };
          snapshot.data().x.values.forEach((element) => {
            for(var i = 0; i < element.plotValues.length; i++){
              element.plotValues[i] = parseFloat(element.plotValues[i].toFixed(2)); 
            }
            data.val.push(element.plotValues);
            data.label.push(element.index);
          });
          data.color = snapshot.data().x.color;
          data.title = snapshot.data().title;
          data.xAxis = snapshot.data().x.label;
          data.yAxis = snapshot.data().y.label;
          setId(id + 1);
          setData(data);
        },
        (err) => {
          console.log("Error fetching firebase snapshot! " + err);
        }
      );
    }
  });


  if(Number.isInteger(data.label[0])){
      var arrayData = data.label.map(function(d, i) {
        return {
          label: d,
          data: data.val[i],
        };
      });
      
      var sortedArrayData = arrayData.sort(function(a, b) {
        return a.label - b.label;
      });
      
      var newArrayLabel = [];
      var newArrayData = [];
      sortedArrayData.forEach(function(d){
        newArrayLabel.push(d.label);
        newArrayData.push(d.data);
      });

      data.label = newArrayLabel
      data.val = newArrayData
  }

  return (
      <div>
        <div className="chart">
          <BoxPlotChart 
          data={data} 
          height={props.height ? props.height : "100%"}
          width={props.width ? props.width : "100%"} 
            />
        </div>
      </div>
  );
}

