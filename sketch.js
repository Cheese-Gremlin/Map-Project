
let popUpImageWidth 
let popUpImageHeight
let leftImageXpos 
let rightImageXpos
let popUpImageYpos 
let realTextXpos
let realTextYpos
let infoTextXpos
let infoTextYpos
let leftButtonText
let rightButtonText


let showImagePopUp = false
let AiGame = false
let showHint = false
let showImageInfo = false

let showSectionOne = true
let showSectionTwo = false

let redColour = [0, 73, 92]
let darkerRedColour = [0, 60, 66]
let veryLightGrey = [0, 0, 70]
let NormalButtonColour = [0, 0, 29]
let hoverButtonColour = [0, 0, 32]
    let leftButtonColour = NormalButtonColour
    let rightButtonColour = NormalButtonColour
    let backButtonColour = NormalButtonColour
    let hintButtonColour = NormalButtonColour

let leftButtonPressed = false
let rightButtonPressed = false


function preload(){

    SectionOneImg = loadImage("Images/Section1.png")
    SectionTwoImg = loadImage("Images/Section2.png")


    StarImage = loadJSON('stars.json');
    
    RealStar1 = loadImage("Photos/Star1.JPG")
    RealStar2 = loadImage("Photos/Star2.JPG")
    RealStar3 = loadImage("Photos/Star3.JPG")
    RealStar4 = loadImage("Photos/Star4.JPG")
    RealStar5 = loadImage("Photos/Star5.JPG")
    RealStar6 = loadImage("Photos/Star6.JPG")
    RealStar7 = loadImage("Photos/Star7.JPG")
    RealStar8 = loadImage("Photos/Star8.JPG")
    RealStar9 = loadImage("Photos/Star9.JPG")
    RealStar10 = loadImage("Photos/Star10.JPG")
    RealStar11 = loadImage("Photos/Star11.JPG")
    RealStar12 = loadImage("Photos/Star12.JPG")
    RealStar13 = loadImage("Photos/Star13.JPG")
    RealStar14 = loadImage("Photos/Star14.JPG")
    RealStar15 = loadImage("Photos/Star15.JPG")
    RealStar16 = loadImage("Photos/Star16.JPG")
    RealStar17 = loadImage("Photos/Star17.JPG")
    RealStar18 = loadImage("Photos/Star18.JPG")
    RealStar19 = loadImage("Photos/Star19.JPG")
    RealStar20 = loadImage("Photos/Star20.JPG")
    RealStar21 = loadImage("Photos/Star21.JPG")
    RealStar22 = loadImage("Photos/Star22.JPG")
    RealStar23 = loadImage("Photos/Star23.JPG")
    RealStar24 = loadImage("Photos/Star24.JPG")
    RealStar25 = loadImage("Photos/Star25.JPG")
    RealStar26 = loadImage("Photos/Star26.JPG")
    RealStar27 = loadImage("Photos/Star27.JPG")
    RealStar28 = loadImage("Photos/Star28.JPG")
    RealStar29 = loadImage("Photos/Star29.JPG")
    RealStar30 = loadImage("Photos/Star30.JPG")
    RealStar31 = loadImage("Photos/Star31.JPG")
    RealStar32 = loadImage("Photos/Star32.JPG")
    
    AiStar1 = loadImage("AiPhotos/AiStar1.png")
    AiStar2 = loadImage("AiPhotos/AiStar2.png")
    AiStar4 = loadImage("AiPhotos/AiStar4.png")
    AiStar6 = loadImage("AiPhotos/AiStar6.png")
    AiStar8 = loadImage("AiPhotos/AiStar8.png")
    AiStar9 = loadImage("AiPhotos/AiStar9.png")
    AiStar12 = loadImage("AiPhotos/AiStar12.png")
    //AiStar15 = loadImage("AiPhotos/AiStar15.png")
    AiStar17 = loadImage("AiPhotos/AiStar17.png")
    AiStar18 = loadImage("AiPhotos/AiStar18.png")
    AiStar21 = loadImage("AiPhotos/AiStar21.png")
    AiStar23 = loadImage("AiPhotos/AiStar23.png")
    AiStar26 = loadImage("AiPhotos/AiStar26.png")
    AiStar27 = loadImage("AiPhotos/AiStar27.png")
    AiStar28 = loadImage("AiPhotos/AiStar28.png")
    AiStar31 = loadImage("AiPhotos/AiStar31.png")
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
    
    if (showImagePopUp === false){
        if (showSectionOne) {
            drawSectionOne(MapImageX, MapImageY, MapImageWidth, MapImageHeight);
        }
        if (showSectionTwo) {
            drawSectionTwo(MapImageX, MapImageY, MapImageWidth, MapImageHeight);
        }
        drawOverlay();
    }
    else if (showImagePopUp){
        drawImagePopUp();
    }
    
    if (showHint){
        drawHintPopUp();
    }
    checkMouse();
    

    stroke (78, 78, 78)
    //THIS TOOK SO LONG HELP
    //section one arrow points
    // point ((width/2 + ((width*0.12)/2)), (height/2 -(width/4.6))) //top left
    // point ((width/2 + ((width*0.12)/2)), (height/2 -(width/5.6))) //top left
    // point ((width/2 + ((width*0.18)/2)), (height/2 -(width/5.6))) //bottom right
    // section two arrow points
    // point ((width/2 + ((width*0.29)/2)), (height/2 +(width/5.8))) //top left
    // point ((width/2 + ((width*0.29)/2)), (height/2 +(width/4.7))) //bottom left
    // point ((width/2 + ((width*0.36)/2)), (height/2 +(width/4.7))) //bottom right
    // //star one points
    // point ((width/2 - ((width/3.2)/2)), (height/2 +(width/38))) //top left
    // point ((width/2 - ((width/3.2)/2)), (height/2 +(width/19))) //top left
    // point ((width/2 - ((width/3.85)/2)), (height/2 +(width/19))) //bottom right
    // //star two points
    // point ((width/2 - ((width*0.195)/2)), (height/2 +(width*0.038))) //top left
    // point ((width/2 - ((width*0.195)/2)), (height/2 +(width*0.065))) //top left
    // point ((width/2 - ((width*0.14)/2)), (height/2 +(width*0.065))) //bottom right
    // //star three points
    // point ((width/2 - ((width*0.02)/2)), (height/2 +(width*0.051))) //top left
    // point ((width/2 - ((width*0.02)/2)), (height/2 +(width*0.075))) //top left
    // point ((width/2 + ((width*0.035)/2)), (height/2 +(width*0.075))) //bottom right
    // //star four points
    // point ((width/2 + ((width*0.278)/2)), (height/2 +(width*0.071))) //top left
    // point ((width/2 + ((width*0.278)/2)), (height/2 +(width*0.097))) //top left
    // point ((width/2 + ((width*0.335)/2)), (height/2 +(width*0.097))) //bottom right
    // //star five points
    // point ((width/2 + ((width*0.218)/2)), (height/2 +(width*0.005))) //top left
    // point ((width/2 + ((width*0.218)/2)), (height/2 +(width*0.03))) //top left
    // point ((width/2 + ((width*0.28)/2)), (height/2 +(width*0.03))) //bottom right
    // //star six points
    // point ((width/2 + ((width*0.14)/2)), (height/2 -(width*0.105))) //top left
    // point ((width/2 + ((width*0.14)/2)), (height/2 -(width*0.08))) //top left
    // point ((width/2 + ((width*0.2)/2)), (height/2 -(width*0.08))) //bottom right
    // //star seven points
    // point ((width/2 + ((width*0.12)/2)), (height/2 -(width*0.135))) //top left
    // point ((width/2 + ((width*0.12)/2)), (height/2 -(width*0.108))) //top left
    // point ((width/2 + ((width*0.18)/2)), (height/2 -(width*0.108))) //bottom right
    // //star eight points
    // point ((width/2 + ((width*0.085)/2)), (height/2 -(width*0.176))) //top left
    // point ((width/2 + ((width*0.085)/2)), (height/2 -(width*0.151))) //top left
    // point ((width/2 + ((width*0.137)/2)), (height/2 -(width*0.151))) //bottom right
    // //star nine points
    // point ((width/2 + ((width*0.218)/2)), (height/2 -(width*0.15))) //top left
    // point ((width/2 + ((width*0.218)/2)), (height/2 -(width*0.127))) //top left
    // point ((width/2 + ((width*0.277)/2)), (height/2 -(width*0.127))) //bottom right
    // //star ten points
    // point ((width/2 + ((width*0.305)/2)), (height/2 -(width*0.032))) //top left
    // point ((width/2 + ((width*0.305)/2)), (height/2 -(width*0.0015))) //top left
    // point ((width/2 + ((width*0.365)/2)), (height/2 -(width*0.0015))) //bottom right
    // //star eleven points
    // point ((width/2 + ((width*0.438)/2)), (height/2 +(width*0.057))) //top left
    // point ((width/2 + ((width*0.438)/2)), (height/2 +(width*0.082))) //top left
    // point ((width/2 + ((width*0.49)/2)), (height/2 +(width*0.082))) //bottom right
    // //star twelve points
    // point ((width/2 + ((width*0.615)/2)), (height/2 +(width*0.058))) //top left
    // point ((width/2 + ((width*0.615)/2)), (height/2 +(width*0.085))) //top left
    // point ((width/2 + ((width*0.67)/2)), (height/2 +(width*0.085))) //bottom right
    // //star thirteen points
    // point ((width/2 + ((width*0.42)/2)), (height/2 +(width*0.108))) //top left
    // point ((width/2 + ((width*0.42)/2)), (height/2 +(width*0.135))) //top left
    // point ((width/2 + ((width*0.475)/2)), (height/2 +(width*0.135))) //bottom right
    // //star fourteen points
    // point ((width/2 + ((width*0.49)/2)), (height/2 +(width*0.15))) //top left
    // point ((width/2 + ((width*0.49)/2)), (height/2 +(width*0.175))) //top left
    // point ((width/2 + ((width*0.545)/2)), (height/2 +(width*0.175))) //bottom right
    // //star fifteen points
    // point ((width/2 + ((width*0.305)/2)), (height/2 +(width*0.122))) //top left
    // point ((width/2 + ((width*0.305)/2)), (height/2 +(width*0.148))) //top left
    // point ((width/2 + ((width*0.365)/2)), (height/2 +(width*0.148))) //bottom right
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
        if (showSectionOne){
            
            // section one to section two arrow
            if (mouseX > (width/2 + ((width*0.12)/2)) && mouseX < (width/2 + ((width*0.18)/2)) 
                && mouseY > (height/2 -(width/4.6)) && mouseY < (height/2 -(width/5.6)) ){
                showSectionOne = false
                showSectionTwo = true
            }
            //star one
            if (mouseX > (width/2 - ((width/3.2)/2)) && mouseX < (width/2 - ((width/3.85)/2)) 
                && mouseY > (height/2 +(width/38)) && mouseY < (height/2 +(width/19)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarOne[0]
            }
            //star two
            if (mouseX > (width/2 - ((width*0.195)/2)) && mouseX < (width/2 - ((width*0.14)/2)) 
                && mouseY > (height/2 +(width*0.038)) && mouseY < (height/2 +(width*0.065)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarTwo[0]
            }
            //star three
            if (mouseX > (width/2 - ((width*0.02)/2)) && mouseX < (width/2 + ((width*0.035)/2)) 
                && mouseY > (height/2 +(width*0.051)) && mouseY < (height/2 +(width*0.075)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarThree[0]
            }
            //star four
            if (mouseX > (width/2 + ((width*0.278)/2)) && mouseX < (width/2 + ((width*0.335)/2))
                && mouseY > (height/2 +(width*0.071)) && mouseY < (height/2 +(width*0.097)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarFour[0]
            }
            //star five
            if (mouseX > (width/2 + ((width*0.218)/2)) && mouseX < (width/2 + ((width*0.28)/2))
                && mouseY > (height/2 +(width*0.005)) && mouseY < (height/2 +(width*0.03)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarFive[0]
            }
            //star six
            if (mouseX > (width/2 + ((width*0.14)/2)) && mouseX < (width/2 + ((width*0.2)/2))
                && mouseY > (height/2 -(width*0.105)) && mouseY < (height/2 -(width*0.08)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarSix[0]
            }
            //star seven
            if (mouseX > (width/2 + ((width*0.12)/2)) && mouseX < (width/2 + ((width*0.18)/2))
                && mouseY > (height/2 -(width*0.135)) && mouseY < (height/2 -(width*0.108)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarSeven[0]
            }
            //star eight
            if (mouseX > (width/2 + ((width*0.085)/2)) && mouseX < (width/2 + ((width*0.137)/2))
                && mouseY > (height/2 -(width*0.176)) && mouseY < (height/2 -(width*0.151)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarEight[0]
            }
            //star nine
            if (mouseX > (width/2 + ((width*0.218)/2)) && mouseX < (width/2 + ((width*0.277)/2))
                && mouseY > (height/2 -(width*0.15)) && mouseY < (height/2 -(width*0.127)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarNine[0]
            }
            //star ten
            if (mouseX > (width/2 + ((width*0.305)/2)) && mouseX < (width/2 + ((width*0.365)/2))
                && mouseY > (height/2 -(width*0.032)) && mouseY < (height/2 -(width*0.0015)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarTen[0]
            }
            //star eleven
            if (mouseX > (width/2 + ((width*0.438)/2)) && mouseX < (width/2 + ((width*0.49)/2))
                && mouseY > (height/2 +(width*0.057)) && mouseY < (height/2 +(width*0.082)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarEleven[0]
            }
            //star twelve
            if (mouseX > (width/2 + ((width*0.615)/2)) && mouseX < (width/2 + ((width*0.67)/2))
                && mouseY > (height/2 +(width*0.058)) && mouseY < (height/2 +(width*0.085)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarTwelve[0]
            }
            //star thirteen
            if (mouseX > (width/2 + ((width*0.42)/2)) && mouseX < (width/2 + ((width*0.475)/2))
                && mouseY > (height/2 +(width*0.108)) && mouseY < (height/2 +(width*0.135)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarThirteen[0]
            }
            //star fourteen
            if (mouseX > (width/2 + ((width*0.49)/2)) && mouseX < (width/2 + ((width*0.545)/2))
                && mouseY > (height/2 +(width*0.15)) && mouseY < (height/2 +(width*0.175)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarFourteen[0]
            }
            //star fifteen
            if (mouseX > (width/2 + ((width*0.305)/2)) && mouseX < (width/2 + ((width*0.365)/2))
                && mouseY > (height/2 +(width*0.122)) && mouseY < (height/2 +(width*0.148)) ){
                showImagePopUp = true
                StarNumber = StarImage.StarFifteen[0]
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
        AiGame = true
        if (showHint === false){
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
                    AiGame = false
                    leftButtonPressed = false
                    rightButtonPressed = false
                    console.log ("showRightImageInfo")
                }
            }
            //back button
            if (mouseX > (width/2 - (width*0.051)) && mouseX < (width/2 + (width*0.051)) && mouseY > (height/2 + ((width*0.162))) && mouseY < (height/2 + ((width*0.197)))){
                showImagePopUp = false
                AiGame = false
                leftButtonPressed = false
                rightButtonPressed = false
                showImageInfo = false
            }
        }
        //hint back button
        else if (showHint){
            if (mouseX > (width/2 - (width*0.06)) && mouseX < (width/2 + (width*0.06)) 
                && mouseY > (height/2 + ((width*0.162))) && mouseY < (height/2 + ((width*0.197)))){
                showHint = false
                console.log ("hide hint")
            }
        }
    }
}

function drawOverlay(){
    // push () 
    //     //textAlign(CENTER)
    //     rectMode(CENTER)
    //     noStroke ()
    //     fill (redColour)
    //     textSize (width*0.035)
    //     text ('A Red Adventure', (width/2 - (width/2.2)), (height/2 - ((width*0.2))))
    //     fill (veryLightGrey)//(darkerRedColour)
    //     textSize (width*0.015)
    //     text ('Adventure around the map and look at stars', (width/2 - (width/2.2)), (height/2 - (width*0.18)))
    //     text ('to see photos taken at their locations', (width/2 - (width/2.2)), (height/2 - (width*0.162)))
    // pop ()
}

function drawSectionOne(x, y, w , h){
    image (SectionOneImg, x, y, w , h)
    push () 
        //textAlign(CENTER)
        rectMode(CENTER)
        noStroke ()
        fill (redColour)
        textSize (width*0.035)
        text ('A Red Adventure', (width/2 - (width/2.5)), (height/2 - ((width*0.16))))
        fill (veryLightGrey)//(darkerRedColour)
        textSize (width*0.015)
        text ('Adventure around the map and look at stars', (width/2 - (width/2.5)), (height/2 - (width*0.14)))
        text ('to see photos taken at their locations', (width/2 - (width/2.5)), (height/2 - (width*0.122)))
    pop ()
}
function drawSectionTwo(x, y, w , h){
    image (SectionTwoImg, x, y, w , h)
    push () 
        //textAlign(CENTER)
        rectMode(CENTER)
        noStroke ()
        fill (redColour)
        textSize (width*0.035)
        text ('A Red Adventure', (width/2 - (width/2.5)), (height/2 + ((width*0.1))))
        fill (veryLightGrey)//(darkerRedColour)
        textSize (width*0.015)
        text ('Adventure around the map and look at stars', (width/2 - (width/2.5)), (height/2 + (width*0.12)))
        text ('to see photos taken at their locations', (width/2 - (width/2.5)), (height/2 + (width*0.138)))
    pop ()
}


function drawImagePopUp(){
    if (StarNumber.RealImageLeft){
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
        realTextXpos = (width/2 - (width*0.221) +((width*0.1)/2))
        realTextYpos = (height/2 + ((width*0.134)))
        infoTextXpos = (width/2 - (width*0.221) +((width*0.1)/2))
        infoTextYpos = (height/2 + ((width*0.157)))
        rightButtonText = "That's Wrong..."
        leftButtonText = "That's Correct!"
    }
    else if (StarNumber.RealImageLeft === false){
        if (StarNumber.UpRight === false){
            popUpImageWidth = width*0.3
            popUpImageHeight = width*0.2
            rightImageXpos = (width/2 - (width*0.3) - (width*0.03))
            leftImageXpos = (width/2 + (width*0.03))
            popUpImageYpos = (height/2 - ((width*0.2)/2))
        }
        else if (StarNumber.UpRight){
            popUpImageWidth = width*0.13333
            popUpImageHeight = width*0.2
            rightImageXpos = (width/2 - (width*0.13333) - (width*0.105))
            leftImageXpos = (width/2 + (width*0.13333) - (width*0.03))
            popUpImageYpos = (height/2 - ((width*0.2)/2))
        }
        realTextXpos = (width/2 + (width*0.221) -((width*0.1)/2))
        realTextYpos = (height/2 + ((width*0.134)))
        infoTextXpos = (width/2 + (width*0.221) -((width*0.1)/2))
        infoTextYpos = (height/2 + ((width*0.157)))
        leftButtonText = "That's Wrong..."
        rightButtonText = "That's Correct!"
    }
    if (showImageInfo){
        leftImageXpos = (width/2 - (width*0.3) - (width*0.03))
        rightImageXpos = (width/2 + (width*0.03))
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
                        text (leftButtonText, (width/2), (height/2 - ((width*0.135))))
                    pop ()
                    push ()
                        strokeWeight (width*0.01)
                        stroke (redColour)
                        rect(leftImageXpos, popUpImageYpos , popUpImageWidth, popUpImageHeight)

                        textAlign(CENTER)
                        noStroke ()
                        fill (redColour)
                        textSize (width*0.027)
                        text ('This one is Real!', realTextXpos, realTextYpos)
                        textSize (width*0.0217)
                        text ('Press the picture for more info', infoTextXpos, infoTextYpos)
                    pop ()
                    }

                    else if (rightButtonPressed){
                    push ()
                        textAlign(CENTER)
                        noStroke ()
                        fill (redColour)
                        textSize (width*0.04)
                        text (rightButtonText, (width/2), (height/2 - ((width*0.135))))
                    pop ()
                    push ()
                        strokeWeight (width*0.01)
                        stroke (redColour)
                        rect(leftImageXpos, popUpImageYpos , popUpImageWidth, popUpImageHeight)
                        
                        textAlign(CENTER)
                        noStroke ()
                        fill (redColour)
                        textSize (width*0.027)
                        text ('This one is Real!', realTextXpos, realTextYpos)
                        textSize (width*0.0217)
                        text ('Press the picture for more info', infoTextXpos, infoTextYpos)
                    pop ()
                    }
                HintButton()
                image (window[StarNumber.AiImage], rightImageXpos, popUpImageYpos , popUpImageWidth, popUpImageHeight)
            }
            image (window[StarNumber.RealImage], leftImageXpos, popUpImageYpos , popUpImageWidth, popUpImageHeight)

    }
    //show image info section
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

function drawHintPopUp(){
    //box
    fill(0, 0, 22)
    noStroke ()
    rect((width/2 - ((width*0.8)/2)),(height/2 - ((width*0.45)/2)), width*0.8, width*0.45, 50)
    stroke (redColour)
    fill(0, 0, 22)
    rect((width/2 - ((width*0.778)/2)),(height/2 - ((width*0.43)/2)), width*0.778, width*0.43, 45)
    //text
    push () 
        textAlign(CENTER)
        rectMode(CENTER)
        noStroke ()
        fill (redColour)
        textSize (width*0.035)
        text ('Prompt used for Ai image Generation', (width/2), (height/2 - ((width*0.15))))
        textSize (width*0.025)
        text ('"' + StarNumber.AIText + '"', (width/2), (height/2 + (width*0.05)), width*0.6, width*0.3)
    pop ()
    //close hints button
    push () 
        textAlign(CENTER)
        rectMode(CENTER)
        stroke (redColour)
        strokeWeight (width*0.002)
        fill(backButtonColour)
        rect((width/2), (height/2 + ((width*0.18))), width*0.12, width*0.035, 15)
        noStroke ()
        fill (redColour)
        textSize (width*0.025)
        text ('Close Hint', (width/2), (height/2 + ((width*0.187))))
        // stroke (180, 80, 90)
        // point ((width/2 - (width*0.06)), (height/2 + ((width*0.162))))
        // point ((width/2 - (width*0.06)), (height/2 + ((width*0.197))))
        // point ((width/2 + (width*0.06)), (height/2 + ((width*0.197))))
    pop ()
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