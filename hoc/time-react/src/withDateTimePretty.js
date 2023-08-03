import React from 'react';
import moment from 'moment/moment';

export default function withDateTimePretty(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.date = props.date;
    }

    formatDate() {
      const subDate = moment() - moment(this.date);

      if (subDate < 60 * 60 * 1000) {
        return '12 минут назад';
      } else if (subDate >= 60 * 60 * 1000 && subDate <= 24 * 60 * 60 * 1000) {
        return '5 часов назад';
      } else {
        return moment(this.date).startOf('day').fromNow();
      }
    }

    render() {
      return <Component date={this.formatDate()} />;
    }
  };
}
