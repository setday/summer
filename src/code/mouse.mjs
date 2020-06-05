'use strict';

export default class MouseWork {
  constructor (canvas) {
    this.transX = 0.0; this.transY = 0.0; this.transZ = 0.0;
    let func = this.onWheel.bind(this);

    document.addEventListener('wheel', func);

    func = this.onMouseMove.bind(this);

    canvas.onmousedown = (event) => {
      this.startPosX = event.pageX;
      this.startPosY = event.pageY;

      document.addEventListener('mousemove', func);
    };

    window.onmouseup = () => {
      document.removeEventListener('mousemove', func);
    };
  }

  onWheel (event) {
    this.transZ += event.deltaY * 3 / 10000;
  }

  onMouseMove (event) {
    this.transX += (this.startPosX - event.pageX) * (10 ** this.transZ);
    this.startPosX = event.pageX;
    this.transY += (this.startPosY - event.pageY) * (10 ** this.transZ);
    this.startPosY = event.pageY;
  }

  get getTransX () {
    return this.transX;
  }

  get getTransY () {
    return this.transY;
  }

  get getTransZ () {
    return this.transZ;
  }
}
