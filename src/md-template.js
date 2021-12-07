
module.exports = templateData => {
	const {title, description, ...email} = templateData;

	return `
	# Title

	## Description 
	
	## Table of Contents

	* [Installation](#installation)
	* [Usage](#usage)
	* [Credits](#credits)
	* [License](#license)
	* [Contributing](#contributing)
	* [Tests](#tests)
	*[Questions](#questions)

	## Installation

	## Usage 

	## License

	## Contributing

	## Tests

	## Questions

	`
}
