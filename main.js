function preload() {
}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position(350,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video,0,0,640,480);
    tint(tint_color);
    stroke(232, 80, 91);
    fill(0,0,0,0);
    strokeWeight(4);    
    ellipse(320,240,620,450);
    ellipse(320,240,590,420);
}

function apply_filter() {
    tint_color = document.getElementById("tint_input").value;
}

function take_snapshot() {
    save('student_name.png');
}