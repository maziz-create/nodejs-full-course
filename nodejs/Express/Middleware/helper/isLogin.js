//not: bu bir middleware'dir. burada fonksiyonu üretip index.jsde import edeceğiz.
const isLogin = (req, res, next) => {
    const isLogin = false;
    if (isLogin) res.next(); //giriş yapıldıysa bir sonraki route'a yönlendiriliyor.
    else res.send("Giriş yapmadınız1");
}

module.exports = isLogin;

/*
bu şekil yaptıktan sonra app.use(isLogin); dersek yine her yerde çalışır. sadece bi route içinde çalışsın
istersek de ilgili route.js sayfasında isLogini kullanmalıyız. nasıl?

router.get('/', isLogin, (req, res) => res.send('blabla'));
yani 2. parametresi olarak verilebilir. 

örneğini profile route'u için yaptım.
*/