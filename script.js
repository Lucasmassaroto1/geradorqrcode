document.getElementById('generate-btn').addEventListener('click', function() {
    let text = document.getElementById('text-input').value;
    
    if (text.trim() !== "") {
        let qrCodeDiv = document.getElementById('qr-code');
        qrCodeDiv.innerHTML = ""; // Limpar qualquer QR Code existente

        QRCode.toCanvas(document.createElement('canvas'), text, function (error, canvas) {
            if (error) console.error(error)
            qrCodeDiv.appendChild(canvas);

            // Mostrar o botão de download
          document.getElementById('download-btn').style.display = 'inline-block';

            // Adicionar evento de click ao botão de download
          document.getElementById('download-btn').addEventListener('click', function() {
                let link = document.createElement('a');
                link.href = canvas.toDataURL();
                link.download = 'qr-code.png';
                link.click();
            });
        });
    } else {
        alert("Por favor, insira algum texto ou URL.");
    }
});
