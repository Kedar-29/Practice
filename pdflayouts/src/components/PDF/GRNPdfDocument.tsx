"use client";

import React, { useState } from "react";
import { Document, Text, View, StyleSheet } from "@react-pdf/renderer";
import { pdf } from "@react-pdf/renderer";
import { GRN } from "@/types/grn";
import { Button } from "@/components/ui/button";

import PdfLayout from "./pdflayouts/pdflayout";

// --- Styles ---
const styles = StyleSheet.create({
  page: { padding: 24, fontSize: 10, fontFamily: "Helvetica" },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  section: { marginBottom: 12 },
  label: { fontWeight: "bold", fontSize: 10, marginBottom: 2 },
  value: { fontSize: 10, marginBottom: 6 },
  table: {
    marginTop: 18,
    borderWidth: 1,
    borderColor: "#21346A",
    borderRadius: 4,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#DCE6F9",
    borderBottomWidth: 1,
    borderColor: "#21346A",
    minHeight: 24,
  },
  th: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 9,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "#21346A",
    padding: 3,
  },
  tableRow: {
    flexDirection: "row",
    minHeight: 22,
    borderBottomWidth: 1,
    borderColor: "#DCE6F9",
  },
  td: {
    flex: 1,
    fontSize: 9,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "#DCE6F9",
    padding: 3,
  },
  tdLeft: { textAlign: "left", flex: 6, paddingLeft: 6, fontSize: 9 },
  summaryRow: {
    flexDirection: "row",
    backgroundColor: "#E3E9F7",
    borderTopWidth: 2,
    borderColor: "#21346A",
  },
  summaryLabel: {
    flex: 8,
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 10,
    borderRightWidth: 1,
    borderColor: "#21346A",
    paddingRight: 10,
  },
  summaryValue: {
    flex: 2,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 10,
    padding: 3,
  },
  footer: {
    marginTop: 24,
    borderTopWidth: 1,
    borderColor: "#DCE6F9",
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerSignature: {
    fontSize: 12,
    borderTopWidth: 2,
    borderColor: "#21346A",
    paddingTop: 8,
    width: 160,
    textAlign: "center",
  },
  docFooter: { fontSize: 8, marginTop: 12, textAlign: "center" },
});

// --- Table headers ---
const tableHeaders = [
  "S.No",
  "Product",
  "PO Qty",
  "Received Qty",
  "Short Qty",
  "Excess Qty",
  "Rejected Qty",
  "Accepted Qty",
  "Rate",
  "Discount",
  "Total",
];
const columnSpans = [0.6, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1.2];

// --- Number to words ---
function numberToWords(num: number): string {
  const a = [
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
  const b = [
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
  if (num === 0) return "Zero";
  if (num < 20) return a[num];
  if (num < 100)
    return b[Math.floor(num / 10)] + (num % 10 ? " " + a[num % 10] : "");
  if (num < 1000)
    return (
      a[Math.floor(num / 100)] +
      " Hundred" +
      (num % 100 ? " and " + numberToWords(num % 100) : "")
    );
  if (num < 100000)
    return (
      numberToWords(Math.floor(num / 1000)) +
      " Thousand" +
      (num % 1000 ? " " + numberToWords(num % 1000) : "")
    );
  return num.toString();
}

// --- PDF Document Component ---
const GRNPdfDocument: React.FC<{ grn: GRN }> = ({ grn }) => {
  const totalAmount = grn.items.reduce((sum, i) => sum + i.total, 0);

  return (
    <Document>
      <PdfLayout>
        <Text style={styles.header}>Goods Received Note</Text>

        {/* Top Details */}
        <View style={{ flexDirection: "row", marginBottom: 16 }}>
          <View style={{ flex: 6 }}>
            <Text style={styles.label}>GRN Number:</Text>
            <Text style={styles.value}>{grn.grnNumber}</Text>
            <Text style={styles.label}>Received Date:</Text>
            <Text style={styles.value}>{grn.receivedDate || "-"}</Text>
            <Text style={styles.label}>Supplier:</Text>
            <Text style={styles.value}>{grn.po?.vendor?.name || "-"}</Text>
            <Text style={styles.label}>Location:</Text>
            <Text style={styles.value}>{grn.locationId || "-"}</Text>
          </View>
        </View>

        {/* Items Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            {tableHeaders.map((head, i) => (
              <Text key={i} style={{ ...styles.th, flex: columnSpans[i] }}>
                {head}
              </Text>
            ))}
          </View>
          {grn.items.map((item, idx) => (
            <View key={item.id || idx} style={styles.tableRow}>
              <Text style={{ ...styles.td, flex: columnSpans[0] }}>
                {idx + 1}
              </Text>
              <Text style={{ ...styles.tdLeft, flex: columnSpans[1] }}>
                {item.product?.name || "-"}
              </Text>
              <Text style={{ ...styles.td, flex: columnSpans[2] }}>
                {item.poQty}
              </Text>
              <Text style={{ ...styles.td, flex: columnSpans[3] }}>
                {item.receivedQty}
              </Text>
              <Text style={{ ...styles.td, flex: columnSpans[4] }}>
                {item.shortQty}
              </Text>
              <Text style={{ ...styles.td, flex: columnSpans[5] }}>
                {item.excessQty}
              </Text>
              <Text style={{ ...styles.td, flex: columnSpans[6] }}>
                {item.rejectedQty}
              </Text>
              <Text style={{ ...styles.td, flex: columnSpans[7] }}>
                {item.acceptedQty}
              </Text>
              <Text style={{ ...styles.td, flex: columnSpans[8] }}>
                {item.rate.toFixed(2)}
              </Text>
              <Text style={{ ...styles.td, flex: columnSpans[9] }}>
                {item.discount.toFixed(2)}
              </Text>
              <Text style={{ ...styles.td, flex: columnSpans[10] }}>
                {item.total.toFixed(2)}
              </Text>
            </View>
          ))}
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total</Text>
            <Text style={styles.summaryValue}>{totalAmount.toFixed(2)}</Text>
          </View>
        </View>

        {/* Remarks */}
        {grn.remarks && (
          <View style={styles.section}>
            <Text style={styles.label}>Remarks:</Text>
            <Text style={styles.value}>{grn.remarks}</Text>
          </View>
        )}

        {/* Signature */}
        <View style={styles.footer}>
          <Text></Text>
          <Text style={styles.footerSignature}>Authorised Signature</Text>
        </View>

        <Text style={styles.docFooter}>
          Amount (in words): {numberToWords(Math.round(totalAmount))} Only
        </Text>
      </PdfLayout>
    </Document>
  );
};

// --- Client Component: Open PDF in New Tab ---
const GRNPdfClient: React.FC<{ grn: GRN }> = ({ grn }) => {
  const [loading, setLoading] = useState(false);

  const handleOpenPdf = async () => {
    if (!grn || typeof window === "undefined") return;

    setLoading(true);
    try {
      const blob = await pdf(<GRNPdfDocument grn={grn} />).toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch (err) {
      console.error("Failed to open PDF:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button variant="secondary" onClick={handleOpenPdf}>
      {loading ? "Generating..." : "Open PDF in new tab"}
    </Button>
  );
};

export default GRNPdfClient;
