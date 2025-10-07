// src/pages/grn.tsx
"use client";

import React from "react";

import { GRN, GRNStatus } from "@/types/grn";
import { POStatus, POType } from "@/types/purchase-order";
import GRNPdfClient from "@/components/PDF/GRNPdfDocument";

// Sample GRN object fully typed
const grnData: GRN = {
  id: 1,
  grnNumber: "GRN-IND-2025-001",
  poId: 101,
  receivedDate: "2025-09-30",
  locationId: "WH-MUM-01",
  createdAt: "2025-09-30T10:00:00Z",
  createdById: "user-123",
  status: GRNStatus.PENDING,
  remarks:
    "All items checked and verified. Ensure proper storage of electronics.",
  items: [
    {
      productId: 201,
      poQty: 20,
      receivedQty: 20,
      shortQty: 0,
      excessQty: 0,
      rejectedQty: 0,
      acceptedQty: 20,
      rate: 25000,
      discount: 0,
      total: 500000,
      uomId: 1,
      remarks: "LED TV 42 Inch",
      product: {
        id: 201,
        sku: "LED-42",
        name: "LED TV 42 Inch",
        categoryId: 10,
        barcode: "123456789001",
        uomId: 1,
        createdAt: "2025-01-01T00:00:00Z",
      },
      uom: {
        id: 1,
        code: "PCS",
        name: "Pieces",
        createdAt: "2020-01-01T00:00:00Z",
      },
    },
    {
      productId: 202,
      poQty: 50,
      receivedQty: 50,
      shortQty: 0,
      excessQty: 0,
      rejectedQty: 0,
      acceptedQty: 50,
      rate: 3500,
      discount: 0,
      total: 175000,
      uomId: 1,
      remarks: "Bluetooth Speakers",
      product: {
        id: 202,
        sku: "SPK-50",
        name: "Bluetooth Speakers",
        categoryId: 11,
        barcode: "123456789002",
        uomId: 1,
        createdAt: "2025-01-01T00:00:00Z",
      },
      uom: {
        id: 1,
        code: "PCS",
        name: "Pieces",
        createdAt: "2020-01-01T00:00:00Z",
      },
    },
  ],
  po: {
    id: 101,
    poNumber: "PO-IND-2025-001",
    vendorId: 301,
    status: POStatus.PENDING,
    type: POType.STANDARD,
    createdById: "user-123",
    createdAt: "2025-09-28T10:00:00Z",
    updatedAt: "2025-09-28T12:00:00Z",
    items: [
      {
        id: 1,
        purchaseOrderId: 101,
        productId: 201,
        quantity: 20,
        isDeleted: false,
        createdAt: "2025-09-28T10:00:00Z",
        updatedAt: "2025-09-28T10:00:00Z",
        product: {
          id: 201,
          sku: "LED-42",
          name: "LED TV 42 Inch",
          categoryId: 10,
          barcode: "123456789001",
          uomId: 1,
          createdAt: "2025-01-01T00:00:00Z",
        },
      },
      {
        id: 2,
        purchaseOrderId: 101,
        productId: 202,
        quantity: 50,
        isDeleted: false,
        createdAt: "2025-09-28T10:00:00Z",
        updatedAt: "2025-09-28T10:00:00Z",
        product: {
          id: 202,
          sku: "SPK-50",
          name: "Bluetooth Speakers",
          categoryId: 11,
          barcode: "123456789002",
          uomId: 1,
          createdAt: "2025-01-01T00:00:00Z",
        },
      },
    ],
    vendor: {
      id: 301,
      name: "Shree Electronics Pvt. Ltd.",
      createdAt: "2020-01-01T00:00:00Z",
      updatedAt: "2025-01-01T00:00:00Z",
    },
  },
};

export default function GRNPage() {
  return (
    <div>
      <h1>Goods Received Note - Indian Business Example</h1>
      <GRNPdfClient grn={grnData} />
    </div>
  );
}
