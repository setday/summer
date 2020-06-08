import ShaderWork from './shader.mjs';
import GLWork from './glwork.mjs';
import MouseWork from './mouse.mjs';
import TexWork from './texwork.mjs';
import img from './../img/neonflames.png';
import hash from './../../hash.txt';
import date from './../../date.txt';
import './style.css';

// let timeMs = Date.now();
// const startTime = Date.now();
let gl;
let shdWork;
let glWork;
let mouseWork;
let img1;

function tick () {
  window.requestAnimationFrame(tick);
  // timeMs = (Date.now() - startTime) / 1000;
  glWork.setUpToDraw();

  shdWork.setUniforms(gl, glWork.getSquareVertexPositionBuffer, { name: 'transX', type: 'float', value: mouseWork.getTransX },
    { name: 'transY', type: 'float', value: mouseWork.getTransY }, { name: 'transZ', type: 'float', value: mouseWork.getTransZ },
    { name: 'range', type: 'float', value: document.getElementById('range1').value }, { name: 'Tex0', type: 'int', value: 0 });
  img1.drawTex(gl, 0);
  glWork.draw();
}

function webGLStart () {
  const canvas = document.getElementById('webglCanvas');
  const rowhash = document.getElementById('hash');
  const rowdate = document.getElementById('date');

  rowhash.innerHTML = 'Hash: ' + String(hash).slice(1, -1);
  rowdate.innerHTML = 'Date: ' + String(date).slice(1, -1);

  mouseWork = new MouseWork(canvas);
  glWork = new GLWork(canvas);
  gl = glWork.getGL;
  shdWork = new ShaderWork(gl, 'transX', 'transY', 'transZ', 'range', 'Tex0');
  glWork.initBuffers();
  img1 = new TexWork(gl, img);

  tick();
}

webGLStart();
