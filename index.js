const Validations = require('./js/Validation');

const v = new Validations();


console.log(v.isValidFirstName('Vardenis') === true, 'ERROR');
console.log(v.isValidLastName('Pavardenis') === true, 'ERROR');
console.log(v.isValidEmail('demo@example.com') === true, 'ERROR');
console.log(v.isValidMessage('Some message') === true, 'ERROR');
console.log(v.isValidPhoneNumber(+37061234567) === true, 'ERROR');
console.log(v.isValidMonthName('Sausis') === true, 'ERROR');
console.log(v.isValidMonthName('January') === true, 'ERROR');
console.log(v.isValidWeekdayName('Pirmadienis') === true, 'ERROR');
console.log(v.isValidWeekdayName('Monday') === true, 'ERROR');
console.log(v.isValidPersonID(39912311234) === true, 'ERROR');