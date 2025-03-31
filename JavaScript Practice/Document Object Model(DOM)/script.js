/*
Qs1: Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this 
text using JS.
*/

// let h2 = document.querySelector("h2");
// console.dir(h2);
// h2.innerText = h2.innerText + " from Apna College students";

/*
Qs2: Create 3 divs with common class name - "box". Access them & add some unique text to each of them.
*/

// let divs = document.querySelectorAll(".box");
// console.dir(divs);
// let index = 1;
// for (let div of divs) {
//     div.innerText = `new unique value ${index}`;
//     index++;
// }

/*
Qs3: Create a new button element. Give it a text "click me", background color of red & text color of white.
Insert the button as the first element inside the body tag.
*/

// let btnClickMe = document.createElement("button");
// btnClickMe.innerText = "click me";
// btnClickMe.style.backgroundColor = "red";
// btnClickMe.style.color = "white";

// document.body.prepend(btnClickMe);

/*
Qs4: Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.

Did you notice, how you overwrite the class name when you add a new?
Solve this problem using classList.
*/

// let para = document.querySelector("p");
// para.classList.add("newClass");