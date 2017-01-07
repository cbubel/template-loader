function load(filename) {
    document.getElementById("content").innerHTML = `<object type="text/html" data="${filename}.html"></object>`;
};