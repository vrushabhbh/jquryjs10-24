"use strict";
var category = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Sports & Outdoors",
  "Gifts & Travel",
];
var products = [
  {
    name: " shirt ",
    price: " 5000",
    path: "https://rukminim2.flixcart.com/image/850/1000/xif0q/lehenga-choli/t/y/m/free-half-sleeve-big-tea-blue-trivety-original-imagu3u4hh6vkdu5.jpeg?q=90&crop=false ",
  },
  {
    name: " lehnga ",
    price: " 500",
    path: "https://rukminim2.flixcart.com/image/850/1000/xif0q/lehenga-choli/t/y/m/free-half-sleeve-big-tea-blue-trivety-original-imagu3u4hh6vkdu5.jpeg?q=90&crop=false ",
  },
  {
    name: "t-shirt ",
    price: " 400",
    path: "https://rukminim2.flixcart.com/image/850/1000/xif0q/lehenga-choli/t/y/m/free-half-sleeve-big-tea-blue-trivety-original-imagu3u4hh6vkdu5.jpeg?q=90&crop=false ",
  },
];
//new short curcit operator

category &&
  category.length > 0 &&
  category.forEach(function (value, i) {
    console.log(value, i);

    var listtag = document.createElement("li"); //it is use to create thre list item tag
    console.log(listtag);
    listtag.innerHTML = value; //it is use to set the innerHTML of the list item tag to the value of v
    document.querySelector("ul").append(listtag); //it is use to append the list item tag to the ul tag
  });

//new short curcuit operator
products &&
  products.length > 0 &&
  products.forEach(function (value, i) {
    console.log(value, i);
    var divtag = document.createElement("div"); //it is use to create a new div tag
    console.log(divtag);
    divtag.className = "col-xl-4"; //it is use to set the class attribute of the div tag to col-md-4
    var imgtag = document.createElement("img"); //it is use to create a new img tag
    imgtag.className = "img-fluid"; //it is use to set the class attribute of the img tag to img-fluid
    var h2tag = document.createElement("h2"); //it is use to create a new h2 tag
    var ptag = document.createElement("p"); //it is use to create a new p tag
    divtag.append(imgtag, h2tag, ptag); //it is use to append the img, h2, and p tags to the div tag

    imgtag.src = value.path;
    h2tag.innerHTML = value.price;
    ptag.innerText = value.name;

    //it is use to set the src attribute of the img tag to the path of the product
    document.getElementById("row").append(divtag); //it is use to append the div tag to the row id
  }); //it is use to create a new array from the products array, where each element is a new object with the properties name, price, and path. The original array remains unchanged.
