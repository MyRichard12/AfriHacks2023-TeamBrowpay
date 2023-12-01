import mongoose from "mongoose";

const invoiceItemSchema = new mongoose.Schema({
  invoiceID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Invoice",
  },
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

const InvoiceItem = mongoose.model("InvoiceItem", invoiceItemSchema);

export default InvoiceItem;
