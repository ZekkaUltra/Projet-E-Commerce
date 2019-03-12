$.get('http://localhost:3000/', function(response){
console.log(response);
response.forEach(function(items){
	new Produits(items.produits,items.url,items.prix);
    console.log(items);
})

})
var produits = [];


class Produits {
	constructor(name, url, prix) {
        this.name = name;
        this.url = url;
        this.prix = prix;
        this.parent = document.body;
        this.create();
        this.setAttr();
        this.append();
        this.fill();
        produits.push(this);
}
create() {
        this.cadre = document.createElement('div');
        this.titre = document.createElement('h1');
        this.cadreIMG = document.createElement('div');
        this.img = document.createElement('img');
        this.p1 = document.createElement('p');
}
setAttr() {
        this.cadre.setAttribute("class", "cadre");
        this.cadreIMG.setAttribute("class", "cadreIMG");
        this.img.setAttribute("src", this.url);
}
append() {
        this.parent.appendChild(this.cadre);
        this.cadre.appendChild(this.titre);
        this.cadre.appendChild(this.cadreIMG);
        this.cadreIMG.appendChild(this.img);
        this.cadreIMG.appendChild(this.p1);
}
fill() {
        this.titre.innerHTML = this.name;
        this.p1.innerHTML = this.prix + "€";
        }
}
/*
=======
	constructor(name, prix, url) {
        this.name = name;
        this.prix = prix;
        this.url = url;
        produits.push(this);
	}
}


>>>>>>> 6c2af928eb9ead5445638f018b9a5e17aa27b0aa
var page = document.createElement('div');
page.setAttribute('id', "page");

document.body.appendChild(page);

document.getElementById('page').style.display = "flex";

<<<<<<< HEAD
produit.forEach(function(products, i){
    var elProduits = document.createElement('div');
    
    elProduits.setAttribute('id', products.produits);
    
    page.appendChild(elProduits);
    
    document.getElementById(products.produits).style.display ="grid";
    
    document.getElementById(products.produits).style.border = "1px solid black";
    
    document.getElementById(products.produits).style.width = "300px";
    
    document.getElementById(products.produits).style.height = "300px";
    
    document.getElementById(products.produits).style.margin = "10px";
    
    document.getElementById(products.produits).style.textAlign = "center";
    
    var article = document.createElement('p', "name");
    var articleText = document.createTextNode(products.produits);
=======
produits.forEach(function(products, i){
    var elProduits = document.createElement('div');
    
    elProduits.setAttribute('id', products.name);
    
    page.appendChild(elProduits);
    
    document.getElementById(products.name).style.display ="grid";
    
    document.getElementById(products.name).style.border = "1px solid black";
    
    document.getElementById(products.name).style.width = "300px";
    
    document.getElementById(products.name).style.height = "300px";
    
    document.getElementById(products.name).style.margin = "10px";
    
    document.getElementById(products.name).style.textAlign = "center";
    
    var article = document.createElement('p', "name");
    var articleText = document.createTextNode(products.name);
>>>>>>> 6c2af928eb9ead5445638f018b9a5e17aa27b0aa
    article.appendChild(articleText);
    
    elProduits.appendChild(article);
    
    var imageProduits = document.createElement('img');
    imageProduits.setAttribute('src',products.url);
    imageProduits.setAttribute('class', "image");
    imageProduits.setAttribute('id', "imageProd");
    
    imageProduits.setAttribute('height', 200);
    
    elProduits.appendChild(imageProduits);
    
    if (imageProduits.className === "image") {
        imageProduits.style.border = "0.1em solid black";
        imageProduits.style.margin = "auto";
        imageProduits.style.width = "auto";
        imageProduits.style.marginLeft = "auto";
        imageProduits.style.marginRight = "auto";
    } else {
        return ("pas de css imageProduits");
    }
    
    var prixbtnDiv = document.createElement('button');
    prixbtnDiv.setAttribute('id', "btn");
    prixbtnDiv.setAttribute('class', "btnClass");
    prixbtnDiv.innerHTML="Buy";
    
    
    elProduits.appendChild(prixbtnDiv);
            if(prixbtnDiv.className === "btnclass") {
                prixbtnDiv.style.display = "flex";
                
                prixbtnDiv.style.justifyContent = "center";
                
            } else {
                return ("pas de css prix et bouton");
            }
    
       var prixDiv = document.createElement('div');
           prixDiv.setAttribute('id', "prix");
           prixDiv.setAttribute('class', "prixClass");
    
    prixbtnDiv.appendChild(prixDiv);
    
    if (prixDiv.className === "prixClass") {
        prixDiv.style.marginLeft = "auto";
        prixDiv.style.marginRight = "auto";
        prixDiv.style.marginTop = "auto";
        prixDiv.style.marginBottom = "auto";
    } else {
        return ("pas de css Price");
    }
    
    var btnDiv = document.createElement('div');
        btnDiv.setAttribute('id', "btnDiv");
        btnDiv.setAttribute('class',"btnDivClass");
    
    if (btnDiv.className === "btnDivClass") {
        prixDiv.style.marginLeft = "auto";
        prixDiv.style.marginRight = "auto";
        prixDiv.style.marginTop = "auto";
        prixDiv.style.marginBottom = "auto";
    } else {
        return ("pas de css btn");
    }
    var prix = document.createElement('p', "price");
        prixDiv.appendChild(prix);
    var prixText = document.createTextNode(products.prix + "€");
        prix.appendChild(prixText);
    
    var btn = document.createElement("BUTTON");
        btnDiv.appendChild(btn);
    var t = document.createTextNode("BUY");
        btn.appendChild(t);
    
    var jaimeDiv = document.createElement('div');
        jaimeDiv.setAttribute('id', "jaime");
        jaimeDiv.setAttribute('class', "jaimelaclass");
        prixbtnDiv.appendChild(jaimeDiv);
    if(jaimeDiv.className === "jaimelaclass"){
    }
        var jaimeImage = document.createElement('input');
        jaimeImage.setAttribute('type', "image");
        jaimeImage.setAttribute('id', "imagedelike")
        jaimeImage.setAttribute('class', "imagelaclass");
        
    jaimeImage.addEventListener('click', function(){
        clickit();
    });
    jaimeDiv.appendChild(jaimeImage);
            if (jaimeImage.className === "imagelaclass") {
            
              jaimeImage.style.width = "25px";
              jaimeImage.style.length = "25px";
            } else {
                return ("pas de css image Like");
            }
            if (products.like === true){
             jaimeImage.setAttribute('src',"images/like.gif");
            }
            else {
                jaimeImage.setAttribute('src',"images/like.gif");
            }
function clickit() {
    if (produits.like ===true) {
        produits.like = false;
    } else {
        produits.like =true;
    }
    console.log(produits.like);
    if(tableauDeProduit.like === true ){
        jaimeImage.setAttribute('src', "images/like.gif");
    }
    else{
        jaimeImage.setAttribute('src', "images/like.gif");
    }
    
}
});
*/

