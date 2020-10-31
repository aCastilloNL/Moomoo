const cowsay = require('cowsay');

const student = require('./information.js');

console.log(cowsay.say({
	text : `Mooooo... I'm ${student.name} from the ${student.campus} campus :3`
}));
