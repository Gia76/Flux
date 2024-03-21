function buildMenu() {
    var links =[
    ["Hem", "index.html"],
    ["Designers", "designers.html"],
    ["Nyheter", "nyheter.html"],
    ["Erbjudande", "https://lindapandir.wordpress.com/"],
    ["Kontakt", "kontakt.html"],
    ["Varukorg", "kassa.html"],
    ["logo", "menu"]
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
    window.alert ("Välj")
    var tal1 = document.getElementById("tal1").value
    var tal2 = document.getElementById("tal2").value

    var result = parseInt(tal1) + parseInt(tal2)

    document.getElementById("resultat").innerHTML = result
}
