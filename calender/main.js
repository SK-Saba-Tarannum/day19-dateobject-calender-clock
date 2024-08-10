document.addEventListener("DOMContentLoaded",function(){

const months=["January","February","March","April","May",
    "June","July","August","September","October",
    "November","December"]

const totalDaysOfTheWeek=6; //number starts from 0-6
const today=new Date();

// today.setDate(1);
today.setFullYear(2025,3,4)

const currentMonthIndex=today.getMonth();//0-11
document.getElementById("Current-month").textContent =months[currentMonthIndex];
document.getElementById("Full-date").textContent =today.toDateString();

//day on first date of month
const firstDayOfTheMonth =new Date(today.getFullYear(),today.getMonth(),1).getDay();
console.log(firstDayOfTheMonth);

//last day on last date of month
const lastDay=new Date(today.getFullYear(),today.getMonth() +1, 0).getDay();
console.log(lastDay);


//number of dates in current month
const numberOFDateInMonth =new Date(today.getFullYear(),today.getMonth() +1, 0).getDate();
console.log(numberOFDateInMonth);

const daysElement =document.querySelector(".days");

let daysHtml="";
//loop for printing empty dates

for (let index = 0; index < firstDayOfTheMonth; index++) {
            daysHtml += "<p class=\"date\">"+"</p>"
        }
    
daysElement.innerHTML=daysHtml;

// loop for printing the dates
for (let date =1;date <= numberOFDateInMonth;date++){
    if(today.getDate() === date){
        daysHtml +="<p class=\"date today\">"+ date +"</p>"
        }else{
         daysHtml +="<p class=\"date\">" + date +"</p>"
    }
}
console.log(daysHtml);
    

if(lastDay<totalDaysOfTheWeek){
    console.log(lastDay)
    for(let index =lastDay;index<totalDaysOfTheWeek;index++){
        daysHtml+="<p class=\"date\">" + "</p>"
}
}
console.log(daysHtml);
daysElement.innerHTML=daysHtml;
})

// document.addEventListener("DOMContentLoaded", function() {
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const totalDaysOfTheWeek = 7; // Total days in a week

//     const today = new Date();
//     today.setDate(16); // Hardcoded date for example

//     const currentMonthIndex = today.getMonth();
//     document.getElementById("current-month").textContent = months[currentMonthIndex];
//     document.getElementById("full-date").textContent = today.toDateString();

//     const firstDayOfTheMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
//     const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDay();
//     const numberOfDatesInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

//     let daysHtml = "";
//     const daysElement = document.querySelector(".days");

//     // Add empty days for the days before the 1st of the month
//     for (let index = 0; index < firstDayOfTheMonth; index++) {
//         daysHtml += "<p class=\"date\"></p>";
//     }

//     // Add days of the month
//     for (let date = 1; date <= numberOfDatesInMonth; date++) {
//         if (today.getDate() === date) {
//             daysHtml += `<p class="date today">${date}</p>`;
//         } else {
//             daysHtml += `<p class="date">${date}</p>`;
//         }
//     }

//     // Add empty days for the days after the last day of the month
//     if (lastDay < totalDaysOfTheWeek - 1) {
//         for (let index = lastDay; index < totalDaysOfTheWeek - 1; index++) {
//             daysHtml += "<p class=\"date\"></p>";
//         }
//     }

//     daysElement.innerHTML = daysHtml;
// });