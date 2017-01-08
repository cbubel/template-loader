function load() {
    let path = getPath();
    if(path === "" || path === undefined) path = "home";
    document.getElementById("content").innerHTML = `<object type="text/html" data="partials/${path}.html"></object>`;
};

function getPath() {
    return window.location.href.split("#/")[1];
};

window.onhashchange = function(event) {
    event.preventDefault();
    load();
};

window.onload = function(event) {
    event.preventDefault();
    load();
};