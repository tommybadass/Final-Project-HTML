document.addEventListener("DOMContentLoaded", function () {
    // Handle contact form submission
    var forms = document.getElementsByTagName("form");
    if (forms.length > 0) {
        var contactForm = forms[0]; // Assuming the contact form is the first form on the page

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
            alert("Message submitted"); // Show message for contact form
            contactForm.reset(); // Optionally reset the form
        });
    }

    // Handle add to cart button clicks
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            if (this.innerText === "Add to Cart") {
                alert("Item added to cart"); // Show message for add to cart
            }
        });
    }
});
