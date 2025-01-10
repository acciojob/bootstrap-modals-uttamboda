//your code here
 const openModalButton = document.getElementById('open-modal');
    const modal = new bootstrap.Modal(document.getElementById('newton-modal'));

    openModalButton.addEventListener('click', function () {
      modal.show();
    });