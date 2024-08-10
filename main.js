const today=new Date();
console.log(today);
console.log("year",today.getFullYear());
console.log("month",today.getMonth());
console.log("date",today.getDate());
console.log("day of the week",today.getDay());

console.log(new Date(2022,7,15).getDay())

console.log(new Date().toString())
console.log(new Date().toDateString())
console.log(new Date().toLocaleDateString())

const newDate =new Date();
newDate.setDate(17);
newDate.setMonth(5);
newDate.setFullYear(2025);
console.log(newDate);

// timepart

console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getSeconds())

newDate.setHours(13)//1pm
newDate.setMinutes(13)//13 min
newDate.setSeconds(13)//13 sec

console.log(newDate)
console.log(newDate.toTimeString())
console.log(newDate.toLocaleTimeString())

// getTimefunction
// return the number of 
console.log(today.getTime())//number of milli seconds
console.log(new Date(1586111400000))