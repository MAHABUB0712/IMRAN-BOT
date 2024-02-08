const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#81F7BE").bold('[ Error ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#12BDF3").bold('[ Error ] »') + data);
     break;
		default:			        
                        console.log(chalk.bold.hex("#12BDF3").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#B4045F").bold('[ IMRAN ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#04B486").bold('[ IMRAN ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#F7FE2E").bold(`[ IMRAN ] » `) + data);
			break;
	}
	}