import { base_url, httpService } from "./config";
import Cookies from 'universal-cookie'


// API function to add a book to the inventory
export const addBookToInventoryApi = async (formValues) => {
    const cookie = new Cookies();

const token = cookie.get("SECRETKEY")
    const response = await httpService.post(`${base_url}/inventory/books/add`, { formValues }, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// API function to fetch all books from the inventory
export const getAllBooksFromInventoryApi = async () => {
    const cookie = new Cookies();

const token = cookie.get("SECRETKEY")

    try{
    if(token !== undefined){
    const response = await httpService.get(`${base_url}/inventory/books/all`, {
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

// API function to delete a book from the inventory
export const deleteBookFromInventoryApi = async (selected) => {
    const cookie = new Cookies();

const token = cookie.get("SECRETKEY")
    const response = await httpService.post(`${base_url}/inventory/books/delete`, { selected }, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// API function to update a book in the inventory
export const updateBookFromInventoryApi = async (formValues) => {
    const cookie = new Cookies();

const token = cookie.get("SECRETKEY")
    const response = await httpService.post(`${base_url}/inventory/books/update`, { formValues }, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// API function to adjust stock by book ID
export const AdjustStockByIdApi = async (data) => {
    const cookie = new Cookies();

const token = cookie.get("SECRETKEY")
    const response = await httpService.post(`${base_url}/inventory/books/update/${data.id}`, { formValues: data.formValues },
    {
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}