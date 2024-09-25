import { useState } from "react"

export const Qrcode = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [QrData, setQrData] = useState("https://mail.google.com/mail/");
    const [QrSize, setQrSize] = useState("")

    function GenerateQR() {
        setLoading(true)
        try {
            const Url = `http://api.qrserver.com/v1/create-qr-code/?
                     size=${QrSize}x${QrSize}&data=${encodeURIComponent(QrData)}`;             
            setImg(Url);
        } catch (error) {
            console.error('Generating error', error);
        } finally {
            setLoading(false);
        }
    }

    function DownloadQR (){

        fetch(img).then((response) => response.blob()).then ((blob) => {
            const link =document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download ="qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body,removeChild(link);

        }).catch((error) => {
            console.error("Error in downloading QR code", error);
        })
    }

    return (
        <div className="app-container">
            <h1>GENERATE QR CODE</h1>
            {loading && <p>Please wait....</p>}
            {img && <img src={img} className="qrcode-Img" />}
            <div>
                <label htmlFor="dataInput" className="Input-label">
                    Data for QR Code :
                </label>

                <input type="text" id="dataInput" value={QrData} placeholder="Enter QR Address"
                    onChange={(e) => setQrData(e.target.value)} />

                <label htmlFor="sizeInput" className="Input-label">
                    Enter QR Size (eg: 150) :
                </label>

                <input type="text" id="sizeInput" value={QrSize} placeholder="Enter QR Size"
                    onChange={(e) => setQrSize(e.target.value)} />

                <button className="generate-button" disabled = {loading} onClick={GenerateQR}>generate QR code</button>
                <button className="download-button" onClick={DownloadQR}>Download QR code</button>
            </div>
            <p className="footer">Designed by <a href="#">Yasik</a></p>
        </div>
    )
}
