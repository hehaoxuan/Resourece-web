import axios from 'axios'
const server = 'http://localhost:8081/video'

const upload = async (params) => {
    params.imageUrl && delete params.imageUrl
    await axios({
        method: 'post',
        url: server + '/uploadData',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: { ...params },
    }).then((res) => console.log(res))
}


const getAll = async () => {
    return await axios({
        method: 'get',
        url: server + '/all',
    }).then(res => res.data)
}


export { upload, getAll }