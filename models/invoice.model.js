import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  invoiceID: { type: String, unique: true },
  invoiceDate: { type: String, required: true },
  adminID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      productName: { type: String },
      quantity: { type: Number },
      unitPrice: { type: Number },
      totalPrice: { type: Number },
    },
  ],
  created_date: { type: Date, default: Date.now },
  currency: { type: String, required: false },
  priceSummation: { type: Number, required: false },
  total: { type: Number, required: false },
  tax: { type: Number, required: false },
  discount: { type: Number, required: false },
  cogs: { type: Number, required: false }, // Cost of Goods Sold
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
