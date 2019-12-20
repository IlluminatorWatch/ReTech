$(function(){

    let productList = JSON.parse(localStorage.getItem("products")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let badge = $("#badge").text(cart.length);

let dateElement = document.getElementById("date");
let options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric"
}
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

});