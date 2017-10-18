/* Cheat-sheet to setup React environment:

1. Create repository / folder with github desktop.
2. Use Command Prompt (CP) to cd into that folder
3. In CP type:  npm init,  then yes to everything (
this creates the package.JSON file

4. Install the production dependencies (--save):

in CP type:
 "npm install react react-dom --save"

 Install development dependencies (--save-dev):
 (these will not be run during deployment, only development)
 "npm install webpack webpack-dev-server babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 --save-dev"

 babel-preset-stage-2 is for some extra feautes like structuring


 Later in the series, to install the router to be able to change the pages/urls when user clicks around:
 React router  handles these page changes

 in CP: npm install --save react-router
