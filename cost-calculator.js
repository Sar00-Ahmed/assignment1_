/**
 * This function calculates the cost of an employee based on the data in its file
 * @param {string} filePath - path to the employee data file
 * @returns {{name: string, cost: number}} - the name and cost of the employee
 */

function costCalculator(filePath) {
	// TODO: write your code here
	// DON'T TOUCH ANYTHING OUTSIDE THIS FUNCTION
	const fs = require('fs');

	const mainFunction = async () => {
		const result = await fs.readFile(filePath,`utf8`, (err, data)=>{
			if(err){
				console.log("error: "+err);
				return;
			}


			let jsonObject = JSON.parse(data);

			output = {
				cost : jsonObject['salary']/jsonObject['hours'],
				name : jsonObject['name'],
			}; 
			return output
		});
		return result
	  }

	  console.log(mainFunction());
	return mainFunction();
}

module.exports = {
	costCalculator,
};
