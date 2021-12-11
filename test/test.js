const generatePage = require('../src/md-template');
const writeFile = require('../utils/generate-md');
const testAnswers = require ('./test-answer')

writeFile(generatePage(testAnswers))
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.log(err);
	})