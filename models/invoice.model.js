import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  customerEmail: { type: String, required: true },
  invoiceID: { type: String, unique: true },
  invoiceDate: { type: Date, required: true },
  adminID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      productName: { type: String },
      quantity: { type: Number },
      unitPrice: { type: Number },
      price: { type: Number },
    },
  ],
  created_date: { type: Date, default: Date.now },
  currency: { type: String, required: false },
  subTotal: { type: Number, required: false },
  total: { type: Number, required: true },
  tax: { type: Number, required: false },
  discount: { type: Number, required: false },
  // cogs is not required
  // cogs: { type: Number, required: false }, // Cost of Goods Sold
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
