function load(path) {
    document.getElementById("content").innerHTML = `<object type="text/html" data="partials/${path}.html"></object>`;
};

window.onhashchange = function(event) {
    event.preventDefault();
    const url = window.location.href;
    const path = url.split(".com")[1];
    if(path === undefined) return;
    console.log(`loading ${path}`);
    load(path);
};