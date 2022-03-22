const fs = require("fs");
const path = require("path");

const video_all = (req, res) => { //返回所有的video信息
}


const video_get_id = (req, res) => {
    const {id:videoId} = req.params
    // console.log(req)
    var file = path.resolve(__dirname, `../resources/video/01/${videoId}.mp4`);
    console.log(file);

    fs.stat(file, function (err, stats) {
        if (err) {
            res.end(err);
        }
        var positions = req.headers.range.replace(/bytes=/, "").split("-");
        var start = parseInt(positions[0], 10);
        var total = stats.size;
        var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
        var chunksize = end - start + 1;

        res.writeHead(206, {
            "Content-Range": "bytes " + start + "-" + end + "/" + total,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Type": "video/mp4",
        });

        var stream = fs
            .createReadStream(file, { start: start, end: end })
            .on("open", function () {
                stream.pipe(res);
            })
            .on("error", function (err) {
                res.end(err);
            });
    });
}

const video_get_download = (req,res) =>{

}

const video_get_point = (req,res)=>{

}


module.exports = {
    video_all,
    video_get_id,
    video_get_download,
    video_get_point
}