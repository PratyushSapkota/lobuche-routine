let year = new Date().getUTCFullYear();
let tmonth = new Date().getMonth(); // change
let date = new Date().getDate();
let tday = new Date().getUTCDay(); // change
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spet", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function toMonth(req){
    return months[req];
}

function toDay(req){
    return days[req];
}

let dayShow = document.getElementById("day");
dayShow.innerHTML = toDay(tday);

let fullDate = `${year} ${toMonth(tmonth)} ${date}, ${toDay(tday)}`
document.getElementById("dayRight").innerHTML = fullDate

// LOBUCHE

monday = {
    1: "Computer, S",
    2: "Math, R",
    3: "Adv Programming",
    4: "Adv Programming",
    5: "Computer, S",
    6: "Nepali",
    7: "Math, B",
    8: "Chemistry, D"
}
tuesday = {
    1: "Physics, A",
    2: "Chemistry RDP",
    3: "Nepali",
    4: "English",
    5: "Chemistry, S",
    6: "Computer, S",
    7: "Physics, M",
    8: "Physics, U"
}
wednesday = {
    1: "Math, R",
    2: "Chemitry, RDP",
    3: "Chemistry Practical",
    4: "Chemistry Practical",
    5: "Math, B",
    6: "DSS Talk",
    7: "Nepali",
    8: "English"
}
thursday = {
    1: "Physics, A",
    2: "Chemistry, S",
    3: "Math, B",
    4: "English",
    5: "Computer, S",
    6: "English",
    7: "Nepali",
    8: "Math, R"
}
friday = {
    1: "Basic Programming",
    2: "Basic Programming",
    3: "Physics Practical",
    4: "Physics Practical",
    5: "Nepali",
    6: "English",
    7: "Physics, U",
    8: "Math, B"
}

let td = new Date().getDay();
classes = document.getElementById("routine");

function tomorrow(){
    if(td == 1){
        tuesdayShow()
    }
    if(td == 2){
        wednesdayShow()
    }
    if(td == 3){
        thursdayShow()
    }
    if(td == 4){
        fridayShow()
    }
    if(td == 5){
        saturdayShow()
    }
    if(td == 0){
        mondayShow()
    }
}



function mondayShow() {
    classes.innerHTML = `${monday["1"]} <br> ${monday["2"]} <div id="break">Break</div> ${monday["3"]} <br> ${monday["4"]} <div id="break">Lunch Break</div>  ${monday["5"]} <br> ${monday["6"]} <div id="break">Break</div> ${monday["7"]} <br> ${monday["8"]} `;
    dayShow.innerHTML = "Monday";
};

function tuesdayShow() {
    classes.innerHTML = `${tuesday["1"]} <br> ${tuesday["2"]} <div id="break">Break</div> ${tuesday["3"]} <br> ${tuesday["4"]} <div id="break">Lunch Break</div> ${tuesday["5"]} <br> ${tuesday["6"]} <div id="break">Break</div> ${tuesday["7"]} <br> ${tuesday["8"]} `;
    dayShow.innerHTML = "Tuesday";
     
};

function wednesdayShow() {
    classes.innerHTML = `${wednesday["1"]} <br> ${wednesday["2"]} <div id="break">Break</div> ${wednesday["3"]} <br> ${wednesday["4"]} <div id="break">Lunch Break</div> ${wednesday["5"]} <br> ${wednesday["6"]} <div id="break">Break</div> ${wednesday["7"]} <br> ${wednesday["8"]} `;
    dayShow.innerHTML = "Wednesday";
     
};

function thursdayShow() {
    classes.innerHTML = `${thursday["1"]} <br> ${thursday["2"]} <div id="break">Break</div> ${thursday["3"]} <br> ${thursday["4"]} <div id="break">Lunch Break</div>  ${thursday["5"]} <br> ${thursday["6"]} <div id="break">Break</div> ${thursday["7"]} <br> ${thursday["8"]} `;
    dayShow.innerHTML = "Thursday";
     
};

function fridayShow() {
    classes.innerHTML = `${friday["1"]} <br> ${friday["2"]} <div id="break">Break</div> ${friday["3"]} <br> ${friday["4"]} <div id="break">Lunch Break</div>  ${friday["5"]} <br> ${friday["6"]} <div id="break">Break</div> ${friday["7"]} <br> ${friday["8"]} `;
    dayShow.innerHTML = "Friday";
     
};
function sundayShow() {
    classes.innerHTML = "No Classes today!";
    dayShow.innerHTML = "Sunday";
     
};
function saturdayShow() {
    classes.innerHTML = "No Classes today!";
    dayShow.innerHTML = "Saturday";
     
};


if (td == 1) {
    mondayShow()
}
if (td == 2) {
    tuesdayShow()
}
if (td == 3) {
    wednesdayShow()
}
if (td == 4) {
    thursdayShow()
}
if (td == 5) {
    fridayShow()
}
if(td == 6){
    saturdayShow()
}
if(td == 0){
    sundayShow()
}
