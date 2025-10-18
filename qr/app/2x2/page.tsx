import QRLabelSheet2x2 from "../components/2x2";

const sampleData = [
  // SHELF-A1
  { product_name: "Mild Steel Sheet 3mm", shellwing_code: "SHELF-A1" },
  { product_name: "Mild Steel Sheet 5mm", shellwing_code: "SHELF-A1" },
  { product_name: "Stainless Steel Sheet 304", shellwing_code: "SHELF-A1" },
  { product_name: "Stainless Steel Sheet 316", shellwing_code: "SHELF-A1" },
  { product_name: "Aluminium Sheet 2mm", shellwing_code: "SHELF-A1" },
  { product_name: "Aluminium Sheet 4mm", shellwing_code: "SHELF-A1" },
  { product_name: "Galvanized Sheet 1.2mm", shellwing_code: "SHELF-A1" },
  { product_name: "Galvanized Sheet 2mm", shellwing_code: "SHELF-A1" },
  { product_name: "Copper Sheet 1mm", shellwing_code: "SHELF-A1" },
  { product_name: "Brass Sheet 1.5mm", shellwing_code: "SHELF-A1" },
  { product_name: "MS Angle 25x25", shellwing_code: "SHELF-A1" },
  { product_name: "MS Angle 40x40", shellwing_code: "SHELF-A1" },
  { product_name: "MS Flat Bar 25x5", shellwing_code: "SHELF-A1" },
  { product_name: "MS Flat Bar 40x6", shellwing_code: "SHELF-A1" },
  { product_name: "Steel Round Bar 12mm", shellwing_code: "SHELF-A1" },

  // SHELF-A2
  { product_name: "E6013 Welding Rod 3.15mm", shellwing_code: "SHELF-A2" },
  { product_name: "E7018 Welding Rod 4mm", shellwing_code: "SHELF-A2" },
  { product_name: "TIG Filler Rod SS304", shellwing_code: "SHELF-A2" },
  { product_name: "TIG Filler Rod SS316", shellwing_code: "SHELF-A2" },
  { product_name: "Aluminium TIG Rod 4043", shellwing_code: "SHELF-A2" },
  { product_name: "Argon Gas Cylinder", shellwing_code: "SHELF-A2" },
  { product_name: "CO2 Gas Cylinder", shellwing_code: "SHELF-A2" },
  { product_name: "Cutting Torch Set", shellwing_code: "SHELF-A2" },
  { product_name: "Welding Holder", shellwing_code: "SHELF-A2" },
  { product_name: "Earth Clamp", shellwing_code: "SHELF-A2" },
  { product_name: "Welding Cable 25sqmm", shellwing_code: "SHELF-A2" },
  { product_name: "Welding Cable 35sqmm", shellwing_code: "SHELF-A2" },
  { product_name: "Welding Helmet", shellwing_code: "SHELF-A2" },
  { product_name: "Welding Gloves", shellwing_code: "SHELF-A2" },
  { product_name: "Welding Apron", shellwing_code: "SHELF-A2" },

  // SHELF-A3
  { product_name: "Cutting Wheel 4inch", shellwing_code: "SHELF-A3" },
  { product_name: "Cutting Wheel 14inch", shellwing_code: "SHELF-A3" },
  { product_name: "Grinding Wheel 7inch", shellwing_code: "SHELF-A3" },
  { product_name: "Flap Disc 4inch", shellwing_code: "SHELF-A3" },
  { product_name: "Wire Brush Cup 4inch", shellwing_code: "SHELF-A3" },
  { product_name: "Angle Grinder", shellwing_code: "SHELF-A3" },
  { product_name: "Bench Grinder", shellwing_code: "SHELF-A3" },
  { product_name: "Cutting Machine", shellwing_code: "SHELF-A3" },
  { product_name: "Bench Vice 6inch", shellwing_code: "SHELF-A3" },
  { product_name: "C-Clamp 4inch", shellwing_code: "SHELF-A3" },
  { product_name: "Hammer Ball Peen", shellwing_code: "SHELF-A3" },
  { product_name: "Chisel Flat", shellwing_code: "SHELF-A3" },
  { product_name: "Hack Saw Frame", shellwing_code: "SHELF-A3" },
  { product_name: "Measuring Tape 5m", shellwing_code: "SHELF-A3" },
  { product_name: "Steel Scale 300mm", shellwing_code: "SHELF-A3" },

  // SHELF-A4
  { product_name: "Safety Helmet", shellwing_code: "SHELF-A4" },
  { product_name: "Safety Shoes", shellwing_code: "SHELF-A4" },
  { product_name: "Safety Goggles", shellwing_code: "SHELF-A4" },
  { product_name: "Face Shield", shellwing_code: "SHELF-A4" },
  { product_name: "Ear Plug", shellwing_code: "SHELF-A4" },
  { product_name: "Hand Gloves", shellwing_code: "SHELF-A4" },
  { product_name: "Reflective Jacket", shellwing_code: "SHELF-A4" },
  { product_name: "Welding Curtain", shellwing_code: "SHELF-A4" },
  { product_name: "Fire Extinguisher 5kg", shellwing_code: "SHELF-A4" },
  { product_name: "First Aid Box", shellwing_code: "SHELF-A4" },
  { product_name: "Safety Belt", shellwing_code: "SHELF-A4" },
  { product_name: "Respirator Mask", shellwing_code: "SHELF-A4" },
  { product_name: "Hand Cleaner", shellwing_code: "SHELF-A4" },
  { product_name: "Welding Screen", shellwing_code: "SHELF-A4" },
  { product_name: "Tool Bag", shellwing_code: "SHELF-A4" },
];

export default function Page() {
  return <QRLabelSheet2x2 data={sampleData} />;
}
