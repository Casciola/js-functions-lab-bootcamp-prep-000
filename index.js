
function happyHolidays() {
  return 'Happy holidays!';
}

happyHolidaysTo('you');

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
}

happyHolidayTo('Independence Day', 'you');

function happyHolidayTo(name, holiday) {
  return `Happy ${holiday}, ${name}!`;
}

holidayCountdown(20, 'Mother\'s Day')

function holidayCountdown(days, holiday) {
  return `It\'s ${days} days until ${holiday}!`;
}
