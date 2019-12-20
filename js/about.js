$(function(){

    let productList = JSON.parse(localStorage.getItem("products")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let badge = $("#badge").text(cart.length);
});