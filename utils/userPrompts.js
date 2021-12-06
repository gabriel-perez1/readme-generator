const inquirer = require("inquirer")

const projectPrompts = () => {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'Project Title',
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
			name: 'Description',
			message: 'Enter project description',
			validate: descritpionInput => {
				if (descritpionInput) {
					return true;
				} else {
					console.log('Please enter the project description');
					return false;
				}
			}
		},

		{
			type: 'input',
			name: 'Installation',
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
			name: 'Usage',
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
			name: 'Contribution',
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
			name: 'Tests',
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
	])
}