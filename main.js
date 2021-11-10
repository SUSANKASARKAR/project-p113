function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  tint_color = "";
  video.size(300, 300);
  video.hide();
}

function draw() {
  image(video, 0, 0, 640, 480);
  tint(tint_color);
  fill(0, 128, 0);
  stroke(0, 128, 0);
  circle(350, 50, 70);

  circle(50, 430, 80);

  circle(590, 50, 80);

  circle(590, 430, 80);
  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(90, 40, 460, 20);

  rect(90, 40, 460, 20);

  rect(40, 90, 20, 300);

  rect(580, 90, 20, 300);
}


function take_snapshot(){    
  save('edit.png');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}
