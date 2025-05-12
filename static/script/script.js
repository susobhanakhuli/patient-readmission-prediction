
var images = ["rice","maize","chickpea","kidneybeans","pigeonpeas","mothbeans","mungbean","blackgram","lentil","pomegranate","banana","mango","grapes","watermelon","muskmelon","apple","orange","papaya","coconut","cotton","jute","coffee"];
var modal = document.getElementById("myModal");

var submitBtn = document.getElementById("submitBtn");

var resultImage = document.getElementById("resultImage");
var cropName = document.getElementById("cropName");

var formContainer = document.getElementById("formContainer");
var menu = document.getElementById('start');
var contactMe = document.getElementById('contactMe');
var mainScreen = document.getElementById('mainScreen');

document.getElementById("currentYear").innerText = new Date().getFullYear();

var span = document.getElementsByClassName("close")[0];

function myFunction() {
    event.preventDefault();
    formContainer.style.display = "none";
    res_modal.style.display = "block";
    var randomIndex = 5;

    // randomIndex = pred

    console.log(pred)

    // Displaying random images
    var resultImage = document.getElementById("resultImage");
    resultImage.src = `../Images/${images[randomIndex]}.png`;
    cropName.textContent = images[randomIndex];
    confettiShooter();
}

span.onclick = function() {
    modal.style.display = "none";
    formContainer.style.display = "block";
}
// When page loads, it will trigger the circle menu
window.onload = function() {
    var menuButton = document.getElementById("open-menu");
    menuButton.click();
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        formContainer.style.display = "block";
    }
}

function Gohome(){
    event.preventDefault();

    menu.style.display = 'none';
    // Show the container div
    mainScreen.style.display = 'block';

}
function GoPred(){
    event.preventDefault();

    menu.style.display = 'none';
    // Show the container div
    model.style.display = 'block';
}

// document.addEventListener('DOMContentLoaded', function() {
//     // Get reference to the "Bar Chart" button
//     var barChartBtn = document.getElementById('bar-chart-btn');
//     var backToMenuBtn = document.getElementById('homeBtn');
//     var contactmeBtn = document.getElementById('address-chart-btn');


//     // Add click event listener to the button
//     barChartBtn.addEventListener('click', function(event) {
//         // Prevent default link behavior
//         event.preventDefault();

//         // Hide the menu

//         menu.style.display = 'none';

//         // Show the container div
//         formContainer.style.display = 'block';
//     });
//     backToMenuBtn.addEventListener('click', function(event) {
//         // Prevent default button behavior
//         event.preventDefault();

//         // Hide the container div
//         formContainer.style.display = 'none';



//         menu.style.display = 'block';
//     });

//     contactmeBtn.addEventListener('click', function(event) {
//         // Prevent default link behavior
//         event.preventDefault();

//         // Hide the menu

//         menu.style.display = 'none';

//         // Show the container div
//         contactMe.style.display = 'block';
//     });

// });


function showMenu() {
    menu.style.display = "block";
    mainScreen.style.display = 'none';
    contactMe.style.display = "none";
}





