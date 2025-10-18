import QRLocationLabelSheet from "../components/qr2x6";

const shelfLabels = [
  { name: "SHELF-A1", category: "Steel Sheets", code: "SHELF-A1" },
  { name: "SHELF-A2", category: "Welding Rods", code: "SHELF-A2" },
  { name: "SHELF-A3", category: "Power Tools", code: "SHELF-A3" },
  { name: "SHELF-A4", category: "Safety Gear", code: "SHELF-A4" },
  { name: "SHELF-A5", category: "Pipes & Fittings", code: "SHELF-A5" },
  { name: "SHELF-A6", category: "Hardware Parts", code: "SHELF-A6" },
  { name: "SHELF-B1", category: "Electrical Tools", code: "SHELF-B1" },
  { name: "SHELF-B2", category: "Bolts & Nuts", code: "SHELF-B2" },
  { name: "SHELF-B3", category: "Bearings", code: "SHELF-B3" },
  { name: "SHELF-B4", category: "Hoses & Clamps", code: "SHELF-B4" },
  { name: "SHELF-B5", category: "Paint & Chemicals", code: "SHELF-B5" },
  { name: "SHELF-B6", category: "Maintenance Items", code: "SHELF-B6" },
];

export default function Page() {
  return <QRLocationLabelSheet data={shelfLabels} />;
}
