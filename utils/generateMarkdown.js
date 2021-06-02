// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
switch(license){
  case'Apache' :
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
   break;

  case 'GPLv3':
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    break;

  case 'MIT' :
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    break; 
   
  case 'IBM':
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    break;

  case 'Zlib' : 
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
    break;

  case 'Open Database License (ODbL)' :
    return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'
    break;

  case 'No Liscence':
    return ''
    break;  
}
// console.log('MIT')
// console.log('GPLv3')
// console.log('Apache')
//

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  }

  if(license === 'Apache'){
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }

  if(license === 'GPLv3'){
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  }

  if(license === 'IBM'){
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  }

  if(license === 'Zlib'){
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
  }

  if(license === 'Open Database License (ODbL)'){
    return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'
  }

  if(license === 'No Liscence'){
    return ''
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT' || license == 'Apache' || license === 'GPLv3' || license === 'IBM' || license === 'Zlib' || license === 'Open Database License (ODbL)' ){
    return '## License'
  }
  else{
    return ''
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)} 
${renderLicenseLink(data.license)} 
${renderLicenseSection(data.license)}


## Description
 ${data.description}

## Table of contents 
-[Instalation] 
-[Usage]
-[Contributions]
-[Testing]
-[Forms of contact]

## Installation 
${data.install}

## Usage 
${data.usage}

## Contributions
${data.contribute}

## Testing
${data.test}

## Forms of Contact 
- If you have any questions about this application you can contact me at:
- <github.com/${data.github}>
- <${data.email}>

`;
}

module.exports = generateMarkdown;
