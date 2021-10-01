  
  /* let js="amazing";
console.log (js);

const age=15;
if (age >= 18 ) {
console.log ("I can start driving lessons");
} else {
    const yearsLeft =18-age;
    console.log ( `You are too young. Wait another   ${ yearsLeft} years  :)`) 
     
}
const massJohn=92;
const heightJohn=1.81;
const massMark =78;
const heightMark=1.69;
const bmiJohn=(massJohn/ (heightJohn**2));
const  bmiMark=(massMark/(heightMark*heightMark));
console.log (bmiJohn);
console.log(bmiMark);
console.log (bmiJohn>bmiMark);
console.log (bmiJohn,bmiMark);
if (bmiMark > bmiJohn ){
  console.log  ( `Mark's BMI ${bmiMark } is higher than John's  ${bmiJohn}`);
} else {
    console.log ( ` John's BMI ${bmiJohn}  higher than Mark's ${bmiMark}`);
}
let pn1=12345; 
let pn2=26578;
console.log (pn1,pn2);
if (pn1==pn2) {
    console.log (" Please proceed");
} else {
    console.log (" Wrong pn");
}
/*
const January =31;
const February =28;
const March=31;
const April =30;
const May =31;
const June=30;
const July =31;
const August=31;
const September =30;
const October=31;
const November =30;
const December =31;



if ( January || March || May || July|| August || October || December) {
    console.log (31);

    } else {
       console.log (30);
    } if (February ) {
        console.log (28);
    } else {
        
    }
const stupidWork=true;
const mySkillGood=false;
const LeaveJob = stupidWork && mySkillGood ;
if ( LeaveJob) {
    console.log ("Leave your job");
} else {
    console.log ("Someone else will leave");
}
console.log (stupidWork && mySkillGood );
console.log (stupidWork || mySkillGood );
console.log (!stupidWork && mySkillGood );
console.log (!stupidWork || mySkillGood );

const avgTeamDolphin = (88+60+110)/3; 
const avgTeamKoala = (109+95+20)/3;
if (avgTeamDolphin > avgTeamKoala && avgTeamDolphin > 100 ){
    console.log  ( `Dolphin team  ${avgTeamDolphin } is a winner  and not Koala team ${avgTeamKoala}`);
  } else {
      console.log ( ` Koala team  ${avgTeamKoala}  is a winner  and not Dolphin team ${avgTeamDolphin}`);
  } if (avgTeamKoala ===avgTeamDolphin && avgTeamDolphin > 100 ) {
      console.log ("Draw!");
      
  } 
console.log (avgTeamDolphin,avgTeamKoala);
const day ='tuesday';
switch (day) {
    case 'monday':
    console.log ("Go to play");
    break; 
    case 'tuesday':
    console.log ("Go to work");
     break;
     case ' thurstday':
     default :
     console.log ("Not valid day");

}
const month='january';
switch (month) {
    case 'january':
        console.log ("31 days");
    break;
    case 'february': 
    console.log ("28 days");
    break;
    case 'march':
    console.log (" 31 days");
    break;
    case 'april':
        console.log (" 30 days");
        break;
        case 'may':
            console.log ( "31 days");
            break;
            case 'june':
            console.log (" 30 days");
            break;
            case 'july':
                console.log (" 31 days");
                case 'august':
        console.log ("31 days");
    break;
    case 'september': 
    console.log ("30 days");
    break;
    case 'october':
    console.log (" 31 days");
    break;
    case 'november':
        console.log (" 30 days");
        break;
        case 'december':
            default:
            
                console.log (" not valid month");
}


const weekday = 'sunday';
if  (weekday === 'sunday' ) {
    console.log ( "Go to play");
}  else if  (weekday ==='monday') {
    console.log ("Go to work");
  } else if  (weekday ==='tuesday') {
   
}  else if (weekday==='wendsday' || weekday ===  'thurstday'){
}     else if (weekday=== 'saturday' ){
    console.log ("Enjoy the weekend!");
} 
const grade =100;
const  graduade = grade >= 60 ? 'degree' : 'exam';
  console.log (graduade);
 
  const homework=1;
  const exam =95;
  const finalGrade = homework >=exam && homework < 25 ? 'homework':'exam';
  console.log (finalGrade);
  let finalgrade;
  if (exam>=50 && exam <= 25) {
      finalgrade=(homework+exam)/2;
      
  } else {
      finalgrade =exam;
      console.log (finalgrade);
  }
 const  bill=500;
 const  tip= bill>=50 && bill <= 300? bill*0.15 : bill*0.2;
 console.log (tip);
 "use strict";
 function logger () {
     console.log ("Marina");
 }
logger ();

function foodProcessor ( apples, oranges){
    console.log (apples,oranges);
    const juice= `Juice with  ${apples}  apples and ${oranges} oranges `;
    return juice;

}

  const appleJuice = foodProcessor (1,4);
console.log (appleJuice);
function yearCalendar (days, months) {
    console.log (days, months);
    const date=`day ${days} and ${months} months`;
    return date;
}
const dateM = yearCalendar (1,12);
console.log (dateM);
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1=calcAge1(2012);
console.log( age1);


function fruitProceesor (apples,oranges) {
    console.log (apples,oranges);
const juice1= `Juice with  ${apples}  apples and ${oranges} oranges `;
 return juice1;
}

const appleJuice1 = fruitProceesor ( 5,0);
console.log (appleJuice1);

function calcSum (x,y) {
    const sum3 = x+y;
    return sum3;
}
const sum3= calcSum (5,6);
console.log (sum3);

function costMargin (cost,resale) {
    const margin1 = cost/resale;
    return margin1;
}
const margin1 = costMargin ( 0.5,0.8);
console.log (margin1);
function calcBirthd ( date, birthday) {
    const birthdate = date -birthday;
    return birthdate;
}
const birthdate = calcBirthd (31,16);
console.log (birthdate);
function calcPancake (milk,dought,egg,oil,sugar){
    const pancake1= milk+dought+ egg+ oil+sugar;
    return pancake1;
}

    const pancake1 = calcPancake (60,90,1,20,10);
    console.log (pancake1);




    function Pitagoras (a) {
      const pitagoras1=a**2;
      return pitagoras1;
    
    }
   const  pitagoras1=  Pitagoras (5);
   const  pitagoras2=  Pitagoras (10);
   const  pitagoras3=  pitagoras1 +pitagoras2;
   console.log (pitagoras3);
   function calcAge (birthYear){
       return 2021-birthYear;
   }
   const age10 = calcAge (2012);
   const years =[ 2012,2011,1972,1976];
   console.log(age10);
   const calcAge2 = function (birthYear){
       return 2021- birthYear;
   }
    const age11 = calcAge2(2011);
    console.log (age10,age11);

    const calcAg  = birthYear=>2021-birthYear;

    const age25=calcAg(2012);
    console.log (age25);
    const yearUntilRetirement =(birthYear,firstName)=>{
        const age=2021-birthYear;
        const retirement= 67-age;
        return retirement;
    }

console.log ( yearUntilRetirement (2012));
const skills = [ 'javaScript','html','css'];

const flours = [ 'backwheat','rice','chickpeah'];
console.log (flours);
const flours1 = flours.unshift ();
console.log (flours1);
const flours2 =flours.push ();
console.log (flours2);
const flours4= new Array( 10,20,30);
console.log (flours1);
console.log (flours4 [0]);
console.log (flours4.length);
console.log (flours4 [flours4.length -1]);
flours4 [2] = 'teff';
console.log (flours4);
const Marina =[ 'Marina','Yudkin', 2021-1976 , 'developer', flours4];
console.log (Marina);

const marina = {
    FirstName: 'Marina',
     LastName: 'Yudkin',
     age : 2021-1976,
     job:'developer',
     flours : [ 'backwheat','rice','chickpeah'],
     skills : [ 'javaScript','html','css']
    
     
};
/*
console.log (marina.LastName);
const john ={
    firstName:'John',
    lastName:'Smith',
    massJohn1:92,
    heightJohn1:1.95
}
const mark ={
    firstName:'Mark',
    lastName:'Miller',
    massMark1:78,
    heightMark1:1.69
}
function calcBmiJohn1 (){
    return (john.massJohn1/ (john.heightJohn1**2));
}
const bmiJohn1=calcBmiJohn1();
console.log (bmiJohn1);


function calcBmiMark1 (){
    return (mark.massMark1/ (mark.heightMark1**2));
}
/*const bmiMark1=calcBmiMark1();
console.log (bmiMark1);


const massJohn1=92;
const heightJohn1=1.81;
const massMark1 =78;
const heightMark1=1.69;
const bmiJohn1=(massJohn1/ (heightJohn1**2));
const  bmiMark1=(massMark1/(heightMark1*heightMark1));
console.log (bmiJohn1);
console.log(bmiMark1);
console.log (bmiJohn1>bmiMark1);
console.log (bmiJohn1,bmiMark1);
if (bmiMark1 > bmiJohn1 ){
  ////console.log  ( `Mark's BMI ${bmiMark1 } is higher than John's  ${bmiJohn1}`);
} else {
    //console.log ( ` John's BMI ${bmiJohn1}  higher than Mark's ${bmiMark1}`);
//};*/

/*function calcAverage ( Alex, Marina) {
    return (Alex + Marina) /2;

}
const average1= calcAverage (90,100);
console.log (average1);
const calcAverage2 = function ( gradeAlex,gradeMarina) {
    return (gradeAlex + gradeMarina) /2;

}
const average2 =calcAverage (90,100);
console.log (average1,average2);
const calcAverage3 = gradeAlex => ( 80+90)/2;
const average3= calcAverage3 ();
console.log (average3);
const classAverageGrade= (gradeAlex,gradeClass) => {
    const average4 = gradeAlex => ( 80+90)/2;
    const classAverage =  average4 => (average4 +60)/30;

    return average4+classAverage;

}
    const calcAverage10  = avgDolphins=>(44+23+71)/3 {

    }
    

    const checkWinner =(avgDolphins,avgKoalas)=>{
        if avgDolphins > avgKoalas;
        console.log ( `Dolfins win ${ avgDolphins} vs Koalas with ${avgKoalas}`)
    }  else {
    
    }
       
        const winner =2021-birthYear;
        const retirement= 67-age;
        return retirement;
    }

console.log ( yearUntilRetirement (2012));
const calcAverage11  = avgKoalas=>(65+54+49)/3{

}
onst weekday = 'sunday';
if  (weekday === 'sunday' ) {
    console.log ( "Go to play");
}  else if  (weekday ==='monday') {
    console.log ("Go to work");
  } else if  (weekday ==='tuesday') {
   
}  else if (weekday==='wendsday' || weekday ===  'thurstday'){
}     else if (weekday=== 'saturday' ){
    console.log ("Enjoy the weekend!");
} 
const grade =100;
const  graduade = grade >= 60 ? 'degree' : 'exam';
  console.log (graduade);
 
  const homework=1;
  const exam =95;
  const finalGrade = homework >=exam && homework < 25 ? 'homework':'exam';
  console.log (finalGrade);
  let finalgrade;
  if (exam>=50 && exam <= 25) {
      finalgrade=(homework+exam)/2;
      
  } else {
      finalgrade =exam;
      console.log (finalgrade);
  }
 const  bill=500;
 const  tip= bill>=50 && bill <= 300? bill*0.15 : bill*0.2;
 console.log (tip);
 "use strict";
 function logger () {
     console.log ("Marina");
 }
logger ();

function foodProcessor ( apples, oranges){
    console.log (apples,oranges);
    const juice= `Juice with  ${apples}  apples and ${oranges} oranges `;
    return juice;

}

  const appleJuice = foodProcessor (1,4);
console.log (appleJuice);
function yearCalendar (days, months) {
    console.log (days, months);
    const date=`day ${days} and ${months} months`;
    return date;
}
const dateM = yearCalendar (1,12);
console.log (dateM);
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1=calcAge1(2012);
console.log( age1);
*/
const calcAverageScore=(a,b,c)=> (a+b+c)/3;
const averageDolphins =calcAverageScore (440,230,71);
const averageKoalas =calcAverageScore(6500,54,49);

const   calcWinner = function (averageDolphins,averageKoalas)
{
    if (averageDolphins >=  2 * averageKoalas) {
    console.log (`Dolphins wins Koalas ${averageDolphins}vs ${averageKoalas}`);
} else if (averageKoalas >= 2 * averageDolphins){
console.log (`Koalas wins Dolphins ${averageKoalas}vs ${averageDolphins}`); 
} else {
   console.log ("No one wins!");
}
}
calcWinner (averageDolphins,averageKoalas);

const friends = [ 'Yael','Galit','Elit'];

console.log (friends.indexOf('Galit'));
