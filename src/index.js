class D {
  constructor(...args) {
    this._date = new Date(...args);
  }
  // getter for full year
  get year() {
    return this._date.getFullYear();
  }
  // getter for short year
  get yr() {
    return this._date.getFullYear().toString().substr(0, 3);
  }
  // getter for month
  get month() {
    return this._date.getMonth();
  }
  // getter for short month
  get mon() {
    return this._date.getMonth().toString().substr(0, 3);
  }
  // getter for day
  get day() {
    return this._date.getDay();
  }
  // getter for short day
  get dy() {
    return this._date.getDay().toString().substr(0, 3);
  }
  // getter for date
  get date() {
    return this._date.getDate();
  }
  // getter for hours
  get hours() {
    return this._date.getHours();
  }
  // getter for minutes
  get mins() {
    return this._date.getMinutes();
  }
  // getter for seconds
  get secs() {
    return this._date.getSeconds();
  }
}
