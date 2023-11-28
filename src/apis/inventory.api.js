import { base_url, httpService } from "./config";
import Cookies from 'universal-cookie'


// API function to add a product to the inventory
export const addProductToInventoryApi = async (formValues) => {
    const cookie = new Cookies();

const token = cookie.get("SECRETKEY")
    const response = await httpService.post(`${base_url}/inventory/products/add`, { formValues }, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// API function to fetch all products from the inventory
export const getAllProductsFromInventoryApi = async () => {
    const cookie = new Cookies();

const token = cookie.get("SECRETKEY")

    try{
    if(token !== undefined){
    const response = await httpService.get(`${base_url}/inventory/products/all`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
} catch(error){
    return error
}
}

// API function to delete a product from the inventory
export const deleteProductFromInventoryApi = async (selected) => {
    const cookie = new Cookies();

const token = cookie.get("SECRETKEY")
    const response = await httpService.post(`${base_url}/inventory/products/delete`, { selected }, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// API function to update a product in the inventory
export const updateProductFromInventoryApi = async (formValues) => {
    const cookie = new Cookies();

const token = cookie.get("SECRETKEY")
    const response = await httpService.post(`${base_url}/inventory/products/update`, { formValues }, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// API function to adjust stock by product ID
export const AdjustStockByIdApi = async (data) => {
    const cookie = new Cookies();

const token = cookie.get("SECRETKEY")
    const response = await httpService.post(`${base_url}/inventory/products/update/${data.id}`, { formValues: data.formValues },
    {
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}