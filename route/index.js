import router from "../connection/app.js";
import {
  auth,
  localVariables,
  passwordTokenCheck,
  resetCheck,
} from "../connection/middleware/auth.js";
import { currentUser } from "../controllers/bootstrapController.js";
import {
  addProductToInventory,
  adjustStockById,
  deleteProductFromInventory,
  getAllProductsFromInventory,
  updateProductFromInventory,
} from "../controllers/inventory.controller.js";

// Importing the controller functions
import {
  createInvoice,
  getAllInvoices,
} from "../controllers/invoice.controller.js";
import { regVerificationEmail, registerMail } from "../controllers/mailer.js";
import {
  genRegToken,
  generateOTP,
  initiatePasswordReset,
  loginUser,
  registerUser,
  resetPassword,
  verifyOTP,
  verifyPassToken,
  verifyRegToken,
} from "../controllers/userController.js";

// --------- INVOICE ROUTES
const invoiceRoute = router;
// Route for creating a new invoice with associated invoice items
invoiceRoute.post("/invoice/create", createInvoice);

// Route for getting all invoices with associated invoice items
invoiceRoute.get("/invoice/all", getAllInvoices);

// ------------ INVENTORY ROUTES
const inventoryRoute = router;

// ----- Inventory Endpoints
// Route for adding a Product to the inventory
inventoryRoute.post("/inventory/Products/add", auth, addProductToInventory);

// Route for getting all Products from the inventory
inventoryRoute.get(
  "/inventory/Products/all",
  auth,
  getAllProductsFromInventory
);

// Route for deleting a Product from the inventory
inventoryRoute.post(
  "/inventory/Products/delete",
  auth,
  deleteProductFromInventory
);

// Route for updating a Product in the inventory
inventoryRoute.post(
  "/inventory/Products/update",
  auth,
  updateProductFromInventory
);

// Route for adjusting the stock of a Product in the inventory by ID
inventoryRoute.post("/inventory/Products/update/:id", auth, adjustStockById);

// ----- USER ROUTES
// user authentication routes --- REGISTRATION AND VERIFICATION
const userRoute = router;
userRoute.post("/user/register", registerUser);
userRoute.get("/genRegToken", localVariables, genRegToken);
userRoute.post("/sendActivation", regVerificationEmail);
userRoute.get("/verifyRegToken", verifyRegToken);

// add verification check later
userRoute.post("/user/login", loginUser);
// bootstrap endpoint
userRoute.get("/user", auth, currentUser);

// // genenrate OTP endpoint
router.get("/generateOTP", localVariables, generateOTP);
router.post("/verifyOTP", verifyOTP);
router.put("/resetPassword", resetPassword);

// send email success endpoint
router.post("/registerMail", registerMail);

// send password reset mail endpoint
router.get("/initiatePasswordReset", localVariables, initiatePasswordReset);
router.post("/resetPasswordMail", resetCheck, regVerificationEmail);

// confirm password
router.get("/verify-token", passwordTokenCheck, verifyPassToken);

export { invoiceRoute, inventoryRoute, userRoute, router as extraRoutes };
