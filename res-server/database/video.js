const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017"
const rdb = 'test'
const rcollection = 'video'

const connectDB = () => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("数据库已创建!");
        db.close();
    });
}

const createCollection = () => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log('数据库已创建');
        var dbase = db.db(rdb);
        dbase.createCollection(rcollection, function (err, res) {
            if (err) throw err;
            console.log("创建集合!");
            db.close();
        });
    });
}

const findAll = (sendRes) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(rdb);
        dbo.collection(rcollection).find({}).sort({ _id: -1 }).toArray(function (err, result) { // 返回集合中所有数据
            if (err) throw err;
            db.close();
            sendRes(result)
        });
    });
}

const findAllIsAuditing = (isAuditing,sendRes) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(rdb);
        var whereStr = { "auditing": isAuditing };  // 查询条件
        dbo.collection(rcollection).find(whereStr).sort({ _id: -1 }).toArray(function (err, result) { // 返回集合中所有数据
            if (err) throw err;
            db.close();
            sendRes(result)
        });
    });
}

// 根据id审核视频
const auditingByUid = (uid, auditing) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(rdb);
        var whereStr = { "videoUid": uid };  // 查询条件
        var updateStr = {$set: { "auditing" : auditing }};

        dbo.collection(rcollection).updateOne(whereStr, updateStr, function(err, res) {
            if (err) throw err;
            console.log("文档更新成功");
            db.close();
        });
    });
}

const findByUid = (uid, sendRes) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(rdb);
        var whereStr = { "videoUid": uid };  // 查询条件
        dbo.collection(rcollection).find(whereStr).toArray(function (err, result) {
            if (err) throw err;
            sendRes(result)
            db.close();
        });
    });
}

const insert = (myobj) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(rdb);
        dbo.collection(rcollection).insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("文档插入成功");
            db.close();
        });
    });
}

const search = (keywords, sendRes) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(rdb);
        var whereStr = {$or:[{"title":new RegExp(keywords)},{"describe": new RegExp(keywords)}]};  // 查询条件
        console.log(whereStr);
        dbo.collection(rcollection).find(whereStr).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            sendRes(result)
            db.close();
        });
    });
}

module.exports = {
    createCollection,
    connectDB,
    insert,
    findAll,
    findByUid,
    search,
    findAllIsAuditing,
    auditingByUid
}