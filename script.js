// Hamburger Menu
function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    const hamburger = document.getElementById("hamburger");
    const overlay = document.getElementById("menu-overlay");

    menu.classList.toggle("open");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("show");
}

function closeMenu() {
    const menu = document.getElementById("nav-menu");
    const hamburger = document.getElementById("hamburger");
    const overlay = document.getElementById("menu-overlay");

    menu.classList.remove("open");
    hamburger.classList.remove("active");
    overlay.classList.remove("show");
}

// Email
function sendMail(){
    var params = {
        Name: document.getElementById("Name").value,
        Email: document.getElementById("Email").value,
        Message: document.getElementById("Message").value,
    };

    const serviceId = "service_vvosnlj";
    const templateId = "template_qxd8zvq";

    emailjs.send(serviceId, templateId, params)
    .then(res => {
        document.getElementById("Name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Message").value = "";
        console.log(res);
        alert("Message sent successfully");
    })
    .catch((err) => console.log(err));
}
