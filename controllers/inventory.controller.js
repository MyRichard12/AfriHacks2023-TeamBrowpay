// Importing mongoose for ObjectId conversion and inventory model
import mongoose from 'mongoose';
import inventoryModel from '../models/inventory.model.js';

// Controller for adding a Product to the inventory
export const addProductToInventory = async (req, res) => {
    try {
        const { formValues } = req.body;

        const TotalValues = {...formValues, user: req.user.id}
        const dataInstance = new inventoryModel(TotalValues);

        await dataInstance.save();

        res.status(200).json({
            data: dataInstance,
            success: true,
            message: "Item created successfully"
        });
    } catch (err) {
        res.status(err.status || 500).json({
            success: false,
            error: err.message || "Internal Server Error",
        });
    }
}

// Controller for getting all Products from the inventory
export const getAllProductsFromInventory = async (req, res) => {
    try {
        const allProducts = await inventoryModel.find({user: req.user.id});

        res.status(200).json({
            data: allProducts,
            success: true,
            message: "All Products are loaded"
        });
    } catch (err) {
        res.status(err.status || 500).json({
            success: false,
            error: err.message || "Internal Server Error",
        });
    }
}

// Controller for deleting a Product from the inventory
export const deleteProductFromInventory = async (req, res) => {
    try {
        const { selected } = req.body;

        // Convert the array of string IDs to ObjectId format
        const selectedIds = selected.map((id) => new mongoose.Types.ObjectId(id));
        const dataInstance = await inventoryModel.deleteMany({ _id: { $in: selectedIds } });

        res.status(200).json({
            data: dataInstance,
            success: true,
            message: "Product deleted successfully"
        });
    } catch (err) {
        console.log(err);
        res.status(err.status || 500).json({
            success: false,
            error: err.message || "Internal Server Error",
        });
    }
}

// Controller for updating a Product in the inventory
export const updateProductFromInventory = async (req, res) => {
    try {
        const { formValues } = req.body;
        const dataInstance = await inventoryModel.findById(formValues._id)

        // Update the fields of the Product
        dataInstance.ItemName = formValues.ItemName
        dataInstance.Category = formValues.Category
        dataInstance.ItemCode = formValues.ItemCode
        dataInstance.Description = formValues.Description
        dataInstance.Unit = formValues.Unit
        dataInstance.StockQuantity = formValues.StockQuantity
        dataInstance.AsOfDate = formValues.AsOfDate
        dataInstance.LowStockWarning = formValues.LowStockWarning
        dataInstance.LowStockUnit = formValues.LowStockUnit
        dataInstance.PurchasePrice = formValues.PurchasePrice
        dataInstance.InclusiveOfTax = formValues.InclusiveOfTax
        dataInstance.GST = formValues.GST
        dataInstance.user = req.user.id
        dataInstance.updatedAt = new Date().toJSON().slice(0, 10)

        await dataInstance.save();

        res.status(200).json({
            data: dataInstance,
            success: true,
            message: "Product Updated successfully"
        });
    } catch (err) {
        console.log("err :", err)
        res.status(err.status || 500).json({
            success: false,
            error: err.message || "Internal Server Error",
        });
    }
}

// Controller for adjusting the stock quantity of a Product by its ID
export const adjustStockById = async (req, res) => {
    try {
        const { formValues } = req.body;
        const { id } = req.params;
        const dataInstance = await inventoryModel.findById(id)

        let finalStock;
        if (formValues.type === 'add') {
            finalStock = Number(dataInstance.StockQuantity) + Number(formValues.adjustStockQuantity)
        } else {
            finalStock = Number(dataInstance.StockQuantity) - Number(formValues.adjustStockQuantity)
        }

        // Update the stock quantity of the Product
        dataInstance.StockQuantity = finalStock;

        await dataInstance.save();

        res.status(200).json({
            data: dataInstance,
            success: true,
            message: "Product Stock Updated successfully"
        });
    } catch (err) {
        console.log("err :", err)
        res.status(err.status || 500).json({
            success: false,
            error: err.message || "Internal Server Error",
        });
    }
}