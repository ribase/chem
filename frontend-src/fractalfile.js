
/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();
fractal.set('project.title', 'FooCorp Component Library');
fractal.components.set('path', __dirname + '/fractal/src/components');
fractal.docs.set('path', __dirname + '/fractal/src/docs');