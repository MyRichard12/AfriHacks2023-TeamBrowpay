import mongoose from "mongoose";
import InvoiceItem from "../models/invoiceItem.model.js";

// Controller for adding an item to the invoice
export const addItemToInvoice = async (req, res) => {
  try {
    const { formValues } = req.body;
    const newItem = new InvoiceItem(formValues);
    await newItem.save();

    res.status(200).json({
      data: newItem,
      success: true,
      message: "Item added to the invoice successfully",
    });
  } catch (err) {
    res.status(err.status || 500).json({
      success: false,
      error: err.message || "Internal Server Error",
    });
  }
};

// Controller for getting all items in an invoice
export const getAllItemsInInvoice = async (req, res) => {
  try {
    const { invoiceID } = req.params;
    const allItems = await InvoiceItem.find({ invoiceID });

    res.status(200).json({
      data: allItems,
      success: true,
      message: "All items in the invoice are loaded",
    });
  } catch (err) {
    res.status(err.status || 500).json({
      success: false,
      error: err.message || "Internal Server Error",
    });
  }
};

// Controller for updating an item in the invoice
export const updateItemInInvoice = async (req, res) => {
  try {
    const { formValues } = req.body;
    const { id } = req.params;
    const updatedItem = await InvoiceItem.findByIdAndUpdate(id, formValues, {
      new: true,
    });

    res.status(200).json({
      data: updatedItem,
      success: true,
      message: "Item in the invoice updated successfully",
    });
  } catch (err) {
    res.status(err.status || 500).json({
      success: false,
      error: err.message || "Internal Server Error",
    });
  }
};

// Controller for deleting an item from the invoice
export const deleteItemFromInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await InvoiceItem.findByIdAndDelete(id);

    res.status(200).json({
      data: deletedItem,
      success: true,
      message: "Item deleted from the invoice successfully",
    });
  } catch (err) {
    res.status(err.status || 500).json({
      success: false,
      error: err.message || "Internal Server Error",
    });
  }
};
