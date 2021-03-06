let doneCart = [];
$(function(){
    let productList = JSON.parse(localStorage.getItem("products")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let badge = $("#badge").text(cart.length);

    function Products(){
    this.name;
    this.desc;
    this.cond;
    this.year;
    this.price;
    this.photo;
    this.categ;
    }


    function presentModal(productItems){
        document.getElementById("modalPhoto").innerHTML=("");

  //Hämta modal i HTML & Visa den
  let modal = document.getElementById("myModal");
      modal.style.display = "block";
  //Presentera en header i modalen
    let  modalTitle = document.getElementById("modaltitle");
      modalTitle.innerHTML = productItems.name;

  //Visa bild i modalen
  let createImgModal = document.createElement("img");
      createImgModal.src = productItems.photo;
      photoModal = document.getElementById("modalPhoto");
      photoModal.appendChild(createImgModal);

  // Visa annan info om fotografiet
  let icond = document.getElementById("pCond");
  let iDesc = document.getElementById("pDesc");
  let iYear = document.getElementById("pYear");
      icond.innerHTML ="<b>Varans skick:</b> " + productItems.cond;
      iDesc.innerHTML ="<b>Beskrivning:</b> " + productItems.desc;
      iYear.innerHTML ="<b>inköpt år:</b> " + productItems.year;

  // Ger modalen en footer med info
  let footer = document.getElementById("footermodal");
      footer.innerHTML = "";

  //stänger mobal vid klick på kryss
  let close = document.getElementsByClassName("close")[0];
    close.onclick = function(){
        console.log(modal);
        modal.style.display="none";
  }

  //stänger modal om du klickar utanför modalen
  window.onclick = function(event){
      console.log("Clicked somewhere");
      if (event.target == modal) {
        modal.style.display = "none";
    } 
  }
}

    
    localStorage.setItem("cart", JSON.stringify(cart));

    let localProducts = localStorage.getItem("productList") || '[]'; // lägger värdet av todoValue i egen variabel 
    productList = JSON.parse(localProducts); //Gör värdet av valuefrom i todoList
  
    let localCart = localStorage.getItem("cart") || '[]'; // lägger värdet av todoValue i egen variabel 
    cart = JSON.parse(localCart); //Gör värdet av valuefrom i todoList
    console.log(cart);

    function productItems(pitems){

        let iphone7 = new Products();
        iphone7.name = "Iphone 7";
        iphone7.desc = "Fin Iphone 7 som alltid haft skydd av både skal och glasskydd.";
        iphone7.cond = "Fint skick";
        iphone7.year = "2015";
        iphone7.price = 2000;
        iphone7.photo = "../img/Iphone7.jpg";
        iphone7.categ ="phone";
       
        let appleTv = new Products();
        appleTv.name = "AppleTv 4K";
        appleTv.desc = "32 GB, HDMI kabel medföljer.";
        appleTv.cond = "Fint skick";
        appleTv.year = "2017";
        appleTv.price = 1200;
        appleTv.photo = "../img/appletv.jpg";
        appleTv.categ = "accessories";
    
        let nikonD810 = new Products();
        nikonD810.name = "Nikon D810";
        nikonD810.desc = "28347 exponeringar, kartong och manual medföljer.";
        nikonD810.cond = "Topp Skick.";
        nikonD810.year = "2018";
        nikonD810.price = 11200;
        nikonD810.photo = "../img/Nikond810.jpg";
        nikonD810.categ = "camera";
    
    
        let playstation4 = new Products();
        playstation4.name = "Playstation 4";
        playstation4.desc = "medföljer 2 konsoller.";
        playstation4.cond = "Bra skick.";
        playstation4.year = "2017";
        playstation4.price = 2400;
        playstation4.photo = "../img/Playstation4.jpg";
        playstation4.categ = "accessories";
    
    
        let sonyk = new Products();
        sonyk.name = "Sony DSC-100M3";
        sonyk.desc = "20.1 megapixel Sony DSC-100M3 Cyber-Shoot, 3tums LCD skärm som går att vinkla. Filmar i full HD.";
        sonyk.cond = "Okej skick";
        sonyk.year = "2017";
        sonyk.price = 1000;
        sonyk.photo = "../img/sonyDSC.jpg";
        sonyk.categ = "camera";
    
    
        let espressobryggare = new Products();
        espressobryggare.name = "ASCA Dream Polished";
        espressobryggare.desc = "Oanvänd sen 2011. Inklusive Lux kaffekvarn och barrista presshandtag. Rostfritt stål.";
        espressobryggare.cond = "Fint skick";
        espressobryggare.year = "2005";
        espressobryggare.price = 4000;
        espressobryggare.photo = "../img/espresso.jpg";
        espressobryggare.categ = "accessories";
    
    
        let samsungTv = new Products();
        samsungTv.name = "Samsung 75 tum HDR";
        samsungTv.desc = "Samsung 75 tums HDR 8 serien premium Tv. Medföljer Vogels tunna väggfäste.";
        samsungTv.cond = "Fint skick";
        samsungTv.year = "2018";
        samsungTv.price = 15500;
        samsungTv.photo = "../img/samsungtv.jpg";
        samsungTv.categ = "tv";
    
    
        let epson = new Products();
        epson.name = "Epson 4K Projektor";
        epson.desc = "EH-TW 9300 ";
        epson.cond = "Fint skick";
        epson.year = "2017";
        epson.price = 1200;
        epson.photo = "../img/epson.jpg";
        epson.categ = "accessories";
    
        productList.push(iphone7);
        productList.push(appleTv);
        productList.push(nikonD810);
        productList.push(playstation4);
        productList.push(sonyk);
        productList.push(espressobryggare);
        productList.push(samsungTv);
        productList.push(epson);

        for (let i = 0; i < productList.length; i++) {
            let proCon = $("#productCont").attr("class","row");
            let borderDiv = $("<div>").attr("class", "col-12 col-md-6, col-lg-4 p-2").appendTo(proCon);
            let productDiv = $("<div>").attr("class", "productDiv col-12 p-0").appendTo(borderDiv);
            let photoDiv = $("<div></div>").attr("class", "col-12 p-0 photoDiv").appendTo(productDiv);
            let photoShow = $("<img>").attr("src", productList[i].photo).appendTo(photoDiv).attr("class", "photos");
            let infoDiv = $("<div>").attr("class", "row col-12 infoDiv p-0 m-0").appendTo(productDiv);
            let titleSpan = $("<span>").attr("class", "col-12 m-0 title").html(productList[i].name).appendTo(infoDiv);
            let descSpan = $("<span>").attr("class", "col-12 m-0 description").html(productList[i].desc).appendTo(infoDiv);
            let priceSpan = $("<span>").attr("class", "col-12 m-0 price").html(productList[i].price).appendTo(infoDiv);
            let buttonDiv = $("<div>").attr("class", "row col-12 buttonDiv").appendTo(infoDiv);
            let modalBut = $("<button>").attr("type","button").attr("class", "col-5").text("Läs mer").appendTo(buttonDiv);
            let buyBut = $("<button>").attr("type","button").attr("class", "col-5").text("köp").appendTo(buttonDiv);
              $(modalBut).on("click", function() {
                  presentModal(productList[i]);
              });
            }
        
            localStorage.setItem("Products", JSON.stringify(productList)); //sparar i localstorage 
            localStorage.setItem("Cart", JSON.stringify(cart));
        }

    let titlePresented = $("#productResult"); // <ul>
    titlePresented.html("");
    
    let sum = 0;
   
    function printCart() {

        console.log("Start");
        let element = $("#productResult");
        element.html=("");
        
        console.log(cart);
        
 
        
        for(let i = 0; i < cart.length; i++){
            
            sum += parseInt(cart[i].price);
            
            let newRow = $("<li>");
            
            let imgcontainer = $("<div>").addClass("img-container");
            let img = $("<img>").attr("src", cart[i].photo).addClass("img-fluid img-responsive img-thumbnail");
            imgcontainer.append(img);
            let row = $("<hr />");
            let title = $("<span>").html("<h4>" + cart[i].name + "</h4>");
            let price = $("<span>").html(" <b>Pris </b>" + cart[i].price);
            element.append(newRow);
            newRow.append(row).append(imgcontainer).append(title).append(price);

            
            let createDeleteButton = document.createElement("button");
            
            createDeleteButton.setAttribute("type", "button");
            
            createDeleteButton.className = "button";
            createDeleteButton.innerHTML = "Delete";
            newRow.append(createDeleteButton);
            createDeleteButton.addEventListener('click', function() {

                sum =- parseInt(cart[i].price);
                removedProduct = cart.splice(i, 1);
                productList.push(removedProduct[0]); 
                badge = $("#badge").text(cart.length);
                localStorage.setItem("products", JSON.stringify(productList));
                localStorage.setItem("cart", JSON.stringify(cart));
                $("#productResult").html("");
                printCart();
              });

        }
    
    let s = document.getElementById("priceSum");
    s.innerText = sum + " kr";
    
      
    }
  printCart();  

  $("#btnThankYou").on("click", function(){
      cart = [];
    badge = $("#badge").text(cart.length);
    localStorage.setItem("cart", JSON.stringify(cart));
   
  });

  
});
