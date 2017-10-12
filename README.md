# statdists.js

This is a super tiny library that currently simulates the functionality of R for generating random variables (`r<dist>`) and also calculating their density (`d<dist>`). It also includes a few vectorized math functions that help in translating code from something like `numpy` or `dplyr` to javascript. 

In the future this will recreate all of the distributions in R, but currently it does not calculate CDFs. 

Relies on the library `d3-random` because I'm too lazy to code the CDF of the normal to generate my own normal samples. 