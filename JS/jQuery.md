# jQuery #
  
**选择：** `$(元素、ID、class)`   
* `.css("font-weight", "bold")`  设置元素样式  
* `.attr("disable", "true")` 设置或获取元素的某项属性值  

1. `$(p ~ )` 当 `~` 之后不指定别的元素时，即选择 `p` 后的所有元素。    
2. `$(li:eq(2))` 选择第 3 个元素，下标从 0 开始。  
3. `:contains(‘text’)` 包含指定字符的全部元素，使用单引号。  
4. `:has('selector')` 使用包含的元素名称来过滤。  
5. `:hidden` 过滤选择器的功能是获取全部可见的元素，也就是`type`属性值为`hidden`的元素。  
6. `:visible` 获取全部可见元素，只要不将元素的`display`属性设置为`none`,即可通过该选择器获取。  
7. ` $("#content").css({"background-color":"red","color":"#fff"});` 设置多个属性  
8. `removeClass(), addClass()` 增加样式或删除样式  
9. `appendTo()` 可以向指定元素插入内容，使用格式`$(content).appendTo(selector)`   
10. `$(selector).before(content), $(selector).after(content)` 在整个元素的前面或后面插入内容  
11. `clone()` 可以生成一个被选择元素的副本，包含它的节点、文本和属性。 `$(selector).clone()`  
12. `replaceWith(), replaceAll()` 用于替换元素或元素中的内容，它们调用时，内容和被替换元素所在的位置不同 `$(selector).replaceWith(content), $(content).replaceAll(selector)`  
13. 