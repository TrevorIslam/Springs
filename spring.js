class Spring {
  constructor (x,y,z,size) {
    this.x = x;
    this.y = y;
    this.z = z
    this.size = size;
    this.h = 200;
  }

  draw () {
    push();
      translate(this.x,this.y,this.z);
      box(this.size,this.h,this.size);
    pop();
  }
}
