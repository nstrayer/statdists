# statdists.js

This is a super tiny library that currently simulates the functionality of R for generating random variables (`r<dist>`) and also calculating their density (`d<dist>`). It also includes a few vectorized math functions that help in translating code from something like `numpy` or `dplyr` to javascript. 

In the future this will recreate all of the distributions in R, but currently it does not calculate CDFs. 

Relies on the library `d3-random` because I'm too lazy to code the CDF of the normal to generate my own normal samples. 

## Docs

All functions are (sparsely) documented and docs are available [here](http://nickstrayer.me/statdists/).

## Installing

The library is on NPM and is bundled in the UMD format. 

```bash
npm install --save statdists
```

```js
import {rnorm, runif} from 'statdists';

const someNormals = rnorm(10, 6, 2);
console.log(someNormals)
// > [5.733267780144279, 3.6284953605592105, 5.505710070640804, 7.340289876074601, 5.357392656344408, 7.772439732383019, 5.848394411674981, 4.508991919446658, 6.992326735630431, 4.177258305494865]
```

## Realworld examples

This library was constructed after lots of personal projects needed the functions. To see an example of the functions being used extensiely, see my [blog post](http://livefreeordichotomize.com/2017/10/14/mcmc-and-the-case-of-the-spilled-seeds/) where I used `statdists` to implement an MCMC sampler directly with javascript. All raw code for the simulation is available at [this git repo](https://github.com/nstrayer/mcmcDemo). For example [here's](https://github.com/nstrayer/mcmcDemo/blob/master/src/setupLogPosterior.js) implementing a log posterior for a normal mixture distirbution. 
