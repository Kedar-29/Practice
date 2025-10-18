"use client";

import React from "react";
import { jsPDF } from "jspdf";
import QRCode from "qrcode";

interface Product {
  product_name: string;
  product_code: string;
  shelving_code: string;
}

interface QRProps {
  data: Product[];
}

export default function QRLabelPDFGenerator({ data }: QRProps) {
  const generatePDF = async () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const labelsPerPage = 24;
    const labelWidth = 65;
    const labelHeight = 35;
    const marginX = 6;
    const marginY = 12;
    const columnGap = 3;

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const qrValue = `${item.product_code}${item.shelving_code}`.slice(0, 15);
      const qrDataURL = await QRCode.toDataURL(qrValue, { width: 200 });

      // Position calculation (3 columns × 8 rows)
      const indexOnPage = i % labelsPerPage;
      const col = indexOnPage % 3;
      const row = Math.floor(indexOnPage / 3);
      const x = marginX + col * (labelWidth + columnGap);
      const y = marginY + row * labelHeight;

      // Label border
      doc.setDrawColor(180);
      doc.rect(x, y, labelWidth, labelHeight);

      // QR Code (bigger + perfectly centered vertically)
      const qrSize = 30;
      const qrX = x + 3;
      const qrY = y + (labelHeight - qrSize) / 2;
      doc.addImage(qrDataURL, "PNG", qrX, qrY, qrSize, qrSize);

      // Text wrapping helper
      const wrapText = (text: string, maxWidth: number): string[] => {
        const words = text.split(" ");
        const lines: string[] = [];
        let currentLine = words[0];

        for (let j = 1; j < words.length; j++) {
          const testLine = `${currentLine} ${words[j]}`;
          const lineWidth =
            (doc.getStringUnitWidth(testLine) * doc.getFontSize()) /
            doc.internal.scaleFactor;
          if (lineWidth < maxWidth) currentLine = testLine;
          else {
            lines.push(currentLine);
            currentLine = words[j];
          }
        }
        lines.push(currentLine);
        return lines;
      };

      // Product name
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      const productNameLines = wrapText(item.product_name, 28);
      productNameLines.forEach((line, j) =>
        doc.text(line, x + 37, y + 8 + j * 4)
      );

      // Product codes
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      doc.text(`Code: ${item.product_code}`, x + 37, y + 21);
      doc.text(`Shelving: ${item.shelving_code}`, x + 37, y + 26);

      // Add new page after every 24 labels
      if ((i + 1) % labelsPerPage === 0 && i !== data.length - 1) {
        doc.addPage();
      }
    }

    doc.save("QR_Labels.pdf");
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
        Generate QR PDF
      </button>
    </div>
  );
}
