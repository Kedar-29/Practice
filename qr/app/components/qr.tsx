// "use client";

// import React from "react";
// import QRCode from "react-qr-code";

// interface Product {
//   product_name: string;
//   product_code: string;
//   shellwing_code: string;
// }

// interface QRProps {
//   data: Product[];
// }

// export default function QRLabelSheet({ data }: QRProps) {
//   // Only show up to 24 labels (3×8 grid per A4)
//   const pageData = data.slice(0, 24);

//   return (
//     <div
//       style={{
//         width: "210mm",
//         height: "297mm",
//         boxSizing: "border-box",
//         display: "grid",
//         gridTemplateColumns: "repeat(3, 1fr)",
//         gridTemplateRows: "repeat(8, 1fr)",
//         gap: "2mm",
//         margin: 0,
//         padding: 0,
//         background: "#fff",
//         overflow: "hidden",
//       }}
//     >
//       {pageData.map((item, index) => {
//         const qrValue = `${item.product_code}${item.shellwing_code}`.slice(
//           0,
//           15
//         );
//         return (
//           <div
//             key={index}
//             style={{
//               border: "0.3pt solid #ccc",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "flex-start",
//               padding: "2mm",
//               boxSizing: "border-box",
//               borderRadius: "1mm",
//               overflow: "hidden",
//               background: "#fff",
//             }}
//           >
//             {/* QR Code on the left (50%) */}
//             <div
//               style={{
//                 flex: "0 0 50%",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <QRCode value={qrValue} size={80} /> {/* increased size */}
//             </div>

//             {/* Text on the right (50%) */}
//             <div
//               style={{
//                 flex: "0 0 50%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 marginLeft: "2mm",
//               }}
//             >
//               <p style={{ fontSize: "10pt", fontWeight: "bold", margin: 0 }}>
//                 {item.product_name}
//               </p>
//               <p style={{ fontSize: "9pt", margin: 0 }}>
//                 Code: {item.product_code}
//               </p>
//               <p style={{ fontSize: "9pt", margin: 0 }}>
//                 Shellwing: {item.shellwing_code}
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import React from "react";
import QRCode from "react-qr-code";

interface Product {
  product_name: string;
  product_code: string;
  shellwing_code: string;
}

interface QRProps {
  data: Product[];
}

export default function QRLabelSheet({ data }: QRProps) {
  // Limit to 24 labels (3×8 grid per A4)
  const pageData = data.slice(0, 24);

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
      `}</style>

      <div
        style={{
          width: "210mm",
          height: "297mm",
          boxSizing: "border-box",
          background: "#fff",
          padding: "12mm 6mm", // 12mm top/bottom, 6mm sides
          display: "grid",
          gridTemplateColumns: "repeat(3, 65mm)", // 3 labels per row
          gridAutoRows: "35mm", // label height
          rowGap: "0mm", // no vertical gap
          columnGap: "3mm", // horizontal gap
          justifyContent: "center",
          margin: 0,
        }}
      >
        {pageData.map((item, index) => {
          const qrValue = `${item.product_code}${item.shellwing_code}`.slice(
            0,
            15
          );

          return (
            <div
              key={index}
              style={{
                width: "65mm",
                height: "35mm",
                border: "0.3pt solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "1mm", // reduced padding
                boxSizing: "border-box",
                borderRadius: "1mm",
                background: "#fff",
                overflow: "hidden",
              }}
            >
              {/* Left: QR Code */}
              <div
                style={{
                  flex: "0 0 45%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <QRCode value={qrValue} size={70} /> {/* bigger QR */}
              </div>

              {/* Right: Text */}
              <div
                style={{
                  flex: "0 0 55%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: "2mm",
                }}
              >
                <p style={{ fontSize: "9pt", fontWeight: "bold", margin: 0 }}>
                  {item.product_name}
                </p>
                <p style={{ fontSize: "8pt", margin: 0 }}>
                  Code: {item.product_code}
                </p>
                <p style={{ fontSize: "8pt", margin: 0 }}>
                  Shellwing: {item.shellwing_code}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
