---
title: 记一次恒生电子的面试题
date: 2020-01-16 15:51:31
tags: 面试题
---

于昨日在滨江恒生电子经历了一次面试，总发觉自己的能力目前还有所欠缺。

且有道面试编程题在面试中没有回答上来，卡在我脑海里如鲠在喉，现在终于想出解题方案，特指更新一次博客，记录下这道题。

> 给定一个字符串作为输入，将其中的数字用数字前临近的字母序列进行替换，字母序列重复的次数等于该数字，最后将字符串输出。例：输入“***\*a1bc3d1\****”，输出“***\*abcbcbcd\****”。

这道题的解题思路很简单，就是把这个字符串作为数组输入，判断其中是否有整数类型，有就重复，没有就跳过。

下面是代码：``

```
def get_decode(str):
    length = len(str)
    i = 0
    temp_dir = []
    result = ''
    while i <length:
        if str[i] in ['0','1','2','3','4','5','6','7','8','9']:
            if temp_dir:
                for j in range(int(str[i])):
                    result += ''.join(temp_dir)
                temp_dir = []
        else:
            temp_dir.append(str[i])
        i+=1
    print(result)
    print(temp_dir)
str = input("请输入")
get_decode(str)
```

 记录自己失败的经历，才能鞭策自己努力。