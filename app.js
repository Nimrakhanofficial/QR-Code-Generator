function generateQR(){
    let input = document.getElementById('text').value;
    if (!input) return alert('Please enter some text or URL!');
    let qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(input)}`;
    document.getElementById('qrBox').innerHTML = `<img src="${qrImage}" alt="QR Code">`;
}