// Handle booking form submission
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    
    const table = document.getElementById('table').value;
    const people = document.getElementById('people').value;
    const payment = document.getElementById('payment').value;
    const agreement = document.getElementById('agreement').checked;

    // Validate that all required fields are filled
    if (table && people && payment && agreement) {
        alert('Thank you! Your booking is confirmed.');
        document.getElementById('bookingForm').reset();
    } else {
        alert('Please fill out all fields and agree to the terms.');
    }
});