function setup() {
    canvas= createCanvas(400,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

}

function draw() {
image(video, 95, 100, 200,200);
circle(50,35,60);
circle(340,35,60);
circle(50,345,60);
circle(340,345,60);
fill("turquoise");
rect(80,25,230,20);
rect(40,65,20,250);
rect(80,335,230,20);
rect(330,65,20,250);
fill("teal");
}
