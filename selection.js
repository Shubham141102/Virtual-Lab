const container = document.querySelector(".data-container");
const arr1=[];
var a1;
var i=0;

function addnum()
{
	var i=0;
	arr1.push(document.getElementById("text1").value);
	document.getElementById("demo").innerHTML = arr1;
    a1=document.getElementById("arrnum").value;
    document.getElementById("demo1").innerHTML = a1;
    document.getElementById("text1").value=" ";
	document.getElementById("index_dis").innerHTML = i;

}
// function to generate bars
function generatebars(num) {
// const arr1=[68,54,32,12,34,26,38,45,19,4]
//for loop to generate 20 bars
for (let i = 0; i < num; i += 1) {

	// To generate random values from 1 to 100
	// const value = Math.floor(Math.random() * 100) + 1;

	const value =arr1[i];
	// To create element "div"
	const bar = document.createElement("div");

	// To add class "bar" to "div"
	bar.classList.add("bar");

	// Provide height to the bar
	bar.style.height = `${8 * 3}px`;

	// Translate the bar towards positive X axis
	bar.style.transform = `translateX(${i * 30}px)`;
	
	// To create element "label"
	const barLabelS = document.createElement("label");

	// To add class "bar_id" to "label"
	barLabelS.classList.add("bar_id");

	// Assign value to "label"
	barLabelS.innerHTML = value;
	barLabelS.style.color="color";
	barLabelS.style.paddingTop="-20px";
	
	
	// Append "Label" to "div"
	bar.appendChild(barLabelS);

	// Append "div" to "data-container div"
	container.appendChild(bar);
}
}

// asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = 300) {
let bars = document.querySelectorAll(".bar");
// Assign 0 to min_idx
var min_idx = 0;
for (var i = 0; i < bars.length; i += 1) {

	// Assign i to min_idx
	min_idx = i;

	// Provide darkblue color to the ith bar
	bars[i].style.backgroundColor = "darkblue";
	for (var j = i + 1; j < bars.length; j += 1) {

	// Provide red color to the jth bar
	bars[j].style.backgroundColor = "red";
		
	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 1000)
	);

	// To store the integer value of jth bar to var1
	var val1 = parseInt(bars[j].childNodes[0].innerHTML);

	// To store the integer value of (min_idx)th bar to var2
	var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
		
	// Compare val1 & val2
	if (val1 < val2) {
		if (min_idx !== i) {

		// Provide skyblue color to the (min-idx)th bar
		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
		}
		min_idx = j;
	} else {

		// Provide skyblue color to the jth bar
		bars[j].style.backgroundColor = " rgb(24, 190, 255)";
	}
	}

	// To swap ith and (min_idx)th bar
	var temp1 = bars[min_idx].style.height;
	var temp2 = bars[min_idx].childNodes[0].innerText;
	bars[min_idx].style.height = bars[i].style.height;
	bars[i].style.height = temp1;
	bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
	bars[i].childNodes[0].innerText = temp2;
	
	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 1000)
	);

	// Provide skyblue color to the (min-idx)th bar
	bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

	// Provide lightgreen color to the ith bar
	bars[i].style.backgroundColor = " rgb(131, 26, 196)";
}

// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#113FC9";

// To enable the button "Selection Sort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#113FC9";
}

// Call "generatebars" function


// function to generate new random array
function generate()
{
	generatebars(document.getElementById("arrnum").value);
// window.location.reload();
}

// function to disable the button
function disable()
{
// To disable the button "Generate New Array"
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#99ccff";

// To disable the button "Selection Sort"
document.getElementById("Button2").disabled = true;
document.getElementById("Button2").style.backgroundColor = "#99ccff";
}
