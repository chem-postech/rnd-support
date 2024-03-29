document.getElementById('submitButton').addEventListener('click', function() {
    const formData = {
        meetingDate: document.getElementById('meetingDate').value,
        startTime: document.getElementById('startTime').value,
        endTime: document.getElementById('endTime').value,
        meetingPlace: document.getElementById('meetingPlace').value,
        meetingTitle: document.getElementById('meetingTitle').value,
        meetingContent: document.getElementById('meetingContent').value,
        participants: document.getElementById('participants').value
    };

    console.log('Form Data:', formData);
    sendDataToGoogleSheet(formData);
});

function sendDataToGoogleSheet(formData) {
    fetch('https://script.google.com/macros/s/AKfycbzfAPwyEyzWXWHMxjRJBIZwIdGXQcLVDhbYNlEqgkUX73zgPFVuBQuuWwVMF_v_IK30/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
