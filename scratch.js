const {isValidDate} = require('./dist/index');
function isValidDate2(d) {
	return d instanceof Date && !isNaN(d);
}

const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}Z$/;
console.log('2021-01-07T05:11:39.460Z'.match(regex));
