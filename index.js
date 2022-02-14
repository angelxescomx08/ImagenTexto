const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

//let imagen;
let video
let asciiDiv

/*function preload(){
    imagen = loadImage("fruits.jpg");
}*/

function setup(){
    //createCanvas(imagen.width,imagen.height);
    noCanvas()
    video = createCapture(VIDEO)
    video.size(64,48)
    asciiDiv = createDiv()
}

function draw(){
    background(0);
    //image(imagen,0,0,width,height);

    //let w = width / imagen.width
    //let h = height / imagen.height

    //imagen.loadPixels();
    video.loadPixels();
    
    let asciiImage = ''
    for(let j=0;j<video.height;j++){
        //let row = ""
        for(let i=0;i<video.width;i++){
            const pixelIndex = (i+j*video.width)*4;
            const r = video.pixels[pixelIndex+0];
            const g = video.pixels[pixelIndex+1];
            const b = video.pixels[pixelIndex+2];

            const avg = (r+g+b)/3

            //noStroke();
            //fill(255);
            //square(i*w,j*h,w);

            const len = density.length
            const charIndex = floor(map(avg,0,255,len,0))

            //textSize(w)
            //textAlign(CENTER,CENTER)
            //text(density.charAt(charIndex),i*w+w*0.5,j*h+h*0.5)
            const c = density.charAt(charIndex)
            if(c===' '){
                asciiImage += '&nbsp;'
            }
            else{
                asciiImage+=c
            }
        }
        //createDiv(row)
        asciiImage+= '<br/>'
    }
    asciiDiv.html(asciiImage)
}