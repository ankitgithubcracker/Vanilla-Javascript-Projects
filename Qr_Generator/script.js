let generateBtn = document.querySelector("#generateBtn");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");
let imgBox = document.querySelector(".imgBox");

generateBtn.addEventListener('click', () => {
    generateQR();
});

function generateQR(){
    if (qrText.value.length === 0) {
        alert("Enter the text or URL");
    } else {
        imgBox.style.display = "block"
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`
    }
}