// Get the modal - On the modal container
let contactModal = document.getElementById("contact-modal");

// Get the thank you modal - On the modal container
let thanksModal = document.getElementById("thank-you-modal");

// Get the button that opens the modal - triggers the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let closeContactModal = document.getElementsByClassName("closeContactModal")[0];
let closeThanksModal = document.getElementsByClassName("closeThanks")[0];


// When the user clicks on the button, open the modal
btn.onclick = function () {
    contactModal.style.display = "block";
}

// When the user clicks on (x) in the contact modal, close the modal
closeContactModal.onclick = function () {
    contactModal.style.display = "none";
}

// When the user clicks on  (x) in the thanks modal, close the modal
closeThanksModal.onclick = function () {
    thanksModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
    if (event.target == thanksModal) {
        thanksModal.style.display = "none";
    }
}