webpackJsonp([1],{63:function(e,exports,o){e.exports="<h2 id=get-start>Get Start</h2> <h3 id=->安装</h3> <pre><code>npm install boi-cli -g\n</code></pre><h3 id=-boi->创建boi项目</h3> <p>boi安装成功后，在工作目录内运行：</p> <pre><code>boi new boi-demo\n</code></pre><p>或者在已存在目录下运行：</p> <pre><code>boi new .\n</code></pre><p>命令行将依次有以下提示：</p> <p><img src="+o(64)+' alt=""></p> <p>自定义项目名称，默认项目名称为app。</p> <p><img src='+o(65)+' alt=""></p> <p>选择项目类型，上图中依次为常规项目、vue作为第三方库单独引入的项目和vue参与webpack打包的项目。</p> <blockquote> <p>常规项目不限制任何选型，开发者可以自由使用第三方库的引入方式（script标签、npm等）。同时，常规项目的boi-conf.js只有最基本的配置，也就是说，如果在常规项目中使用vue，开发者需自行进行配置。</p> </blockquote> <p><img src='+o(66)+' alt=""></p> <p>选择npm第三方依赖。</p> <p><img src='+o(67)+' alt=""></p> <p>最终确认。</p> <p><img src='+o(68)+' alt=""></p> <p>配置完毕后，boi会自动安装npm第三方依赖。全部执行成功后，生成的项目目录如下图：</p> <p><img src='+o(69)+' alt=""></p> <h3 id=->编译项目文件</h3> <ol> <li>在项目根目录下创建文件<code>boi-conf.js</code>;</li> <li>编辑<code>boi-conf.js</code>中的配置项，比如js文件的编译配置如下：</li> </ol> <pre><code>boi.spec(&#39;js&#39;, {\n    extType: &#39;js&#39;,\n    srcType: [&#39;es2015&#39;],\n    srcDir: &#39;js&#39;,\n    destDir: &#39;js&#39;\n});\n</code></pre><p>在项目根目录下执行<code>boi build</code>。默认是dev环境的编译，会生成souremap文件以方便debug。</p> <p>生产环境的编译执行：</p> <pre><code>boi build prod\n</code></pre><p>prod环境编译输出的文件不会产生souremap。</p> <h3 id=->使用插件</h3> <p>编辑<code>boi-conf.js</code>，使用API <code>boi.use</code>引入插件，比如：</p> <pre><code>boi.use(&#39;boi-plugin-loader-vue&#39;);\n</code></pre><p>boi会判断用户是否已安装此插件，如果没有，则boi会自动安装此插件。</p> <blockquote> <p>建议自行安装插件，boi使用npm安装插件，由于一些<em>原因</em>可能会安装失败</p> </blockquote> <p>如果npm被墙，请尝试以下<em>任意</em>一种方案：</p> <ol> <li>挂VPN；</li> <li>修改npm仓库到淘宝镜像<code>npm config set registry https://registry.npm.taobao.org</code>;</li> <li>安装cnpm。</li> </ol> <blockquote> <p>如果安装cnpm，请务必自行安装插件</p> </blockquote> <h3 id=dev-server>dev server</h3> <p>项目根目录下执行：</p> <pre><code>boi serve\n</code></pre><p>执行成功后，如果项目中只存在一个<code>index.*.html</code>文件，可直接访问<code>localhost:8888</code>即可；如果项目中存在多个<code>index.*.html</code>文件，访问<code>localhost:8888/*.html</code>或者<code>localhost:8888/views/*.html</code>(html文件根据具体命名改动)。boi支持动态编译，开发过程中不必多次重启dev server。</p>'},64:function(e,exports,o){e.exports=o.p+"assets/new-1.png"},65:function(e,exports,o){e.exports=o.p+"assets/new-2.png"},66:function(e,exports,o){e.exports=o.p+"assets/new-3.png"},67:function(e,exports,o){e.exports=o.p+"assets/new-4.png"},68:function(e,exports,o){e.exports=o.p+"assets/new-5.png"},69:function(e,exports,o){e.exports=o.p+"assets/new-6.png"},49:function(e,exports,o){var t,p;o(50),t=o(52),p=o(70),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),p&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=p)},51:function(e,exports,o){exports=e.exports=o(7)(),exports.push([e.id,".docs{padding-left:25%}.docs .docs_index{position:fixed;top:0;left:0;height:100%;background-color:#d3d3d3;width:25%;padding-top:8rem;box-sizing:border-box}.docs .docs_article{padding-left:5%}",""])},52:function(e,exports,o){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var p=o(11),i=t(p),n=o(53),s=t(n),c=o(58),r=t(c);exports["default"]={data:function(){var e=[{anchor:"start",title:"起步"}],t={start:{title:e.start,content:o(63)}};return{docs:t,index:e}},created:function(){},components:{IndexHeader:i["default"],DocIndex:s["default"],DocArticle:r["default"]}}},70:function(e,exports){e.exports=" <index-header></index-header> <div class=docs> <div class=docs_index> <doc-index v-bind:index=index v-bind:active=$route.params.anchor></doc-index> </div> <div class=docs_article> <doc-article v-bind:content=docs[$route.params.anchor].content></doc-article> </div> </div> "},50:function(e,exports,o){var t=o(51);"string"==typeof t&&(t=[[e.id,t,""]]);o(9)(t,{});t.locals&&(e.exports=t.locals)},61:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={props:{content:{type:String,required:!0}},created:function(){}}},62:function(e,exports){e.exports=" <div class=article v-html=content> </div> "},59:function(e,exports,o){var t=o(60);"string"==typeof t&&(t=[[e.id,t,""]]);o(9)(t,{});t.locals&&(e.exports=t.locals)},58:function(e,exports,o){var t,p;o(59),t=o(61),p=o(62),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),p&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=p)},60:function(e,exports,o){exports=e.exports=o(7)(),exports.push([e.id,"",""])},57:function(e,exports){e.exports=' <div class=indexes> <ul data-active={{active}} class=list> <li v-for="item in index" data-anchor={{item.anchor}} class=item> <a v-link=\'{name: "docs",params: {anchor:item.anchor}}\'>{{item.title}}</a> </li> </ul> </div> '},56:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={props:{index:{type:Array,required:!0},active:{type:String,required:!0}},created:function(){}}},55:function(e,exports,o){exports=e.exports=o(7)(),exports.push([e.id,"",""])},54:function(e,exports,o){var t=o(55);"string"==typeof t&&(t=[[e.id,t,""]]);o(9)(t,{});t.locals&&(e.exports=t.locals)},53:function(e,exports,o){var t,p;o(54),t=o(56),p=o(57),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),p&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=p)}});