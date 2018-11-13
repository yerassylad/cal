import React, { Component } from "react";
import Calendar from "react-calendar";

import { foo } from "./utils";

import moment from "moment";
import "moment/locale/ru";

moment.locale("ru");

const bar = ["yerassyl", "yerzat"];

function formatDate(value) {
  return foo(moment(value).format("dddd D MMMM"));
}

class MCalendar extends Component {
  state = {
    date: new Date()
  };

  tile(data, date) {
    return (
      <div>
        <div>{formatDate(date)}</div>
        <div>
          {data.map((el, index) => (
            <p key={index}>{el}</p>
          ))}
        </div>
      </div>
    );
  }

  onChange = date => {
    this.setState({ date });
    console.log(moment(this.state.date).format("D MMMM, dddd"));
  };

  render() {
    return (
      <div>
        <Calendar
          showNavigation={false}
          showNeighboringMonth={false}
          onChange={this.onChange}
          value={this.state.date}
          tileContent={({ date, view }) =>
            view === "month" ? this.tile(bar, date) : null
          }
        />
      </div>
    );
  }
}

export default MCalendar;
