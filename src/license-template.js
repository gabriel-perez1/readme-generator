const licenseChoice = (answers) => {

switch (answers.licenses) {
	case 'MIT':
		answers += {
			licenseText: 'Distributed under the [MIT license](https://opensource.org/licenses/MIT',
			licenseLogo: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
			}
		break;

	case 'Apache-2.0':
		answers += {
			licenseText: 'Distributed under the [Apache-2.0 license](https://opensource.org/licenses/Apache-2.0)',
			licenseLogo: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
			}
	break;

	case 'GPL-3.0':
		answers += {
			licenseText: 'Distributed under the [GPL-3.0 license](https://www.gnu.org/licenses/gpl-3.0)',
			licenseLogo: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
			}
	break;

	case 'BSD-2-Clause':
		answers += {
			licenseText: 'Distributed under the [BSD-2-Clause license](https://opensource.org/licenses/BSD-2-Clause)',
			licenseLogo: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
			}
	break;

	case 'BSD-3-Clause':
		answers += {
			licenseText: 'Distributed under the [BSD-3-Clause license](https://opensource.org/licenses/BSD-3-Clause)',
			licenseLogo: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
			}
	break;

	case 'Zero-Clause BSD':
		answers += {
			licenseText: 'Distributed under the [Zero-Clause BSD license](https://opensource.org/licenses/0BSD)',
			licenseLogo: '[![License](https://img.shields.io/badge/License-0_BSD--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
			}
	break;
	}
}

module.exports = licenseChoice;


