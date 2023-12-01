import Invoice from "../models/invoice.model.js";
import InvoiceItem from "../models/invoiceItem.model.js";


// Create a new invoice with associated invoice items
export const createInvoice = async (req, res) => {
  try {
    const { customerName, invoiceID, invoiceDate, products } = req.body;
    // console.log("Request Body:", req.body);

    // Create an array to store InvoiceItem documents
    const invoiceItems = [];

    // Iterate over products and create InvoiceItem documents
    for (const product of products) {
      const { productName, quantity, unitPrice, totalPrice } = product;
      const invoiceItem = new InvoiceItem({
        productName,
        quantity,
        unitPrice,
        totalPrice,
      });
      console.log("Saving InvoiceItem:", invoiceItem);
      await invoiceItem.save();
      invoiceItems.push(invoiceItem._id); // Store the ID of the created InvoiceItem
    }

    // Create the main Invoice document with a reference to the InvoiceItem documents
    const newInvoice = new Invoice({
      customerName,
      invoiceID,
      invoiceDate,
      adminID: req?.user?.id,
      products: invoiceItems,
    });
    console.log("Saving Invoice:", newInvoice);
    await newInvoice.save();

    res.status(200).json({
      data: newInvoice,
      success: true,
      message: "Invoice created successfully",
    });
  } catch (err) {
    console.error("Error in createInvoice:", err);
    res.status(err.status || 500).json({
      success: false,
      error: err.message || "Internal Server Error",
      validationErrors: err.errors || {}, // Log validation errors
    });
  }
};

// Retrieve all invoices with associated invoice items
export const getAllInvoices = async (req, res) => {
  try {
    // Populate the 'products' field to get details of associated invoice items
    const allInvoices = await Invoice.find({ adminID: req?.user?.id }).populate(
      "products"
    );

    res.status(200).json({
      data: allInvoices,
      success: true,
      message: "All invoices are loaded",
    });
  } catch (err) {
    res.status(err.status || 500).json({
      success: false,
      error: err.message || "Internal Server Error",
    });
  }
};
