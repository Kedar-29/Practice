// components/pdf/PdfLayout.tsx
"use client";

import React, { ReactNode } from "react";
import { Page, StyleSheet, View } from "@react-pdf/renderer";
import Watermark from "./watermark";
import Header from "./header";
import Footer from "./footer";

interface PdfLayoutProps {
  children: ReactNode;
}

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 12,
    paddingTop: 120, // leave room for header
    paddingBottom: 80, // leave room for footer
    paddingHorizontal: 50,
    position: "relative",
  },
  content: {
    flexGrow: 1,
  },
});

const PdfLayout: React.FC<PdfLayoutProps> = ({ children }) => (
  <Page size="A4" style={styles.page}>
    <Watermark />
    <Header />
    <View style={styles.content}>{children}</View>
    <Footer />
  </Page>
);

export default PdfLayout;
