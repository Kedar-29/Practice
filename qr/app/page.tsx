"use client";

import React from "react";
import QRLabelSheet from "./components/qr";

export default function Page() {
  // Example 24 products (3×8 grid fits perfectly on A4)
  const data = Array.from({ length: 24 }, (_, i) => ({
    product_name: `Product ${i + 1}`,
    product_code: `1234567890${(i + 1).toString().padStart(3, "0")}`,
    shellwing_code: `SW${(i + 1).toString().padStart(6, "0")}`,
  }));

  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        background: "#fff",
        width: "100%",
        height: "100%",
      }}
    >
      <QRLabelSheet data={data} />
    </main>
  );
}
