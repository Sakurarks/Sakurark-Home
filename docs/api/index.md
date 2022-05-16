# API 文档
在这里，你可以查看 Sakurark 对外开放的 API 接口文档。   
如果有任何疑问，请发送邮件至 [dev@zihan.moe](mailto:dev@zihan.moe), 我们将在一个工作日内进行回复和相应处理。   
::: warning
由于近期 API 服务器提供商遭遇攻击，我们正在将相关 API 迁移至 Google Cloud 以继续提供服务。
:::

## 随机图片接口
该接口将在 GET 请求后随机以 HTTP 302 的方式转向一张图片。   
这些图片的比例都是 1920*1080 或为此比例的更大分辨率版本，来源均为 Pixiv.   
目前的图片量较少，我们将在今后缓慢进行更新。   
~~可能在今后会添加移动设备版本和涩图版本接口?~~
### 调用方法
```
GET https://api.sakurark.com/random-img/index.php
```

#### IPLC 版本
此版本将会根据地区自动解析，并在国内区域解析到 IPLC IP 以提高加载速度。   
图片内容与原版一致。
```
GET https://api.sakurark.com/random-img/iplc.php
```

### 返回实例
该接口不会返回任何内容，将会直接 HTTP 302 跳转至随机到的图片。

## 网易云版一言
一言，但是网易云音乐。   
本接口及数据库完全开源，你可以在 [Sakurarks/Netease-Comment](https://github.com/Sakurarks/Netease-Comment) 中找到。   
如果你在调用时遇到不合适的评论，可以在 [GitHub Issues](https://github.com/Sakurarks/Netease-Comment/issues) 中进行反馈。

### 调用方法
```
GET https://api.sakurark.com/netease-hitokoto
```

### 调用参数
本接口在调用时无需任何参数。


### 返回实例
```
{
    "status":200,
    "auther":"卷烟童子",
    "comments":"校服是我和她唯一穿过的情侣装，毕业照是我和她唯一的合影。"
}
```

### 错误处理
本接口在返回调用错误时将依旧使用 HTTP 200, 请注意相应处理。   
若遇到错误且长时间未解决，请在 [GitHub Issues](https://github.com/Sakurarks/Netease-Comment/issues) 中进行反馈。   
```
{
    "status":500,
    "auther":"Internal Error",
    "comments":"Please feedback me."
}
```