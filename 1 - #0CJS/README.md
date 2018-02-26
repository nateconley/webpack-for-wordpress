# Zero Configuration JS - #0CJS Webpack

Welcome to the amazing webpack v4!

No config file is required with this version of webpack. All you need to do to compile is run: ```webpack``` in the command line. Also, two npm packages have been installed, one of them being ```webpack-cli```, a tool that adds power to webpack.

Webpack also expects (but does not absolutely require) a ```---mode``` option with the value of ```production``` or ```development```. Various optimizations are made for either mode, and webpack assumes a mode of ```production``` if no option is passed.

Webpack also expects your entry point to be ```/src/index.js``` and the standard output is ```/dist/main.js```.
