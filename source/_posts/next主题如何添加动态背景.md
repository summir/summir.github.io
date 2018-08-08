---
title: next主题如何添加动态背景
date: 2018-08-08 14:35:03
tags: next主题
categories: themes
---
# next主题如何添加动态背景
>假如你也是最近下的next主题，那么我这篇已经对你是有帮助的。不谈论之前版本的next。

在next的官网上有这么一句话：
>如果next主题版本在5.1.1以上的话，直接在themes/next目录下，将配置文件`_config.yml`中找到`canvas_nest: false`，改为`canvas_nest: true`即可。

然而在 6.0+的版本中，这样操作完全没有作用……本人甚至一度开始怀疑人生Orz…怀疑是不是文件有问题，还有包括next主题的语言设置。这个放到末尾来讲。

在`_config.yml`中`canvas_nest: true`之前有这样的注释:
```
	# Canvas-nest   
	# Dependencies: https://github.com/theme-next/theme-next-canvas-nest
```

在这个网站上 https://github.com/theme-next/theme-next-canvas-nest的README.md清楚地给出了next的背景动态使用：

* 进入`themes/next/source/lib`路径,输入`$ git clone https://github.com/theme-next/theme-next-canvas-nest source/lib/canvas-nest`
* 在next的`_config.yml`修改canvas_nest: true
* 回到themes/next/source/lib/canvas-nest文件夹，git bash：`git pull`
* `hexo clean` `hexo g` `hexo s`就可以预览了。

最后那个语言问题，并不是next官网和google的一堆信息都是把languages改成zh_Hans，这是无效的，需要在站点配置文件_comfig.yml中把languages改成zh_CN。