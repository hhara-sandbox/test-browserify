(function(){
    var test = require("./module/test");
    var hoge = require("./module/hoge");

    console.log(test.returnPlus(1, 2));
    console.log(test.hoge(1, 2));
})();