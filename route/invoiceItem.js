import { Router } from "express";
import {
  addItemToInvoice,
  getAllItemsInInvoice,
  updateItemInInvoice,
  deleteItemFromInvoice,
} from "../controllers/invoiceItem.controller.js";

const invoiceItemRouter = Router();

// Route for adding an item to the invoice
invoiceItemRouter.post("/invoice-items/add", addItemToInvoice);

// Route for getting all items in an invoice
invoiceItemRouter.get("/invoice-items/all/:invoiceID", getAllItemsInInvoice);

// Route for updating an item in the invoice
invoiceItemRouter.put("/invoice-items/update/:id", updateItemInInvoice);

// Route for deleting an item from the invoice
invoiceItemRouter.delete("/invoice-items/delete/:id", deleteItemFromInvoice);

export default invoiceItemRouter;
