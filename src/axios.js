import axios from "axios";
import {baseUrl} from './cosnstants/constants'

 const instance =axios.create({
    baseURL:baseUrl,
 });

export default instance 