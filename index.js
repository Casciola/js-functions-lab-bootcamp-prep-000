
function happyHolidays() {
  return 'Happy holidays!';
}

happyHolidaysTo('you');

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
}

happyHolidayTo('you','Independence Day');

function happyHolidayTo(name, holiday) {
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown(days, holiday) {
  return `It's ${days} days until ${holiday}!`;
}

holidayCountdown(20, 'Mother\'s Day');
