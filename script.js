function copyUPI(id) {
    const upiText = document.getElementById(id).textContent;
    navigator.clipboard.writeText(upiText).then(() => {
        alert("UPI ID copied to clipboard: " + upiText);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
