const generateArrayBtn = document.getElementById("generate-array");
const elementToSearch = document.getElementById("valueForSearch");
const searchBtn = document.getElementById("search");

const binarySearchBtn = document.getElementById("binary-search");

const arrowIcons = document.getElementsByClassName("box-item-icon");
var iter=0;
// colors
const successColor = "#32E0C4";
const failureColor = "#FB3640";
let searchType="linear"
let randomArray = [];
let randomSortedArray = [];

// binary function 
function binarySearch(arr, x, start, end) {
    if (start > end) {
      alert("Element not Found");
      location.reload();
      return false;
    }
  
    // Find the middle index
    let mid = Math.floor((start + end) / 2);
    let previousMid = mid;
    let box = `box-wrapper-${mid}`;
  
    // displaying arrow and color
    arrowIcons[mid].style.display = "block";
    const timer = setTimeout(() => {
      document.getElementById(box).style.backgroundColor = failureColor;
    }, 3000);
    
 iter+=1;
    step_msg="Iteration :  "+iter+" <br> Here, mid=(beg+end)/2=("+start+"+"+end+")/2="+mid;
    document.getElementById("caption").innerHTML =step_msg;
    // Compare mid with given key x
    if (arr[mid] === x) {
      document.getElementById(box).style.backgroundColor = successColor;
      clearInterval(timer);
      alert("Element Found At Index " + mid);
      location.reload();
      return true;
    }
  
    // If element at mid is greater than x,
    if (arr[mid] > x) {
      // search in the left half of mid
      step_msg2="arr[mid] > X i.e "+arr[mid]+" > "+x+"<br>Therefore search in left half of mid";
      document.getElementById("caption2").innerHTML =step_msg2;
      setTimeout(() => {
        // hiding arrow
        arrowIcons[previousMid].style.display = "none";
        return binarySearch(arr, x, start, mid - 1);
      }, 3000);
    } else {
      step_msg2="arr[mid] < X i.e "+arr[mid]+" < "+x+"<br>Therefore search in right half of mid";
      document.getElementById("caption2").innerHTML =step_msg2;
      
      // If element at mid is smaller than x,
      // search in the right half of mid
      setTimeout(() => {
        // hiding arrow
        arrowIcons[previousMid].style.display = "none";
        return binarySearch(arr, x, mid + 1, end);
      }, 3000);
    }
  }
/// binary end 
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
    randomSortedArray = [...randomArray];
  
    // sort random array for binary search
    randomSortedArray.sort((a, b) => a - b);
  
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
    document.getElementById(box).innerHTML = randomSortedArray[i];
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
    binarySearch(
      randomSortedArray,
      searchValue,
      0,
      randomSortedArray.length - 1
    );
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
