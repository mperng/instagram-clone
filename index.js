
const images = document.querySelector("#gallery").querySelectorAll(".photo");

for (let image of images) {
  const photoId = image.getAttribute("src").split("/")[4];
  const description = image.getAttribute("alt");
  image.addEventListener("click", function () {
    openModal(photoId, description);
  });
}

const modalImage = document.querySelector("#modal-image");
const modalDescription = document.querySelector("#modal-description").querySelector("p");
const modalOverlay = document.querySelector("#modal-overlay");

function closeModal() {
  modalImage.setAttribute("style", "");
  modalDescription.innerHTML = "";
  modalOverlay.classList.toggle("closed");
}

function openModal(photoId, description) {
  modalImage.setAttribute("style", "background-image:url('https://picsum.photos/id/" + photoId + "/600/600')")
  modalDescription.innerHTML = description;
  modalOverlay.classList.toggle("closed");
}

const modalCloseButton = document.querySelector("#modal-close-button");
modalCloseButton.addEventListener("click", closeModal);
