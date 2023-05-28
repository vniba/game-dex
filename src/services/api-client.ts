import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'a751190c61f74b928196e581f7234c2e'
    }
})
