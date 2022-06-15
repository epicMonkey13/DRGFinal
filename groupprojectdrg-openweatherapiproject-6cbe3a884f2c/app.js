// G's form in case R will have a different approach :)
let search = (e) => {
  const keyAPI = `7494051743a90f30bbb0d95ae29d2a21`;
  const loc = document.getElementById('locInput').value;
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}`;

  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const temperature = Math.trunc(data.main.temp) - 273;
      const description = data.weather[0].description;
      const main = data.weather[0].main;
      const wind = data.wind.speed;
      document.querySelector('#wind').innerHTML = `<p> The wind speed is <b>${wind} meter/sec</p>`;

      document.getElementById(
        'results'
      ).innerHTML = `<p> The temperature is <b>${temperature} °C</b><br> Mainly ${main} there, <br>${description} to be specific :)  </p>`;
    })
    .catch((err) => console.log(err));

  e.preventDefault();
};

document.getElementById('adding-button').addEventListener('click', search);

// end of G's form in case R will have a different approach :)

//hamburger
const hamburgerIcon = document.querySelector('#nav-toggle-button');
const navItems = document.querySelector('#nav-items');
hamburgerIcon.addEventListener('click', () => {
  navItems.classList.toggle('active');
});
//end of hamburger

// dark mode
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
// end of dark mode

// magic text
let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

let timeouts = [],
    intervals = [];

const magic = document.querySelector(".magic");

magic.onmouseenter = () => {
  let index = 1;
  
  for(const star of document.getElementsByClassName("magic-star")) {
    timeouts.push(setTimeout(() => {  
      animate(star);
      
      intervals.push(setInterval(() => animate(star), 1000));
    }, index++ * 300));
  };
}

magic.onmouseleave = onMouseLeave = () => {
  for(const t of timeouts) clearTimeout(t);  
  for(const i of intervals) clearInterval(i);
  
  timeouts = [];
  intervals = [];
}
// end of magic text

// card
const card = document.querySelector('#card');
window.addEventListener('mousemove', ({ clientX, clientY }) => {
  const { x, y, width, height } = card.getBoundingClientRect();
  const dx = clientX - (x + 0.5 * width);
  const dy = clientY - (y + 0.5 * height);
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  
  card.style.setProperty('--startDeg', `${angle + 90}deg`);
  
}, false)
//end of card

// destinations list 
const list = document.querySelector('#destinations-list');
const input = document.querySelector('#item');
const button = document.querySelector('.glow-on-hover');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');
  listBtn.style.backgroundColor = 'gray';
  listBtn.style.margin = '1rem';
  listBtn.style.padding = '0.5rem';
  listBtn.style.borderRadius = '0.5rem';
  listItem.style.margin = '0.5rem';
  listText.style.color = 'hotpink';
  listItem.style.listStyleType = 'none'; 

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});
// end of destinations list


//end of button
// polaroid pic
const PARTICLE_COUNT = 5;

const POLAROID = document.querySelector('.polaroid__wrapper')
const PARTICLE_PEN = document.querySelector(".polaroid__particles");

const SHAPES = [
  `<svg viewBox="0 0 448 512" title="square">
  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z" />
</svg>`,
  `<svg viewBox="0 0 512 512" title="circle">
  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
</svg>`,
  `<svg viewBox="0 0 576 512" title="star">
  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
</svg>`,
  `<svg viewBox="0 0 384 512" title="map-marker-alt">
  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
</svg>`
];

const createParticle = () => {
  const NEW_PARTICLE = document.createElement('div')
  const ROTATION = Math.random() * 360;
  const SPIN = Math.random() * 360 - 180;
  const DISTANCE = Math.random();
  const SCALE = Math.random() * 2 + 1;
  const HUE = Math.random() * 360;
  NEW_PARTICLE.className = 'polaroid__particle'
  NEW_PARTICLE.innerHTML = SHAPES[Math.floor(Math.random() * SHAPES.length)]
  NEW_PARTICLE.style.setProperty('--rotation', ROTATION)
  NEW_PARTICLE.style.setProperty('--distance', DISTANCE)
  NEW_PARTICLE.style.setProperty('--scale', SCALE)
  NEW_PARTICLE.style.setProperty('--hue', HUE)
  NEW_PARTICLE.style.setProperty('--spin', SPIN)
  PARTICLE_PEN.appendChild(NEW_PARTICLE)
};

const genParticles = () => {
  PARTICLE_PEN.innerHTML = ''
  let p = 0;
  while (p < PARTICLE_COUNT) {
    createParticle();
    p++;
  }
}

genParticles()

POLAROID.addEventListener('pointerup', () => genParticles());
// end of polaroid pic

//accordion
const accordianHeaders = document.querySelectorAll('.accordion-item-header');
console.log(accordianHeaders);
accordianHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    header.nextElementSibling.classList.toggle('hide-accordion');
  });
});
//end of accordion
  // calendar
  var cal = {
    // (A) PROPERTIES
    // (A1) COMMON CALENDAR
    sMon : false, // Week start on Monday?
    mName : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Month Names
  
    // (A2) CALENDAR DATA
    data : null, // Events for the selected period
    sDay : 0, sMth : 0, sYear : 0, // Current selected day, month, year
  
    // (A3) COMMON HTML ELEMENTS
    hMth : null, hYear : null, // month/year selector
    hForm : null, hfHead : null, hfDate : null, hfTxt : null, hfDel : null, // event form
  
    // (B) INIT CALENDAR
    init : () => {
      // (B1) GET + SET COMMON HTML ELEMENTS
      cal.hMth = document.getElementById("cal-mth");
      cal.hYear = document.getElementById("cal-yr");
      cal.hForm = document.getElementById("cal-event");
      cal.hfHead = document.getElementById("evt-head");
      cal.hfDate = document.getElementById("evt-date");
      cal.hfTxt = document.getElementById("evt-details");
      cal.hfDel = document.getElementById("evt-del");
      document.getElementById("evt-close").onclick = cal.close;
      cal.hfDel.onclick = cal.del;
      cal.hForm.onsubmit = cal.save;
  
      // (B2) DATE NOW
      let now = new Date(),
          nowMth = now.getMonth(),
          nowYear = parseInt(now.getFullYear());
  
      // (B3) APPEND MONTHS SELECTOR
      for (let i=0; i<12; i++) {
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = cal.mName[i];
        if (i==nowMth) { opt.selected = true; }
        cal.hMth.appendChild(opt);
      }
      cal.hMth.onchange = cal.list;
  
      // (B4) APPEND YEARS SELECTOR
      // Set to 10 years range. Change this as you like.
      for (let i=nowYear-10; i<=nowYear+10; i++) {
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        if (i==nowYear) { opt.selected = true; }
        cal.hYear.appendChild(opt);
      }
      cal.hYear.onchange = cal.list;
  
      // (B5) START - DRAW CALENDAR
      cal.list();
    },
  
    // (C) DRAW CALENDAR FOR SELECTED MONTH
    list : () => {
      // (C1) BASIC CALCULATIONS - DAYS IN MONTH, START + END DAY
      // Note - Jan is 0 & Dec is 11
      // Note - Sun is 0 & Sat is 6
      cal.sMth = parseInt(cal.hMth.value); // selected month
      cal.sYear = parseInt(cal.hYear.value); // selected year
      let daysInMth = new Date(cal.sYear, cal.sMth+1, 0).getDate(), // number of days in selected month
          startDay = new Date(cal.sYear, cal.sMth, 1).getDay(), // first day of the month
          endDay = new Date(cal.sYear, cal.sMth, daysInMth).getDay(), // last day of the month
          now = new Date(), // current date
          nowMth = now.getMonth(), // current month
          nowYear = parseInt(now.getFullYear()), // current year
          nowDay = cal.sMth==nowMth && cal.sYear==nowYear ? now.getDate() : null ;
  
      // (C2) LOAD DATA FROM LOCALSTORAGE
      cal.data = localStorage.getItem("cal-" + cal.sMth + "-" + cal.sYear);
      if (cal.data==null) {
        localStorage.setItem("cal-" + cal.sMth + "-" + cal.sYear, "{}");
        cal.data = {};
      } else { cal.data = JSON.parse(cal.data); }
  
      // (C3) DRAWING CALCULATIONS
      // Blank squares before start of month
      let squares = [];
      if (cal.sMon && startDay != 1) {
        let blanks = startDay==0 ? 7 : startDay ;
        for (let i=1; i<blanks; i++) { squares.push("b"); }
      }
      if (!cal.sMon && startDay != 0) {
        for (let i=0; i<startDay; i++) { squares.push("b"); }
      }
  
      // Days of the month
      for (let i=1; i<=daysInMth; i++) { squares.push(i); }
  
      // Blank squares after end of month
      if (cal.sMon && endDay != 0) {
        let blanks = endDay==6 ? 1 : 7-endDay;
        for (let i=0; i<blanks; i++) { squares.push("b"); }
      }
      if (!cal.sMon && endDay != 6) {
        let blanks = endDay==0 ? 6 : 6-endDay;
        for (let i=0; i<blanks; i++) { squares.push("b"); }
      }
  
      // (C4) DRAW HTML CALENDAR
      // Get container
      let container = document.getElementById("cal-container"),
      cTable = document.createElement("table");
      cTable.id = "calendar";
      container.innerHTML = "";
      container.appendChild(cTable);
  
      // First row - Day names
      let cRow = document.createElement("tr"),
          days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
      if (cal.sMon) { days.push(days.shift()); }
      for (let d of days) {
        let cCell = document.createElement("td");
        cCell.innerHTML = d;
        cRow.appendChild(cCell);
      }
      cRow.classList.add("head");
      cTable.appendChild(cRow);
  
      // Days in Month
      let total = squares.length;
      cRow = document.createElement("tr");
      cRow.classList.add("day");
      for (let i=0; i<total; i++) {
        let cCell = document.createElement("td");
        if (squares[i]=="b") { cCell.classList.add("blank"); }
        else {
          if (nowDay==squares[i]) { cCell.classList.add("today"); }
          cCell.innerHTML = `<div class="dd">${squares[i]}</div>`;
          if (cal.data[squares[i]]) {
            cCell.innerHTML += "<div class='evt'>" + cal.data[squares[i]] + "</div>";
          }
          cCell.onclick = () => { cal.show(cCell); };
        }
        cRow.appendChild(cCell);
        if (i!=0 && (i+1)%7==0) {
          cTable.appendChild(cRow);
          cRow = document.createElement("tr");
          cRow.classList.add("day");
        }
      }
  
      // (C5) REMOVE ANY PREVIOUS ADD/EDIT EVENT DOCKET
      cal.close();
    },
  
    // (D) SHOW EDIT EVENT DOCKET FOR SELECTED DAY
    show : (el) => {
      // (D1) FETCH EXISTING DATA
      cal.sDay = el.getElementsByClassName("dd")[0].innerHTML;
      let isEdit = cal.data[cal.sDay] !== undefined ;
  
      // (D2) UPDATE EVENT FORM
      cal.hfTxt.value = isEdit ? cal.data[cal.sDay] : "" ;
      cal.hfHead.innerHTML = isEdit ? "EDIT EVENT" : "ADD EVENT" ;
      cal.hfDate.innerHTML = `${cal.sDay} ${cal.mName[cal.sMth]} ${cal.sYear}`;
      if (isEdit) { cal.hfDel.classList.remove("ninja"); }
      else { cal.hfDel.classList.add("ninja"); }
      cal.hForm.classList.remove("ninja");
    },
  
    // (E) CLOSE EVENT DOCKET
    close : () => {
      cal.hForm.classList.add("ninja");
    },
  
    // (F) SAVE EVENT
    save : () => {
      cal.data[cal.sDay] = cal.hfTxt.value;
      localStorage.setItem(`cal-${cal.sMth}-${cal.sYear}`, JSON.stringify(cal.data));
      cal.list();
      return false;
    },
  
    // (G) DELETE EVENT FOR SELECTED DATE
    del : () => { if (confirm("Delete event?")) {
      delete cal.data[cal.sDay];
      localStorage.setItem(`cal-${cal.sMth}-${cal.sYear}`, JSON.stringify(cal.data));
      cal.list();
    }}
  };
  window.addEventListener("load", cal.init);
  
  
  // https://code-boxx.com/simple-pure-javascript-calendar-events/#sec-download thanks to W.S Toh
  // end of calendar

  // promise
  const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function(){ myResolve("Contact the team"); }, 5000);
  });
  
  myPromise.then(function(value) {
    document.getElementById("promise").innerHTML = value;
  });
  // end of promise

  //scroll to top btn
  mybutton = document.getElementById("toTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

  //end of scroll to top btn

  // cookies example
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
  // end of cookies example