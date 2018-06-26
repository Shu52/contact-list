const $ = require("jquery") //WHOOAH jQuery!

const contactCollectionModule = require("./ContactCollection")
const contactListModule = require("./ContactList")

const addNewContact = () => { //function that gets values from the dom and add contact to the ContactAPI
  const newContactName = $(".name-form-field").val()
  const newContactPhone = $(".phone-form-field").val()
  const newContactAddr = $(".addr-form-field").val()
  console.log("add button clicked", newContactName, newContactPhone, newContactAddr);
  contactCollectionModule.postContact(newContactName, newContactPhone, newContactAddr)// call to method to post new contact
  .then((response) => {
    console.log("response", response)
    contactListModule.buildContactList() //call to build dom after updated contactAPI
  })
}

const contactForm = Object.create({}, {
  buildContactForm: {
    value: function() { //builds contact form
      const formArticle = document.createElement("article") //creates article

      const nameSection = document.createElement("section") //creates section

      const nameLabel = document.createElement("label") //creates label and appends to section
      nameLabel.textContent = "Name: "
      nameSection.appendChild(nameLabel)

      const nameField = document.createElement("input")//creates input field and appends to section
      nameField.setAttribute("type", "text")
      nameField.className = "name-form-field"
      nameSection.appendChild(nameField)

      formArticle.appendChild(nameSection) //appends section to form article

      const phoneSection = document.createElement("section") //new section for phone numbers

      const phoneLabel = document.createElement("label") //create label for phone and appends to phone section
      phoneLabel.textContent = "Phone: "
      phoneSection.appendChild(phoneLabel)

      const phoneField = document.createElement("input")//creates input field for phone and appends to phone section
      phoneField.setAttribute("type", "tel")
      phoneField.className = "phone-form-field"
      phoneSection.appendChild(phoneField)

      formArticle.appendChild(phoneSection)// appends phone to articles

      const addrSection = document.createElement("section")// creates section for address

      const addrLabel = document.createElement("label") //creates label for address and appends to section
      addrLabel.textContent = "Address: "
      addrSection.appendChild(addrLabel)

      const addrFieldOne = document.createElement("input") //creates input field for address and appends to address section then to article
      addrFieldOne.setAttribute("type", "text")
      addrFieldOne.className = "addr-form-field"
      addrSection.appendChild(addrFieldOne)
      formArticle.appendChild(addrSection)

      const addButton = document.createElement("button")// creates button
      addButton.textContent = "Add"
      addButton.addEventListener("click", addNewContact)// event listener for button
      formArticle.appendChild(addButton)


      document.querySelector("#display-container").appendChild(formArticle) //appends form to div in index.html
    }
  }
})

module.exports = contactForm
