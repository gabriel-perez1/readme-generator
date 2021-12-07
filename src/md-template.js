
module.exports = templateData => {
	const {title, description, ...email} = templateData;

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

	${contributioin}

	## Tests

	${tests}

	## Questions

	If you have any questions, feel free to [contact me](${email}).

	[Github](${github})

	`
}
