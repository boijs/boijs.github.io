boi支持多种前端模块化方案，包括ES6 Modules、CommonJS和AMD。

> CMD需要自行编写插件实现。

### ES6 Modules
ES6 Modules是ECMAScript 6规范的一个新特性，目前浏览器兼容性非常不理想，所以需要在部署到生产环境之前必须经过转译。boi使用babel作为转译工具。

ES6 Modules与Java、PHP等语言的模块化方案类似，模块是被同步引入的。而前端资源难免会有一些load on command（按需加载）的部分，ES6 Modules原生并不能实现动态加载的需求。需要借助第三方工具实现，比如[systemjs](https://github.com/systemjs/systemjs)。

> 动态加载最初也在ES6[草案](https://whatwg.github.io/loader/#system-loader-instance)中，目前仍在制定中，未来可期。

### CommonJS

[源码](https://github.com/boijs/boi-example/tree/master/commonjs)

boi的编译内核是webpack，webpack原生支持CommonJS和AMD，相对来说对CommonJS的支持度更好一些。主要表现在两方面：
1. webpack runtime集成CommonJS runtime；
2. 使用CommonJS实现按需加载时可以定义懒加载模块的name。

比如有以下代码：
```
import '../styles/main.a.scss';
import a from './part/part.a.js';
import b from './part/part.b.js';

window.onload = function() {
    console.log('main chunk a is loaded');
    a();
    document.body.onclick = function() {
        console.log('load on command');
        // 第三个参数是chunk name，决定编译打包的文件名称
        require.ensure([], (require) => {
            let c = require('./part/part.c');
            c.fn();
        },'asyncC');
    }
};

```

使用`require.ensure`实现动态加载，在onload之后点击body任意地方可以触发`part.c.js`的下载和执行。

`require.ensure`第三个参数是动态加载模块的文件名。

### AMD

[源码](https://github.com/boijs/boi-example/tree/master/amd)

AMD本身是对CommonJS的一种实现，它提供了浏览器的模块化runtime。以require.js为例，boi实现AMD的的步骤如下：
1. 在html文档中引入`require.js`并制定`data-main`：
    ```
    <script src="/libs/require.js" charset="utf-8" data-main="main.a.js"></script>
    ```
2. `main.a.js`代码如下：
    ```
    import '../styles/main.a.scss';

    // ADM sample
    require(['./part/part.a.js', './part/part.b.js'], function(a, b) {
        console.log('main chunk a is loaded');
        a();
        b();
        document.body.onclick = function() {
            require(['./part/part.c.js'], function(c) {
                c();
            });
        }
    });
    ```

    同样是点击body触发`part.c.js`的加载和执行，`require`方案没有第三个参数，无法定义动态加载模块的文件名，所以最终编译生成的动态模块文件名中唯一有语义的就是模块的id:
    ```
    1.36a23b99.js    1.49 kB       1  [emitted]
    ```
