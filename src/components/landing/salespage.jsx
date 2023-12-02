import React, { useState, useEffect, useCallback, forwardRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  Container,
  Card,
  CssBaseline,
  FormControlLabel,
  TextField,
  Checkbox,
  Link,
  Paper,
  Avatar,
  Button,
  Box,
  Grid,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  Typography,
  CircularProgress,
} from "@mui/material";
import { CreateInvoiceApi, InvoiceItemsApi } from "../../apis/invoice.api.js";

const InvoiceFields = ({ fields, index, remove, update }) => {
  const [formValues, setFormValues] = useState(fields);
  const [itemList, setItemList] = useState(null);

  const removeItem = () => {
    if (remove) {
      return remove;
    }
  };

  const handleFormInput = (event) => {
    const { name, value } = event.target;

    // Create a new object with the updated property
    const updatedFormValues = {
      ...formValues,
      [name]: value,
    };

    // Calculate itemPrice based on the most recent form values
    const unitPrice = parseFloat(updatedFormValues?.unitPrice) || 0;
    const quantity = parseFloat(updatedFormValues?.quantity) || 1;
    const itemPrice = unitPrice * quantity;

    // Update formValues state with the new values and calculated price
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      ...updatedFormValues,
      price: itemPrice,
    }));
  };

  const updateCallback = useCallback(update, []);

  useEffect(() => {
    // Check if formValues have changed before calling update
    if (updateCallback) {
      update(index, formValues);
      const Listings = async () => {
        try {
          const result = await InvoiceItemsApi();
          setItemList(result);
        } catch (error) {
          console.log(error);
        }
      };

      Listings();
    }
  }, [formValues, index]);

  // Custom comparison function
  const areObjectsEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  };

  const handleItemSelect = (e) => {
    let selectedIndex = e.target.value;
    console.log(selectedIndex);

    // setFormValues({...formValues, productName: selectedIndex})

    let selectedItemIndex = itemList.data.findIndex(
      (item) => item.ItemName === selectedIndex
    );
    const price = itemList.data[selectedItemIndex].PurchasePrice;
    if (itemList.data[selectedItemIndex].StockQuantity == 0) {
      const price = 0;
      setFormValues({
        ...formValues,
        unitPrice: price,
        productName: selectedIndex,
      });
    } else {
      setFormValues({
        ...formValues,
        unitPrice: price,
        productName: selectedIndex,
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <span>Item {index + 1}</span>
        <span
          className="text-gray-600 cursor-pointer"
          onClick={removeItem(index)}
        >
          {index > 0 && "Remove"}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <TextField
          margin="normal"
          required
          fullWidth
          name="productName"
          label="Product Name"
          type="text"
          select
          defaultValue="select"
          id="productName"
          className="input mb-4"
          onChange={handleItemSelect}
        >
          <MenuItem value="select">Select</MenuItem>
          {itemList?.data?.map((item, index) => {
            return (
              <MenuItem key={index} value={item.ItemName}>
                {item.ItemName}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          margin="normal"
          required
          fullWidth
          name="quantity"
          label="Quantity"
          type="number"
          id="quantity"
          className="input mb-4"
          onChange={handleFormInput}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <TextField
          margin="normal"
          required
          fullWidth
          name="unitPrice"
          label="Unit Price"
          type="number"
          id="unitPrice"
          className="input mb-4"
          disabled
          value={formValues.unitPrice ? formValues.unitPrice : 0}
          onChange={handleFormInput}
          // value={formValues.unit_price}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="price"
          label="Total Price"
          type="number"
          id="price"
          disabled
          className="input mb-4"
          value={formValues.price}
        />
      </div>
      <div className="border-b-2" />
    </div>
  );
};

export const SalesPage = () => {
  const productItems = [
    {
      productName: "",
      quantity: "",
      unitPrice: "",
      price: "",
    },
  ];

  const [items, itemTrigger] = useState(productItems);

  const itemStub = {
    productName: null,
    quantity: null,
    unitPrice: null,
    price: 0,
  };

  // total fomvalues
  const invoiceFields = {
    email: "",
    invoice_id: "",
    invoice_date: new Date().toISOString().split("T")[0],
    invoice_prices: items,
    discount: "",
    sum_total: 0,
    sub_total: 0,
  };

  const [formField, triggerField] = useState(invoiceFields);

  const addItem = () => {
    // my first error approach
    // itemTrigger(items.push({
    //   ...itemStub
    // }))

    // the correct approach
    itemTrigger([...items, itemStub]);
  };

  const removeItem = (deleteIndex) => {
    console.log(deleteIndex);
    if (deleteIndex !== -1) {
      // in this case the itemtrigger has to take on more than just the newarray the new array has to be rendered REACTIVELY within it
      // error approach
      // const updatedList = item.slice()
      //  updatedList.splice(index, 1)
      // itemTrigger(updatedList)

      // correct approach
      itemTrigger((item) => {
        //  this actually wasted my time removes the last item on the last
        // const updatedList = item.slice()
        // console.log(updatedList)
        // updatedList.splice(index, 1)
        // but this involves a bug too
        const updatedItems = item.filter((_, index) => index !== deleteIndex);

        item = [...updatedItems];

        return item;
      });
    }
  };

  const updateItem = (index, formValues) => {
    // update the parent product items array from the child component
    items[index] = formValues;

    let sum = items.reduce((sum, item) => sum + parseFloat(item.price || 0), 0);

    let sumTotal = sum - formField.discount;

    triggerField({
      ...formField,
      sub_total: sum,
      sum_total: sumTotal,
      invoice_prices: items,
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name == "discount") {
      let sum = items.reduce(
        (sum, item) => sum + parseFloat(item.price || 0),
        0
      );

      let newTotal = parseFloat(sum) - (parseFloat(value) || 0);

      triggerField({ ...formField, [name]: value, sum_total: newTotal });
    } else {
      triggerField({ ...formField, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formField);

    return submitData(formField);
  };

  const initialStatus = {
    open: false,
    title: null,
    message: null,
    payload: null,
  };

  const [callBack, setCallBack] = useState(initialStatus);
 

  const submitData = async (formData) => {
    try {
      const {
        invoice_id,
        email,
        invoice_date,
        invoice_prices,
        discount,
        sum_total,
        sub_total,
      } = formData;

      let payload = {
        customerEmail: email,
        invoiceID: invoice_id,
        invoiceDate: invoice_date,
        products: invoice_prices,
        currency: "NGN",
        tax: 0,
        subTotal: sub_total,
        total: sum_total,
        discount,
      };

      const { data, success, message, error } = await CreateInvoiceApi(payload);
      if (success && success == true) {
        toast.success(message);

        // set callbackState here
        setCallBack((callBack) => ({
          ...callBack,
          open: true,
          title: "Sales Completed",
          message: "Invoice Creation Completed Successfully",
          data,
        }));
      } else {
        toast.error("Duplicate InvoiceID");
        setCallBack((callBack) => ({
          ...callBack,
          open: true,
          title: "Sales Failed",
          message: "Sorry that Invoice ID already exist.",
          data,
        }));
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleDialog = (state) => {
    setCallBack({
      ...callBack,
      open:state
    })

  }

  // used this to keep track of what i was doing
  // when developing
  // it helps so on would know what went wrong where.
  // useEffect(() => {
  //   console.log(formField)
  // }, [items])

  return (
    <>
      <div className="max-w-[1000px] mt-16">
        <form
          action=""
          method="post"
          className=" bg-white p-4 border rounded-lg gap-6 shadow-lg"
        >
          <p className="mb-2 text-lg font-medium">Customer Information</p>

          {/* invoice fields */}

          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Customer Email"
            type="email"
            id="email"
            className="input mb-4"
            onChange={handleInput}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <TextField
              margin="normal"
              required
              fullWidth
              name="invoice_id"
              label="Invoice ID"
              type="number"
              id="invoice_id"
              className="input mb-4"
              onChange={handleInput}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="date"
              label="Invoice Date"
              type="date"
              id="invoice_date"
              className="input mb-4"
              value={formField.invoice_date}
              disabled
            />
          </div>

          {/* product fields */}
          <p className="mb-2 text-lg font-medium">Product Details</p>

          {items.map((values, index) => {
            return (
              <InvoiceFields
                fields={values}
                key={index}
                index={index}
                remove={() => removeItem(index)}
                update={(index, formValues) => updateItem(index, formValues)}
              />
            );
          })}

          <div className="flex gap-10 mx-auto w-fit">
            <div
              className="bg-green-500 w-fit py-1 px-2 text-sm text-white cursor-pointer mb-4"
              onClick={() => addItem()}
            >
              Add Product{" "}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-10 text-xl">
              <TextField
                margin="normal"
                required
                fullWidth
                name="discount"
                label="Discount Amount"
                type="number"
                id="discount"
                className="input mb-4"
                onChange={handleInput}
              />
            </div>
            <div className="flex justify-between text-md">
              <div className="flex gap-4">
                <div className="font-bold text-gray-500">Sub Total</div>
                <div className="font-normal">NGN {formField.sub_total}</div>
              </div>
            </div>

            <div className="mx-auto flex flex-col text-center">
              <div className="font-bold text-gray-500">Amount Payable</div>
              <div className="font-normal text-3xl">
                NGN {formField.sum_total}
              </div>
            </div>
          </div>
          <Toaster />
          <Button
            type="submit"
            fullWidth
            className="bg-orange-900"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <AlertComp payload={callBack} onClose={handleDialog} />
        </form>
      </div>
    </>
  );
};

const AlertComp = ({ payload, onClose }) => {
  const Transition = React.forwardRef((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
  ));

  const handleClose = () => {
    onClose(false)
  }



  return (
    <>
      <Dialog
        variant="outlined"
        maxWidth={"md"}
        TransitionComponent={Transition}
        open={payload.open}
        disableEscapeKeyDown
      >
        <DialogTitle>{payload?.title || "Test Title Dialog"}</DialogTitle>
        <DialogContent>
          {payload.data ? (
            <>
              {/* request if the payment should be passed to the payment gateway */}
              <div className="text-sm text-gray-500">{payload.message}</div>
              <Typography marginBottom={`30px`}>
                Would you love to connect with a payment gateway to complete
                payment
              </Typography>

            <div className="flex mx-auto gap-10 w-fit">
              <Button color="primary" variant="contained">Pay with Card</Button>
              <Button color="error" variant="contained" onClick={handleClose}>Close</Button>
            </div>
            </>
          ) : (
            <>
            <div className="items-center w-fit flex flex-col">
            <div className="text-2xl text-gray-500 mb-10">{payload.message || 'Invoice Sample Message'}</div>
            <Button color="error" variant="contained" onClick={handleClose}>Try Again</Button>
            </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
