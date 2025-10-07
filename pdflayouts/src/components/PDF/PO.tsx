"use client";
import React from "react";
import { Document, Text, View, StyleSheet } from "@react-pdf/renderer";
import PdfLayout from "./pdflayouts/pdflayout";
import { PurchaseOrder } from "@/types/purchase-order";

// --- PDF Styles ---
const pdfStyles = StyleSheet.create({
  page: { padding: 16, fontSize: 9, fontFamily: "Helvetica" },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  label: { fontWeight: "bold", fontSize: 9, marginBottom: 1 },
  value: { fontSize: 9, marginBottom: 3 },
  infoContainer: { flexDirection: "row", marginBottom: 12 },
  leftInfo: { flex: 6, marginRight: 6 },
  rightInfo: { flex: 6, marginLeft: 6 },
  row: { flexDirection: "row", marginBottom: 2 },
  column: { flex: 1, marginRight: 6 },
  columnLast: { flex: 1 },

  table: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#21346A",
    borderRadius: 2,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#DCE6F9",
    borderBottomWidth: 1,
    borderColor: "#21346A",
    minHeight: 20,
  },
  th: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 8,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "#21346A",
    padding: 2,
  },
  tableRow: {
    flexDirection: "row",
    minHeight: 18,
    borderBottomWidth: 1,
    borderColor: "#DCE6F9",
  },
  td: {
    flex: 1,
    fontSize: 8,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "#DCE6F9",
    padding: 2,
  },
  tdLeft: { textAlign: "left", paddingLeft: 4, flex: 3 },

  summaryRow: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#21346A",
  },
  summaryLabel: {
    flex: 2,
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 9,
    borderRightWidth: 1,
    borderColor: "#21346A",
    paddingRight: 6,
  },
  summaryValue: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 9,
    padding: 2,
  },

  footer: {
    marginTop: 113, // ~4cm gap
    borderTopWidth: 1,
    borderColor: "#DCE6F9",
    paddingTop: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerSignature: {
    fontSize: 10,
    borderTopWidth: 2,
    borderColor: "#21346A",
    paddingTop: 4,
    width: 140,
    textAlign: "center",
  },
  docFooter: { fontSize: 7, marginTop: 8, textAlign: "center" },
});

// --- Table Columns ---
const tableHeaders = [
  "S.No",
  "Description of Goods",
  "Due On",
  "Quantity",
  "Rate",
  "Per/ UOM",
  "Disc %",
  "Amount",
];
const columnSpans = [0.6, 3, 1.2, 1, 1, 0.8, 0.8, 1];

// --- Number to Words ---
function numberToWords(num: number): string {
  if (num === 0) return "Zero";
  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  if (num < 10) return units[num];
  if (num < 20) return teens[num - 10];
  if (num < 100) return tens[Math.floor(num / 10)] + " " + units[num % 10];
  return num.toString();
}

const PODocument: React.FC<{ data: PurchaseOrder }> = ({ data }) => {
  const totalQuantity = data.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalAmount = data.items.reduce(
    (sum, i) => sum + (i.product?.price || 0) * i.quantity,
    0
  );
  const cgst = totalAmount * 0.09;
  const sgst = totalAmount * 0.09;
  const grandTotal = totalAmount + cgst + sgst;

  return (
    <Document>
      <PdfLayout>
        <Text style={pdfStyles.header}>Purchase Order</Text>

        {/* --- Info Section --- */}
        <View style={pdfStyles.infoContainer}>
          <View style={pdfStyles.leftInfo}>
            <Text style={pdfStyles.label}>Invoice To:</Text>
            <Text style={pdfStyles.value}>{data.vendor?.name}</Text>
            <Text style={pdfStyles.value}>{data.vendor?.address}</Text>
            <Text style={pdfStyles.value}>
              GSTIN/UIN: {data.vendor?.gstNumber}
            </Text>

            <Text style={pdfStyles.label}>Consignee (Ship To):</Text>
            <Text style={pdfStyles.value}>{data.consignee?.name}</Text>
            <Text style={pdfStyles.value}>{data.consignee?.address}</Text>
            <Text style={pdfStyles.value}>
              GSTIN/UIN: {data.consignee?.gstNumber}
            </Text>
            {data.consignee?.phone && (
              <Text style={pdfStyles.value}>Phone: {data.consignee.phone}</Text>
            )}

            <Text style={pdfStyles.label}>Supplier (Bill From):</Text>
            <Text style={pdfStyles.value}>{data.supplier?.name}</Text>
            <Text style={pdfStyles.value}>{data.supplier?.address}</Text>
            <Text style={pdfStyles.value}>
              GSTIN/UIN: {data.supplier?.gstNumber}
            </Text>
          </View>

          <View style={pdfStyles.rightInfo}>
            {/* Voucher & Date */}
            <View style={pdfStyles.row}>
              <View style={pdfStyles.column}>
                <Text style={pdfStyles.label}>Voucher No:</Text>
              </View>
              <View style={pdfStyles.columnLast}>
                <Text style={pdfStyles.label}>Dated:</Text>
              </View>
            </View>
            <View style={pdfStyles.row}>
              <View style={pdfStyles.column}>
                <Text style={pdfStyles.value}>{data.voucherNo}</Text>
              </View>
              <View style={pdfStyles.columnLast}>
                <Text style={pdfStyles.value}>{data.date}</Text>
              </View>
            </View>

            {/* Reference & Payment */}
            <View style={pdfStyles.row}>
              <View style={pdfStyles.column}>
                <Text style={pdfStyles.label}>Reference No & Date:</Text>
              </View>
              <View style={pdfStyles.columnLast}>
                <Text style={pdfStyles.label}>Mode/Terms of Payment:</Text>
              </View>
            </View>
            <View style={pdfStyles.row}>
              <View style={pdfStyles.column}>
                <Text style={pdfStyles.value}>
                  {data.referenceNo} / {data.date}
                </Text>
              </View>
              <View style={pdfStyles.columnLast}>
                <Text style={pdfStyles.value}>{data.paymentTerms}</Text>
              </View>
            </View>

            {/* Dispatch & Other Ref */}
            <View style={pdfStyles.row}>
              <View style={pdfStyles.column}>
                <Text style={pdfStyles.label}>Dispatched Through:</Text>
              </View>
              <View style={pdfStyles.columnLast}>
                <Text style={pdfStyles.label}>Other Reference:</Text>
              </View>
            </View>
            <View style={pdfStyles.row}>
              <View style={pdfStyles.column}>
                <Text style={pdfStyles.value}>{data.dispatchedThrough}</Text>
              </View>
              <View style={pdfStyles.columnLast}>
                <Text style={pdfStyles.value}>{data.otherReference}</Text>
              </View>
            </View>

            {/* Destination & Delivery Terms */}
            <View style={pdfStyles.row}>
              <View style={pdfStyles.column}>
                <Text style={pdfStyles.label}>Destination:</Text>
              </View>
              <View style={pdfStyles.columnLast}>
                <Text style={pdfStyles.label}>Terms of Delivery:</Text>
              </View>
            </View>
            <View style={pdfStyles.row}>
              <View style={pdfStyles.column}>
                <Text style={pdfStyles.value}>{data.destination}</Text>
              </View>
              <View style={pdfStyles.columnLast}>
                <Text style={pdfStyles.value}>{data.deliveryTerms}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* --- Items Table --- */}
        <View style={pdfStyles.table}>
          <View style={pdfStyles.tableHeader}>
            {tableHeaders.map((head, i) => (
              <Text key={i} style={{ ...pdfStyles.th, flex: columnSpans[i] }}>
                {head}
              </Text>
            ))}
          </View>
          {data.items.map((item, idx) => (
            <View key={item.id} style={pdfStyles.tableRow}>
              <Text style={{ ...pdfStyles.td, flex: columnSpans[0] }}>
                {idx + 1}
              </Text>
              <Text style={{ ...pdfStyles.tdLeft, flex: columnSpans[1] }}>
                {item.product?.name}
              </Text>
              <Text style={{ ...pdfStyles.td, flex: columnSpans[2] }}>
                {item.dueDate || "-"}
              </Text>
              <Text style={{ ...pdfStyles.td, flex: columnSpans[3] }}>
                {item.quantity}
              </Text>
              <Text style={{ ...pdfStyles.td, flex: columnSpans[4] }}>
                {item.product?.price?.toFixed(2)}
              </Text>
              <Text style={{ ...pdfStyles.td, flex: columnSpans[5] }}>
                {item.per || "Nos"}
              </Text>
              <Text style={{ ...pdfStyles.td, flex: columnSpans[6] }}>
                {item.discount || 0}%
              </Text>
              <Text style={{ ...pdfStyles.td, flex: columnSpans[7] }}>
                {(
                  (item.product?.price || 0) *
                  item.quantity *
                  (1 - (item.discount || 0) / 100)
                ).toFixed(2)}
              </Text>
            </View>
          ))}
        </View>

        {/* --- GST & Totals --- */}
        <View style={{ flexDirection: "row", marginTop: 0 }}>
          <View style={{ flex: 6 }} />
          <View
            style={{
              flex: 4,
              borderWidth: 1,
              borderColor: "#21346A",
              borderRadius: 2,
            }}
          >
            <View style={pdfStyles.summaryRow}>
              <Text style={pdfStyles.summaryLabel}>Subtotal</Text>
              <Text style={pdfStyles.summaryValue}>
                {totalAmount.toFixed(2)}
              </Text>
            </View>
            <View style={pdfStyles.summaryRow}>
              <Text style={pdfStyles.summaryLabel}>CGST @9%</Text>
              <Text style={pdfStyles.summaryValue}>{cgst.toFixed(2)}</Text>
            </View>
            <View style={pdfStyles.summaryRow}>
              <Text style={pdfStyles.summaryLabel}>SGST @9%</Text>
              <Text style={pdfStyles.summaryValue}>{sgst.toFixed(2)}</Text>
            </View>
            <View style={pdfStyles.summaryRow}>
              <Text style={pdfStyles.summaryLabel}>Grand Total</Text>
              <Text style={pdfStyles.summaryValue}>
                {grandTotal.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* --- Footer / Signature --- */}
        <View style={pdfStyles.footer}>
          <Text></Text>
          <Text style={pdfStyles.footerSignature}>Authorised Signature</Text>
        </View>

        {/* --- Total Quantity in Words --- */}
        <Text style={pdfStyles.docFooter}>
          Total Quantity (in words): {numberToWords(totalQuantity)} Only
        </Text>
      </PdfLayout>
    </Document>
  );
};

export default PODocument;
