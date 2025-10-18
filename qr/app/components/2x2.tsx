"use client";

import React from "react";
import QRCode from "react-qr-code";
import "@fontsource/poppins"; // ✅ add this in your project (npm install @fontsource/poppins)

interface Product {
  product_name: string;
  shellwing_code: string;
}

interface QRProps {
  data: Product[];
}

export default function QRLabelSheet2x2({ data }: QRProps) {
  // Group products safely by shelf location
  const shelves = Array.from(
    data.reduce((map, item) => {
      const shelf = item.shellwing_code || "UNKNOWN";
      if (!map.has(shelf)) map.set(shelf, []);
      map.get(shelf)!.push(item);
      return map;
    }, new Map<string, Product[]>())
  );

  // Limit to 4 labels per A4 page (2×2 layout)
  const pageData = shelves.slice(0, 4);

  return (
    <>
      <style>{`
        @page {
          size: A4;
          margin: 0;
        }
        @media print {
          body {
            margin: 0;
          }
        }
        * {
          font-family: "Poppins", sans-serif;
        }
      `}</style>

      <div
        style={{
          width: "210mm",
          height: "297mm",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "5mm",
          padding: "10mm",
          boxSizing: "border-box",
          background: "#fff",
        }}
      >
        {pageData.map(([shelfCode, items], idx) => {
          // Ensure exactly 15 product lines (fill blanks if needed)
          const filledItems = [
            ...items.slice(0, 15),
            ...Array(Math.max(0, 15 - items.length)).fill({
              product_name: "",
              shellwing_code: shelfCode,
            }),
          ];

          // Split into two columns for display
          const half = Math.ceil(filledItems.length / 2);
          const leftItems = filledItems.slice(0, half);
          const rightItems = filledItems.slice(half);

          return (
            <div
              key={idx}
              style={{
                border: "0.6pt solid #000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "6mm",
                textAlign: "center",
                boxSizing: "border-box",
                background: "#fff",
                borderRadius: "3mm",
                boxShadow: "0 0 1mm rgba(0,0,0,0.1)",
              }}
            >
              {/* Shelf Heading */}
              <h2
                style={{
                  fontSize: "13pt",
                  fontWeight: 600,
                  marginBottom: "3mm",
                  letterSpacing: "0.5px",
                }}
              >
                {shelfCode}
              </h2>

              {/* QR Code */}
              <div
                style={{
                  background: "white",
                  padding: "2mm",
                  marginBottom: "4mm",
                }}
              >
                <QRCode value={shelfCode} size={150} />
              </div>

              {/* Product List (2 columns) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: "6mm",
                  width: "100%",
                  marginTop: "4mm",
                  fontSize: "8.5pt",
                  fontWeight: 400,
                  lineHeight: "1.3",
                  textAlign: "left",
                  color: "#000",
                }}
              >
                {/* Left Column */}
                <div>
                  {leftItems.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        marginBottom: "1mm",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.product_name}
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div>
                  {rightItems.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        marginBottom: "1mm",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.product_name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
