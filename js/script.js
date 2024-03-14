
function loadHeader() {
    var headerContainer = document.createElement('header');
    headerContainer.innerHTML = `
        <h1>Designhuset Flux - Allt inom exlusiv hotcoutor </h1>
    
        
    `;
    document.body.insertBefore(headerContainer, document.body.firstChild);
}


function loadFooter() {
    var footerContainer = document.createElement('footer');
    footerContainer.innerHTML = `
        <p>This is the footer</p>
        <!-- Kontakta oss -->
    `;
    document.body.appendChild(footerContainer);
}

window.onload = function() {
    loadHeader();
    loadFooter();
}