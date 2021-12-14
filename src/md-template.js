const generateRM = (answers) => {

	return `
# ${answers.title} ${answers.licenseLogo}

## Description 

${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${answers.installation}

## Usage 

${answers.usage}

## License

${answers.licenseText}

## Contributing

${answers.contribution}

## Tests

${answers.tests}

## Questions

If you have any questions, feel free to [contact me](${answers.email}).

[Github](${answers.github})`

};

module.exports = generateRM;