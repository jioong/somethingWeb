# JavaScript #
  
*Netscape* 和 *Sun* 公司联合与 *ECMA* 欧洲计算机制造商协会对 *JavaScript* 语言进行了标准化，其结果就是*ECMAScript* 语言。  
  
*Javascript* 只局限在 *WEB* 浏览器。它就是一种脚本语言，*JS*脚本通常只能通过*WEB*浏览器去完成某种操作而不是像普通意义上的程序那样可以独立运行。  
  
> DOM: 一个与系统平台和编程语言无关的接口，程序和脚本可以通过这个接口动态地对文档内容、结构和样式进行访问和修改。  
  
## JavaScript 语法 ##
  
对于 *JavaScript* 语言，在网络环境中，， *WEB* 浏览器将负责完成有关的解释和执行工作。浏览器中的 *JavaScript* 解释器将直接读入源代码并加以执行。如果没有解释器， *JavaScript* 代码将无法得到执行。对于解释性程序设计的语言，代码中的错误只有等到解释器实际执行到有关代码时才会被发现并报告。  
  
### 语句 ###
  
用 *JavaScript* 或任何一种其他程序设计语言编写出来的脚本都是由一些列指令构成的，这些指令称为 **语句 Statement**。  
  
**注释：**单行注释 `//`， 多行注释 `/*...*/` 。  
  
**变量：** *JavaScript* 允许直接对变量进行赋值而无需提前对它做出声明。但是提前对变量做出声明是一种良好的编程习惯。  
* 在*JavaScript*中，变量和其他语法元素的名字**都是区分大小写的。**   
* 变量名中不允许出现空格或标点符号 （美元符号 `$`） 除外。  
* *JavaScript* 变量名允许包含数字、字母、美元符号和下划线。  
* *var* 是语言中的一个关键字。  

### 数据类型 ###
  
要求必须明确地对数据类型做出声明的程序设计语言被称为 **强类型语言(Strongly typed)**,而无需进行类型声明的语言则称为 **弱类型语言(Weakly typed)**。所谓弱类型意味这程序员可以随意改变某个变量的数据类型。  
  
1. 字符串：由零个或多个字符组成。字符包括字母、数字、标点符号和空格。字符串必须放在引号里。 **坚持使用双引号。**  
2. 数值：*JavaScript* 允许使用带小数点的数值，并且允许数值是任意位数，这类数值称为 **浮点数。**  
3. 布尔值： `true, false`。    
4. 数组：数组是由名字相同的多个值构成一个集合，集合中的每个值都是这个数组的元素。在脚本中，数组使用关键字 `Array` 来声明。在声明数组的同时，还可以对数组的元素个数进行声明。如 `var betales=Array(4)`。事实上，*javascript* 并不要求在声明数组时就给出它的元素个数，完全可以在声明数组时不给出具体的元素个数。向数组中添加元素的操作被称为 **填充 populating**。在填充数组时，不仅需要给出新元素的值，还要指定在数组中存放的位置，通过下标给出。如 `array[index]=element` 。 **数组下标从 0 开始。**  
5. 关联数组：可以在填充数组时为每个新元素明确地给出下标的方式来改变默认行为。在为新元素给出下标时， **不必局限于整数数组。**数组下标可以是字符串。这称为 **关联数组 associative array**。从某种意义上讲，完全可以把所有的数组都看作是关联数组。用关联数组来代替数值数组的做法意味着，可以通过各元素的名字而不是下标数字来引用它们，**大大提高脚本的可读性。**  

### 操作 ###
  
**算术操作符：**  
  
算术操作中的每一种都必须借助于相应的操作符才能完成。 加号(+) 是一个比较特殊的操作符：既可用于数值，也可以用于字符串。**把多个字符串首尾相连在一起的操作叫做 拼接 concatenation。** 支持 `+=` 。  
  
### 条件语句 ###
  
*JavaScript* 脚本需要使用条件语句来做出判断和决策。在解释脚本时，浏览器将依次执行这个脚本中的各条语句，只有满足条件才能让更多语句得到执行。`if`语句的基本语法：  
```Javascript
	if(condition) {
		statements;
	} else {
		statements;
	}
```  
  
### 比较操作符 ###
  
*JavaScript* 提供了比较操作符 `>, <, >=, <=, ==,  !=` 。  
  
### 逻辑操作符 ###
  
*JavaScript* 允许把条件语句里的操作组合在一起。`&&， ||， ！` 。  
  
### 循环语句 ###
  
循环语句可以重复多次的执行同一段代码。只要给定的条件仍能满足，包含在循环语句里的代码将重复地执行下去。  
  
**while：**  
```Javascript
	while(condition) {
		statements;
	}
```  
  
**do...while:**  
```Javascript
	do {
		statements;
	} while(condition);
```  
这种循环保证花括号里的语句至少会被执行一次。  
  
**for:**  
```Javascript  
	for(initial condition; test condition; alter condition) {
		statements;
	}
```  
  
## 函数 ##
  
如果需要多次使用同一组语句，还可以把它们变成一个 **函数。**  
> 函数：一组允许人们在代码里随时调用的语句。从效果来看，每个函数都是相当于一个短小的脚本。  
  
**先对函数做出定义，再调用。**  
  
```Javascript
	function name(arguments) {
		statements;
	}
```  
  
*JavaScript* 提供了很多 **内建函数。**在定义函数时，可以声明任意多个参数，只需用逗号分割开。在函数内部，可以像使用普通变量那样使用它的任何一个参数。  
**函数不仅能够接受数据，还能返回数据。返回值可以是数值、字符串、数组或一个布尔值，需要使用 return 语句：**  
```Javascript
	function name(arguments) {
		statements;
		return var;
	}
```   
  
命令变量时，使用下划线分割各个单词。命名函数时，从第二个单词开始把每个单词的第一个字母写成大写形式。    
  
### 变量的作用域 ###
  
变量既可以是全局的，也可以是局部的。  
**全局变量** 可以在脚本的任何位置被引用。一旦在脚本里声明一个全局吧线路，就可以在脚本中的任何位置，**包括各有关函数的内部**，引用它。全局变量的作用域是整个脚本。  
**局部变量** 只存在于对它做出声明的那个函数内部。局部变量的作用域仅限于某个特定的函数。  
  
如果在函数中使用了 `var`，那个变量将会被视为一个局部变量。如果没有使用 `var`, 将会被视为全局变量，如果在脚本里已经存在一个与之同名的变量，这个函数将覆盖哪个现有变量的值。  
  
**必须把函数内部的变量全都明确地声明为局部变量。**    
  
## 对象 ##
  
对象是一种非常重要的 **数据类型。**对象是自我包含的数据集合，包含在对象里的数据可通过两种形式：属性和方法，  
* 属性是隶属于某个特定对象的变量。  
* 方法是只有某个特定对象才能调用的函数。  

对象就是由一些彼此相关的属性和方法集合在一起而构成的一个数据实体。在*JavaScript*脚本里，属性和方法都需要你使用如下语法：  
```Javascript
	Object.property
	Object.method()
```  
  
为了使用对象，需要创建对象的实例。实例是对象的具体表现。在*JavaScript*语言里，为给定对象创建一个新实例需要使用关键字 `new`,如：  
```Javascript
	var me = new Person;
```  
  
### 内建对象 ###
  
数组就是一种内建对象。  
  
### 宿主对象 ###
  
是由其运行环境提供的。宿主对象主要包括 `Form, Image, Element`,可以通过这些对象获得关于某给定网页上的表单、图像和各种表单元素的信息。
  
## DOM ##
  
* **D-文档**，当创建一个网页并加载到 *WEB* 浏览器时，*DOM* 就在幕后生成，创建一个文档对象。  
* **O-对象**，1）用户定义对象，2）内建对象，内建在*JavaScript*语言里的对象，3）宿主对象，由浏览器提供的对象。  
* **M-模型**，*DOM*代表着被加载到浏览器窗口里的当前网页，浏览器提供了当前网页的模型，我们可以通过 *JavaScript* 去读取模型。  

### 节点 node ###
  
在 *DOM* 里 存在许多不同类型的节点。  
  
#### 1. 元素节点 ####
  
*DOM* 的原子是 **元素节点 element node。**各种标签提供了元素的命中率，元素可以包含其他的元素。  
  
#### 2. 文本节点 ####
  
元素只是不同节点类型中的一种。**text node**。   
**文本节点总是被包含在元素节点的内部。但并非左右的元素节点都包含由文本节点。  **
  
#### 3. 属性节点 ####
  
元素都或多多少的有一些属性，**属性的作用是对元素做出更具体的描述。** **属性节点 attribute node 。**  
**并非所有的元素都包含着属性，但所有的属性都会被包含在元素里。**  
  
### getElementById() 方法 ###
  
*DOM* 提供名为 `getElementById()` 的方法，该方法返回一个与指定 `id` 属性值的元素节点相对应的对象。  
这个方法是 `document` 对象相关联的函数。在脚本里，函数名的后面必须跟着一个圆括号。  
```Javascript
	document.getElementById(id)
```   
返回的 **对象** 在对应的 `document` 里是独一无二的。  
  
### getElementByTagName() 方法 ###
  
`getElementByTagName()` 方法返回一个 **对象数组，**每个对象分别对应这文档里有着指定标签的元素。  
该方法允许把**一个通配符当作参数，**这意味着文档里的每个元素都将在这个函数所返回的数组里占有一席之地。通配符`*`必须放在引号里。  
  
**文档中的每个元素节点都是一个对象。**  
  
### getAttribute() 方法 ###
  
使用前面的方法找到元素后，可以利用 `getAttribute()` 方法将对应元素的各种属性值都查询出来。该方法只有一个参数，即准备查询的属性的名字。  
```Javascript
	object.getAttribute(attribute)
```  
  
**注意：**该方法不能通过 `document` 对象调用。它只能通过一个**元素节点对象**调用。  
  
### setAttribute() 方法 ###
  
该方法允许对**属性节点**的值做出修改。类似的，该方法也只能通过**元素节点对象**调用。它需要传递两个参数：  
```JavaScript
	object.setAttribute(attribute, value)
```  
  
**注意：**通过`setAttribute()`方法对文档做出的修改，将使得文档在浏览器窗口里的显示效果/行为动作发生相应的变化，但是并不会修改文档本身的源代码。  
  
**childNodes 属性：**把给定节点树里的任何一个元素的所有子元素检索出来，除了元素节点，所有的属性节点和文本节点也包含在其中，**返回为一个数组。**事实上，文档里几乎每一样东西都是一个节点，甚至空格和换行符都会被解释为节点，而它们也包含在 `childNodes` 属性所返回的数组中。  
**nodeType 属性：**返回值为一个数字。1）元素节点的属性值为 1， 2）属性节点的属性值为 2， 3）文本节点的属性值为 3 .  
**nodeValue 属性：**如果想要改变某个文本节点的值，就可以使用 `nodeValue` 属性。  
  
### firstChild 和 lastChild 属性 ###
  
数组元素 `childNodes[0]` 即为 `firstChild`。`lastChild` 属性则为 `childNodes[]` 数组的最后一个元素 `childNodes[node.childNodes.length - 1]` 。  
  
