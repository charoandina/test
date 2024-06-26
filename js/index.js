/* CHANGING TITLE */

document.addEventListener("DOMContentLoaded", function() {
    const titleElement = document.getElementById("title");
    const texts = ["Discover your future", "Transform your life", "Find your happiness"];
    let index = 0;

    function changeText() {
        titleElement.classList.remove("fade-in");
        titleElement.classList.add("fade-out");

        setTimeout(function() {
            index = (index + 1) % texts.length;
            titleElement.textContent = texts[index];
            titleElement.classList.remove("fade-out");
            titleElement.classList.add("fade-in");
        }, 900); 
    }

    titleElement.classList.add("fade-in");
    setInterval(changeText, 2000);
});

/* QUESTIONNAIRE */

function startQuiz(){
    document.getElementById('main-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('gender-question').classList.remove('hidden');
    document.getElementById('gender-question').classList.add("fade-in");
}

// SELECT GENDER

let selectedGender = ""; 

function selectGender(gender) {
    selectedGender = gender; 
    document.getElementById('gender-question').classList.add('hidden');
    document.getElementById('relationship-question').classList.remove('hidden');
    document.getElementById('relationship-question').classList.add("fade-in");
    showResult();
}

function showResult() {
    document.getElementById('gender').innerText = `${selectedGender}`;
}
// END OF GENDER LOGIC

//QUESTIONNAIRE FLOW

function thirdQuestion(){
    document.getElementById('relationship-question').classList.add('hidden');
    document.getElementById('hand-question').classList.remove('hidden');
    document.getElementById('hand-question').classList.add("fade-in");
}

function fourthQuestion(){
    document.getElementById('hand-question').classList.add('hidden');
    document.getElementById('goal-question').classList.remove('hidden');
    document.getElementById('goal-question').classList.add("fade-in");
}

function firstAchievement(){
    document.getElementById('goal-question').classList.add('hidden');
    document.getElementById('first-achievement').classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('first-achievement').classList.add("fade-in");
}

function fifthQuestion(){
    document.getElementById('first-achievement').classList.add('hidden');
    document.getElementById('quiz-container2').classList.remove('hidden');
    document.getElementById('birth-question').classList.remove('hidden');
    document.getElementById('quiz-container2').classList.add("fade-in");
}

/* SELECT BIRTHDAY*/

// MONTH
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const monthSelect = document.getElementById('month-select');

months.forEach(month => {
    const option = document.createElement('option');
    option.value = month; 
    option.text = month; 
    monthSelect.appendChild(option); 
});

//DAY 

const daySelect = document.getElementById('day-select');

for (let day = 1; day <= 31; day++) {
    const option = document.createElement('option');
    option.value = day;
    option.text = day; 
    daySelect.appendChild(option); 
}

//YEAR 

const yearSelect = document.getElementById('year-select');

for (let year = 2024; year >= 1920; year--) {
    const option = document.createElement('option');
    option.value = year; 
    option.text = year; 
    yearSelect.appendChild(option); 
}

// VALIDATE FORM AND SHOW ZODIAC SIGN
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    var month = document.getElementById('month-select').value;
    var day = document.getElementById('day-select').value;
    var year = document.getElementById('year-select').value;
    
    if (!month || !day || !year) {
        alert('Please select a month, day, and year.');
        return false; 
    }

    showZodiacSign(month, day);

    // Show the next content
    sixthQuestion(); 
    return false; // Prevent form submission
}

function showZodiacSign(month, day) {
    const zodiacDates = {
        'January': [20, 'Capricorn', 'Aquarius'],
        'February': [19, 'Aquarius', 'Pisces'],
        'March': [21, 'Pisces', 'Aries'],
        'April': [20, 'Aries', 'Taurus'],
        'May': [21, 'Taurus', 'Gemini'],
        'June': [21, 'Gemini', 'Cancer'],
        'July': [23, 'Cancer', 'Leo'],
        'August': [23, 'Leo', 'Virgo'],
        'September': [23, 'Virgo', 'Libra'],
        'October': [23, 'Libra', 'Scorpio'],
        'November': [22, 'Scorpio', 'Sagittarius'],
        'December': [22, 'Sagittarius', 'Capricorn']
    };

    const dayInt = parseInt(day);
    const [changeDay, sign1, sign2] = zodiacDates[month];
    const zodiacSign = dayInt < changeDay ? sign1 : sign2;

    document.getElementById('zodiac-sign').innerText = `${zodiacSign}`;
    document.getElementById('zodiac-sign2').innerText =`${zodiacSign}`;
}

/* QUIZ FLOW*/
  
function sixthQuestion(){
    document.getElementById('birth-question').classList.add('hidden');
    document.getElementById('palm-question').classList.remove('hidden');
    document.getElementById('palm-question').classList.add("fade-in");
}

function secondAchievement(){
    document.getElementById('palm-question').classList.add('hidden');
    document.getElementById('quiz-container2').classList.add('hidden');
    document.getElementById('second-achievement').classList.remove('hidden');
    document.getElementById('second-achievement').classList.add("fade-in");
}

function seventhQuestion(){
    document.getElementById('quiz-container3').classList.remove('hidden');
    document.getElementById('second-achievement').classList.add('hidden');
    document.getElementById('fingers-question').classList.remove('hidden');
    document.getElementById('fingers-question').classList.add("fade-in");
}

function eighthQuestion(){
    document.getElementById('fingers-question').classList.add('hidden');
    document.getElementById('leftpalm-question').classList.remove('hidden');
    document.getElementById('leftpalm-question').classList.add("fade-in");
}

function ninthQuestion(){
    document.getElementById('leftpalm-question').classList.add('hidden');
    document.getElementById('gainedpalm-question').classList.remove('hidden');
    document.getElementById('gainedpalm-question').classList.add("fade-in");
}

function tenthQuestion(){
    document.getElementById('gainedpalm-question').classList.add('hidden');
    document.getElementById('thinkgoals-question').classList.remove('hidden');
    document.getElementById('thinkgoals-question').classList.add("fade-in");
}

/* THIRD ACHIEVEMENT*/

function thirdAchievement(){
    document.getElementById('thinkgoals-question').classList.add('hidden');
    document.getElementById('quiz-container3').classList.add('hidden');
    document.getElementById('third-achievement').classList.remove('hidden');
    document.getElementById('third-achievement').classList.add("fade-in");

        // Generate and display random number
        let randomNumber = generateRandomNumber(50000, 90000);
        var formattedNumber = formatNumberWithCommas(randomNumber);
        document.getElementById("random-number").textContent = formattedNumber;
    
        // Show achievement element
        document.getElementById('third-achievement').classList.remove('hidden');

        //Start loading bar
        loadingBar()
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*CIRCULAR LOADING BAR */

function loadingBar(){
let circularProgress = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");

let progressStartValue = 0;
let progressEndValue = 100;
let speed = 20;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.innerText = `${progressStartValue}%`;
    circularProgress.style.background= `conic-gradient(#C3426F ${progressStartValue * 3.6}deg, #e3e3e3 0deg)`;
  
    if (progressStartValue == progressEndValue) {
        clearInterval(progress)
        document.getElementById('last-question-button').classList.remove('hidden')
        document.getElementById('last-question-button').classList.add("fade-in");
    }
}, speed);
}

// LAST QUESTION 

function lastQuestion(){
    document.getElementById('quiz-container4').classList.remove('hidden');
    document.getElementById('third-achievement').classList.add('hidden');
    document.getElementById('line-question').classList.remove('hidden');
    document.getElementById('line-question').classList.add("fade-in");
}

function scanIntro(){
    document.getElementById('quiz-container4').classList.add('hidden');
    document.getElementById('scan-container').classList.remove('hidden');
    document.getElementById('scan-intro').classList.remove('hidden');
    document.getElementById('scan-intro').classList.add("fade-in");
}

function showInstructions(){
    document.getElementById('scan-intro').classList.add('hidden');
    document.getElementById('instructions-scan').classList.remove('hidden');
    document.getElementById('instructions-scan').classList.add("fade-in");
}

// TAKE PHOTO

function takePhoto() {
    document.getElementById('instructions-scan').classList.add('hidden');
    document.getElementById('take-photo').classList.remove('hidden');
    init();
  }

'use strict';

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById("snap");
const errorMsgElement = document.querySelector('span#errorMsg');
const buttonsAfterShoot = document.getElementById('buttonsAfterShoot');
const context = canvas.getContext('2d');
let currentStream;
let useFrontCamera = true;
const rotateButton = document.getElementById('rotate-button');

const constraints = {
    video: {
        width: 1280, height: 720, facingMode: 'user'
    }
};

async function init() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    } catch (e) {
        errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
    }
}

function handleSuccess(stream) {
    currentStream = stream;
    video.srcObject = stream;
}

function redoPhoto() {
    context.drawImage(video, 0, 0, 600, 440);
    video.classList.remove('hidden');
    snap.classList.remove('hidden');
    buttonsAfterShoot.classList.add('hidden');
    canvas.classList.add('hidden');
    rotateButton.classList.remove('hidden')
    init();
}

function rotateCamera() {
    if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
    }
    useFrontCamera = !useFrontCamera;
    constraints.video.facingMode = useFrontCamera ? 'user' : 'environment';
    init();
}

snap.addEventListener("click", function() {
    context.drawImage(video, 0, 0, 600, 440);
    video.classList.add('hidden');
    snap.classList.add('hidden');
    buttonsAfterShoot.classList.remove('hidden');
    canvas.classList.remove('hidden');
    rotateButton.classList.add('hidden');
    stopCamera();

});

function stopCamera() {
    if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
    }
}

// START SCANNING

const scanningBar = document.getElementById('scanning-bar');

function startScanning() {
    buttonsAfterShoot.classList.add('hidden');
    scanningBar.classList.remove('hidden');
    scanningBarMoves();
    changingTitle()
}  

function scanningBarMoves(){
    const scanningBarHeight = 8; 
    const scanningBarTop = 0; 
    const scanningBarWidth = canvas.offsetWidth; 

    scanningBar.style.top = `${scanningBarTop}px`;
    scanningBar.style.width = `${scanningBarWidth}px`;
}

function changingTitle(){
    const title = document.getElementById('photo-title')
    title.classList.remove('hidden')
    setInterval(changeText, 2000);
}
//CHANGING TITLE


const textTitle = ["Scanning your palm", "Little Finger", "Ring Finger", "Middle Finger", "Index Finger", "Thumb", "Scanning your palm.."];
let currentIndex = 0;

function changeText() {
    const photoTitle = document.getElementById("photo-title");
    photoTitle.textContent = textTitle[currentIndex];
    currentIndex = (currentIndex + 1) % textTitle.length;
    if (currentIndex == 6) {
        document.getElementById('take-photo').classList.add('hidden');
        document.getElementById('scanning-palm').classList.remove('hidden');
        showItem();
    }
}

//Scanning Palm divs changing style
const checklistItems = document.querySelectorAll('.checklist-item');
const scanningPalmInfo = document.getElementById('scanningpalm-info');
const palminfo2 = document.getElementById('palminfo2');
const resultPriceContainer = document.getElementById('resultprice-container');
let index = 0;
let stopShowingItems = false;

function showItem() {
    if (index < checklistItems.length && !stopShowingItems) {
        checklistItems[index].classList.add('active');
        index++;
        setTimeout(showItem, 2000);
    } else {
        setTimeout(() => {
            if (!stopShowingItems && resultPriceContainer.classList.contains('hidden')) {
                scanningPalmInfo.classList.add('hidden');
                palminfo2.classList.remove('hidden');
                palminfo2.classList.add("fade-in");
            }
        }, 2000);
    }
}

//RANDOM Nº FOR SCANNING
let randomNumber = Math.floor(Math.random() * (30000 - 20000 + 1)) + 20000;
document.getElementById("random-reading").textContent = randomNumber;

// Show price result
function seeResult(){
    palminfo2.classList.add('hidden');
    resultPriceContainer.classList.remove('hidden');
    stopShowingItems = true; // Stop the showItem function from making any more changes
}



// SELECT PRICE
document.addEventListener('DOMContentLoaded', () => {
    const prices = document.querySelectorAll('.price');
    
    prices.forEach(price => {
        price.addEventListener('click', () => {
            // Remove 'selected' class from all prices
            prices.forEach(p => p.classList.remove('selected'));
            // Add 'selected' class to the clicked price
            price.classList.add('selected');
        });
    });
});


// See last result
function seePriceResult() {
    const selectedPrice = document.querySelector('.price.selected');
    
    if (!selectedPrice) {
        alert('Please select a price to continue.');
        return;
    }

    document.getElementById('resultprice-container').classList.add('hidden');
    document.getElementById('last-result').classList.remove('hidden');
    document.getElementById('last-result').classList.add("fade-in");
    loadingBar2();
}

/*CIRCULAR LOADING BAR */

function loadingBar2(){
    let circularProgress = document.querySelector(".circular-progress2");
    let progressValue = document.querySelector(".progress-value2");
    
    let progressStartValue = 0;
    let progressEndValue = 100;
    let speed = 20;
    
    let progress = setInterval(() => {
        progressStartValue++;
    
        progressValue.innerText = `${progressStartValue}%`;
        circularProgress.style.background= `conic-gradient(#C3426F ${progressStartValue * 3.6}deg, #e3e3e3 0deg)`;
      
        if (progressStartValue == progressEndValue) {
            clearInterval(progress)
            document.getElementById('see-results-button').classList.remove('hidden')
            document.getElementById('see-results-button').classList.add("fade-in");
        }
    }, speed);
}
    

/* LAST RESULT */

function seeLastResult(){
    document.getElementById('last-result').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    document.getElementById('result-container').classList.add("fade-in");
    let interval = setInterval(countdown, 1000);
}

// TIMER
let initialTime = 10 * 60 ;
let leftTime = initialTime;

function countdown() {
    let minutes = Math.floor(leftTime / 60);
    let seconds = leftTime % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('timer').innerHTML = minutes + ':' + seconds;


    leftTime--;
    if (leftTime < 0) {
        clearInterval(interval);
    }
}

//POPUP
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');

    function showPopUp(){
        overlay.classList.remove('hidden');
        popup.classList.remove('hidden');
    }

    // Asignar evento de clic para ocultar el overlay y popup
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.classList.add('hidden');
            popup.classList.add('hidden');
        }
    });

    // Asegurarse de que showPopUp esté disponible globalmente
    window.showPopUp = showPopUp;
});