import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

export default function Attendance() {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      result => {
        alert("Attendance marked: " + result);
        scanner.clear();
      },
      error => console.warn(error)
    );
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">QR Attendance</h1>
      <div id="qr-reader" className="max-w-sm"></div>
    </div>
  );
}
