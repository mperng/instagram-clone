const images = document.querySelector("#gallery").querySelectorAll(".photo");

for (let i = 0; i < images.length; i++) {
  const image = images[i];
  const photoSrc = image.getAttribute("src");
  const description = image.getAttribute("alt");
  image.addEventListener("click", function () {
    openModal(photoSrc, description);
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

function openModal(photoSrc, description) {
  modalImage.setAttribute("style", "background-image:url(" + photoSrc + ")");
  modalDescription.innerHTML = description;
  modalOverlay.classList.toggle("closed");
}

const modalCloseButton = document.querySelector("#modal-close-button");
modalCloseButton.addEventListener("click", closeModal);
