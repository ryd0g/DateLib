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
  format(mask = 'Y M D') {
    var zero = function (val) {
      return val <= 9 ? '0' + val : '' + val;
    };
    const masks = mask.split('');
    let space = '';
    masks.forEach((char) => {
      switch (char) {
        case 'Y':
          space += this.year;
        case 'y':
          space += this.yr;
        case 'M':
          space += this.month;
        case 'm':
          space += this.mon;
        case 'D':
          space += zero(this._date.getDate());
        case 'd':
          space += this.date;
        case 'H':
          space += zero(this._date.getHours());
        case 'h':
          space += this.hours;
        case 'I':
          space += zero(this._date.getMinutes());
        case 'i':
          space += this.mins;
        case 'S':
          space += zero(this._date.getSeconds());
        case 's':
          space += this.secs;
      }
    });
    return space;
  }
  when() {
    const now = new D();
    const ny = this.year - now.year;
    const nm = this._date.getMonth() - now._date.getMonth() + ny * 12;
    const nd = this.date - now.date;

    //calculating difference in time
    if (nm > 11) {
      return `${ny} years from now`;
    } else if (nm < -11) {
      return `${Math.abs(ny)} years ago`;
    } else if (nm > 0) {
      return `${nm} months from now`;
    } else if (nm < 0) {
      return `${Math.abs(nm)} months ago`;
    } else if (nm > 0) {
      return `${nd} days ago`;
    } else if (nm < 0) {
      return `${nd} days from now`;
    } else {
      return 'today';
    }
  }
}

module.exports = D;
