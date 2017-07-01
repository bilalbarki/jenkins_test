# simple-react-app

A template for building *React* apps with *Redux* and *React Router*.

Includes Hot Module Replacement (HMR), Browserify based build tools and live replacement for styles.

# Usage

`npm install` to install dependencies.

`npm run server` to start development server and begin watching for changes in scripts, styles and static assets.

After starting the server, any changes in JavaScript and LESS files are updated automatically without a page refresh.

## Creating a light weight build
`npm run build` creates a build without source maps. Also turns on `NODE_ENV=production`. 

## Windows users
__If you are a Windows user, you have to make the modifications explained below to run these commands. Also, use Git Bash (installed with Git). These do not work directly in `cmd.exe`. Tested on Windows 10.__

The included npm scripts rely on tools that are available only in Unix / OS X systems.

If you run this in Windows, you will probably get errors related to missing commands because npm runs scripts in `cmd.exe`. 

In Windows, you need to change a couple of things in `package.json` scripts' section:
- change all slashes `/` to escaped backslashes `\\` (first char escapes the second char)
- change both `cp` and `cp -r` commands to `copy`
- change `NODE_ENV=production` to `set NODE_ENV=production`
- change all single quotes `'` to escaped double quotes `\"`

Here's an example `package.json` with the mentioned changes: https://gist.github.com/tukkajukka/515dd3e07f6d97a2418db8c2c43a3075

# Tools used in this project

* Browserify (http://browserify.org/)
* Watchify (https://github.com/substack/watchify)
* Babelify (https://github.com/babel/babelify)
* Livereactload (https://github.com/milankinen/livereactload)
* PostCSS (https://github.com/postcss/postcss)
* LESS (http://lesscss.org/)
* Autoprefixer (https://github.com/postcss/autoprefixer)
* Socket.io (http://socket.io/)
