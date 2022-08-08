/*---------------------- NOURHAN HASAN ---------------------*/
const sending_info= 
[
    "late", "not-late", "late", "late", "late",
    "not-late","not-late","not-late","not-late", "not-late",
    "late","late", "late","late", "not-late", 
    "not-late", "not-late","late", "late","not-late"];
const workdays=
[
    "offday", "workday", "workday", "workday", "workday",
    "offday", "offday", "offday", "workday","workday",
    "workday", "workday", "workday", "offday", "offday",
    "workday", "workday", "workday", "workday", "offday"];

 let random_messages=
 [
    "I will be late today, Sorry", 
    "I have to take my kids to school, I will be late", 
    "I have a doctor appointment this morning, I will be late", 
    "My car broke down, I will be late!"
];


var btn=document.getElementById("submit");
// create a boutton click event by calling function
addEventListener("click",submit);

function submit(){
    // call the element with the id days and then call all its elements
    var messages= document.getElementById("days").getElementsByTagName("li");
    
    for(var i =1;i<= workdays.length; i++){ 
        // the program will only send a message on te days that Milad is late 
        if(sending_info[i-1]=="late" && workdays[i-1]=="workday"){
            // insert of random messages
            messages[i-1].innerHTML = `DAY ${i}: ${random_messages[Math.floor(Math.random()*4)]}`;
        }
        else{
            messages[i-1].innerHTML = `DAY ${i}:`;
        }
    }
}