const {
    video_all,
    video_play,
    video_get_download,
    video_upload,
    video_upload_img,
    video_upload_data,
    video_get_id,
    video_cover,
    video_search
} = require('../controllers/videoController')

var mutipart= require('connect-multiparty');
const bodyParser=require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mutipartMiddeware = mutipart();
const express = require('express') //调用构造函数 新建app
const router = express.Router(); //使用express的router


router.get('/all', video_all) // 所有视频
router.get('/:id', video_play) //根据id获取视频，并提供视频
router.get('/:id/download', video_get_download) //根据id下载
router.get('/:id/cover',video_cover) //封面头像
router.post('/detail/:id',video_get_id) //详细信息
router.get('/search/:key',video_search) //搜索信息
router.post('/uploadData',urlencodedParser,video_upload_data) //上传表单
// 使用mutipart中间件 设置存储目录
router.use(mutipart({uploadDir:'./resources'}));
router.post('/uploadVideo',mutipartMiddeware,video_upload) //上传视频
router.post('/uploadIMG',mutipartMiddeware,video_upload_img) //上传图片

// router.get('/:id/point', video_get_point)


/* todo */
// router.get('/:id/recommon', video_get_recommon)





module.exports = router