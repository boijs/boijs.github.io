boi.use('boi-plugin-loader-md');
boi.use('boi-plugin-loader-vue',{
    style: {
        destDir: 'style',
        useHash: false
    }
});
boi.spec('basic', {
    appName: 'boisite',
    // 本地编译目录
    localPath: {
        src: './src/',
        dest: './.tmp/',
        thirdparty: './js/libs/'
    },
});

boi.spec('js', {
    extType: 'js',
    srcType: ['es2015'],
    srcDir: 'js',
    destDir: 'js',
    useHash: false,
    files: {
        vendor: ['vue','vue-router']
    }
});

boi.spec('style', {
    extType: 'scss',
    srcDir: 'style',
    destDir: 'style',
    useHash: false
});

boi.spec('html', {
    extType: 'html',
    srcDir: 'views'
});

boi.spec('image', {
    extType: ['png', 'jpg','otf'],
    destDir: 'assets',
    useHash: false
});
