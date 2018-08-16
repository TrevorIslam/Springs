var springs;
var t = 0;

function setup () {
  createCanvas(500,500,WEBGL);
  springs = [];
  for (let i =0;i<10;i++) {
    springs.push(new Spring(i*20,0,0,20));
  }
};

function draw () {
  background(50);
  push();
    translate(-50,100,50);
    rotateX(-PI/6);
    rotateY(PI/6);
    for (let i of springs) {
      i.draw();
    }
  pop();
  t+=1;
};
