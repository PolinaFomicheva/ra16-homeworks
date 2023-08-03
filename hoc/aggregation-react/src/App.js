import React from "react";
import WithFormat from "./components/WithFormat";

const url =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json";

function YearTable(props) {
  console.log("YearTable", props);

  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <tr>
          <th>Year</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item) => (
          <tr>
            <td>{item.year}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

function SortTable(props) {
  console.log("SortTable", props);
  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item) => (
          <tr>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

function MonthTable(props) {
  console.log("MonthTable", props);

  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <tr>
          <th>Month</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item) => (
          <tr>
            <td>{item.month}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

const SortMonth = WithFormat(MonthTable, "MMM", "month");
const SortYear = WithFormat(YearTable, "YYYY", "year");
const SortDate = WithFormat(SortTable, "YYYY-MM-DD");

// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state
export default class App extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState(data));
  }

  render() {
    const { list } = this.state;
    return (
      <div id='app'>
        <SortMonth list={list} />
        <SortYear list={list} />
        <SortDate list={list} />
      </div>
    );
  }
}
