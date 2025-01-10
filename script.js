//your code here
 const openModalButton = document.getElementById('open-modal');
    const modal = new bootstrap.Modal(document.getElementById('newton-modal'));

    // Trigger the modal when the button is clicked
    openModalButton.addEventListener('click', function () {
      modal.show();
    });