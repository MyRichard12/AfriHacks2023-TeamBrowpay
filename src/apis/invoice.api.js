import { base_url, httpService } from "./config";
import Cookies from 'universal-cookie'


export const InvoiceItemsApi = async () =>{
    try {
        const response = await httpService.get(`${base_url}/inventory/items/all`)
        return response.data
        // return true
        
    } catch (error) {
        return error
    }
}


export const CreateInvoiceApi = async (formBody) => {
    try {
        const response = await httpService.post(`${base_url}/invoice/create`, formBody)
        return response.data
    } catch (error) {
        return error
    }
}

