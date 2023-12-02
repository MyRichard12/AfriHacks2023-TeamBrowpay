import Invoice from "../models/invoice.model.js";
import InvoiceItem from "../models/invoiceItem.model.js";


// Create a new invoice with associated invoice items
export const createInvoice = async (req, res) => {
  try {
    const { customerEmail, invoiceID, invoiceDate, products, total, subTotal, discount, tax, currency  } = req.body;
    // console.log("Request Body:", req.body);

    // Create an array to store InvoiceItem documents
    const invoiceItems = [];

    // Iterate over products and cre  ate InvoiceItem documents
    for (const product of products) {
      const { productName, quantity, unitPrice, price } = product;
      const invoiceItem = new InvoiceItem({
        productName,
        quantity,
        unitPrice,
        price
      });
      console.log("Saving InvoiceItem:", invoiceItem);
      await invoiceItem.save();
      invoiceItems.push(invoiceItem._id); // Store the ID of the created InvoiceItem
    }

    // Create the main Invoice document with a reference to the InvoiceItem documents
    const newInvoice = new Invoice({
      customerEmail,
      invoiceID,
      invoiceDate,
      adminID: req?.user?.id,
      products: invoiceItems,
      currency,
      tax,
      discount,
      subTotal,
      total
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
    // const allInvoices = await Invoice.find({ adminID: req?.user?.id }).populate(
    //   "products"
    // );
    const allInvoices = await Invoice.find().populate(
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
