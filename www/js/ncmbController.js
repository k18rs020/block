// ncmbController.js

var ncmbController = {
    APPLICATION_KEY: "e9548c341631133d81836f003f35fe74c19584b324ee4072ea880036e547fc4f",
    CLIENT_KEY: "69da3db48fa4bc0b6f6e4fb2a50c6b2d239bce3b1ebb1e1426458c3e747c3c2e",

    ncmb: null,
    currentUser: null,  // ログインしたユーザーのオブジェクトを格納
    screenSize: null,    // 画面サイズを格納

    // 初期化
    init: function(screenSize) {
        var self = this;
        self.ncmb = new NCMB(self.APPLICATION_KEY, self.CLIENT_KEY);    // mobile backendの初期化
        self.screenSize = screenSize;
    }
}
