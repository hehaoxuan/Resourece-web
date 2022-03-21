const express = require('express')
const route = require('./routes')

const app = express()
const fs = require('fs')
const path = require('path')

app.get('/video', (req, res) => {
    const time = new Date()
    const videoName = req.query.name
    console.log("资源访问时间" + time.getFullYear() + "/" + time.getMonth() + "/" + time.getDate() + "/" + time.getHours() + "/" + time.getMinutes() + "/" + time.getSeconds() + "-------");


    var file = path.resolve(__dirname ,`resources/video/01/${videoName}.mp4`)
    console.log(file);
    fs.stat(file, function (err, stats) {
        if (err) {
            res.end(err);
        }
        var range = req.headers.range;
        var positions = range.replace(/bytes=/, "").split("-");
        var start = parseInt(positions[0], 10);
        var total = stats.size;
        var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
        var chunksize = (end - start) + 1;

        res.writeHead(206, {
            "Content-Range": "bytes " + start + "-" + end + "/" + total,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Type": "video/mp4"
        });

        var stream = fs.createReadStream(file, { start: start, end: end })
            .on("open", function () {
                stream.pipe(res);
            }).on("error", function (err) {
                res.end(err);
            });

    })

})


const server = app.listen(8081, function () {
    let host = server.address().address || 'localhost'
    host === '::' ? 'localhost' : host
    let port = server.address().port

    console.log(`应用实例，访问地址为 http://${host}:${port}`)
})