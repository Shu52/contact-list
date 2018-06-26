const ContactCollectionModule = require("./ContactCollection")
const ContactListModule = require("./ContactList")

const deleteContact = () => { //function to delete contact from ContactsAPI
  console.log("delete button clicked", event.currentTarget.parentNode.id) //console log to get section id
  const contactId = event.currentTarget.parentNode.id
  ContactCollectionModule.deleteContact(contactId)//deletes contact based on section id
  .then(() => {
    ContactListModule.buildContactList()//rebuilds dom
  })
}

const contact = Object.create({}, {
  "createContactComponent": {
    value: function(contact) {

      const contactSection = document.createElement("section")// creates section
      contactSection.id = `${contact.id}` //assigns id to section based on contact's id

      for(key in contact){
        if(key === "id") { //for in loop to access keys in contact, creates butn for id key instead paragraph element
          const deleteButton = document.createElement("button")
          deleteButton.textContent = "Delete"
          deleteButton.addEventListener("click", deleteContact)
          contactSection.appendChild(deleteButton)
        } else {
          const paraElement = document.createElement("p")
          paraElement.textContent = `${key}: ${contact[key]}` //key and key value
          contactSection.appendChild(paraElement)
        }
      }

      return contactSection
    }
  }
})

module.exports = contact
