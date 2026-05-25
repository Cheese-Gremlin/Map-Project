

// let MapImageWidth = width*0.89;
// let MapImageHeight = width*0.5;
// let MapImageX = (width/2 - ((width*0.89)/2));
// let MapImageY = (height/2 - ((width*0.5)/2));

// let showOhiroRd1 = true
// let showClevelandSt = false
// let showHarrisonSt = false
// let showJeffersonSt = false
// let showOhiroRd2 = false
// let showMcKinleyCres = false
// let showGarfieldSt = false
// let showTodmanSt = false
// let showCharlotteAve = false

let showSectionOne = true
let showSectionTwo = false
let showSectionThree = false
let showSectionFour = false
let showSectionFive = false

let showImageOne = false

function preload(){
    // MapTemplate =loadImage("Images/Full-Map.png")
    // OhiroRd1 =loadImage("Images/OhiroRd-1.png")
    // ClevelandSt =loadImage("Images/ClevelandSt.png")
    // HarrisonSt =loadImage("Images/HarrisonSt.png")
    // JeffersonSt =loadImage("Images/JeffersonSt.png")
    // OhiroRd2 =loadImage("Images/OhiroRd-2.png")
    // McKinleyCres =loadImage("Images/McKinleyCres.png")
    // GarfieldSt =loadImage("Images/GarfieldSt.png")
    // TodmanSt =loadImage("Images/TodmanSt.png")
    // CharlotteAve =loadImage("Images/CharlotteAve.png")

    // UpArrow =loadImage("Images/UpArrow.png")
    // RightArrow =loadImage("Images/RightArrow.png")
    // DownArrow =loadImage("Images/DownArrow.png")
    // LeftArrow =loadImage("Images/LeftArrow.png")

    SectionOneImg = loadImage("Images/Section1.png")
    SectionTwoImg = loadImage("Images/Section2.png")
    // SectionThreeImg = loadImage("Images/Section3.png")
    // SectionFourImg = loadImage("Images/Section4.png")
    // SectionFiveImg = loadImage("Images/Section5.png")

    IMG_4952 = loadImage('Photos/IMG_4952.JPG')
}

function canvasSize() {
    //return { w: windowWidth - 40, h: windowHeight - 40 };
    return { w: windowWidth, h: windowHeight };
}

function setup() {
    const { w, h } = canvasSize();
    createCanvas(w, h);
    strokeCap(ROUND);
    strokeJoin(ROUND);
    colorMode (HSB); //same as HSV
    angleMode(DEGREES)
    textFont('Patrick Hand');

    //images
    //image (MapTemplate, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
    // image (OhiroRd1, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
    // image (ClevelandSt, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
    // image (HarrisonSt, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
    // image (JeffersonSt, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
    // image (OhiroRd2, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
    // image (McKinleyCres, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
    // image (GarfieldSt, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
    // image (TodmanSt, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
    // image (CharlotteAve, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
}

function draw() {
    background (0, 0, 31);
    strokeWeight(5);
    //image (MapTemplate, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)

    if (showSectionOne) {
        drawSectionOne((width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5);
    }
    if (showSectionTwo) {
        drawSectionTwo();
    }
    if (showSectionThree) {
        drawSectionThree();
    }
    if (showSectionFour) {
        drawSectionFour();
    }
    if (showSectionFive) {
        drawSectionFive();
    }
    
    if (showImageOne){
        drawImageOne();
    }
}

function mouseClicked () {
//section one  
    // section one to section two
    if (showSectionOne && mouseX > (width/2 + ((width*0.125)/2)) && mouseX <(width/2 + ((width*0.2)/2)) && mouseY > (height/2 -(width/4.1)) && mouseY <(height/2 -(width/4.9)) ){
        showSectionOne = false
        showSectionTwo = true
    }
    //left star on
    else if (showImageOne === false && showSectionOne && mouseX > (width/2 - ((width/2.9)/2)) && mouseX <(width/2 - ((width/3.5)/2)) && mouseY > (height/2 +(width/35)) && mouseY <(height/2 +(width/17)) ){
        showImageOne = true
    }
    //left star of
    else if (showImageOne && showSectionOne && mouseX > (width/2 - ((width/2.9)/2)) && mouseX <(width/2 - ((width/3.5)/2)) && mouseY > (height/2 +(width/35)) && mouseY <(height/2 +(width/17)) ){
        showImageOne = false
    }
//section two
    //section two to section one
    else if (showSectionTwo && mouseX > (width/2 + ((width*0.32)/2)) && mouseX <(width/2 + ((width*0.4)/2)) && mouseY > (height/2 +(width/5.2)) && mouseY <(height/2 +(width/4.2)) ){
        showSectionOne = true
        showSectionTwo = false
    }

}

function drawSectionOne(){
    image (SectionOneImg, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
    //area points
    //point ((width/2 - ((width/2.9)/2)), (height/2 +(width/35))) //top left
    //point ((width/2 - ((width/3.5)/2)), (height/2 +(width/17))) //bottom right
}
function drawSectionTwo(){
    image (SectionTwoImg, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
    // arrow area points
    // point ((width/2 + ((width*0.32)/2)), (height/2 +(width/5.2))) //top left
    // point ((width/2 + ((width*0.32)/2)), (height/2 +(width/4.2))) //bottom left
    // point ((width/2 + ((width*0.4)/2)), (height/2 +(width/4.2))) //bottom right
}
function drawSectionThree(){
    //image (HarrisonSt, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
}
function drawSectionFour(){
    //image (JeffersonSt, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
}
function drawSectionFive(){
    //image (OhiroRd2, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
}

function drawImageOne(){
    image (IMG_4952, width/2, (height/2 - ((width*0.5)/2)), width, width/2)
}
// Resize the canvas if the window is resized
function windowResized() {
    const { w, h } = canvasSize();
    resizeCanvas(w, h);
    rightEdge = (width - 150)
    leftEdge = (150)
}