class Spring {
  constructor (x,y,z,size) {
    this.x = x;
    this.y = y;
    this.z = z
    this.size = size;
    this.h = 100;
  }

  draw () {
    push();
      this.h = 50 + (200* abs(sin(t/50)));
      translate(this.x,this.y,this.z);
      box(this.size,this.h,this.size);
    pop();
  }
}
