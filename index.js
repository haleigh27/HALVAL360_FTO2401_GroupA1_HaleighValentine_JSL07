document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');

    // Hide the modal initially
    modal.style.display = 'none';

    //Event listener which produces modal certificate on form submission
    cardForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // 🚨 Get input values
        const studentNameInput = document.getElementById('studentName');
        const personalMessageInput = document.getElementById('personalMessage');
        const courseNameInput = document.getElementById('courseName');

        const studentName = studentNameInput.value;
        const personalMessage = personalMessageInput.value;
        const courseName = courseNameInput.value.trim() !== '' ? courseNameInput.value : '';

        //Checks that a valid student name was entered.
        if (/^[^a-zA-Z]*$/.test(studentName.trim())) {
            return alert(`Student's name must contain letters. \nPlease enter a valid name.`);
        } else if (/[!@#$%&*()_+\=\[\]{};:"\\|,.<>\/?]/.test(studentName.trim())) {
            //checks for all special characters except ^-'
            return alert(`Student's name contains a special character which is not allowed. \nPlease enter a valid name.`);
        } else if (/\d/.test(studentName.trim())) {
            return alert(`Student's name may not contain numbers. \nPlease enter a valid name.`);
        }

        //Checks that the user completed the student name and personal message input fields.
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
            <p>with legendary perseverance and world-class bad-assery for never giving up🏆</p>
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
