const generateRM = () => {

	return `
			# ${answers.title}

			## Description 

			${answers.description}
			
			## Table of Contents

			* [Installation](#installation)
			* [Usage](#usage)
			* [Credits](#credits)
			* [License](#license)
			* [Contributing](#contributing)
			* [Tests](#tests)
			*[Questions](#questions)

			## Installation

			${answers.installation}

			## Usage 

			${answers.usage}

			## License

			${answers.license}

			## Contributing

			${answers.contribution}

			## Tests

			${answers.tests}

			## Questions

			If you have any questions, feel free to [contact me](${answers.email}).

			[Github](${answers.github})`
		
};

module.exports = generateRM;

/* module.exports = templateData => {
	const {project} = templateData;
	return `
	${generateRM(project)}`
}
	
	const {answer} = templateData;

	return `
		# ${title}

		## Description 

		${description}
		
		## Table of Contents

		* [Installation](#installation)
		* [Usage](#usage)
		* [Credits](#credits)
		* [License](#license)
		* [Contributing](#contributing)
		* [Tests](#tests)
		*[Questions](#questions)

		## Installation

		${installation}

		## Usage 

		${usage}

		## License

		${usage}

		## Contributing

		${contribution}

		## Tests

		${tests}

		## Questions

		If you have any questions, feel free to [contact me](${email}).

		[Github](${github})
	`;
};
*/