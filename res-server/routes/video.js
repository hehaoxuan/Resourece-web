const {
    video_all,
    video_get_id,
    video_get_download,
    video_upload,
    video_upload_img,
    video_upload_data
} = require('../controllers/videoController')
var mutipart= require('connect-multiparty');
const bodyParser=require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mutipartMiddeware = mutipart();
const express = require('express') //调用构造函数 新建app
const router = express.Router(); //使用express的router

//根据id获取视频，并提供视频
router.get('/all', video_all)
router.get('/:id', video_get_id)
router.get('/:id/download', video_get_download)

router.post('/uploadData',urlencodedParser,video_upload_data)
// 使用mutipart中间件 设置存储目录
router.use(mutipart({uploadDir:'./resources'}));
router.post('/uploadVideo',mutipartMiddeware,video_upload)
router.post('/uploadIMG',mutipartMiddeware,video_upload_img)

// router.get('/:id/point', video_get_point)


/* todo */
// router.get('/:id/recommon', video_get_recommon)





module.exports = router