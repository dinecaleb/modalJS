    const modal = document.querySelector(".modal");

    function toggleModal() {  //reusable function to toggle the modal
        modal.classList.toggle("show-modal");
    }

    function showModal(question) {
        document.getElementById("clickConfirmText").innerHTML = null;  //clear any existing confirmation text;
        document.getElementById("modalQuestion").innerHTML = question;
        toggleModal()
    }

    function confirm(option){
        toggleModal() 
        document.getElementById("clickConfirmText").innerHTML = `You just clicked "${option}"`;
    }

    function modalBodyClicked(event) {
        if (event.target === modal) {  //if the modal body is clicked, hide the modal
            toggleModal();
        }
    }

    window.addEventListener("click", modalBodyClicked);