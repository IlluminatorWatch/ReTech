$(document).ready (function(){


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

  // Ger modalen en footer med info
  let footer = document.getElementsByClassName("footermodal");
      modalBuy = document.getElementsByClassName("modalbuy");
     

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

    let localProducts = localStorage.getItem("productList") || '[]'; // lägger värdet av todoValue i egen variabel 
    let productList = JSON.parse(localProducts); //Gör värdet av valuefrom i todoList
  
    let localCart = localStorage.getItem("cart") || '[]'; // lägger värdet av todoValue i egen variabel 
    let cart = JSON.parse(localCart); //Gör värdet av valuefrom i todoList
  
    function productItems(pitems){

        productList = [];
        cart = [];
       

        let iphone7 = new Products();
        iphone7.name = "Iphone 7";
        iphone7.desc = "Iphone 7 in good condition, has always been used with glassprotection.";
        iphone7.cond = "Good";
        iphone7.year = "2015";
        iphone7.price ="2000 kr";
        iphone7.photo = "../img/Iphone7.jpg";
        iphone7.categ ="phone";
       
        let appleTv = new Products();
        appleTv.name = "AppleTv 4K";
        appleTv.desc = "32 GB, HDMI cable included.";
        appleTv.cond = "Great";
        appleTv.year = "2017";
        appleTv.price = "1200 kr";
        appleTv.photo = "../img/appletv.jpg";
        appleTv.categ = "accessories";
    
        let nikonD810 = new Products();
        nikonD810.name = "Nikon D810";
        nikonD810.desc = "28347 exposures, cardboard and manual included.";
        nikonD810.cond = "Great";
        nikonD810.year = "2018";
        nikonD810.price = "11200 kr";
        nikonD810.photo = "../img/Nikond810.jpg";
        nikonD810.categ = "camera";
    
    
        let playstation4 = new Products();
        playstation4.name = "Playstation 4";
        playstation4.desc = "2 consoles are included.";
        playstation4.cond = "Great";
        playstation4.year = "2017";
        playstation4.price = "2400 kr";
        playstation4.photo = "../img/Playstation4.jpg";
        playstation4.categ = "accessories";
    
    
        let sonyk = new Products();
        sonyk.name = "Sony DSC-100M3";
        sonyk.desc = "20.1 megapixel Sony DSC-100M3 Cyber-Shoot, 3 inch LCD screen that can be angled. Full HD movies.";
        sonyk.cond = "Okey";
        sonyk.year = "2017";
        sonyk.price = "1000 kr";
        sonyk.photo = "../img/sonyDSC.jpg";
        sonyk.categ = "camera";
    
    
        let espressobryggare = new Products();
        espressobryggare.name = "ASCA Dream Polished";
        espressobryggare.desc = "Unused since 2011. Including Lux coffee grinder and barista press handles. Stainless steel.";
        espressobryggare.cond = "Good";
        espressobryggare.year = "2005";
        espressobryggare.price = "4000 kr";
        espressobryggare.photo = "../img/espresso.jpg";
        espressobryggare.categ = "accessories";
    
    
        let samsungTv = new Products();
        samsungTv.name = "Samsung 75 tum HDR";
        samsungTv.desc = "Samsung 75 inch HDR 8 Series Premium Tv. Supplied with Vogel's thin wall mount.";
        samsungTv.cond = "Fint skick";
        samsungTv.year = "2018";
        samsungTv.price = "15500 kr";
        samsungTv.photo = "../img/samsungtv.jpg";
        samsungTv.categ = "tv";
    
    
        let epson = new Products();
        epson.name = "Epson 4K Projektor";
        epson.desc = "EH-TW 9300 Use only a few times, recently serviced with a new lamp. ";
        epson.cond = "Great";
        epson.year = "2017";
        epson.price = "1200 kr";
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
            let infoDiv = $("<div>").attr("class", "row infoDiv p-0 m-0").appendTo(productDiv);
            let innerInfo = $("<div>").attr ("class", "col-12 innerDiv p-0 m-0").appendTo(infoDiv);
            let rowInner = $("<div>").attr ("class", "row infoRow p-0 m-0").appendTo(innerInfo);
            let titleSpan = $("<span>").attr("class", "col-12 m-0 title").html(productList[i].name).appendTo(rowInner);
            let descSpan = $("<span>").attr("class", "col-12 m-0 description").html(productList[i].desc).appendTo(rowInner);
            let priceSpan = $("<span>").attr("class", "col-12 m-0 price").html(productList[i].price).appendTo(rowInner);
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

    productItems();
    
    console.log (productList);
    
    });