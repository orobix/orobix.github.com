---
layout: post
title:  "New rotation mode for threejs trackballControls"
anchorId: "post_0004"
date:   2015-02-20 09:47:33
author: Simone Manini
authorLink: "#team/simoneManini"
---

We recently contributed to [threejs](http://threejs.org), an awesome open-source javascript 3D library.
Since we need to include threejs camera controls in our image-based modeling application ( [VMTKLab](http://vmtklab.orobix.com) ), we wanted to replicate the way VTK handles camera movements.

Our contribution consists in a new [TrackballControls](http://threejs.org/examples/#misc_controls_trackball) feature which allows to rotate the camera following a cylindrical projection instead of the original TrackballControls spherical projection. More details available [here](https://github.com/mrdoob/three.js/pull/6103).
The new TrackballControls will be available with the next official release (r71) of threejs, at the moment you can try it in [threejs development version](https://github.com/mrdoob/three.js/tree/dev) or in [this jsfiddle](http://jsfiddle.net/r1wpg06g/12/).
