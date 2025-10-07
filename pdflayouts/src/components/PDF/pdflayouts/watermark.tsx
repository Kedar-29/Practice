// components/pdf/Watermark.jsx

"use client";
import React from "react";
import { Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  watermark: {
    position: "absolute",
    top: "35%",
    left: "25%",
    opacity: 0.03,
    width: 300,
    height: 300,
  },
});

const Watermark = () => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <Image src="/images/attar-logo.png" style={styles.watermark} />
);

export default Watermark;
