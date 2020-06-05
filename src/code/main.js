import ShaderWork from './shader.mjs';
import GLWork from './glwork.mjs';
import MouseWork from './mouse.mjs';
import './style.css';

// let timeMs = Date.now();
// const startTime = Date.now();
let gl;
let shdWork;
let glWork;
let mouseWork;

function tick () {
  window.requestAnimationFrame(tick);
  // timeMs = (Date.now() - startTime) / 1000;
  glWork.setUpToDraw();

  shdWork.setUniforms(gl, glWork.getSquareVertexPositionBuffer, { name: 'transX', value: mouseWork.getTransX },
    { name: 'transY', value: mouseWork.getTransY }, { name: 'transZ', value: mouseWork.getTransZ }, { name: 'range', value: document.getElementById('range1').value });
  glWork.draw();
}

function webGLStart () {
  const canvas = document.getElementById('webglCanvas');

  mouseWork = new MouseWork(canvas);
  glWork = new GLWork(canvas);
  gl = glWork.getGL;
  shdWork = new ShaderWork(gl, 'transX', 'transY', 'transZ', 'range');
  glWork.initBuffers();

  tick();
}

console.log(require('child_process').execSync('git log --pretty=format:"%H" -1'));

webGLStart();
