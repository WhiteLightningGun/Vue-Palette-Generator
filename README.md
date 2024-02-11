Now live: https://whitelightninggun.github.io/Vue-Palette-Generator/

I made this so that I would have an excuse to use Vue just for a change.

It generates colour palettes that may be of interest for artists who are endeavouring to create a balanced colour scheme. This gave me a chance to use my mathematical modelling skills...

A colour gamut can be expressed as set of locations in a vector space. In this case, that's the HSL colour space, which obviously maps to the cylindrical coordinate system:

$\(r, \phi, z)$

Where:

Saturation = r  
Hue = $\\phi$  
Luminosity = z

Expressing movements in this system is obviously highly intuitive and very useful for artists who think in terms of the colour wheel. It is eminently programmable.

To see how I used this to generate colour palettes go to: src/tools/ColourCalculators.js

The most interesting thing about this project for me personally is just how easy it is with Vue to add custom css to your components. Fancy presentation is therefore a breeze to make.
