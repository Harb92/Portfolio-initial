//check if there is local storage color option
let mainColors= localStorage.getItem("color-option")

if(mainColors !== null){

    document.documentElement.style.setProperty('--main-color',mainColors);

 //remove for active class from all colors list item

 document.querySelectorAll(".colors-list li").forEach(element => {
    
    element.classList.remove("active");

    //add active class on element with data ccolor = local storage item
if(element.dataset.color === mainColors){

    //add active class
    element.classList.add("active");
}

});

}

//random background option
let backgroundOption = true;

//variable to control the interval
let backgroundInterval;

//check if theres  local storage random background item
let backgroundLocalItem = localStorage.getItem("background-option");
//check if random background localstorage is not empty 
if(backgroundLocalItem !== null){


    if(backgroundLocalItem === 'true'){
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }
    //remove active class from all spans
    document.querySelectorAll(".random-backgrounds span").forEach(element => {
        element.classList.remove("active"); 
    });

    if(backgroundLocalItem === 'true'){
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    } else {
        
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }
}
 



// toggle spin class on icon 

document.querySelector(".toggle-settings .fa").onclick = function(){

// toggle class fa spin for rotation on self
this.classList.toggle("fa-spin");

// toggle class open on main setting box
document.querySelector(".settings-box").classList.toggle("open");
};



// switch colors

const colorsLi = document.querySelectorAll(".colors-list li");
//loop on all list item
colorsLi.forEach(li => {

        // click on every list items
   li.addEventListener("click", (e) => {
       
    
    console.log(e.target.dataset.color);

    //set color on root
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
//set color on local storage
     
    localStorage.setItem("color-option",e.target.dataset.color)

    //remove active class from all childrens

    e.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    //add active class on target

    e.target.classList.add("active");



 
   });

});



// switch background random option

const randomBackEl = document.querySelectorAll(".random-backgrounds span");
//loop on all list item
randomBackEl.forEach(span => {

        // click on every span
     span.addEventListener("click", (e) => {
       

    //remove active class from all spans

    e.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    //add active class onspans

    e.target.classList.add("active");

    if (e.target.dataset.background === 'yes') {

        backgroundOption = true ;
        randomizeImgs();

        localStorage.setItem("background-option", true);
    }else{
        
            backgroundOption =false;     
             clearInterval(backgroundInterval);

             localStorage.setItem("background-option", false);
            }
 
   });

});

//select landing page element  
let landingPage = document.querySelector(".landing-page");
//get arrary
let imgsArray = ["1stimg.jpg", "2ndimg.jpg", "3rdimg.jpg", "4rth.jpg","5thimg.png"];






//function to randomize imgs
function randomizeImgs(){
    if(backgroundOption === true ){
      backgroundInterval =  setInterval(() =>{
            
            let randomNumber = Math.floor(Math.random() * imgsArray.length);

            landingPage.style.backgroundImage = 'url("imgs/' +imgsArray[randomNumber] + '")';
        }, 1000);
    }
}


randomizeImgs() 







// //-select landing page element 
// function setBackground(urls,targetId){
//     setInterval(function(){
//         //get random number
//         var index = Math.floor(Math.random()* (urls.length));
//         target = document.getElementById(targetId);
//         //change background image url
//         target.style.backgroundImage = "url(" +urls[index]+")";
//     },1000);
// }
// //-get array of imgs
// var urls=["../imgs/1stimg.jpg", "../imgs/2ndimg.jpg", "../imgs/3rdimg.jpg","../imgs/4rth.jpg","../imgs/5thimg.png"];
// var target = "foo";

// setBackground(urls, target);




 // select skills selector

     let ourSkills = document.querySelector(".skills");

    window.onscroll = function () {
      
    /// skills offset top

    let skillsOffsetTop = ourSkills.offsetTop;

    /// skills outer height 
    let skillsOuterHeight = ourSkills.offsetHeight;

//window height
    let windowHeight = this.innerHeight;

//window scroll top 

    let windowScrollTop= this.pageYOffset;


    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        })

    }


 };

///create popup with the image
let ourGallery = document.querySelectorAll(".gallery img")  ;

ourGallery.forEach(img =>{
    img.addEventListener('click', (e) =>{

        //create overlay Element
        let overlay = document.createElement("div");

        //add class to overlay

        overlay.className = 'popup-overlay';

        //append overlay to the body
        document.body.appendChild(overlay);
        /// create  the popup
        let popupBox = document.createElement("div");
        //add class popup box 

        popupBox.className='popup-box';


        if(img.alt !== null){

            //create heading 

            let imgHeading = document.createElement("h3");
            //create text for heading

            let imgText = document.createTextNode(img.alt);

// append the text to the heading

            imgHeading.appendChild(imgText);

            //append the heading to the popup box

          popupBox.appendChild(imgHeading)

        }


        //create the image
      
        let popupImage = document.createElement("img");

        //set image

        popupImage.src =img.src;
        
        //add image to popup box

        
        popupBox.appendChild(popupImage);
        
        //appen the popup box to body
        
        document.body.appendChild(popupBox);


        //create the close span

        let closeBtn = document.createElement("span");

        //create the close button text

        let closeBtnText = document.createTextNode("X");

        //append text to close button
        closeBtn.appendChild(closeBtnText);

        //add class to close button

        closeBtn.className = 'close-btn';

        //add clcose btn to the popup box

        popupBox.appendChild(closeBtn);


    });
});



// close popup

document.addEventListener("click", function(e){

    if(e.target.className == 'close-btn'){

        //remove the current popup

        e.target.parentNode.remove();

        //remove overlay
        document.querySelector(".popup-overlay").remove();
    }
})









