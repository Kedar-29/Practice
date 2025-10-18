"use client";

import React from "react";
import { jsPDF } from "jspdf";
import QRCode from "qrcode";

interface LabelItem {
  name: string; // Location name
  category: string; // e.g. "Steel Section"
  code: string; // QR + code
}

interface QRProps {
  data: LabelItem[];
}

export default function QRLocationLabelPDF({ data }: QRProps) {
  const generatePDF = async () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Layout parameters
    const labelsPerPage = 12; // 2 columns × 6 rows
    const labelWidth = 100;
    const labelHeight = 45;
    const marginX = 5;
    const marginY = 10;
    const colGap = 3;
    const rowGap = 2;

    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      // Generate QR code image (base64)
      const qrDataURL = await QRCode.toDataURL(item.code, { width: 400 });

      // Grid positioning
      const indexOnPage = i % labelsPerPage;
      const col = indexOnPage % 2;
      const row = Math.floor(indexOnPage / 2);
      const x = marginX + col * (labelWidth + colGap);
      const y = marginY + row * (labelHeight + rowGap);

      // Border
      doc.setDrawColor(0);
      doc.setLineWidth(0.3);
      doc.rect(x, y, labelWidth, labelHeight);

      // 📦 QR Code placement (bigger)
      const qrSize = 35; // Bigger QR (previously 30)
      const qrX = x + 4;
      const qrY = y + (labelHeight - qrSize) / 2;
      doc.addImage(qrDataURL, "PNG", qrX, qrY, qrSize, qrSize);

      // 📋 Text placement beside QR
      const textStartX = qrX + qrSize + 6;
      let currentY = y + 14;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text(`Location: ${item.name}`, textStartX, currentY);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      currentY += 7;
      doc.text(`Code: ${item.code}`, textStartX, currentY);

      currentY += 7;
      doc.text(`Category: ${item.category}`, textStartX, currentY);

      // Add new page after every 12 labels
      if ((i + 1) % labelsPerPage === 0 && i !== data.length - 1) {
        doc.addPage();
      }
    }

    doc.save("QR_Location_Labels.pdf");
  };

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={generatePDF}
        style={{
          background: "#2563eb",
          color: "#fff",
          border: "none",
          padding: "10px 18px",
          borderRadius: "6px",
          fontSize: "15px",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        📄 Generate QR Label PDF
      </button>
    </div>
  );
}
