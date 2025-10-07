"use client";

import React, { useState } from "react";

import {
  Document,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";
import PdfLayout from "@/components/PDF/pdflayouts/pdflayout";
import { Button } from "@/components/ui/button";

// --- Types ---
interface ChallanItem {
  sNo: number;
  description: string;
  quantity?: number;
  amount?: number;
}

interface DeliveryChallanData {
  businessName: string;
  businessAddress: string;
  businessPhone: string;
  billingName: string;
  billingAddress: string;
  billingPhone: string;
  despatchDate: string;
  invoiceDate: string;
  location: string;
  orderNumber: string;
  deliveryMethod: string;
  totalWeight?: string;
  items: ChallanItem[];
}

interface DeliveryChallanPdfClientProps {
  data: DeliveryChallanData;
}

// --- Styles ---
const pdfStyles = StyleSheet.create({
  page: { padding: 16, fontSize: 9, fontFamily: "Helvetica" },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  sectionRow: { flexDirection: "row", marginBottom: 8 },
  leftColumn: { flex: 1, paddingRight: 6 },
  rightColumn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightColSection: { flex: 1 },
  label: { fontWeight: "bold", fontSize: 9, marginBottom: 2 },
  value: { fontSize: 9, marginBottom: 2 },
  table: {
    marginTop: 10,
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
    fontSize: 8,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "#DCE6F9",
    padding: 2,
  },
  tdLeft: {
    textAlign: "left",
    flex: 5,
    paddingLeft: 4,
    borderRightWidth: 1,
    borderColor: "#DCE6F9",
  },
  summaryRow: {
    flexDirection: "row",
    backgroundColor: "#E3E9F7",
    borderTopWidth: 2,
    borderColor: "#21346A",
  },
  summaryLabel: {
    flex: 7,
    textAlign: "right",
    fontSize: 9,
    borderRightWidth: 1,
    borderColor: "#21346A",
    paddingRight: 6,
  },
  summaryValue: { flex: 1, textAlign: "center", fontSize: 9, padding: 2 },
  spacer: { height: 85 },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
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
});

// --- Table headers ---
const tableHeaders = ["S.No", "Particulars", "QTY", "Amount"];
const columnSpans = [0.6, 4, 1, 1];

// --- PDF Document ---
const DeliveryChallanPdfDocument: React.FC<{ data: DeliveryChallanData }> = ({
  data,
}) => {
  const totalAmount = data.items.reduce((sum, i) => sum + (i.amount ?? 0), 0);

  return (
    <Document>
      <PdfLayout>
        <View style={pdfStyles.page}>
          <Text style={pdfStyles.header}>Delivery Challan</Text>

          {/* Top Section */}
          <View style={pdfStyles.sectionRow}>
            <View style={pdfStyles.leftColumn}>
              <Text style={pdfStyles.label}>Business Name:</Text>
              <Text style={pdfStyles.value}>{data.businessName}</Text>
              <Text style={pdfStyles.value}>{data.businessAddress}</Text>
              <Text style={pdfStyles.value}>Phone: {data.businessPhone}</Text>

              <Text style={[pdfStyles.label, { marginTop: 4 }]}>
                Billing To:
              </Text>
              <Text style={pdfStyles.value}>{data.billingName}</Text>
              <Text style={pdfStyles.value}>{data.billingAddress}</Text>
              <Text style={pdfStyles.value}>Phone: {data.billingPhone}</Text>
            </View>

            <View style={pdfStyles.rightColumn}>
              <View style={pdfStyles.rightColSection}>
                <Text style={pdfStyles.label}>Despatch Date:</Text>
                <Text style={pdfStyles.value}>{data.despatchDate}</Text>
                <Text style={pdfStyles.label}>Invoice Date:</Text>
                <Text style={pdfStyles.value}>{data.invoiceDate}</Text>
                <Text style={pdfStyles.label}>Location:</Text>
                <Text style={pdfStyles.value}>{data.location}</Text>
              </View>
              <View style={pdfStyles.rightColSection}>
                <Text style={pdfStyles.label}>Order No:</Text>
                <Text style={pdfStyles.value}>{data.orderNumber}</Text>
                <Text style={pdfStyles.label}>Delivery Method:</Text>
                <Text style={pdfStyles.value}>{data.deliveryMethod}</Text>
                {data.totalWeight && (
                  <>
                    <Text style={pdfStyles.label}>Total Weight:</Text>
                    <Text style={pdfStyles.value}>{data.totalWeight}</Text>
                  </>
                )}
              </View>
            </View>
          </View>

          {/* Items Table */}
          <View style={pdfStyles.table}>
            <View style={pdfStyles.tableHeader}>
              {tableHeaders.map((head, i) => (
                <Text
                  key={`${head}-${i}`}
                  style={{ ...pdfStyles.th, flex: columnSpans[i] }}
                >
                  {head}
                </Text>
              ))}
            </View>

            {data.items.map((item, idx) => (
              <View key={`${item.sNo}-${idx}`} style={pdfStyles.tableRow}>
                <Text style={{ ...pdfStyles.td, flex: columnSpans[0] }}>
                  {item.sNo}
                </Text>
                <Text style={{ ...pdfStyles.tdLeft, flex: columnSpans[1] }}>
                  {item.description}
                </Text>
                <Text style={{ ...pdfStyles.td, flex: columnSpans[2] }}>
                  {item.quantity ?? "-"}
                </Text>
                <Text style={{ ...pdfStyles.td, flex: columnSpans[3] }}>
                  {(item.amount ?? 0).toFixed(2)}
                </Text>
              </View>
            ))}

            <View style={pdfStyles.summaryRow}>
              <Text style={pdfStyles.summaryLabel}>Total</Text>
              <Text style={pdfStyles.summaryValue}>
                {totalAmount.toFixed(2)}
              </Text>
            </View>
          </View>

          <View style={pdfStyles.spacer} />

          <View style={pdfStyles.footer}>
            <Text>Goods Received By</Text>
            <Text style={pdfStyles.footerSignature}>Seal & Signature</Text>
          </View>
        </View>
      </PdfLayout>
    </Document>
  );
};

// --- Client Component ---
const DeliveryChallanPdfClient: React.FC<DeliveryChallanPdfClientProps> = ({
  data,
}) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? "Hide Preview" : "Generate PDF Preview"}
        </Button>

        <PDFDownloadLink
          document={<DeliveryChallanPdfDocument data={data} />}
          fileName="DeliveryChallan.pdf"
        >
          {({ loading }) => (
            <span
              style={{
                padding: "8px 16px",
                backgroundColor: "#0070f3",
                color: "#fff",
                borderRadius: 5,
                marginLeft: 10,
              }}
            >
              {loading ? "Generating..." : "Download PDF"}
            </span>
          )}
        </PDFDownloadLink>
      </div>

      {showPreview && (
        <div
          style={{ width: "100%", height: "800px", border: "1px solid #ddd" }}
        >
          <PDFViewer width="100%" height="100%">
            <DeliveryChallanPdfDocument data={data} />
          </PDFViewer>
        </div>
      )}
    </div>
  );
};

export default DeliveryChallanPdfClient;
