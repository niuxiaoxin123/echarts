let fs = require('fs');
let http = require("http");
let url = require("url");
http.createServer(function (req,res) {
    let {pathname} = url.parse(req.url);
    if(pathname =='/getList'){
        let result = fs.readFileSync(`./data.json`);
        res.end(result);
        return;
    }else{
        let result = fs.readFileSync(`.${pathname}`);
            res.end(result);
            return;
        return;
    }
}).listen(8080,function () {
    console.log('8080监听成功')
})