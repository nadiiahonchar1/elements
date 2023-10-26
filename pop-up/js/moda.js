(() => {
  const refs = {
    openModalBtnz: document.querySelector("[data-open-modal]"),
    closeModalBtnz: document.querySelector("[data-close-modal]"),
    backdrop: document.querySelector("[data-modal]"),
  };
  refs.openModalBtnz.addEventListener("click", toggleModal);
  refs.closeModalBtnz.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.backdrop.classList.toggle("is-hidden");
  }
})();
