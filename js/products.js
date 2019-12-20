$(document).ready (function(){
    let productList = JSON.parse(localStorage.getItem("products")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let badge = $("#badge").text(cart.length);
    let searchRes = [];
 

    //Mall för objekten
    function Products(){
    this.name;
    this.desc;
    this.cond;
    this.year;
    this.price;
    this.photo;
    this.categ;
    }
    
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

    function buildProductItems(pitems){

    let iphone7 = new Products();
    iphone7.name = "Iphone 7";
    iphone7.desc = "Iphone 7 in good condition, has always been used with glassprotection.";
    iphone7.cond = "Good";
    iphone7.year = "2015";
    iphone7.price = 2000 + "kr";
    iphone7.photo = "../img/Iphone7.jpg";
    iphone7.categ ="Phones";
    
    let appleTv = new Products();
    appleTv.name = "AppleTv 4K";
    appleTv.desc = "32 GB, HDMI cable included.";
    appleTv.cond = "Great";
    appleTv.year = "2017";
    appleTv.price = 1200 + "kr";
    appleTv.photo = "../img/appletv.jpg";
    appleTv.categ = "Accessories";

    let nikonD810 = new Products();
    nikonD810.name = "Nikon D810";
    nikonD810.desc = "28347 exposures, cardboard and manual included.";
    nikonD810.cond = "Great";
    nikonD810.year = "2018";
    nikonD810.price = 11200 + "kr";
    nikonD810.photo = "../img/Nikond810.jpg";
    nikonD810.categ = "Camera";


    let playstation4 = new Products();
    playstation4.name = "Playstation 4";
    playstation4.desc = "2 consoles are included.";
    playstation4.cond = "Great";
    playstation4.year = 2017 + "kr";
    playstation4.price = "2400 kr";
    playstation4.photo = "../img/Playstation4.jpg";
    playstation4.categ = "Accessories";


    let sonyk = new Products();
    sonyk.name = "Sony DSC-100M3";
    sonyk.desc = "20.1 megapixel Sony DSC-100M3 Cyber-Shoot, 3 inch LCD screen that can be angled. Full HD movies.";
    sonyk.cond = "Okey";
    sonyk.year = "2017";
    sonyk.price = 1000 + "kr";
    sonyk.photo = "../img/sonyDSC.jpg";
    sonyk.categ = "Camera";


    let espressobryggare = new Products();
    espressobryggare.name = "ASCA Dream Polished";
    espressobryggare.desc = "Unused since 2011. Including Lux coffee grinder and barista press handles. Stainless steel.";
    espressobryggare.cond = "Good";
    espressobryggare.year = "2005";
    espressobryggare.price = 4000 + "kr";
    espressobryggare.photo = "../img/espresso.jpg";
    espressobryggare.categ = "Accessories";


    let samsungTv = new Products();
    samsungTv.name = "Samsung 75 tum HDR";
    samsungTv.desc = "Samsung 75 inch HDR 8 Series Premium Tv. Supplied with Vogel's thin wall mount.";
    samsungTv.cond = "Fint skick";
    samsungTv.year = "2018";
    samsungTv.price = 15500 + "kr";
    samsungTv.photo = "../img/samsungtv.jpg";
    samsungTv.categ = "TV";


    let epson = new Products();
    epson.name = "Epson 4K Projektor";
    epson.desc = "EH-TW 9300 Use only a few times, recently serviced with a new lamp. ";
    epson.cond = "Great";
    epson.year = "2017";
    epson.price = 1200 + "kr";
    epson.photo = "../img/epson.jpg";
    epson.categ = "Accessories";

    let googleHome = new Products();
    googleHome.name = "Google Home Mini";
    googleHome.desc = "Only used in 3 months.";
    googleHome.cond = "Great";
    googleHome.year = "2019";
    googleHome.price = 250 + "kr";
    googleHome.photo = "../img/googlehome.png";
    googleHome.categ = "Accessories";

    let philipsTv = new Products();
    philipsTv.name = "Philips Tv";
    philipsTv.desc = "42 inch TV in good condition, it is an older model but still works well.";
    philipsTv.cond = "Okey";
    philipsTv.year = "2000";
    philipsTv.price = 400 + "kr";
    philipsTv.photo = "../img/philipstv.png";
    philipsTv.categ = "TV";

    let motorola = new Products();
    motorola.name = "Motorola Moobile";
    motorola.desc = "Motorola Moto G7 Power is a great phone only used one month.";
    motorola.cond = "Great";
    motorola.year = "2019";
    motorola.price = 1200 + "kr";
    motorola.photo = "../img/motorola.png";
    motorola.categ = "Phones";

    let jbl = new Products();
    jbl.name = "JBL, Infinity och Akai";
    jbl.desc = "record player, included 500 mixed LP discs.";
    jbl.cond = "Good";
    jbl.year = "1985";
    jbl.price = 800 + "kr";
    jbl.photo = "../img/jbl.png";
    jbl.categ = "Accessories";

    let nikond750 = new Products();
    nikond750.name = "Nikon d 750";
    nikond750.desc = "Nikon d 750, 12465 exposures.";
    nikond750.cond = "Good";
    nikond750.year = "2014";
    nikond750.price = 7900 + "kr";
    nikond750.photo = "../img/nikond750.png";
    nikond750.categ = "Camera";

    let hpcomputer = new Products();
    hpcomputer.name = "HP Elitebook 8470p";
    hpcomputer.desc = "HP Elitebook 8470p";
    hpcomputer.cond = "Good";
    hpcomputer.year = "2018";
    hpcomputer.price = 1600 + "kr";
    hpcomputer.photo = "../img/hpcomputer.png";
    hpcomputer.categ = "Computers";

    productList.push(iphone7);
    productList.push(appleTv);
    productList.push(nikonD810);
    productList.push(playstation4);
    productList.push(sonyk);
    productList.push(espressobryggare);
    productList.push(samsungTv);
    productList.push(epson);
    productList.push(googleHome);
    productList.push(philipsTv);
    productList.push(motorola);
    productList.push(jbl);
    productList.push(hpcomputer);

    localStorage.setItem("products", JSON.stringify(productList));
    localStorage.setItem("cart", JSON.stringify(cart));
}
    // om localstorage listan redan finns, skapa den inte igen.
    if(localStorage.getItem("products") === null) {
     buildProductItems();
}

    // skapar upp objekten / produkterna samt matchar condition mot stjärnor (great/good/bad)

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
                $(descSpan).html("<b>Condition:</b>" + "\u2605 \u2605 \u2605 \u2605 \u2605");
            }  
            if (productList[i].cond == "Great"){
                $(descSpan).html("<b>Condition:</b>" + "\u2605 \u2605 \u2605 \u2605");
                }
            if (productList[i].cond == "Good"){
                $(descSpan).html("<b>Condition:</b>" + "\u2605 \u2605 \u2605");
                }
            if (productList[i].cond == "Okey"){
                $(descSpan).html("<b>Condition:</b>" + "\u2605 \u2605");
                }
            if (productList[i].cond == "Bad"){
                $(descSpan).html("<b>Condition:</b>" + "\u2605");
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

    // presenterar varje kategori vid knapp på vald kategorik
    $(".categButton").on("click", function(){
        searchRes =[];
        
        $("#productCont").html(""); //tömmer Div:en som presnterar produkter
    
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].categ == $(this).text())
             searchRes.push(productList[i]);  
             
            }
            let bigtitelDiv =$("<div>").attr("class", "col-12").appendTo("#productCont");
            let bigTitle = $("<div>").html("<h4>" + $(this).text() + "</h4>").appendTo(bigtitelDiv);
            let hrbreak = $("<hr>").appendTo(bigTitle);
            
        for (let i = 0; i < searchRes.length; i++) {

         let proCon = $("#productCont").attr("class","row");
         let borderDiv = $("<div>").attr("class", "col-12 col-md-6, col-lg-4 p-2").appendTo(proCon);
         let productDiv = $("<div>").attr("class", "productDiv col-12 p-0").appendTo(borderDiv);
         let photoDiv = $("<div></div>").attr("class", "col-12 p-0 photoDiv").appendTo(productDiv);
         let photoShow = $("<img>").attr("src", searchRes[i].photo).appendTo(photoDiv).attr("class", "photos");
         let infoDiv = $("<div>").attr("class", "row infoDiv p-0 m-0").appendTo(productDiv);
         let innerInfo = $("<div>").attr ("class", "col-12 innerDiv p-0 m-0").appendTo(infoDiv);
         let rowInner = $("<div>").attr ("class", "row infoRow p-0 m-0").appendTo(innerInfo);
         let titleSpan = $("<span>").attr("class", "col-12 m-0 title").html(searchRes[i].name).appendTo(rowInner);
         let descSpan = $("<span>").attr("class", "col-12 m-0 description").html("<b>Condition </b>" + searchRes[i].cond +".").appendTo(rowInner);
         if (searchRes[i].cond == "New"){
             $(descSpan).html("<b>Condition:</b>" + " \u2605 \u2605 \u2605 \u2605 \u2605");
         }  
         if (searchRes[i].cond == "Great"){
             $(descSpan).html("<b>Condition:</b>" + " \u2605 \u2605 \u2605 \u2605");
             }
         if (searchRes[i].cond == "Good"){
             $(descSpan).html("<b>Condition:</b>" + " \u2605 \u2605 \u2605");
             }
         if (searchRes[i].cond == "Okey"){
             $(descSpan).html("<b>Condition:</b>" + " \u2605 \u2605");
             }
         if (searchRes[i].cond == "Bad"){
             $(descSpan).html("<b>Condition:</b>" + " \u2605");
         }
         let priceSpan = $("<span>").attr("class", "col-12 m-0 price").html(searchRes[i].price).appendTo(rowInner);
         let buttonDiv = $("<div>").attr("class", "row col-12 buttonDiv").appendTo(infoDiv);
         let modalBut = $("<button>").attr("type","button").attr("class", "col-5").text("Read more").appendTo(buttonDiv);
         let buyBut = $("<button>").attr("type","button").attr("class", "col-5").text("Buy").appendTo(buttonDiv);
           $(modalBut).on("click", function() {
               presentModal(productList[i], i);
           });
        }
    });
    // presenterar dom 6 senaste produkterna vid klick på den kategorin.
    $("#latest").on("click", function(){
        $("#productCont").html("");
            let bigtitelDiv =$("<div>").attr("class", "col-12").appendTo("#productCont");
            let bigTitle = $("<div>").html("<h4>Latest Products</h4>").appendTo(bigtitelDiv);
            let hrbreak = $("<hr>").appendTo(bigTitle);
             for (var i = productList.length - 1; i >= 0; --i) {
            if (i === 3) { break; }

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
                $(descSpan).html("<b>Condition:</b>" + " \u2605 \u2605 \u2605 \u2605 \u2605");
            }  
            if (productList[i].cond == "Great"){
                $(descSpan).html("<b>Condition:</b>" + " \u2605 \u2605 \u2605 \u2605");
                }
            if (productList[i].cond == "Good"){
                $(descSpan).html("<b>Condition:</b>" + " \u2605 \u2605 \u2605");
                }
            if (productList[i].cond == "Okey"){
                $(descSpan).html("<b>Condition:</b>" + " \u2605 \u2605");
                }
            if (productList[i].cond == "Bad"){
                $(descSpan).html("<b>Condition:</b>" + " \u2605");
            }
            let priceSpan = $("<span>").attr("class", "col-12 m-0 price").html(productList[i].price).appendTo(rowInner);
            let buttonDiv = $("<div>").attr("class", "row col-12 buttonDiv").appendTo(infoDiv);
            let modalBut = $("<button>").attr("type","button").attr("class", "col-5").text("Read more").appendTo(buttonDiv);
            let buyBut = $("<button>").attr("type","button").attr("class", "col-5").text("Buy").appendTo(buttonDiv);
              $(modalBut).on("click", function() {
                  presentModal(productList[i], i);
              });
           }
    });

});