# README generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 

Barebone Node.js app that generates a `README.md` file taking user input from the command line using the inquirer package.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

Node.js, the npm global package, and git are required. To install, follow the following commands:

	$ git clone https://github.com/gabriel-perez1/readme-generator.git
	$ cd readme-generator
	$ npm install

## Usage 

After the installation, run:

	$ node index

The inquirer package will start prompting for the required user inputs. When finished, the `README.md` file will be written and stored in the `dist` folder.

## License

Distributed under the [MIT license](https://opensource.org/licenses/MIT)

## Contributing

Feel free to fork the repository and make changes as you'd like. If you have any ideas you'd like to share, [open an issue](https://github.com/gabriel-perez1/readme-generator/issues) and let me know what you think.

## Tests

To test the app, while on the root director, run:

	$ node ./test/test.js

This command will test `./src/md-template.js`, the `README.md` template, using mock answers provided on `./test/test-answers.js`. The `README.md` will then by written by `./utils/generate-md.js`.

## Questions

If you have any questions, feel free to [contact me](g.perez.carbo@gmail.com).

[Github](https://github.com/gabriel-perez1)