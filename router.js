function load(link_title) {
     document.getElementById("content").innerHTML = `<object type="text/html" data="${link_title}.html"></object>`;
};

document.getElementById("about-link").addEventListener("click", function() {
    load("about");
});

document.getElementById("contact-link").addEventListener("click", function() {
    load("contact");
});


