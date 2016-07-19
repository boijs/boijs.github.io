### 安装  

```
npm install boi-cli -g
```

如果有被墙问题，建议修改npm库为taobao镜像：
```
npm config set registry https://registry.npm.taobao.org
```

或者使用[cnpm](https://cnpmjs.org)安装。

### 兼容问题

在windows下安装boi自身不会有兼容问题，但是编译过程中用到的一些模块（比如node-sass）的安装过程需要底层编译，所以请确保windows具备vc++ build环境。
