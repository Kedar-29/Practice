"use client";

import React, { useState } from "react";
import {
  Document,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import PdfLayout from "./pdflayouts/pdflayout";
import { Button } from "@/components/ui/button";

// --- PDF Styles ---
const pdfStyles = StyleSheet.create({
  page: { padding: 24, fontSize: 12, fontFamily: "Helvetica" },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#0A4275",
    borderBottomWidth: 1,
    borderBottomColor: "#0A4275",
    paddingBottom: 4,
  },
  body: { fontSize: 12, lineHeight: 1.5, marginTop: 12, textAlign: "justify" },
  footer: { fontSize: 11, textAlign: "right", marginTop: 40 },
});

// --- Props Interface ---
interface LetterPadData {
  subject: string;
  body: string;
  signatory?: string;
}

interface LetterPadProps {
  data: LetterPadData;
}

// --- Default data ---
const defaultData: LetterPadData = {
  subject: "—",
  body: " ",
  signatory: "Authorised Signatory",
};

// --- PDF Document ---
const LetterPadDocument: React.FC<{ data: LetterPadData }> = ({ data }) => {
  return (
    <Document>
      <PdfLayout>
        <View style={pdfStyles.page} wrap={false}>
          <Text style={pdfStyles.header}>{data.subject || "—"}</Text>
          <Text style={pdfStyles.body}>{data.body || " "}</Text>
          <Text style={pdfStyles.footer}>
            {data.signatory || "Authorised Signatory"}
          </Text>
        </View>
      </PdfLayout>
    </Document>
  );
};

// --- Client Component ---
const LetterPad: React.FC<LetterPadProps> = ({ data = defaultData }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Button onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? "Hide Preview" : "Generate PDF Preview"}
        </Button>
      </div>

      {showPreview && (
        <div
          style={{ width: "100%", height: "800px", border: "1px solid #ddd" }}
        >
          <PDFViewer width="100%" height="100%">
            <LetterPadDocument data={data} />
          </PDFViewer>
        </div>
      )}
    </div>
  );
};

export default LetterPad;
