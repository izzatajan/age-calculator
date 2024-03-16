let resultBtn = document.getElementById("resultBtn");

let resWeek = document.getElementById("resWeek");
let resDay = document.getElementById("resDay");
let resHour = document.getElementById("resHour");
let resMinute = document.getElementById("resMinute");
let resSecond = document.getElementById("resSecond");

let andResYear = document.getElementById("andResYear");
let andResMonth = document.getElementById("andResMonth");
let andResMonthDay = document.getElementById("andResMonthDay");
let andResHour = document.getElementById("andResHour");
let andResMinute = document.getElementById("andResMinute");
let andResSecond = document.getElementById("andResSecond");

let winter = document.getElementById("winter");
let spring = document.getElementById("spring");
let summer = document.getElementById("summer");
let autumn = document.getElementById("autumn");

let bornSeasonIndex;
let currentSeasonIndex;
let addWinter = 0;
let addSpring = 0;
let addSummer = 0;
let addAutumn = 0;
let currentBtn = "submit";

document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        resultBtn.onclick()
    }
});

resultBtn.onclick = () =>{

    let nameOfUser = document.getElementById("nameOfUser");
    let yearFch = document.getElementById("inputYear");
    let monthFch = document.getElementById("inputMonth");
    let dayFch = document.getElementById("inputMonthDay");
    let hourFch = document.getElementById("inputHour");

    let monthIs;
    let enteredYear = document.getElementById("inputYear")
    let enteredMonth = document.getElementById("inputMonth");
    let enteredMonthDay = document.getElementById("inputMonthDay");

    if (enteredMonth.value == 0 || enteredMonth.value == 2 || enteredMonth.value == 4 || enteredMonth.value == 6 || enteredMonth.value == 7 || enteredMonth.value == 9 || enteredMonth.value == 11) {
        monthIs = true;
    } else if(enteredMonth.value == 3 || enteredMonth.value == 5 || enteredMonth.value == 8 || enteredMonth.value == 10){
        if (enteredMonthDay.value <= 31) {
            monthIs = true;
        } else{
            monthIs = false;
        }
    } else if(enteredMonth.value == 1){
        if ((enteredYear.value % 4 === 0 && enteredYear.value % 100 !== 0) || (enteredYear.value % 400 === 0)) {
            if (enteredMonthDay.value <= 29) {
                monthIs = true;
            } else{
                monthIs = false;
            }
        } else{
            if (enteredMonthDay.value <= 28) {
                monthIs = true;
            } else{
                monthIs = false;
            };
        };
    };

    if (nameOfUser.value !== "" && yearFch.value !== "" && monthFch.value !== "" && dayFch.value !=="" && hourFch.value !== "" && monthIs) {

        swrs();

    if (currentBtn == "refresh") {

            const myInterval = setInterval(() => {
                countAge();
                if (currentBtn == "submit") {
                    restart();
                    clearInterval(myInterval)
                };
            }, 1000);

    } else{
        console.log("enter true data");
    };

};

function countAge() {

    let resOneTitle = document.querySelector(".resOneTitle");
    let resTwoTitle = document.querySelector(".resTwoTitle");
    let resThreeTitle = document.getElementById("resThreeTitle");
    
    resOneTitle.innerText = `${nameOfUser.value} is living for`;
    resTwoTitle.innerText = `${nameOfUser.value} is living for`;
    resThreeTitle.innerText = `${nameOfUser.value} has lived`;

    const currentV = new Date(); //like ("2023-10-24T18:10:17")
    
    let currentYear = currentV.getFullYear();
    let currentMonth = currentV.getMonth(); //january is 0
    let currentMonthDay = currentV.getDate();
    let currentHour = currentV.getHours();

    let inputYear = document.getElementById("inputYear");
    let inputMonth = document.getElementById("inputMonth");
    let inputMonthDay = document.getElementById("inputMonthDay");
    let inputHour = document.getElementById("inputHour");

    let inputYearVal = inputYear.value;
    let inputMonthIndexVal = inputMonth.value;
    let inputMonthDayVal = inputMonthDay.value;
    let inputHourVal = inputHour.value;

    let inputInfo = new Date(inputYearVal, inputMonthIndexVal, inputMonthDayVal, inputHourVal, 0, 0);

    let from70ToNowSec = currentV.getTime();
    let from70ToInpSec = inputInfo.getTime();
    let fromInpToNowSec = (from70ToNowSec-from70ToInpSec)/1000;

    let howManyMonthDays;

    if (inputMonthIndexVal == 0 || inputMonthIndexVal == 2 || inputMonthIndexVal == 4 || inputMonthIndexVal == 6 || inputMonthIndexVal == 7 || inputMonthIndexVal == 9 || inputMonthIndexVal == 11) {
        howManyMonthDays = 31;
    } else if(inputMonthIndexVal == 3 || inputMonthIndexVal == 5 || inputMonthIndexVal == 8 || inputMonthIndexVal == 10){
        howManyMonthDays = 30;
    } else if(inputMonthIndexVal == 1){
        if ((inputYearVal % 4 === 0 && inputYearVal % 100 !== 0) || (inputYearVal % 400 === 0)) {
            howManyMonthDays = 29;
        } else{
            howManyMonthDays = 28;
        };
    }; // howManyMonthDays found its value 28 29 30 or 31

    let answerYear;
    let answerMonth;
    let answerDay;
    let answerHour;
    let answerMinute = currentV.getMinutes();
    let answerSecond = currentV.getSeconds();

    if (inputMonthIndexVal == currentMonth) {
        if (inputMonthDayVal == currentMonthDay) {
            if (inputHourVal <= currentHour) {
                answerYear = currentYear - inputYearVal;
                answerMonth = 0;
                answerDay = 0;
                answerHour = currentHour - inputHourVal;
            } else { // inputHourVal > currentHour
                answerYear = currentYear - inputYearVal - 1;
                answerMonth = 11;
                answerDay = howManyMonthDays - 1;
                answerHour = 24 - (inputHourVal - currentHour);
            };
        } else if(inputMonthDayVal < currentMonthDay){
            answerYear = currentYear - inputYearVal;
            answerMonth = 0;
            if (inputHourVal <= currentHour) {
                    answerDay = currentMonthDay - inputMonthDayVal;
                    answerHour = currentHour - inputHourVal;
            } else{
                answerDay = currentMonthDay - inputMonthDayVal - 1;
                answerHour = 24 - (inputHourVal - currentHour);
            };
        } else{ //inputMonthDayVal > currentMonthDay
            answerYear = currentYear - inputYearVal - 1;
            answerMonth = 11;
            if (inputHourVal <= currentHour) {
                answerDay = howManyMonthDays - (inputMonthDayVal - currentMonthDay);
                answerHour = currentHour - inputHourVal;
            } else { //inputHourVal > currentHour
                howManyMonthDays - (inputMonthDayVal - currentMonthDay) - 1;
                answerHour = 24 - (inputHourVal - currentHour);
            };

        };
    } else if(inputMonthIndexVal < currentMonth){
        answerYear = currentYear - inputYearVal;
        if (inputMonthDayVal == currentMonthDay) {
            if (inputHourVal <= currentHour) {
                answerMonth = currentMonth - inputMonthIndexVal;
                answerDay = 0;
                answerHour = currentHour - inputHourVal;
            } else{ // inputHourVal > currentHour
                answerMonth = currentMonth - inputMonthDayVal - 1;
                answerDay = howManyMonthDays - 1;
                answerHour = 24 - (inputHourVal - currentHour);
            };
        } else if (inputMonthDayVal < currentMonthDay) {
            answerMonth = currentMonth - inputMonthIndexVal;
            if (inputHourVal <= currentHour) {
                answerDay = currentMonthDay - inputMonthDayVal;
                answerHour = currentHour - inputHourVal;
            } else{
                answerDay = currentMonthDay - inputMonthDayVal - 1;
                answerHour = 24 - (inputHourVal - currentHour);
            };
        } else {
            answerMonth = currentMonth - inputMonthIndexVal - 1;
            if (inputHourVal <= currentHour) {
                answerDay = howManyMonthDays - inputMonthDayVal + currentMonthDay;
                answerHour = currentHour - inputHourVal;
            } else {
                answerDay = howManyMonthDays - inputMonthDayVal + currentMonthDay - 1;
                answerHour = 24 - (inputHourVal - currentHour);
            };
        };
    } else{ // inputMonthIndexVal > currentMonth
        answerYear = currentYear - inputYearVal -1;
        if (inputMonthDayVal == currentMonthDay) {
            if (inputHourVal <= currentHour) {
                answerMonth = 12 - (inputMonthIndexVal - currentMonth);
                answerDay = 0;
                answerHour = currentHour - inputHourVal;
            } else { // inputHourVal > currentHour
                answerMonth = 12 - (inputMonthIndexVal - currentMonth) - 1;
                answerDay = howManyMonthDays - 1;
                answerHour = 24 - (inputHourVal - currentHour);
            };
        } else if(inputMonthDayVal < currentMonthDay){
            answerMonth = 12 - (inputMonthIndexVal - currentMonth);
            if (inputHourVal <= currentHour) {
                answerDay = currentMonthDay - inputMonthDayVal;
                answerHour = currentHour - inputHourVal;
            } else { // answerHour > currentHour
                answerDay = currentMonthDay - inputMonthDayVal - 1;
                answerHour = 24 - (inputHourVal - currentHour);
            };

        } else { // inputMonthDayVal > currentMonthDay
            answerMonth = 12 - (inputMonthIndexVal - currentMonth) - 1;
            if (inputHourVal <= currentHour) {
                answerDay = howManyMonthDays - inputMonthDayVal + currentMonthDay;
                answerHour = currentHour - inputHourVal;
            } else { // inputHourVal > currentHour
                answerDay = howManyMonthDays - inputMonthDayVal + currentMonthDay - 1;
                answerHour = 24 - (inputHourVal - currentHour);
            };
        };
    };

    document.getElementById('fullp').innerText = 'full times';

    // this code is for reaultOne
    resWeek.innerText = `${Math.floor(fromInpToNowSec/3600/24/7).toLocaleString('en-US')} weeks`;
    resDay.innerText = `or ${Math.floor(fromInpToNowSec/3600/24).toLocaleString('en-US')} days`;
    resHour.innerText = `or ${Math.floor(fromInpToNowSec/3600).toLocaleString('en-US')} hours`;
    resMinute.innerText = `or ${Math.floor(fromInpToNowSec/60).toLocaleString('en-US')} minutes`;
    resSecond.innerText = `or ${Math.floor(fromInpToNowSec).toLocaleString('en-US')} seconds`;

    // this code is for resultTwo
    andResYear.innerText = answerYear + " years";
    andResMonth.innerText = "and " + answerMonth + " months";
    andResMonthDay.innerText = "and " +  answerDay + " days";
    andResHour.innerText = "and " +  answerHour + " hours";
    andResMinute.innerText = "and " +  answerMinute + " minutes";
    andResSecond.innerText = "and " +  answerSecond + " seconds";

//------------------------------------------------------------below is for seasons

        //finding born season
    if (inputMonthIndexVal == 11 || inputMonthIndexVal == 0 || inputMonthIndexVal == 1) {
        bornSeasonIndex = 0;
    } else if(inputMonthIndexVal == 2 || inputMonthIndexVal == 3 || inputMonthIndexVal == 4){
        bornSeasonIndex = 1;
    } else if(inputMonthIndexVal == 5 || inputMonthIndexVal == 6 || inputMonthIndexVal == 7){
        bornSeasonIndex = 2;
    } else if(inputMonthIndexVal == 8 || inputMonthIndexVal == 9 || inputMonthIndexVal == 10){
        bornSeasonIndex = 3;
    };

    //finding current season
    if (currentMonth == 11 || currentMonth == 0 || currentMonth == 1) {
        currentSeasonIndex = 0;
    } else if(currentMonth == 2 || currentMonth == 3 || currentMonth == 4){
        currentSeasonIndex = 1;
    } else if(currentMonth == 5 || currentMonth == 6 || currentMonth == 7){
        currentSeasonIndex = 2;
    } else if(currentMonth == 8 || currentMonth == 9 || currentMonth == 10){
        currentSeasonIndex = 3;
    };

    // this is for addSpring
    if ((bornSeasonIndex == 0 && currentSeasonIndex == 2) || (bornSeasonIndex == 0 && currentSeasonIndex == 3)) {
        addSpring++
    }else if(bornSeasonIndex == 0 && currentSeasonIndex == 0){
        if ((inputMonthIndexVal == 0 && currentMonth == 11) || (inputMonthIndexVal == 1 && currentMonth == 11) || (inputMonthIndexVal == 1 && currentMonth == 0)) {
            addSpring++
        } else if (inputMonthIndexVal == currentMonth) {
            if (inputMonthDayVal == currentMonthDay) {
                if ((inputHourVal > currentHour)) {
                    addSpring++
                };
            } else if((inputMonthDayVal > currentMonthDay)){
                addSpring++
            };
        };
    } else if (bornSeasonIndex == 3 && currentSeasonIndex == 2) {
        addSpring++
    } else if(bornSeasonIndex == 3 && currentSeasonIndex == 3){
        if (inputMonthIndexVal == currentMonth) {
            if (inputMonthDayVal == currentMonthDay) {
                if (inputHourVal > currentHour) {
                    addSpring++
                };
            } else if((inputMonthDayVal > currentMonthDay)){
                addSpring++
            };
        } else if(inputMonthIndexVal > currentMonth){
            addSpring++
        };
    } else if (bornSeasonIndex == 2 && currentSeasonIndex == 2) {
        if (inputMonthIndexVal == currentMonth) {
            if (inputMonthDayVal == currentMonthDay) {
                if (inputHourVal > currentHour) {
                    addSpring++
                };
            } else if(inputMonthDayVal > currentMonthDay){
                addSpring++
            };
        } else if((inputMonthIndexVal > currentMonth)){
            addSpring++
        };
    };

    //this is for addSummer
    if ((bornSeasonIndex == 1 && currentSeasonIndex == 3) || (bornSeasonIndex == 1 && currentSeasonIndex == 0)) {
        addSummer++
    } else if(bornSeasonIndex == 1 && currentSeasonIndex == 1){
        if (inputMonthIndexVal == currentMonth) {
            if (inputMonthDayVal == currentMonthDay) {
                if (inputHourVal > currentHour) {
                    addSummer++
                };
            } else if((inputMonthDayVal > currentMonthDay)){
                addSummer++
            };
        } else if(inputMonthIndexVal > currentMonth){
            addSummer++
        };
    } else if (bornSeasonIndex == 0 && currentSeasonIndex == 3) {
        addSummer++
    } else if(bornSeasonIndex == 0 && currentSeasonIndex == 0){
        if ((inputMonthIndexVal == 0 && currentMonth == 11) || (inputMonthIndexVal == 1 && currentMonth == 11) || (inputMonthIndexVal == 1 && currentMonth == 0)) {
            addSummer++
        } else if (inputMonthIndexVal == currentMonth) {
            if (inputMonthDayVal == currentMonthDay) {
                if (inputHourVal > currentHour) {
                    addSummer++
                };
            } else if(inputMonthDayVal > currentMonthDay){
                addSummer++
            };
        };  
    } else if (bornSeasonIndex == 3 && currentSeasonIndex == 3) {
        if (inputMonthIndexVal == currentMonth) {
            if (inputMonthDayVal == currentMonthDay) {
                if (inputHourVal > currentHour) {
                    addSummer++
                };
            } else if(inputMonthDayVal > currentMonthDay){
                addSummer++
            };
        } else if(inputMonthIndexVal > currentMonth){
            addSummer++
        };
    };

    ///this is for addAutumn
    if ((bornSeasonIndex == 2 && currentSeasonIndex == 0) || (bornSeasonIndex == 2 && currentSeasonIndex == 1)) {
        addAutumn++
    } else if(bornSeasonIndex == 2 && currentSeasonIndex == 2){
        if (inputMonthIndexVal == currentMonth) {
            if (inputMonthDayVal == currentMonthDay) {
                if (inputHourVal > currentHour) {
                    addAutumn++
                };
            } else if(inputMonthDayVal > currentMonthDay){
                addAutumn++
            };
        } else if(inputMonthIndexVal > currentMonth){
            addAutumn++
        };
    } else if (bornSeasonIndex == 1 && currentSeasonIndex == 0) {
        addAutumn++
    } else if(bornSeasonIndex == 1 && currentSeasonIndex == 1){
        if (inputMonthIndexVal == currentMonth) {
            if (inputMonthDayVal == currentMonthDay) {
                if (inputHourVal > currentHour) {
                    addAutumn++
                };
            } else if(inputMonthDayVal > currentMonthDay){
                addAutumn++
            };
        } else if((inputMonthIndexVal > currentMonth)){
            addAutumn++
        };
    } else if (bornSeasonIndex == 0 && currentSeasonIndex == 0) {
        if ((inputMonthIndexVal == 0 && currentMonth == 11) || (inputMonthIndexVal == 1 && currentMonth == 11) || (inputMonthIndexVal == 1 && currentMonth == 0)) {
            addAutumn++
        } else if (inputMonthIndexVal == currentMonth) {
            if (inputMonthDayVal == currentMonthDay) {
                if (inputHourVal > currentHour) {
                    addAutumn++
                };
            } else if((inputMonthDayVal > currentMonthDay)){
                addAutumn++
            };
        };
    };
        
    //this is for winter
    if ((bornSeasonIndex == 3 && currentSeasonIndex == 1) || (bornSeasonIndex == 3 && currentSeasonIndex == 2)) {
        addWinter++
    } else if(bornSeasonIndex == 3 && currentSeasonIndex == 3){
        if (inputMonthIndexVal == currentMonth) {
            if (inputMonthDayVal == currentMonthDay) {
                if (inputHourVal > currentHour) {
                    addWinter++
                };
            } else if(inputMonthDayVal > currentMonthDay){
                addWinter++
            };
        } else if(inputMonthIndexVal > currentMonth){
            addWinter++
        };
    } else if (bornSeasonIndex == 2 && currentSeasonIndex == 1) {
        addWinter++
    } else if(bornSeasonIndex == 2 && currentSeasonIndex == 2){
        if (inputMonthIndexVal == currentMonth) {
            if (inputMonthDayVal == currentMonthDay) {
                if (inputHourVal > currentHour) {
                    addWinter++
                };
            } else if(inputMonthDayVal > currentMonthDay){
                addWinter++
            };
        } else if(inputMonthIndexVal > currentMonth){
            addWinter++
        };
    } else if (bornSeasonIndex == 1 && currentSeasonIndex == 1) {
        if (inputMonthIndexVal == currentMonth) {
            if (inputMonthDayVal == currentMonthDay) {
                if (inputHourVal > currentHour) {
                    addWinter++
                };
            } else if(inputMonthDayVal > currentMonthDay){
                addWinter++
            };
        } else if(inputMonthIndexVal > currentMonth){
            addWinter++
        };
    };
            
    if (addSpring > 0) {
        addSpring = 1;
    };
    if (addSummer > 0) {
        addSummer = 1;
    };
    if (addAutumn > 0) {
        addAutumn = 1;
    };
    if (addWinter > 0) {
        addWinter = 1;
    };

    winter.innerText = `${answerYear + addWinter} times in winter`;
    spring.innerText = `${answerYear + addSpring} times in spring`;
    summer.innerText = `${answerYear + addSummer} times in summer`;
    autumn.innerText = `${answerYear + addAutumn} times in autumn`;
        
//------------------------------------------------------------above is for seasons

}; // countAge

function swrs() {
    if (currentBtn == "submit") {

        currentBtn = "refresh";
        document.getElementById("resultBtn").innerText = "Refresh";
        document.getElementById("resultBtn").style.backgroundColor = "#ffa000";
        document.getElementById("nameOfUser").style.backgroundColor = "rgb(255 255 255 / 66%)";

        document.getElementById("nameOfUser").readOnly = true;
        document.getElementById("inputYear").disabled = true;
        document.getElementById("inputMonth").disabled = true;
        document.getElementById("inputMonthDay").disabled = true;
        document.getElementById("inputHour").disabled = true;

    } else if(currentBtn == "refresh"){
        document.getElementById("nameOfUser").style.backgroundColor = "#fff";
        document.getElementById("nameOfUser").readOnly = false;
        document.getElementById("nameOfUser").value = "";
        
        document.getElementById("inputYear").disabled = false;
        document.getElementById("inputYear").value = "year";

        document.getElementById("inputMonth").disabled = false;
        document.getElementById("inputMonth").value = "month";

        document.getElementById("inputMonthDay").disabled = false;
        document.getElementById("inputMonthDay").value = "monthday";


        document.getElementById("inputHour").disabled = false;
        document.getElementById("inputHour").value = "hour";

        currentBtn = "submit";
        document.getElementById("resultBtn").innerText = "Submit";
        document.getElementById("resultBtn").style.backgroundColor = "#41ff00";

    };
};

    function restart() {
        document.getElementById("resOneTitle").innerText = "";
        document.getElementById("resWeek").innerText = "";
        document.getElementById("resDay").innerText = "";
        document.getElementById("resHour").innerText = "";
        document.getElementById("resMinute").innerText = "";
        document.getElementById("resSecond").innerText = "";
        document.getElementById("resTwoTitle").innerText = "";
        document.getElementById("andResYear").innerText = "";
        document.getElementById("andResMonth").innerText = "";
        document.getElementById("andResHour").innerText = "";
        document.getElementById("andResMinute").innerText = "";
        document.getElementById("andResSecond").innerText = "";
        document.getElementById("resThreeTitle").innerText = "";
        document.getElementById("winter").innerText = "";
        document.getElementById("spring").innerText = "";
        document.getElementById("summer").innerText = "";
        document.getElementById("autumn").innerText = "";
        document.getElementById("fullp").innerText = "";
        document.getElementById("andResMonthDay").innerText = "";
        addWinter = 0;
        addSpring = 0;
        addSummer = 0;
        addAutumn = 0;
    };
}

// don't change >>>>> 2023 december 1 11pm
