import DeliveryChallanPdfClient from "@/components/PDF/DeliveryChallanPdfClient";

const challanData = {
  businessName: "Shree Electronics Pvt. Ltd.",
  businessAddress: "Mumbai Warehouse, Maharashtra, India",
  businessPhone: "+91 9876543210",
  billingName: "ABC Technologies Pvt. Ltd.",
  billingAddress: "Plot No. 23, Industrial Area, Pune",
  billingPhone: "+91 9123456780",
  despatchDate: "2025-09-30",
  invoiceDate: "2025-09-30",
  location: "Mumbai",
  orderNumber: "ORD-2025-015",
  deliveryMethod: "Road",
  totalWeight: "1500 Kg",
  items: [
    { sNo: 1, description: "LED TV 42 Inch", quantity: 10, amount: 250000 },
    { sNo: 2, description: "Bluetooth Speakers", quantity: 20, amount: 70000 },
    { sNo: 3, description: "Smartphone Charger", quantity: 50, amount: 25000 },
  ],
};

export default function DeliveryChallanPage() {
  return (
    <div>
      <h1>Professional GST Delivery Challan</h1>
      <DeliveryChallanPdfClient data={challanData} />
    </div>
  );
}
