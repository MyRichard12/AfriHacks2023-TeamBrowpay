import { Router } from "express";
// Importing the controller functions
import {
  createInvoice,
  getAllInvoices,
} from "../controllers/invoice.controller.js";

const invoiceRouter = Router();
// Route for creating a new invoice with associated invoice items
invoiceRouter.post("/invoice/create", createInvoice);

// Route for getting all invoices with associated invoice items
invoiceRouter.get("/invoice/all", getAllInvoices);

export default invoiceRouter;
