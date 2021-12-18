const generateRM = (answers) => {
	const license = {
	...answers,
	...answers.licenses == 'MIT' && {
		licenseText: 'Distributed under the [MIT license](https://opensource.org/licenses/MIT)',
		licenseLogo: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
	},
	...answers.licenses == 'Apache-2.0' && {
		licenseText: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
		licenseLogo: 'Distributed under the [Apache-2.0 license](https://opensource.org/licenses/Apache-2.0)'
	},
	...answers.licenses == 'GPL-3.0' && {
		licenseText: 'Distributed under the [GPL-3.0 license](https://www.gnu.org/licenses/gpl-3.0)', 
		licenseLogo: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
	},
	...answers.licenses == 'BSD-2-Clause' && {
		licenseText: 'Distributed under the [BSD-2-Clause license](https://opensource.org/licenses/BSD-2-Clause)', 
		licenseLogo: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-blue.svg)](https://opensource.org/licenses/BSD-2-Clause)'
	},
	...answers.licenses == 'BSD-3-Clause' && {
		licenseText: 'Distributed under the [BSD-3-Clause license](https://opensource.org/licenses/BSD-2-Clause)', 
		licenseLogo: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
	},
	...answers.licenses == 'Zero-Clause BSD' && {
		licenseText: 'Distributed under the [Zero-Clause BSD license](https://opensource.org/licenses/0BSD)', 
		licenseLogo: '[![License](https://img.shields.io/badge/License-0_BSD--Clause-blue.svg)](https://opensource.org/licenses/0BSD)'
	}
}
return `
# ${answers.title} ${license.licenseLogo}

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

${license.licenseText}

## Contributing

${answers.contribution}

## Tests

${answers.tests}

## Questions

If you have any questions, feel free to [contact me](${answers.email}).

[Github](${answers.github})`

};

module.exports = generateRM;