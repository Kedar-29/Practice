// components/pdf/Footer.jsx
"use client";
import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    height: 50,
    borderTop: "2 solid #0A4275",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
  },
  text: {
    fontSize: 10,
    color: "#0A4275",
    textAlign: "center",
  },
});

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.text}>
      © {new Date().getFullYear()} ATTAR STEEL STRUCTURES PVT. LTD. – All Rights
      Reserved
    </Text>
    <Text style={styles.text}>
      378/A, Auto Nagar | info@attarpeb.com | +91 7795020841 / 9686585767
    </Text>
  </View>
);

export default Footer;
