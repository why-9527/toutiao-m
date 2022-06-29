import axios from 'axios'

const request = axios.create({
    baseURL: 'http://geek.itheima.net/' // 配置服务器地址
})

export default request
