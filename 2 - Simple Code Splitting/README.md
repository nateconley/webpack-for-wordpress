# 2. - Simple Code Splitting

Honestly, this is just an incredibly simple example to demonstrate some of the power of webpack.

Imagine that you had some component of your site that used a fairly large library or framework. Being able to dynamically import it could be a really great performance optimization to make, and webpack makes it really easy.

All we had to add was a ```publicPath``` option to our output.

In this example, you will also start to see how the webpack config uses CommonJS and Objects for options, but the standardized ```output``` and ```entry``` make the config file tiny.
