import { base_url, httpService } from "./config"
import Cookies from "universal-cookie"

export const fetchCurrentUser = async () => {
    const cookie = new Cookies()

    const token = cookie.get('SECRETKEY')
      const response = await httpService.get(`${base_url}/user`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        
    return response.data
}