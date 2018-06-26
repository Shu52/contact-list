const contactCollectionModule = require("./ContactCollection")

const contactList = Object.create({}, {
  "buildContactList": { // builds contact list on dom
    value: function(){
      contactCollectionModule.getContacts()
      .then((response) => { // syntax for .then(resolve,reject(function))
        console.log("all contacts", response)
        const currentListRef = document.querySelector(".list-contacts-article")
        if(currentListRef){ //checks for article section  and removes it before creating new article
          currentListRef.remove()
        }
        const contactsArticle = document.createElement("article")//creates article
        contactsArticle.className = "list-contacts-article"
        const contactModule = require("./Contact")//this require moved into scope to avoid a circular dependency
        response.forEach(contact => {//response is the array given from then method. each contact is then created a html element and then appended to article
          contactsArticle.appendChild(contactModule.createContactComponent(contact))
        });
        document.querySelector("#display-container").appendChild(contactsArticle)//article is appended to the div in index.html
      })
    }
  }
})

module.exports = contactList
