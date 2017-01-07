document.addEventListener("onload", function() {
    const url = window.location.href;
    const path = url.split(".com")[1];
    console.log(`loading ${path}`);
    load(path);
});

function load(path) {
    document.getElementById("content").innerHTML = `<object type="text/html" data="partials/${path}.html"></object>`;
};