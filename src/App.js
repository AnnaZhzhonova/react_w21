import { Chart } from "react-google-charts";
import './App.css';

export const data = [
  ["Task", "Hours per Day"],
  ["Сон", 10],
  ["Еда", 3],
  ["Учеба", 5],
  ["Залипание на ютубе", 4],
  ["Спорт", 3],
];

export const options = {
  title: "Чем я занимаюсь в отпуске",
};

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default App;
