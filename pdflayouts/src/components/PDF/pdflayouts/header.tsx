// components/pdf/Header.jsx
// "use client";
// import React from "react";
// import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//   header: {
//     position: "absolute",
//     top: 20,
//     left: 40,
//     right: 40,
//     height: 80,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     borderBottom: "1 solid #0A4275",
//     paddingBottom: 8,
//   },
//   logo: {
//     width: 60,
//     height: 60,
//     objectFit: "contain",
//   },
//   leftContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     flex: 1,
//   },
//   companyName: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#0A4275",
//   },
//   leftTextContainer: {
//     marginLeft: 10,
//   },
//   right: {
//     textAlign: "right",
//     fontSize: 10,
//     color: "#444",
//     width: 220,
//     lineHeight: 1.2,
//   },
// });

// const Header = () => (
//   <View style={styles.header}>
//     {/* Left: Logo */}
//     <View style={styles.leftContainer}>
//       <Image src="/images/animal.png" style={styles.logo} />
//       <View style={styles.leftTextContainer}>
//         <Text style={styles.companyName}>ATTAR STEEL STRUCTURES PVT. LTD.</Text>
//         <Text>STEEL STRUCTURE SPECIALISTS</Text>
//         <Text>An ISO 9001:2015 CERTIFIED COMPANY</Text>
//       </View>
//     </View>

//     {/* Right: Same 3 lines + contact */}
//     <View style={styles.right}>
//       <Text>+91 7795020841 / 9686585767</Text>
//       <Text>info@attarpeb.com</Text>
//       <Text>www.attarpeb.com</Text>
//     </View>
//   </View>
// );

// export default Header;

// with poppins font
"use client";
import React from "react";
import { View, Text, StyleSheet, Image, Font } from "@react-pdf/renderer";

// 1️⃣ Register Poppins font
Font.register({
  family: "Poppins",
  fonts: [
    {
      src: "/fonts/Poppins-Regular.ttf", // path to your Poppins regular font
      fontWeight: "normal",
    },
    {
      src: "/fonts/Poppins-Bold.ttf", // path to your Poppins bold font
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 20,
    left: 40,
    right: 40,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1 solid #0A4275",
    paddingBottom: 8,
    fontFamily: "Poppins", // <-- use Poppins for all text
  },
  logo: {
    width: 60,
    height: 60,
    objectFit: "contain",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  companyName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0A4275",
  },
  leftTextContainer: {
    marginLeft: 10,
  },
  right: {
    textAlign: "right",
    fontSize: 10,
    color: "#444",
    width: 220,
    lineHeight: 1.2,
  },
});

const Header = () => (
  <View style={styles.header}>
    {/* Left: Logo */}
    <View style={styles.leftContainer}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image src="/images/attar-logo.png" style={styles.logo} />
      <View style={styles.leftTextContainer}>
        <Text style={styles.companyName}>ATTAR STEEL STRUCTURES PVT. LTD.</Text>
        <Text>STEEL STRUCTURE SPECIALISTS</Text>
        <Text>An ISO 9001:2015 CERTIFIED COMPANY</Text>
      </View>
    </View>

    {/* Right: Contact */}
    <View style={styles.right}>
      <Text>+91 7795020841 / 9686585767</Text>
      <Text>info@attarpeb.com</Text>
      <Text>www.attarpeb.com</Text>
    </View>
  </View>
);

export default Header;
