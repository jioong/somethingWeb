# Less #
  
*Less*是一门*CSS*预处理语言，它扩充了*CSS*语言，增加了变量、混合*mixin*、函数等功能，让*CSS*更易维护、扩充。  
  
## 变量 ##
  
定义：`@nice-blue: #5b83ad`，即声明了一个名为`@nice-blue`的变量。  
使用：`color: @nice-blue`,即可得到`color: #5b83ad`。  
注意：变量只能定义一次，其本质是常量。  
  
## 混入 mixin ##
  
定义一些通用的属性集为一个*class*,然后在另一个*class*中去调用这些属性。
  
## 嵌套规则 ##
  
```CSS  
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}

```  
  
## 运算 ##
  
任何数字、颜色或变量都可以参与运算。