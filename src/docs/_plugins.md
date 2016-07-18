### 使用boi插件
`boi.use`API提供使用boi自身插件的功能，语法如下：

```
boi.use('<name>',options);
```

其中`name`是具体boi插件的名称，`options`是针对此插件的配置项。

**注意**：`boi.use`语句必须置于`boi-conf.js`的顶部，否则会出错。

下面列举几个简单的例子。

#### vue

[源码](https://github.com/boijs/boi-example/tree/master/vue)

编译vue项目时需要使用[`boi-plugin-loader-vue`](https://github.com/boijs/boi-plugin-loader-vue)插件，此插件的作用是将vue组件编译输出单独的js和css文件。配置`boi-conf.js`如下：

```
boi.use('boi-plugin-loader-vue',{
    style: {
        useHash: false
    }
});
```

上述代码中的配置项`style`的作用是编译输出的css文件不带有hash指纹。

#### svg sprite

[源码](https://github.com/boijs/boi-example/tree/master/svg-sprite)

插件[boi-plugin-loader-svgsprite](https://github.com/boijs/boi-plugin-loader-svgsprite)的作用是将散列的svg文件编译为一个svg sprite文件。配置`boi-conf.js`如下：

```
boi.use('boi-plugin-loader-svgsprite',{
    name: 'svg/svg-sprite.svg',
    inject: false,
    targets: ['index.html']
});
```

配置字段分别的作用为：
* `name`：编译输出的svg sprite文件名称；
* `inject`：是否将编译生成的svg sprite文件的**内容**注入到html中。如果取值`false`，则将`targets`指定的html文件中sprite文件的url更新为编译后的真实url；
* `targets`：待注入的html文件名。

#### markdown

[源码](https://github.com/boijs/boi-example/tree/master/markdown)

插件[boi-plugin-loader-md](https://github.com/boijs/boi-plugin-loader-md)可以支持js中直接引入markdown文件，编译为html字符串以供后续处理。比如在vue中直接引入markdown如下：

```
data: function(){
    return {
        doc: require("../../docs/_install.md")
    };
}
```

然后再`template`中将markdown文件内容注入文档：

```
<template>
    {{doc}}
</template>
```

使用`boi-plugin-loader-md`方法如下：

```
// 配置boi-conf.js
boi.use('boi-plugin-loader-md');
```

> 更多示例请参考[Github](https://github.com/boijs/boi-example)。

### 编写boi插件
用户可以根据自身需求编写boi插件。目前版本(v1.x.x)只支持一种形式的插件：loader。

loader类型的插件本质上是对webpack配置的桥接，boi自身的配置限制了一部分webpack的配置功能，一方面是为了具化的定制团队需求，另一方面也是为了简化API，让不熟悉webpack的用户更容易上手。

编写loader类型插件的方法很简单，只有两点：
1. 书写配置项；
2. 实例化`boi.PluginClass.loader`。

举个例子。首先书写如下的配置项：
```
let config = {
    module: {
        preloader: null,
        postloader: null,
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }].concat(styleLoaders({
            extract: true
        }))
    },
    noParse: null,
    plugins: [stylePlugin],
    // 额外附件内容，一般提供给loaders使用
    extra: {
        vue: {
            loaders: cssLoaders({
                extract: true
            })
        }
    },
    // 插件依赖的第三方module
    // 此配置项是为了解决低版本npm树形安装node_modules引起的module寻址问题
    // 如果你确定使用npm 3.0.0及以上版本，可以不配置此项
    dependencies: [
        'vue-loader',
        'vue-style-loader',
        'vue-html-loader',
        'extract-text-webpack-plugin'
    ]
};
```

大部分配置项是对webpack直接进行配置，有两个字段需要注意：
1. `extra`字段是一些额外内容，一般是某些loader不能通过简单的query配置，需要额外生成一个对象。如上述代码中`extra`字段中的vue对象，便是提供给`loaders`使用；
2. `dependencies`字段是为了解决低版本npm不能平行安装modules导致的模块寻址错误。`dependencies`数组是此插件依赖的一些模块。如果你确定使用了较新版本的npm，可以不配置此项。

配置项书写完毕之后，执行以下代码：
```
let ClassLoader = boi.PluginClass.loader;
new ClassLoader('extend', config);
```

> `extend`是插件的执行类型，目前版本(v1.x.x)暂时不用理会，统一写成`extend`即可。

插件编写完毕之后，发布到npm之后便可以在项目中使用了。

### 使用webpack插件

boi目前版本(v1.x.x)的插件生态仍然很粗糙，不能百分百满足各种项目的不同需求。[高级配置API](/#!/docs/config/gao-ji-pei-zhi)也是为了解决这种问题，用户可以通过[高级配置API](/#!/docs/config/gao-ji-pei-zhi)直接使用webpack插件，使用方法与常规webpack项目相同。比如：

```
let ExtractSVGPlugin = require('boi-svg-sprite-loader/lib/extract-svg-plugin');

boi.spec('image',{
    webpackConfig: {
        loaders: [{
            test: /\.svg$/,
            loader: ExtractSVGPlugin.extract('boi-svg-sprite-loader?extract=true')
        }],
        plugins: [new ExtractSVGPlugin('svg-sprite.[contenthash].svg')]
    }
});
```
