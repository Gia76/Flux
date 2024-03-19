function buildMenu()
["Hem", "hem.html"],
    ["Designers", "designers.html"],
    ["Nyheter", "nyheter.html"],
    ["Erbjudande", "https:https://lindapandir.wordpress.com/"],
    ["Kontakt", "kontakt.html"]
    ["Varukorg", "kassa.html"]
    ["logo", "menu"]


function buildMenu() {
    var links = [
        ["Nyheter", "index.html"],
        ["Varukorg", "kassa.html"],


    ]
    var content = ""
    for (var i = 0; i < links.length; i++) {
        var text = links[i][0]
        var adress = links[i][1]

        content = content + "<li><a href=\"" + adress + "\">" + text + "</a></li>"
        // <li><a href="index.html">Startsidan</a></li>

    }

    document.getElementById("menu").innerHTML = content
}



function sayHello(thename) {
    document.getElementById("mytext").innerHTML = "Hejsan, " + thename
}

function sayHelloPopUp(thetext) {
    window.alert(thetext)
}


function calculate() {
    var tal1 = document.getElementById("tal1").value
    var tal2 = document.getElementById("tal2").value

    var result = parseInt(tal1) + parseInt(tal2)

    document.getElementById("resultat").innerHTML = result
}

function multiplytable(factor) {
    var showtable = document.getElementById("showtable")
    var content = ""
    for (var i = 1; i < 11; i++) {
        content = content + i + "x" + factor + "=" + + i * 7 + "<br>"
    }

    showtable.innerHTML = content
}


funtion()



const homeButton = document.getElementById('hem');
const aboutButton = document.getElementById('Designers');
const nyheterButton = document.getElementById('Nyheter');
const erbjudandeButton = document.getElementById('Erbjudande');
const contactButton = document.getElementById('Kontakt');

const homeButton = document.getElementById('hem');
const aboutButton = document.getElementById('Designers');
const nyheterButton = document.getElementById('Nyheter');
const erbjudandeButton = document.getElementById('Erbjudande');
const contactButton = document.getElementById('Kontakt');


function()
.flexcontainer{

    display: flex; flex - direction: row; padding: 20px;


}  
    
.imagediv{

    height: 300px;

}  
    
.product

{

    border: 1px solid grey; margin: 10px; padding: 10px;

}  
    
ul {

    margin: 10; padding: 0; list - style - type: none;

}  
    
li{

    margin: 10px;

}  
    
.lägg i varukorg{
    border: 1px solid black;
    margin: 10px;
    padding: 10px; font - family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans - serif;

}  
    
.varukorg{
    border: 1px solid black;
    padding: 5px;
    margin: 5px; border - radius: 4px;

}  
    
.{
    text - decoration: none;

}

function buildFooter() {
    var footer = document.createElement('footer');

    var contactHeader = document.createElement('h2');
    contactHeader.textContent = "Kontakta oss";
    footer.appendChild(contactHeader);

    var addressParagraph = document.createElement('p');
    addressParagraph.textContent = "Adress: Follingbogatan 24, Bromma, Sverige";
    footer.appendChild(addressParagraph);

    var phoneParagraph = document.createElement('p');
    phoneParagraph.textContent = "Telefon: 08-800 30 30";
    footer.appendChild(phoneParagraph);

    var emailParagraph = document.createElement('p');
    emailParagraph.textContent = "modehusetflux@info.com";
    footer.appendChild(emailParagraph);

    var contactButton = document.createElement('button');
    contactButton.textContent = "Kontakta oss";
    footer.appendChild(contactButton);

    document.body.appendChild(footer);
}

