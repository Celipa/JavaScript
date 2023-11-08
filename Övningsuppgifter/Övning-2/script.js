    // Get the modal popup window
    var modal = document.getElementById("popup");

    // Get the button that opens the modal
    var btn = document.getElementsByTagName("button")[0];

    // Get the close button
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    function openModal() {
      modal.style.display = "block";
    }

    // When the user clicks on the close button or the background, close the modal
    function closeModal() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }