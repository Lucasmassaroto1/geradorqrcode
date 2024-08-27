document.getElementById('generate-btn').addEventListener('click',function(){
    let text = document.getElementById('text-input').value;

    if(text.trim() !== ""){
        let qrCodeDiv = document.getElementById('qr-code');
        qrCodeDiv.innerHTML = "";

        QRCode.toCanvas(document.createElement('canvas'),text, function(error, canvas){
            if(error) console.error(error)
            qrCodeDiv.appendChild(canvas);

        document.getElementById('download-btn').style.display = 'inline-block';

        document.getElementById('text-input').value = "";

        document.getElementById('download-btn').addEventListener('click', function(){
            let link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'qrcode.png';
            link.click();

        qrCodeDiv.innerHTML = "";
            document.getElementById('download-btn').style.display = 'none';
            });
        });
    } else{
        alert("Preencha o campo com uma URL.")
    }
});
