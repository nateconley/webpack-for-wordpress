# 3. Plugins

Much like WordPress, webpack allows developers to hook into various parts of the webpack build.

In this example, we will do something that I (and many other developers) need their build tool to do, and that is spitting out CSS into a separate file. This is accomplished by using the ```extract-text-webpack-plugin```.

By far the most complicated example in this repository, this also introduces npm scripts for running webpack, and a couple of tips and tricks based on personal preference.

### Commands

```npm start``` - Start watching for changes
```npm run build``` - Compile for production
