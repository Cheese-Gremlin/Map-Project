# mddn-project-3
Interactive self made map that show cases my photography and doubles as a 'What image is AI' game <br/> 

Plan: <br/> 
    -arrow buttons: page starts with only one arrow button at the bottom and as the user explores (by pressing arrow buttons to 'walk' in said direction) more of the map/ next directions/arrows will be shown. <br/> 
    -arrow are connected by threads? <br/> 
    -icon buttons: when clicked on 'widget' pops up which shows 2 images, one that i took and one that is AI generated. User will need to pick which one is real and which one is AI. Hint button will show prompt used to generate image. <br/> 
    -menu button: drop down menu which has more information, e.g. how project was made, personal experience and opinions on AI/ image generation, links to articles on how to spot AI generation (maybe some articles 'giving hope' to artists/ photographers), photography ideas to get people interested in it. <br/> 

References, Inspirations and 'similar' projects <br/> 
    My 'yellow journey' project from dsdn 151 where i went on a 'photography journey' and took pictures of everything yellow <br/> 
    My 'humble abode website' project for ths course: using a project to show case my work (in this case photography) <br/>
    https://flowchart.bettercatastrophe.com/Links  <br/> 
    https://counterhate.com/spot-the-fake/Links <br/> 
    https://fake-or-real.net/Links <br/> 
    https://fake-or-real.net/blog/comment-detecter-image-ia.htmlLinks <br/> 

13/5 <br/> 
    started making basic files <br/> 
    came to the conclusion that i may have to use AI for this project after all since i cant just re-use the code from my previous projects since it doesnt create the interaction I am aiming for. <br/> 
    I may first try to look online to see what i can find or if another Human can teach me and then re-evaluate. Overall a little disappointed but here we are <br/> 
20/05 <br/> 
    I decided to use AI for this project rather than just pulling from what I already know since it will alow me to get the project done in time and hopeful help me reach a standard that I am happy with. Im still not very pleased about this but at the end of the day the course is called 'AI CODING' so that so what i am expected to do. I was really hoping that I could use this course to learn/ teach myself coding but that doesnt seem to be the case. So currently I am just 'accepting my fate' and 'using as much AI as i need' for this project. I will still keep the same approach of asking it to help me make certain parts of my project that I then piece together rather than just having AI make the whole thing since that goes too much against what I stand for as a person and what i think gives design/ creativity its value. Plus that way i still have some control and input.<br/> 


Images:<br/> 
    Went to the Broklyn in wellington with a 'Canon EOS 760D' and took pictures of everything red that i found interesting<br/> 
    All images mapped out: <br/> 
    ![alt text](<ReadMe-Images/all image on map.png>)
    Next step is to take these and make 'AI versions' of them. I will start with the images at the beginning of the path aka the bus stop on Ohiro road. <br/> 

Notes on making 'AI verions' og photos: <br/> 
        -need to specify image size to be the same as images I took <br/> 
        -cant just ask it to ‘replicate’ images or ‘make own version of image’ or ‘make a similar image’ since it just make a small change e.g. lighting to the provided image which is not enough change for purpose of this project <br/> 
        -making a new chat for each question/ image so that it isn’t influenced from previous prompts or images given <br/> 
    Using Gimini – 3.5 flash – standard thinking level - free version <br/> 
        -kept having issues: ‘I'm being asked for a lot of images right now, so I can't create that for you. Can you ask again later?’ <br/> 
        -asking for slightly wider image so that I could crop out the water mark <br/> 
    ChatGPT <br/> 
        -doesn’t have a water mark?! <br/> 
        -was sometimes asking me to pick between 2 images to /give feedback on the new version of ‘chatGPT’ <br/> 
        -after 24 images it ran out and i have to wait 24 hours: You’ve reached your image creation limit. Upgrade to ChatGPT Plus or try again tomorrow after 12:39 PM. <br/> 


Using Claude - Sonnet 4.6 <br/> 

Asking AI to figure out if 'moving the map' is possible: <br/> 
    prompt: <br/> 
        Hello! <br/> 
        I am starting a new project and want to make something like a 'map' where the user can move the map around by holding down the left mouse button, similar to how google maps works.  <br/> 
        The 'map' should work similar to a canvas so that i can add images and anchor them to certain points on the map so that they stay where they are. <br/> 
        I also want the 'map' to start at the bottom middle of this canvas.  <br/> 
        Some of the images will be clickable with left mouse button so the 'map movement' cant interfere with any other mouse clicks etc. <br/> 
        Can you tell me  how to make the 'movable map' part of my idea? <br/> 
        Please let me know if you have any questions or need more information. <br/> 
    AI Answer: <br/> 
        ![alt text](ReadMe-Images/AI-working_movable-map.png) <br/> 
    My Response: <br/> 
        I really liked that it gave me a 'working demo'. It looks pretty good and basically works exactly how I want it to <br/> 
        I forgot to specify to make it in HTML so sent a second prompt asking it to show me how to do it in HTML <br/> 
    AI Answer: <br/>
        ![alt text](ReadMe-Images/AI-working_movable-map-HTML-version.png) <br/> 
        Gave me an HTML file which i have added to this project to easily reference here and show what of my code is "AI made": <br/> 
        [text](movable-map.html) <br/> 
    My Opinion: <br/> 
        I am honestly very overwhelmed by this big file so I will spend some time analyzing it and 'taking it apart' to figure out what does what and how i can implement it into this project. 