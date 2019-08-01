// DOM elements

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');
    date = document.getElementById("date");

// Options
const showAmPm = true;

// Show time

function showTime() {
    //let today = new Date(2019, 06, 10, 06, 33, 30), // Test the time
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // Output Time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zero

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Show todays date

let today = new Date ();
const option = {weekday : "long", day : "numeric" , month : "short" , year : "numeric"};

date.innerHTML = today.toLocaleDateString("en-US", option);

// Set Background and Greeting

function setBgGr (){
    //let today = new Date(2019, 05, 10, 06, 33, 30), // Test the time
    let today = new Date(),
    hour = today.getHours();

    if(hour < 5){
        // Morning One
        document.body.style.backgroundImage = "url('img/Night_two.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.color = 'white'
        greeting.textContent = 'Good Morning, ';
    } else if (hour < 10){
        // Morning One
        document.body.style.backgroundImage = "url('img/Morning_one.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        greeting.textContent = 'Good Morning, ';;
    }else if (hour < 12){
        // Morning Two
        document.body.style.backgroundImage = "url('img/Morning_two.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        greeting.textContent = 'Good Morning, ';
    } else if (hour < 13){
        // Afternoon One
        document.body.style.backgroundImage = "url('img/Midday_one.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        greeting.textContent = 'Good Day, ';
    } else if (hour < 15){
        // Afternoon One
        document.body.style.backgroundImage = "url('img/Midday_two.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.color = 'white'
        greeting.textContent = 'Good Day, ';
    } else if (hour < 16){
        // Fill One
        document.body.style.backgroundImage = "url('img/Fill_two.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.color = 'white';
        greeting.textContent = 'Good Day, ';
    } else if (hour < 17){
        // Fill Two
        document.body.style.backgroundImage = "url('img/Fill_three.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.color = 'white'
        greeting.textContent = 'Good Day, ';
    } else if (hour < 18) {
        // Fill Three
        document.body.style.backgroundImage = "url('img/Fill_one.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.color = 'white'
        greeting.textContent = 'Good Afternoon, ';
    } else if (hour < 19){
        // Fill Four
        document.body.style.backgroundImage = "url('img/Fill_four.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.color = 'white'
        greeting.textContent = 'Good Afternoon, ';
    } else if (hour < 20){
        // Evening one
        document.body.style.backgroundImage = "url('img/Evening_one.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.color = 'white'
        greeting.textContent = 'Good Evening, ';
    } else if (hour < 21){
        // Evening two
        document.body.style.backgroundImage = "url('img/Evening_two.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.color = 'white'
        greeting.textContent = 'Good Evening, ';
    } else if (hour < 23){
        // Night one
        document.body.style.backgroundImage = "url('img/Night_one.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.color = 'white'
        greeting.textContent = 'It is a bit late, ';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('img/Night_two.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        greeting.textContent = 'Good night, ';
        document.body.style.color = 'white';
    }
}

// Get Name

function getName() {
    if (localStorage.getItem('name') === null) {
      name.textContent = '[Enter Name]';
    } else {
      name.textContent = localStorage.getItem('name');
    }
  }
  
  // Set Name

  function setName(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
      }
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
  }

// Get Focus

function getFocus() {
    if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter Focus]';
    } else {
      focus.textContent = localStorage.getItem('focus');
    }
  }
  
  // Set Focus

  function setFocus(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Run
showTime();
setBgGr();
getName();
getFocus();