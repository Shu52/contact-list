const contactForm = require("./ContactForm")
const contactList = require("./ContactList")
console.log("contact form module", contactForm);


contactForm.buildContactForm()//call to build form to dom
contactList.buildContactList()// call to build list to dom
