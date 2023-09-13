function pic() {
    var bgm = ['bkgs/bkg1.jpg','bkgs/bkg2.jpg'];

    $('.random_bg').css({
        'background' : 'url('+ bgm[Math.floor(Math.random() * bgm.length)] + ') no-repeat',
        'background-position' : '100%',
        'background-size' : 'cover'
    });
}

pic();