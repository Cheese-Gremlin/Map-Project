

// let showOhiroRd1 = true
// let showClevelandSt = false
// let showHarrisonSt = false
// let showJeffersonSt = false
// let showOhiroRd2 = false
// let showMcKinleyCres = false
// let showGarfieldSt = false
// let showTodmanSt = false
// let showCharlotteAve = false

let popUpImageWidth 
let popUpImageHeight
let leftImageXpos 
let rightImageXpos
let popUpImageYpos 

let StarImages;
let StarNumber;

let showImagePopUp = false
let AiGame = true //needs to be true
let showHint = false
let showImageInfo = false

let showSectionOne = true
let showSectionTwo = false

let redColour = [0, 73, 92]
let veryLightGrey = [0, 0, 60]
let NormalButtonColour = [0, 0, 29]
let hoverButtonColour = [0, 0, 32]
    let leftButtonColour = NormalButtonColour
    let rightButtonColour = NormalButtonColour
    let backButtonColour = NormalButtonColour
    let hintButtonColour = NormalButtonColour

let leftButtonPressed = false
let rightButtonPressed = false


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

    StarImage = loadJSON('stars.json');
    
    RealStar1 = loadImage("Photos/Star1.JPG")
    AiStar1 = loadImage("AiPhotos/AiStar1.png")
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

    StarNumber = StarImage.StarOne[0];
}

function draw() {
    background (0, 0, 31);
    strokeWeight(5);
    //image (MapTemplate, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)

    let MapImageWidth = width*0.8;
    let MapImageHeight = width*0.45;
    let MapImageX = (width/2 - ((width*0.8)/2));
    let MapImageY = (height/2 - ((width*0.45)/2));
    

    if (showSectionOne) {
        drawSectionOne(MapImageX, MapImageY, MapImageWidth, MapImageHeight);
    }
    if (showSectionTwo) {
        drawSectionTwo(MapImageX, MapImageY, MapImageWidth, MapImageHeight);
    }
    
    if (showImagePopUp){
        drawImagePopUp();
    }

    checkMouse()

}

function checkMouse(){
    if (showImagePopUp){
        if (AiGame){
            //left button
            if (mouseX > (width/2 - (width*0.221)) && mouseX <(width/2 - (width*0.12)) && mouseY > (height/2 + ((width*0.11))) && mouseY <(height/2 + ((width*0.145)))){
                leftButtonColour = hoverButtonColour
            }
            else {
                leftButtonColour = NormalButtonColour
            }

            if (mouseX > (width/2 + (width*0.221)-(width*0.1)) && mouseX <(width/2 + (width*0.12) +(width*0.101)) && mouseY > (height/2 + ((width*0.11))) && mouseY <(height/2 + ((width*0.145)))){
                rightButtonColour = hoverButtonColour
            }
            else {
                rightButtonColour = NormalButtonColour
            }
            if (mouseX > (width/2 - (width*0.051)+ (width*0.31)) && mouseX < (width/2 + (width*0.051)+ (width*0.31)) && mouseY > (height/2 - ((width*0.197))) && mouseY < (height/2 - ((width*0.162)))){
                hintButtonColour = hoverButtonColour
            }
            else {
                hintButtonColour = NormalButtonColour
            }
        }
        if (mouseX > (width/2 - (width*0.051)) && mouseX < (width/2 + (width*0.051)) && mouseY > (height/2 + ((width*0.162))) && mouseY < (height/2 + ((width*0.197)))){
            backButtonColour = hoverButtonColour
        }
        else {
            backButtonColour = NormalButtonColour
        }
    }
}


function mouseClicked () { 
    if (showImagePopUp === false){
    // are. we sohwing and image right now ? 
        if (showSectionOne){
            // section one to section two arrow
            if (mouseX > (width/2 + ((width*0.12)/2)) && mouseX <(width/2 + ((width*0.18)/2)) && mouseY > (height/2 -(width/4.6)) && mouseY <(height/2 -(width/5.6)) ){
                showSectionOne = false
                showSectionTwo = true
            }
            //star one
            if (mouseX > (width/2 - ((width/3.2)/2)) && mouseX <(width/2 - ((width/3.85)/2)) && mouseY > (height/2 +(width/38)) && mouseY <(height/2 +(width/19)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarOne[0]
            }
        }
        if (showSectionTwo){
        //section two
            //section two to section one
            if (mouseX > (width/2 + ((width*0.29)/2)) && mouseX <(width/2 + ((width*0.36)/2)) && mouseY > (height/2 +(width/5.8)) && mouseY <(height/2 +(width/4.7)) ){
                showSectionOne = true
                showSectionTwo = false
            }
        }
    }
    if (showImagePopUp ){
        if (AiGame){
            if (mouseX > (width/2 - (width*0.221)) && mouseX <(width/2 - (width*0.12)) && mouseY > (height/2 + ((width*0.11))) && mouseY <(height/2 + ((width*0.145)))){
                leftButtonPressed = true
                AiGame = false
            }
            if (mouseX > (width/2 + (width*0.221)-(width*0.1)) && mouseX <(width/2 + (width*0.12) +(width*0.101)) && mouseY > (height/2 + ((width*0.11))) && mouseY <(height/2 + ((width*0.145)))){
                rightButtonPressed = true
                AiGame = false
            }
            //Hint button
            if (mouseX > (width/2 - (width*0.051)+ (width*0.31)) && mouseX < (width/2 + (width*0.051)+ (width*0.31)) && mouseY > (height/2 - ((width*0.197))) && mouseY < (height/2 - ((width*0.162)))){
                showHint = true
                console.log ("hint")
            }
        }
        if (StarNumber.RealImageLeft && rightButtonPressed || StarNumber.RealImageLeft && leftButtonPressed){
            if (mouseX > (width/2 - (width*0.3) - (width*0.03)) && mouseX < (width/2 - (width*0.03)) && mouseY > (height/2 - ((width*0.2)/2)) && mouseY < (height/2 + ((width*0.2)/2))){
                showImageInfo = true
                AiGame = false
                leftButtonPressed = false
                rightButtonPressed = false
                console.log ("showLeftImageInfo")
            }
        }
        if (StarNumber.RealImageLeft === false && rightButtonPressed || StarNumber.RealImageLeft === false && leftButtonPressed){
            if (mouseX > (width/2 + (width*0.03)) && mouseX < (width/2 + (width*0.3) + (width*0.03)) && mouseY > (height/2 - ((width*0.2)/2)) && mouseY < (height/2 + ((width*0.2)/2))){
                showImageInfo = true
                AiGame = true
                leftButtonPressed = false
                rightButtonPressed = false
                console.log ("showRightImageInfo")
            }
        }
        //back button
        if (mouseX > (width/2 - (width*0.051)) && mouseX < (width/2 + (width*0.051)) && mouseY > (height/2 + ((width*0.162))) && mouseY < (height/2 + ((width*0.197)))){
            showImagePopUp = false
            AiGame = true
            leftButtonPressed = false
            rightButtonPressed = false
            showImageInfo = false
        }

    }
}

function drawSectionOne(x, y, w , h){
   // image (SectionOneImg, (width/2 - ((width*0.89)/2)), (height/2 - ((width*0.5)/2)), width*0.89, width*0.5)
       image (SectionOneImg, x, y, w , h)
    //up arrow points
    // point ((width/2 + ((width*0.12)/2)), (height/2 -(width/4.6))) //top left
    // point ((width/2 + ((width*0.12)/2)), (height/2 -(width/5.6))) //top left
    // point ((width/2 + ((width*0.18)/2)), (height/2 -(width/5.6))) //bottom right
    //star points
    // point ((width/2 - ((width/3.2)/2)), (height/2 +(width/38))) //top left
    // point ((width/2 - ((width/3.2)/2)), (height/2 +(width/19))) //top left
    // point ((width/2 - ((width/3.85)/2)), (height/2 +(width/19))) //bottom right
}
function drawSectionTwo(x, y, w , h){
    image (SectionTwoImg, x, y, w , h)
    // arrow area points
    // point ((width/2 + ((width*0.29)/2)), (height/2 +(width/5.8))) //top left
    // point ((width/2 + ((width*0.29)/2)), (height/2 +(width/4.7))) //bottom left
    // point ((width/2 + ((width*0.36)/2)), (height/2 +(width/4.7))) //bottom right
}


function drawImagePopUp(){
    if (StarNumber.UpRight === false){
        popUpImageWidth = width*0.3
        popUpImageHeight = width*0.2
        leftImageXpos = (width/2 - (width*0.3) - (width*0.03))
        rightImageXpos = (width/2 + (width*0.03))
        popUpImageYpos = (height/2 - ((width*0.2)/2))
    }
    else if (StarNumber.UpRight){
        popUpImageWidth = width*0.13333
        popUpImageHeight = width*0.2
        leftImageXpos = (width/2 - (width*0.13333) - (width*0.105))
        rightImageXpos = (width/2 + (width*0.13333) - (width*0.03))
        popUpImageYpos = (height/2 - ((width*0.2)/2))
    }

    //box
    fill(0, 0, 22)
    noStroke ()
    rect((width/2 - ((width*0.8)/2)),(height/2 - ((width*0.45)/2)), width*0.8, width*0.45, 50)
    stroke (redColour)
    fill(0, 0, 22)
    rect((width/2 - ((width*0.778)/2)),(height/2 - ((width*0.43)/2)), width*0.778, width*0.43, 45)
    //images
    if (showImageInfo === false){
        if (StarNumber.RealImageLeft){
            if (StarNumber.AiImage){
                //draws components only visible when AI game is active
                if (AiGame){
                push ()
                    textAlign(CENTER)
                    noStroke ()
                    fill (redColour)
                    textSize (width*0.04)
                    text ('Which one is Real?', (width/2), (height/2 - ((width*0.135))))
                pop ()
                    LeftThisOneButton(leftImageXpos)
                    RightThisOneButton(rightImageXpos)
                }
                
                    if (leftButtonPressed){
                    push ()
                        textAlign(CENTER)
                        noStroke ()
                        fill (redColour)
                        textSize (width*0.04)
                        text ("That's Correct!", (width/2), (height/2 - ((width*0.135))))
                    pop ()
                    push ()
                        strokeWeight (width*0.01)
                        stroke (redColour)
                        rect(leftImageXpos, popUpImageYpos , popUpImageWidth, popUpImageHeight)

                        textAlign(CENTER)
                        noStroke ()
                        fill (redColour)
                        textSize (width*0.027)
                        text ('This one is Real!', (width/2 - (width*0.221) +((width*0.1)/2)), (height/2 + ((width*0.134))))
                        textSize (width*0.0217)
                        text ('Press the picture for more info', (width/2 - (width*0.221) +((width*0.1)/2)), (height/2 + ((width*0.157))))
                    pop ()
                    }

                    else if (rightButtonPressed){
                    push ()
                        textAlign(CENTER)
                        noStroke ()
                        fill (redColour)
                        textSize (width*0.04)
                        text ("That's Wrong...", (width/2), (height/2 - ((width*0.135))))
                    pop ()
                    push ()
                        strokeWeight (width*0.01)
                        stroke (redColour)
                        rect(leftImageXpos, popUpImageYpos , popUpImageWidth, popUpImageHeight)
                        
                        textAlign(CENTER)
                        noStroke ()
                        fill (redColour)
                        textSize (width*0.027)
                        text ('This one is Real!', (width/2 - (width*0.221) +((width*0.1)/2)), (height/2 + ((width*0.134))))
                        textSize (width*0.0217)
                        text ('Press the picture for more info', (width/2 - (width*0.221) +((width*0.1)/2)), (height/2 + ((width*0.157))))
                    pop ()
                    }
                HintButton()
                image (window[StarNumber.AiImage], rightImageXpos, popUpImageYpos , popUpImageWidth, popUpImageHeight)
            }
            image (window[StarNumber.RealImage], leftImageXpos, popUpImageYpos , popUpImageWidth, popUpImageHeight)
        }

        if (StarNumber.RealImageLeft === false){
            if (StarNumber.AiImage){
                //draws components only visible when AI game is active
                if (AiGame){
                push ()
                    textAlign(CENTER)
                    noStroke ()
                    fill (redColour)
                    textSize (width*0.04)
                    text ('Which one is Real?', (width/2), (height/2 - ((width*0.135))))
                pop ()
                    LeftThisOneButton(leftImageXpos)
                    RightThisOneButton(rightImageXpos)
                }
                
                if (rightButtonPressed){
                push ()
                    textAlign(CENTER)
                    noStroke ()
                    fill (redColour)
                    textSize (width*0.04)
                    text ("That's Correct!", (width/2), (height/2 - ((width*0.135))))
                pop ()
                push ()
                    strokeWeight (width*0.01)
                    stroke (redColour)
                    rect(rightImageXpos, popUpImageYpos , popUpImageWidth, popUpImageHeight)

                    textAlign(CENTER)
                    noStroke ()
                    fill (redColour)
                    textSize (width*0.027)
                    text ('This one is Real!', (width/2 + (width*0.221) -((width*0.1)/2)), (height/2 + ((width*0.134))))
                    textSize (width*0.0217)
                    text ('Press the picture for more info', (width/2 + (width*0.221) -((width*0.1)/2)), (height/2 + ((width*0.157))))
                pop ()
                }

                if (leftButtonPressed){
                push ()
                    textAlign(CENTER)
                    noStroke ()
                    fill (redColour)
                    textSize (width*0.04)
                    text ("That's Wrong...", (width/2), (height/2 - ((width*0.135))))
                pop ()
                push ()
                    strokeWeight (width*0.01)
                    stroke (redColour)
                    rect(rightImageXpos, popUpImageYpos , popUpImageWidth, popUpImageHeight)
                    
                    textAlign(CENTER)
                    noStroke ()
                    fill (redColour)
                    textSize (width*0.027)
                    text ('This one is Real!', (width/2 + (width*0.221) -((width*0.1)/2)), (height/2 + ((width*0.134))))
                    textSize (width*0.0217)
                    text ('Press the picture for more info', (width/2 + (width*0.221) -((width*0.1)/2)), (height/2 + ((width*0.157))))
                pop ()
                }
                HintButton()
                image (window[StarNumber.AiImage], leftImageXpos, popUpImageYpos , popUpImageWidth, popUpImageHeight)
            }

            image (window[StarNumber.RealImage], rightImageXpos, popUpImageYpos , popUpImageWidth, popUpImageHeight)
        }
    }
    if (StarNumber.AiImage === false || showImageInfo){ //------------------------------------------------------------------------------------------------------------------
            push ()
                textAlign(CENTER)
                noStroke ()
                fill (redColour)
                textSize (width*0.04)
                text ("Image Information", (width/2), (height/2 - ((width*0.135))))

                textAlign(LEFT)
                noStroke ()
                fill (redColour)
                textSize (width*0.027)
                text ("F-Stop : " + StarNumber.RealText.FStop, (width/2 + (width*0.05)), (height/2 - ((width*0.07))))
                text ("Exposure Time : " + StarNumber.RealText.ExposureTime, (width/2 + (width*0.05)), (height/2 - ((width*0.03))))
                text ("ISO Speed :" + StarNumber.RealText.ISOSpeed , (width/2 + (width*0.05)), (height/2 + ((width)*0.01)))
                text ("Focal Length : " + StarNumber.RealText.FocalLength, (width/2 + (width*0.05)), (height/2 + ((width)*0.05)))
                text ("Approx Location : " + StarNumber.RealText.Location, (width/2 + (width*0.05)), (height/2 + ((width)*0.09)))
                image (window[StarNumber.RealImage], leftImageXpos, popUpImageYpos , popUpImageWidth, popUpImageHeight)

                
            pop ()
    }
    BackButton()
}

function LeftThisOneButton() {
push () 
    textAlign(CENTER)
    rectMode(CENTER)
    stroke (redColour)
    strokeWeight (width*0.002)
    fill(leftButtonColour)
    rect((width/2 - (width*0.221) +((width*0.1)/2)), (height/2 + ((width*0.126))), width*0.1, width*0.035, 15)
    noStroke ()
    fill (redColour)
    textSize (width*0.025)
    text ('This one', (width/2 - (width*0.221) +((width*0.1)/2)), (height/2 + ((width*0.134))))
    stroke (180, 80, 90)
    // point ((width/2 - (width*0.221)), (height/2 + ((width*0.11))))
    // point ((width/2 - (width*0.221)), (height/2 + ((width*0.145))))
    // point ((width/2 - (width*0.12)), (height/2 + ((width*0.145))))
pop ()
}
function RightThisOneButton() {
push () 
    textAlign(CENTER)
    rectMode(CENTER)
    stroke (redColour)
    strokeWeight (width*0.002)
    fill(rightButtonColour)
    rect((width/2 + (width*0.221) -((width*0.1)/2)), (height/2 + ((width*0.126))), width*0.1, width*0.035, 15)
    noStroke ()
    fill (redColour)
    textSize (width*0.025)
    text ('This one', (width/2 + (width*0.221) -((width*0.1)/2)), (height/2 + ((width*0.134))))
    stroke (180, 80, 90)
    // point ((width/2 + (width*0.221)-(width*0.1)), (height/2 + ((width*0.11))))
    // point ((width/2 + (width*0.221)-(width*0.1)), (height/2 + ((width*0.145))))
    // point ((width/2 + (width*0.12) +(width*0.101)), (height/2 + ((width*0.145))))
pop ()
}
function BackButton(){
    push () 
        textAlign(CENTER)
        rectMode(CENTER)
        stroke (redColour)
        strokeWeight (width*0.002)
        fill(backButtonColour)
        rect((width/2), (height/2 + ((width*0.18))), width*0.1, width*0.035, 15)
        noStroke ()
        fill (redColour)
        textSize (width*0.025)
        text ('Back', (width/2), (height/2 + ((width*0.187))))
        stroke (180, 80, 90)
        // point ((width/2 - (width*0.051)), (height/2 + ((width*0.162))))
        // point ((width/2 - (width*0.051)), (height/2 + ((width*0.197))))
        // point ((width/2 + (width*0.051)), (height/2 + ((width*0.197))))
    pop ()
}
function HintButton(){
    push () 
        textAlign(CENTER)
        rectMode(CENTER)
        stroke (redColour)
        strokeWeight (width*0.002)
        fill(hintButtonColour)
        rect((width/2 + (width*0.31)), (height/2 - ((width*0.18))), width*0.1, width*0.035, 15)
        noStroke ()
        fill (redColour)
        textSize (width*0.025)
        text ('Hint', (width/2 + (width*0.31)), (height/2 - ((width*0.171))))
        stroke (180, 80, 90)
        // point ((width/2 - (width*0.051)+ (width*0.31)), (height/2 - ((width*0.162))))
        // point ((width/2 - (width*0.051)+ (width*0.31)), (height/2 - ((width*0.197))))
        // point ((width/2 + (width*0.051)+ (width*0.31)), (height/2 - ((width*0.197))))
    pop ()
}
// Resize the canvas if the window is resized
function windowResized() {
    const { w, h } = canvasSize();
    resizeCanvas(w, h);
    rightEdge = (width - 150)
    leftEdge = (150)
}