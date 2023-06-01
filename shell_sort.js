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
    
    // let btnclr =document.querySelector('button');
    // let inputs=document.querySelectorAll('input');

    // btnclr.addEventListener('click',()=>{
    //     inputs.forEach(input=>input.value='');
    // });
    
    
    document.getElementById("index_dis").innerHTML = i;
    
    

}



// Function to generate bars
function generatebars(num) {

    // For loop to generate 20 bars
    for (let i = 0; i < num; i += 1) {

        // To generate random values from 1 to 100
        const value = arr1[i];

        // To create element "div"
        const bar = document.createElement("div");

        // To add class "bar" to "div"
        bar.classList.add("bar");

        // Provide height to the bar
        bar.style.height = `${8 * 3}px`;

        // Translate the bar towards positive X axis
        bar.style.transform = `translateX(${i * 30}px)`;

        // To create element "label"
        const barLabel = document.createElement("label");

        // To add class "bar_id" to "label"
        barLabel.classList.add("bar__id");

        // Assign value to "label"
        barLabel.innerHTML = value;
      


        // Append "Label" to "div"
        bar.appendChild(barLabel);

        // Append "div" to "data-container div"
        container.appendChild(bar);
    }
}

// Asynchronous function to perform "Shell Sort"
async function ShellSort(delay = 600) {
    let bars = document.querySelectorAll(".bar");

    for (var i = 10; i > 0; i = Math.floor(i / 2)) {

        // To pause the execution of code
        // for 300 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 1000)
        );

        for (var j = i; j < a1; j++) {
            var temp = parseInt(
                bars[j].childNodes[0].innerHTML);
            var k;

            var temp1 = bars[j].style.height;
            var temp2 = bars[j].childNodes[0].innerText;

            for (
                k = j;
                k >= i && parseInt(bars[k - i]
                    .childNodes[0].innerHTML) > temp;
                k -= i
            ) {
                bars[k].style.height 
                        = bars[k - i].style.height;

                bars[k].childNodes[0].innerText = 
                    bars[k - i].childNodes[0].innerText;

                // To pause the execution of code
                // for 300 milliseconds
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 1000)
                );
            }

            // Provide darkblue color to the jth bar
            bars[j].style.backgroundColor = "darkblue";

            // Provide darkblue color to the kth bar
            bars[k].style.backgroundColor = "darkblue";
            bars[k].style.height = temp1;
            bars[k].childNodes[0].innerText = temp2;

            // To pause the execution of code for
            // 300 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 600)
            );

            // Provide skyblue color to the jth bar
            bars[j].style.backgroundColor = "rgb(0, 183, 255)";

            // Provide skyblue color to the kth bar//rgb(0, 183, 255);sky blue
            bars[k].style.backgroundColor = "rgb(0, 183, 255)";
            // 0, 183, 255  51,0,102
            // To pause the execution of code for
            // 300 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );
        }
    }
    for (var x = 0; x < 20; x++) {
        bars[x].style.backgroundColor 
            = "rgb(131, 26, 196)";
    }

    // To enable the button "Generate New Array"
    // after final(sorted)
    document.getElementById("Button1")
            .disabled = false;

    document.getElementById("Button1")
        .style.backgroundColor = "#6f459e";

    // To enable the button "Shell Sort"
    // after final(sorted)
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2")
        .style.backgroundColor = "#6f459e";
}

// Call "generatebars()" function


// Function to generate new random array
function generate() {
    // window.location.reload();
    generatebars(document.getElementById("arrnum").value);
}

// Function to disable the button
function disable() {
    // To disable the button "Generate New Array"
    document.getElementById("Button1").disabled = true;
    document.getElementById("Button1")
        .style.backgroundColor = "#99ccff";

    // To disable the button "Shell Sort"
    document.getElementById("Button2").disabled = true;
    document.getElementById("Button2")
        .style.backgroundColor = "#99ccff";
        // #d8b6ff
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}


// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});
