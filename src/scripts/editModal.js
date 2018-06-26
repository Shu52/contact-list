const buildModal = () => {
const editModal = document.createElement("section");
editModal.id = "editModalId";
editModal.className = "modal";
editModal.style.display = "block";
document.querySelector(".body-ref").appendChild(editModal);
const modalContent = document.createElement("div");
modalContent.className = "modal-content"
editModal.appendChild(modalContent);
const closeX = document.createElement("span")
closeX.className = "close";
closeX.textContent = "&times";
closeX.appendChild(editModal);
closeX.onclick = function() {
        editModal.style.display = "none";
    }
window.onclick = function(event) {
        if (event.target === editModal) {
            editModal.style.display = "none";
        }
    }
}
module.exports = buildModal;