# JavaScript #
   
## 值,类型,操作 ## 
在 *JavaScript* 中有六种基础类型的值：`numbers, strings, Booleans, objects, functions, undefined .`  
  
**值：**  
在*JavaScript*中，数值都是 *64 bits*。  
  
在*JavaScript*中有三个特殊值：正负无穷大 `Infinity, -Infinity`。对依赖无穷大的计算不要太过相信，它的九三不具有一致性。非数 `NaN`，它是 `number` 类型。  
   
> 不是所有的操作符都是符号，也可以是单词。
一元操作符： `typeof` 返回参数的类型。  
  
在*JavaScript*中只有一个数字不等于它自己本身，就是`NaN`。  
  
未定义值：`null, undefined`。  
  
`===, !==` 用于屏蔽掉掉自动类型转换。  
  
短路操作：`||` 当其左边的表达式为真时，直接返回左边的表达式值。否则，返回右边的值。对于`&&` 当其左边表达式为假时，返回左边表达式值，否则返回右边表达式值。  
  
**高阶函数：**把其他函数当作参数或返回函数的函数。  
  
**JSON:**所有的属性名都要用双引号括住，值允许使用简单的数据表达式，不能使用函数调用、变量等任何需要计算的。在**JSON**中不允许使用注释。  
*JavaScript*提供两个函数去操控*JSON*，`JSON.stringify, JSON.parse` 。第一个用于从*JavaScript*值生成*JSON*。第二个相反。