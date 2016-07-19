### 配置文件
boi的配置文件为项目根目录下的`boi-conf.js`。

目前v1.x.x版本支持的配置项有：

* `spec`API提供具体编译的配置项，包括以下几种：
    * `basic`：`Object`，基础配置；
    * `js`：`Object`，JS文件的编译配置项；
    * `style`：`Object`，style文件的编译配置项；
    * `html`：`Object`，html模板文件的编译配置项；
    * `image`：`Object`，图片文件的编译配置项。

* `serve`API提供dev server相关的配置项，包括以下几种：
    * `port`：`String`，修改默认监听端口；
    * `domain`：`String`，修改默认监听域名

> 目前版本支持的配置项较少，以满足本公司需求为主，后续版本会扩充可配置模块。

### spec配置项

#### basic

* `appName`：`String`，项目名称，默认值为`app`；
* `localPath`: `Object`，本地目录配置
    * `src`：`String`，源码文件目录，默认为`./src`；
    * `dest`：`String`，编译输出的本地目录，默认为`./dest`；
    * `thirdparty`：本地第三方库文件目录，默认为`./libs`。
* `cdn`：【选填】`Object`，cdn相关配置
    * `server`：`String`，cdn域名；
    * `path`：`String`，项目在cdn服务器的路径。 -

cdn配置会在生产环境执行编译时将静态资源的url编译为cdn url，比如`index.html`中引用`main.app.js`：
```
<script src='js/main.app.js'></script>
```

cdn配置为：
```
cdn: {
    server: 'static.dj.com',
    path: '/app/'
}
```

执行`boi build prod`，编译成功后`index.html`中的引用地址便会被替换为：
```
<script src='http://static.dj.com/app/js/main.app.[hash].js'></script>
```

> `[hash]`为文件的hash指纹。

#### js

-	`extType`：`String`，扩展名，默认值为js；
-	`srcType`：`Array`，源文件的转译配置，默认值为`['es2015']`；
-	`srcDir`：`String`，JS文件源码存放目录，相对于`basic.localPath.src`；
-	`destDir`：`String`，JS文件编译输出目录，相对于`basic.localPath.dest`；
-	`mainFilePrefix`：`String`，JS入口文件的命名前缀，默认值为`main`；
-	`uglify`：`Boolean`，编译输出文件是否uglify，默认`true`；
-	`useHash`：`Boolean`，编译输出文件是否打上hash指纹，默认`true`；
-	`mutiEntriesVendor`：`Boolean`，存在多入口文件时是否提取公共部分作为一个common文件，默认值为`false`。此配置项在未指定`vendor`时才会起效，如果未指定`vendor`并且存在多个入口文件，可以将公用的webpack runtime提取出来，已减少主文件体积并利用浏览器缓存提升应用性能；
-	`files`:【选填】`Object`，指定编译文件。此项如不开启则boi自动匹配遵循命名规范的入口文件。

	1.	`main`：`Object`，指定入口文件，如下：

		```
		files: {
		    main: {
		        'a': 'main.a.js',
		        'main.b': 'main.b.js'
		    }
		}
		```

	2.	`vendor`：`Array`，通用模块列表，数组内的模块将被合成打包为`vendor.js`。

#### style

style配置项与JS大体相同，有以下区别：

-	没有`uglify`、`srcType`、`mutiEntriesVendor`和`files`配置项；
-	`extType`决定css预编译器的选型。

#### html

html配置项与JS大体相同，有以下区别：

-	html没有`uglify`、`srcType`、`mutiEntriesVendor`和`useHash`配置项；
-	`files`: `Array`，index文件的列表，仍需遵循命名规范；
-	`mainFilePrefix`：主文件前缀，默认值为`'index'`。

#### image

-	`extType`：`Array`，图片文件扩展名列表；
-	`destDir`：`String`，编译输出目录，`basic.localPath.dest`；
-	`base64`：`Boolean`，是否对小尺寸图片进行base64编码，默认`false`；
-	`base64Limit`：`Number`，base64编码文件的体积上限，大于这个尺寸的文件不会被base64编码；
-	`cdn`：【选填】`String`，图片可配置独立的cdn域名，此项配置将覆盖basic同名配置项。比如style文件中引用图片：
    ```
	body{
	    background-color:blue;
	    backgournd: url('../assets/images/icons.png');
	}
	```

	image配置项为：

	```
	boi.spec('image', {
	    extType: ['png', 'jpg'],
	    destDir: 'image',
	    cdn: 'img.daojia.com',
	});
	```

	编译输出的文件为：

	```
	body{
	    background-color:blue;
	    backgournd:url(http://img.daojia.com/icons.b709986b.png)
	}
	```

### serve配置项

* `port`：`String`，修改默认监听端口；
* `domain`：`String`，修改默认监听域名

### 高级配置
config API本质上是根据配置寻找文件并组合编译内核-webpack的配置。boi基础的config API可以满足大部分需求，对于不能满足的一些需求，作者建议使用或者编写插件解决。此外，boi config API仍然提供了高级配置项，简单讲就是让用户可以直接配置webpack。

`spec`配置项中的每个模块可以使用以下配置项：
* `webpackConfig`：`Object`，boi支持自定义webpack的module和plugins配置项，此项配置将完全覆盖boi内置的webpack配置，请谨慎使用。

	1.	`preloader`：`Object`，对应webpack的preloader；
	2.	`loader`：`Object`，对应webpack的loader；
	3.  `loaders`: `Array`，对应webpack的loaders；
	3.	`postLoader`：`Object`，对应webpack的postloader；
	4.	`plugins`：`Array`，对应webpack的plugins。

比如：
```
boi.spec('js',{
    webpackConfig: {
        loader: {
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015','react']
            }
        }
    }
});
```
