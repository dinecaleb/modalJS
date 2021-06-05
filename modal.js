    
    
    class Modal extends HTMLElement {
        constructor() {
          super();
        }

        
      connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" type="text/css" media="screen" href="modal.css" />
          <div class="modal">
          <div class="modal-content">
            <span class="close-button" onclick="toggleModal()">&times;</span>
    
            <div class="modalBody">
              <h3 id="modalQuestion"></h3>
    
              <div class="confirmButtons">
                <button class="confirmBtn" onclick="confirm('Yes')">Yes</button>
                <button class="confirmBtn" onclick="confirm('Cancel')">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        `;
      }
    }

    
    customElements.define('modal-component', Modal);


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