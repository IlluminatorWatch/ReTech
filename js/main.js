//goToTopBtn
$(document).ready (function(){
let productList = JSON.parse(localStorage.getItem("products")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let badge = $("#badge").text(cart.length);

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goToTopBtn").style.display = "block";
    } else {
        document.getElementById("goToTopBtn").style.display = "none";
    }
}


function topFunction() {
    // console.log("top button clicked")
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
   }
    


$(document).ready(function() {

    //Presenterar modalen
    function presentModal(productItems, i){
        document.getElementById("modalPhoto").innerHTML=("");

//Hämta modal i HTML & Visa den
   let modal = document.getElementById("myModal");
       modal.style.display = "block";
 //Presentera en header i modalen
   let modalTitle = document.getElementById("modaltitle");
       modalTitle.innerHTML = productItems.name;

 //Visa bild i modalen
   let createImgModal = document.createElement("img");     
       createImgModal.className = ("img-fluid");
       createImgModal.src = productItems.photo;
       photoModal = document.getElementById("modalPhoto");
       photoModal.appendChild(createImgModal);

 // Visa annan info om fotografiet
   let icond = document.getElementById("pCond");
   let iDesc = document.getElementById("pDesc");
   let iYear = document.getElementById("pYear");
       icond.innerHTML ="<b>Condition:</b> " + productItems.cond;
       iDesc.innerHTML ="<b>Description:</b> " + productItems.desc;
       iYear.innerHTML ="<b>Year:</b> " + productItems.year;

 // Ger modalen en footer med info samt köp knapp
    let footer = document.getElementsByClassName("footermodal");
       modalBuy = document.getElementsByClassName("modalBuy");
       modalBuy[0].onclick = function(){
           console.log("du klickade på köp");
           removedProduct = productList.splice(i, 1);
               cart.push(removedProduct[0]);
               console.log(cart); 
               localStorage.setItem("products", JSON.stringify(productList));
               localStorage.setItem("cart", JSON.stringify(cart));
               modal.style.display="none";
               createProducts();
               console.log(cart.lenght);
                console.log(productList.lenght);
               
       }

 //stänger mobal vid klick på kryss
   let close = document.getElementsByClassName("close")[0];
       close.onclick = function(){
       
       modal.style.display="none";
       }

    
 //stänger modal om du klickar utanför modalen
   window.onclick = function(event){
       if (event.target == modal) {
       modal.style.display = "none";
   } 
 }
}


    function createProducts(){

        for (let i = 0; i < productList.length; i++) {
            let proCon = $("#productCont").attr("class","row");
            let borderDiv = $("<div>").attr("class", "col-12 col-md-6, col-lg-4 p-2").appendTo(proCon);
            let productDiv = $("<div>").attr("class", "productDiv col-12 p-0").appendTo(borderDiv);
            let photoDiv = $("<div></div>").attr("class", "col-12 p-0 photoDiv").appendTo(productDiv);
            let photoShow = $("<img>").attr("src", productList[i].photo).appendTo(photoDiv).attr("class", "photos");
            let infoDiv = $("<div>").attr("class", "row infoDiv p-0 m-0").appendTo(productDiv);
            let innerInfo = $("<div>").attr ("class", "col-12 innerDiv p-0 m-0").appendTo(infoDiv);
            let rowInner = $("<div>").attr ("class", "row infoRow p-0 m-0").appendTo(innerInfo);
            let titleSpan = $("<span>").attr("class", "col-12 m-0 title").html(productList[i].name).appendTo(rowInner);
            let descSpan = $("<span>").attr("class", "col-12 m-0 description").html("<b>Condition </b>" + productList[i].cond +".").appendTo(rowInner);
            if (productList[i].cond == "New"){
                $(descSpan).html("<b>Condition: </b>" + "\u2605 \u2605 \u2605 \u2605 \u2605");
            }  
            if (productList[i].cond == "Great"){
                $(descSpan).html("<b>Condition: </b>" + "\u2605 \u2605 \u2605 \u2605");
                }
            if (productList[i].cond == "Good"){
                $(descSpan).html("<b>Condition: </b>" + "\u2605 \u2605 \u2605");
                }
            if (productList[i].cond == "Okey"){
                $(descSpan).html("<b>Condition: </b>" + "\u2605 \u2605");
                }
            if (productList[i].cond == "Bad"){
                $(descSpan).html("<b>Condition: </b>" + "\u2605");
            }
            let priceSpan = $("<span>").attr("class", "col-12 m-0 price").html(productList[i].price).appendTo(rowInner);
            let buttonDiv = $("<div>").attr("class", "row col-12 buttonDiv").appendTo(infoDiv);
            let modalBut = $("<button>").attr("type","button").attr("class", "col-5").text("Read more").appendTo(buttonDiv);
            let buyBut = $("<button>").attr("type","button").attr("class", "col-5").text("Buy").appendTo(buttonDiv);
            
            $(modalBut).on("click", function() {
                presentModal(productList[i], i);
            });
            
            $(buyBut).on("click", function(){
                removedProduct = productList.splice(i, 1);
                cart.push(removedProduct[0]); 
                badge = $("#badge").text(cart.length);
                localStorage.setItem("products", JSON.stringify(productList));
                localStorage.setItem("cart", JSON.stringify(cart));
                $("#productCont").html("");
                createProducts();
              });
            } 
        }

    createProducts();


    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});

//goToTopBtn end
});