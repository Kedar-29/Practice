"use client";

import React from "react";
import { pdf } from "@react-pdf/renderer";

import { PurchaseOrder, POType, POStatus } from "@/types/purchase-order";
import { Product } from "@/types/product";
import PODocument from "@/components/PDF/PO";

const samplePO: PurchaseOrder = {
  id: 1,
  poNumber: "ASSPL/PO/2526/302",
  type: POType.STANDARD,
  status: POStatus.PENDING,
  createdById: "Admin",
  createdAt: "2025-09-19",
  updatedAt: "2025-09-19",
  vendorId: 1,
  vendor: {
    id: 1,
    name: "Attar Steel Structures",
    address: "BELAGAVI, Karnataka",
    gstNumber: "29AAOCA0514C1Z1",
    createdAt: "2023-01-01",
    updatedAt: "2025-01-01",
  },
  consignee: {
    id: 2,
    name: "Attar Steel Structures",
    address: "BELAGAVI, Karnataka",
    gstNumber: "29AAOCA0514C1Z1",
    phone: "8904181195",
    createdAt: "2023-01-01",
    updatedAt: "2025-01-01",
  },
  supplier: {
    id: 3,
    name: "Suraj Enterprises",
    address: "Karnataka - India",
    gstNumber: "29DFOPG6361A1ZE",
    createdAt: "2023-01-01",
    updatedAt: "2025-01-01",
  },
  voucherNo: "ASSPL/PO/2526/302",
  referenceNo: "ASSPL/PO/2526/302",
  dispatchedThrough: "ROAD",
  date: "19-Sep-25",
  paymentTerms: "30 Days",
  otherReference: "ASSPL",
  destination: "AUTO NAGAR",
  deliveryTerms: "IMMEDIATE",
  items: [
    {
      id: 1,
      purchaseOrderId: 1,
      productId: 101,
      product: { id: 101, name: "Steel Beam", price: 500 } as Product,
      quantity: 100,
      discount: 5,
      per: "Ton",
      dueDate: "25-Sep-25",
      isDeleted: false,
      createdAt: "2025-09-19",
      updatedAt: "2025-09-19",
    },
    {
      id: 2,
      purchaseOrderId: 1,
      productId: 102,
      product: { id: 102, name: "Steel Rod", price: 300 } as Product,
      quantity: 200,
      discount: 0,
      per: "Ton",
      dueDate: "26-Sep-25",
      isDeleted: false,
      createdAt: "2025-09-19",
      updatedAt: "2025-09-19",
    },
    {
      id: 3,
      purchaseOrderId: 1,
      productId: 103,
      product: { id: 103, name: "Metal Sheet", price: 400 } as Product,
      quantity: 150,
      discount: 2,
      per: "Ton",
      dueDate: "27-Sep-25",
      isDeleted: false,
      createdAt: "2025-09-19",
      updatedAt: "2025-09-19",
    },
  ],
};

export default function POPage() {
  const generatePDF = async () => {
    const doc = <PODocument data={samplePO} />;
    const asPdf = pdf(doc);
    const blob = await asPdf.toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${samplePO.poNumber}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Purchase Order PDF</h1>
      <button
        onClick={generatePDF}
        style={{
          padding: "10px 20px",
          fontSize: 16,
          backgroundColor: "#21346A",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        Generate PDF
      </button>
    </div>
  );
}
