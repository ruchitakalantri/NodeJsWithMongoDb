const path = require('path');

//deprecation warning for that code 
//module.exports = path.dirname(process.mainModule.filename)

module.exports = path.dirname(require.main.filename);

// TO GET PATH TO THAT DIRECTORY