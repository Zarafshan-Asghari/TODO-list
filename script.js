"use strict";
// selecting elements
const input = document.querySelector("input[type='text']");
let addBtn = document.querySelector("button[type='submit']");
let checkboxBtn = document.getElementsByClassName(".check");

const listContainer = document.querySelector(".list-container");
// displaying date
let date = document.getElementById("date");
let displayDate = new Date();
date.innerHTML = displayDate.toDateString();
//
let error = document.getElementById("error");

function addDataToList() {
  let text = input.value.trim();
  if (text.length === 0) {
    // alert("input is empty !");
    error.innerHTML = "input is empty";
  } else {
    let newTask = input.value;
    // creating elements
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let h3 = document.createElement("h3");
    let checkbox = document.createElement("input");
    let delet = document.createElement("span");
    // attach to each other
    listContainer.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(checkbox);
    div2.appendChild(h3);
    div1.appendChild(delet);

    // setting styles
    checkbox.setAttribute("type", "checkbox");

    div1.classList.add(
      "parent-div",
      "flex",
      "items-center",
      "justify-between",
      "w-full"
    );

    div2.classList.add("child", "flex", "items-center", "space-x-4");

    checkbox.classList.add("check");

    h3.classList.add(
      "text-gray-600",
      "font-thin",
      "font-sans",
      "capitalize",
      "text-sm"
    );
    //
    delet.classList.add("delet-list");

    h3.innerHTML = newTask;
    //  TO empty input after clicking add btn
    input.value = "";
    // TODO
    storeLists();
  }
}

// add button for adding input text into lists
addBtn.addEventListener("click", () => {
  addDataToList();
});

// adding checked functionality to check boxes and thier divs when
listContainer.addEventListener("click", (event) => {
  if (event.target.matches("h3") || event.target.matches("input")) {
    let targetEl1 = event.target.closest("div.parent-div");
    let h3 = targetEl1.querySelector("div.child h3");
    let checkbox = targetEl1.querySelector("div.child input");

    h3.classList.toggle("line-through");
    // console.log(h3);
    if (checkbox.hasAttribute("checked")) {
      console.log("unchecked");
      checkbox.removeAttribute("checked");
    } else {
      checkbox.setAttribute("checked", "true");
      console.log("checked");
    }
  }

  if (event.target.matches("span")) {
    let delet = event.target.closest("div.parent-div");
    delet.remove();
    storeLists();
  }
});
// =================== to delet lists ===============================
let delet = document.querySelectorAll("delet-list");
console.log(delet);

// TODO=============== to store lists whene we close browzer =========
function storeLists() {
  localStorage.setItem("lists", listContainer.innerHTML);
}
function showData() {
  listContainer.innerHTML = localStorage.getItem("lists");
}
showData();

// console.log(listContainer.innerHTML);
