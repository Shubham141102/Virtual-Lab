const generateArrayBtn = document.getElementById("generate-array");
const elementToSearch = document.getElementById("valueForSearch");
const searchBtn = document.getElementById("search");

const linearSearchBtn = document.getElementById("linear-search");

const arrowIcons = document.getElementsByClassName("box-item-icon");

// colors
const successColor = "#32E0C4";
const failureColor = "#FB3640";
let searchType="linear"
let randomArray = [];


// linear function 
function linearSearch(arr, value) {
    let counter = 0;
    const timer = setInterval(() => {
      let box = `box-wrapper-${counter}`;
  
      if (counter != 0) {
        // hiding arrow
        arrowIcons[counter - 1].style.display = "none";
      }
  
      if (counter == 10) {
        alert("Element Not Found");
        location.reload();
        clearInterval(timer);
      } else {
        // displaying arrow
        arrowIcons[counter].style.display = "block";
        var innerTimer = setTimeout(() => {
          document.getElementById(box).style.backgroundColor = failureColor;
        }, 500);
      }
  
      if (arr[counter] === value) {
        clearInterval(innerTimer);
        // displaying arrow
        arrowIcons[counter].style.display = "block";
        document.getElementById(box).style.backgroundColor = successColor;
        alert("Element Found At Index " + counter);
        location.reload();
        clearInterval(timer);
      }
      counter++;
    }, 1000);
  }
// end linear 
// generate random numbers first time
// generate random array
function generateArray() {
    let value;
    const resultArray = [];
    for (let i = 0; i < 9; i++) {
      value = Math.floor(Math.random() * 99);
      resultArray.push(value);
    }
    return resultArray;
  }
  
  // insert random generated value
  function insertRandomArray() {
    // making global variable
    randomArray = generateArray();
    
  
  /*  if (searchType === "linear") {
      for (let i = 0; i < 10; i++) {
        let box = `box${i}`;
        document.getElementById(box).innerHTML = randomArray[i];
      }
    } else {
      for (let i = 0; i < 10; i++) {
        let box = `box${i}`;
        document.getElementById(box).innerHTML = randomSortedArray[i];
      }
    } */
    
  for (let i = 0; i < 9; i++) {
    let box = `box${i}`;
    document.getElementById(box).innerHTML = randomArray[i];
  }
  } 

  
  // disable the buttoms
 // function disable() {
  //  binarySearchBtn.setAttribute("disabled", true);
    
   // searchBtn.setAttribute("disabled", true);
    //generateArrayBtn.setAttribute("disabled", true);
 // }
  
 insertRandomArray();
// event listner for generating new array
generateArrayBtn.addEventListener("click", () => {
  insertRandomArray();
});

// event listner for searching an element in an array
searchBtn.addEventListener("click", () => {
  let element = elementToSearch.value;
  if (element != "") {
    const searchValue = parseInt(element);
   // disable();
   linearSearch(randomArray, searchValue);
    /* if (searchType === "linear") {
      disable();
      linearSearch(randomArray, searchValue);
    } 

    if (searchType === "binary") {
      disable();
      binarySearch(
        randomSortedArray,
        searchValue,
        0,
        randomSortedArray.length - 1
      );
    }  */ 
  }
});

// event listner for selecting type of search method(linear or binary)
// for linear search
//linearSearchBtn.addEventListener("click", () => {
 // binarySearchBtn.style.borderBottomColor = "#243441";
//  linearSearchBtn.style.borderBottom = "1px solid white";
//  searchType = "linear";
//});

// for binary search
//binarySearchBtn.addEventListener("click", () => {
 // linearSearchBtn.style.borderBottomColor = "#243441";
 // binarySearchBtn.style.borderBottom = "1px solid white";
 // if (searchType != "binary") {
  //  searchType = "binary";
   // insertRandomArray();
  //}
//}

  