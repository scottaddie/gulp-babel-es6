# gulp-babel-es6
A demonstration of using Gulp and Babel together for ES6 support in gulpfile.js.

##Project Setup
1. Install Gulp globally: `npm install -g gulp`
2. Navigate to the project directory and run: `npm install` to install the project's dependencies from NPM.
3. Type `gulp build` to kick off the custom "build" task. After running this command, note the following line in the console's output: "Requiring external module babel/register". This is an indication that the Babel module is being loaded before attempting to read the Gulp configuration file.