const licenseChoice = require('../src/license-template');
const generateLicense = require('../src/license-template');
const generatePage = require('../src/md-template');
const writeFile = require('../utils/generate-md');
const testAnswers = require ('./test-answer');

/*
writeFile(generatePage(testAnswers))
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.log(err);
	})
*/

licenseChoice(testAnswers)
	.then(writeFile(generatePage(testAnswers)))
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err);
		})

	