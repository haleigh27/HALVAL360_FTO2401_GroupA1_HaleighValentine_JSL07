document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm'); // 13
    const modal = document.getElementById('modal'); //27
    const certificateContent = document.getElementById('certificateContent'); // 30
    const closeModal = document.querySelector('.close'); // 29

    // Hide the modal initially
    modal.style.display = 'none';

    cardForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // 🚨 Get input values
        const studentNameInput = document.getElementById('studentName');
        const personalMessageInput = document.getElementById('personalMessage');
        const courseNameInput = document.getElementById('courseName');

        const studentName = studentNameInput.value;
        const personalMessage = personalMessageInput.value;
        const courseName = courseNameInput.value.trim() !== '' ? courseNameInput.value : '';

        if (studentName.trim() === '' || personalMessage.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        // 🚨 Generate certificate content dynamically
        certificateContent.innerHTML = `
      <h1 style="font-weight:500">Certificate of Achievement</h1>
      <p>This is to certify that</p>
      <h3 style="font-weight:500">${studentName}</h3>
      <p>has almost completed the<p>
      <h3 style="font-weight:500">${courseName} Course</h3>
      <p>with the legendary perseverance and world-class bad-assery for never giving up🏆</p>
      <img src="logo.png" alt="CodeSpace Logo" style="max-width:50%">
      <p>${personalMessage}</p>
    `;

        //  Display the modal
        modal.style.display = 'block';

        // Clear the form inputs
        studentNameInput.value = '';
        personalMessageInput.value = '';
        if (courseNameInput) courseNameInput.value = '';
    });

    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});
