import React from "react";
import moment from "moment/moment";

export default function WithFormat(Component, format, nameFormat = "date") {
  return class extends React.Component {
    sortData(arr) {
      return arr
        .sort((a, b) => {
          return a.date - b.date;
        })
        .map((item) => {
          return {
            [nameFormat]: item.date.format(format),
            amount: item.amount,
          };
        });
    }

    calcData(arr) {
      const groupedData = arr.reduce((acc, data) => {
        const index = acc.findIndex(
          (item) => item[nameFormat] === data[nameFormat]
        );
        if (index === -1) {
          acc.push({ [nameFormat]: data[nameFormat], amount: data.amount });
        } else {
          acc[index].amount += data.amount;
        }
        return acc;
      }, []);
      return groupedData;
    }

    render() {
      let list = this.props.list.map((item) => {
        return { date: moment(item.date), amount: item.amount };
      });
      list = this.sortData(list);
      list = this.calcData(list);
      return <Component {...this.props} list={list} />;
    }
  };
}
