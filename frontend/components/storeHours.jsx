var React = require('react');

var StoreHours = React.createClass({
  miltaryTimeToRegularTime: function(time){
    var _time = "";
    var _numTime = parseInt(time);
    var hr = time.slice(0,2);
    var min = time.slice(2,4);
    if (_numTime > 1200){
      hr = (parseInt(hr) - 12).toString();
      _time += hr;
      _time += ":";
      _time += min;
      _time += " pm";
    } else {
      _time += parseInt(hr).toString();
      _time += ":";
      _time += min;
      _time += " am";
    }
    return _time;
  },
  hoursOpen: function(dayOfWeek){
    if(this.props.hours[dayOfWeek] === undefined){
      return "Closed"
    } else {
      var open = this.props.hours[dayOfWeek][0]
      var closed = this.props.hours[dayOfWeek][1]
      return this.miltaryTimeToRegularTime(open) + " - " + this.miltaryTimeToRegularTime(closed)
    }
  },
  render: function() {
    return (
      <ul className="store-hours list-group">
        <div className="header"><h3>Hours</h3></div>
        <li className="list-group-item">
          <span className="day"><b>Sun</b></span>
          <span className="time">{this.hoursOpen("sun")}</span>
        </li>
        <li className="list-group-item">
          <span className="day"><b>Mon</b></span>
          <span className="time">{this.hoursOpen("mon")}</span>
        </li>
        <li className="list-group-item">
          <span className="day"><b>Tues</b></span>
          <span className="time">{this.hoursOpen("tues")}</span>
        </li>
        <li className="list-group-item">
          <span className="day"><b>Wed</b></span>
          <span className="time">{this.hoursOpen("wed")}</span>
        </li>
        <li className="list-group-item">
          <span className="day"><b>Thurs</b></span>
          <span className="time">{this.hoursOpen("thurs")}</span>
        </li>
        <li className="list-group-item">
          <span className="day"><b>Fri</b></span>
          <span className="time">{this.hoursOpen("fri")}</span>
        </li>
        <li className="list-group-item">
          <span className="day"><b>Sat</b></span>
          <span className="time">{this.hoursOpen("sat")}</span>
        </li>
      </ul>
    );
  }

});

module.exports = StoreHours;
