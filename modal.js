    const modal = document.querySelector(".modal");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function showModal(question) {
        document.getElementById("modalQuestion").innerHTML = question;
        toggleModal()
    }

   

    function confirm(option){
        toggleModal()
        document.getElementById("clickConfirmText").innerHTML = `You just clicked "${option}"`;
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    window.addEventListener("click", windowOnClick);