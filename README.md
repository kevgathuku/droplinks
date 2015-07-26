# Droplinks

A minimal example demonstrating saving web links to Dropbox

## Getting Started

Install [node.js](https://nodejs.org/download) to get `npm` (the node package manager),
then use it to install the libraries required by the build process.

```bash
git clone https://github.com/kevgathuku/droplinks.git
cd droplinks
npm install
```

## Development Setup

This project depends on browserify to use some node modules in the browser

These are managed through a grunt task.
Simply run `grunt watch` to automatically compile the required files when changes are made.

Once the dependencies are installed, get the server up by running:

`npm start`

Now you can visit `localhost:3000` to see the demo in action.

![dropbox link saver]
(https://cloud.githubusercontent.com/assets/3721994/8888761/b8bc8bf4-32c3-11e5-82f7-04afd1e45c91.png)
