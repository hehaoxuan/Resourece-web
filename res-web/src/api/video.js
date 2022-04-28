import axios from 'axios'
const server = 'http://localhost:8081/video'

const upload = async (params) => {
    params.imageUrl && delete params.imageUrl
    return await axios({
        method: 'post',
        url: server + '/uploadData',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
            ...params
        },
    }).then(res => res.data)
}

const getAll = async () => {
    return await axios({
        method: 'get',
        url: server + '/all',
    }).then(res => res.data)
}

const getVideoDeatil = async (params) => {
    return await axios({
        method: 'post',
        url: server + `/detail/${params}`,
    }).then(res => res.data)
}

const computeVideo = (url) => {
    return `${server}/${url}`
}

const computeVideoDownload = (url) => {
    return `${server}/${url}/download`
}

const computeCover = (url) => {
    return `${server}/${url}/cover`
}

const getVideoCover = async (params) => {
    return await axios({
        method: 'get',
        url: server + `/cover/${params}`,
    }).then(res => res.data)
}

const search = async (params) => {
    params = encodeURI(params)
    return await axios({
        method: 'get',
        url: server + `/search/${params}`
    }).then(res => res.data)
}


export {
    upload,
    getAll,
    computeVideo,
    getVideoDeatil,
    getVideoCover,
    computeCover,
    search,
    computeVideoDownload
}
