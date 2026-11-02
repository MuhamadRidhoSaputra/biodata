```javascript
// Menutup navbar mobile setelah menu diklik

const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                new bootstrap.Collapse(navbarCollapse);

            bsCollapse.hide();

        }

    });

});
```
