(function(){
    var test = require("./module/test");
    var hoge = require("./module/hoge");

    console.log(test.returnPlus(1, 2));
    console.log(hoge.returnKakeru(1, 2));
})();