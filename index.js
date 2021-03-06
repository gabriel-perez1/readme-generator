const inquirer = require('inquirer')
const generatePage = require('./src/md-template')
const writeFile = require('./utils/generate-md')

const licenseArr = ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'Zero-Clause BSD'];

const projectPrompts = () => {

	return inquirer.prompt([
		{
			type: 'input',
			name: 'title',
			message:'What is the title of the project?',
			validate: titleInput => {
				if (titleInput) {
					return true;
				} else {
					console.log('Please enter the title of the project');
					return false;
				}
			}
		},
		
		{
			type: 'input',
			name: 'description',
			message: 'Enter project description',
			validate: descriptionInput => {
				if (descriptionInput) {
					return true;
				} else {
					console.log('Please enter the project description');
					return false;
				}
			}
		},

		{
			type: 'input',
			name: 'installation',
			message: 'Enter installation instructions',
			validate: installationInput => {
				if (installationInput) {
					return true;
				} else {
					console.log('Please enter the installation instructions');
					return false;
				}
			}
		},
		
		{
			type: 'input',
			name: 'usage',
			message: 'Enter usage information',
			validate: usageInput => {
				if (usageInput) {
					return true;
				} else {
					console.log('Please enter the usage information');
					return false;
				}
			}
		},

		{
			type: 'input',
			name: 'contribution',
			message: 'Enter contribution guidelines',
			validate: descritpionInput => {
				if (descritpionInput) {
					return true;
				} else {
					console.log('Please enter the contribution guidelines');
					return false;
				}
			}
		},

		{
			type: 'input',
			name: 'tests',
			message: 'Enter test instructions',
			validate: testInput => {
				if (testInput) {
					return true;
				} else {
					console.log('Please enter the test instructions');
					return false;
				}
			}
		},

		{
      type: 'checkbox',
      name: 'licenses',
      message: 'Please select the license terms the project is licensed under',
      choices: licenseArr
    },

		{
			type: 'input',
			name: 'github',
			message: 'Enter your Github username',
			validate: testInput => {
				if (testInput) {
					return true;
				} else {
					console.log('Please enter your Github username');
					return false;
				}
			}
		},

		{
			type: 'input',
			name: 'email',
			message: 'Enter your email',
			validate: testInput => {
				if (testInput) {
					return true;
				} else {
					console.log('Please enter your email');
					return false;
				}
			}
		},
	])
}

projectPrompts()
	.then (answers => {
		console.log(generatePage(answers))
		return generatePage(answers);
	})
	.then(res => {
		return writeFile(res);
	})
	.catch(err => {
		console.log(err);
	});