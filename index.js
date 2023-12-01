import "./connection/database.js";
import router from "./connection/app.js";
import {
  auth,
  localVariables,
  passwordTokenCheck,
  regVerificationCheck,
  resetCheck,
} from "./connection/middleware/auth.js";

// Importing the controller functions
import {
  addProductToInventory,
  getAllProductsFromInventory,
  deleteProductFromInventory,
  updateProductFromInventory,
  adjustStockById,
  registerUser,
  loginUser,
  generateOTP,
  currentUser,
} from "./controllers/index.js";
import {
  genRegToken,
  initiatePasswordReset,
  resetPassword,
  verifyOTP,
  verifyPassToken,
  verifyRegToken,
} from "./controllers/userController.js";
import { regVerificationEmail, registerMail } from "./controllers/mailer.js";
import {
  createInvoice,
  getAllInvoices,
} from "./controllers/invoice.controller.js";

// Route for adding a Product to the inventory
router.post("/inventory/Products/add", auth, addProductToInventory);

// Route for getting all Products from the inventory
router.get("/inventory/Products/all", auth, getAllProductsFromInventory);

// Route for deleting a Product from the inventory
router.post("/inventory/Products/delete", auth, deleteProductFromInventory);

// Route for updating a Product in the inventory
router.post("/inventory/Products/update", auth, updateProductFromInventory);

// Route for adjusting the stock of a Product in the inventory by ID
router.post("/inventory/Products/update/:id", auth, adjustStockById);

// user authentication routes --- REGISTRATION AND VERIFICATION
router.post("/user/register", registerUser);
router.get("/genRegToken", localVariables, genRegToken);
router.post("/sendActivation", regVerificationEmail);
router.get("/verifyRegToken", verifyRegToken);

// add verification check later
router.post("/user/login", loginUser);

// genenrate OTP endpoint
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

// bootstrap endpoint
router.get("/user", auth, currentUser);
