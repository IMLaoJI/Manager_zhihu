var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {

        res.json(ret);
        // console.log(res);
    }
};
// 用户登录验证
router.post('/CheckUser', (req, res) => {
    var sql = $sql.user.check;
    var params = req.body;
    console.log("进来了吗user？");
    console.log(params);
    conn.query(sql, [params.username, params.password], function(err, result) {
        if (err) {
            console.log("进来了吗user1？");
            console.log(err);

        }
        if (result) {
            console.log("进来了吗user2？");
            console.log(result);
            jsonWrite(res, result);
        }
    })
});
//注册用户
router.post('/RegUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log("进来了吗？");
    console.log(params);
    conn.query(sql, [params.username, params.password], function(err, result) {
        if (err) {
            console.log("进来了吗1？");
            console.log(err);

        }
        if (result) {
            console.log("进来了吗2？");
            console.log(result);
            jsonWrite(res, result);
        }
    })
});
module.exports = router;