    const modal = document.querySelector(".modal");   //modal reference

    function toggleModal() {  //reusable function to toggle the modal
        modal.classList.toggle("show-modal");
    }

    function showModal(question) { //display modal
        document.getElementById("clickConfirmText").innerHTML = null;  //clear any existing confirmation text;
        document.getElementById("modalQuestion").innerHTML = question;
        toggleModal()
    }

    function confirm(option){  //display confirmation text 
        toggleModal() 
        document.getElementById("clickConfirmText").innerHTML = `You just clicked "${option}"`;
    }

    function modalBodyClicked(event) { //if the modal body is clicked, hide the modal
        if (event.target === modal) {  
            toggleModal();
        }
    }

    window.addEventListener("click", modalBodyClicked);