// Créer un tableau de valeurs (par exemple des prénoms, ou autres plus marrantes) et l’afficher sur une page HTML

function choisirUnePersonne(tab) {
   var indice = Math.floor(Math.random() * tab.length);
   return tab[indice];
}

function main() {
   var promo = ["Abdel","Aurélie","Cheick","Clément","Damien","Didier","Edouard","Franck","Fred","Jean","Laurent","Mokhtar","Olga","Sylvain","Thomas"];

   var qqn = choisirUnePersonne(promo);

   var baliseH1 = document.getElementsByTagName("h1");

   if (baliseH1.length == 0) {
       var balise = document.createElement("h1");
       var text = document.createTextNode(qqn);
       balise.appendChild(text);
       document.body.appendChild(balise);
       // baliseH1 = document.getElementsByTagName("h1");
       // console.log(baliseH1.length);
   }
   else {
       document.getElementsByTagName("h1")[0].innerHTML = qqn;
       
       //document.getElementById("p1").innerHTML = "New text!";
   }
}