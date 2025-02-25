/////////////////////////////////////////////////////////////////////////////////
// Manuel Duran         ID: 913644789     HW assigment: js-object-manipulation   
////////////////////////////////////////////////////////////////////////////////

const sculptureList = require('./data.js'); // import data.js

//const element = sculptureList[1] // <---- comment out this line in your solution!

const element = sculptureList[0];
let i = 0;
for(const i in element)
   console.log(i);

// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
//for (const key in sculptureListLengths){
  //  console.log(`${key}: ${sculptureListLengths[key].length}`)// + ` ${sculptureListLengths[key]}` )
//}

const sculptureListLengths = [{}];
let sources = new Object;

sculptureList.forEach((element) => {
  for (const key in element ){ 
    //console.log(`${key}: ${element[key].length}`)
    sources  = element;
    sources[key] = element[key].length;
    
  }
  
  let xSource = [{}];
  xSource.push(sources);

  sculptureListLengths.push(sources);

  for (const obj of xSource) {

    // Object.assign(sculptureListLengths, obj);
     console.log(sculptureListLengths)
  }
     
 // console.log();
});

console.log();
console.log(sculptureListLengths);
