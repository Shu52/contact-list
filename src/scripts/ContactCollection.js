const $ = require("jquery") //WOOOOAH! jQuery!

const contactCollection = Object.create({}, { //object that holds create,gets, and delete methods
  "postContact": {
    value: function(name, phone, address) { //create new contact method
      return $.ajax({
        url: "http://localhost:3000/contacts",
        method: "POST",
        data: {
          name: name,
          phone: phone,
          address: address
        }
      })
    }
  },
  "getContacts": { // get list of contacts in json
    value: function() {
      return $.ajax("http://localhost:3000/contacts")
    }
  },
  "deleteContact": { // delete contect from contactAPI
    value: function(id){
      return $.ajax({
        url: `http://localhost:3000/contacts/${id}`,
        method: "DELETE"
      })
    }
  }
})

module.exports = contactCollection
