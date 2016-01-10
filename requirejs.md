# RequireJS #
  
*RequireJS*的目标是鼓励代码的模块化，主要目的是代码的模块化，同时还可以用来加速、优化代码。鼓励在使用脚本时以*module ID* 提花*URL*地址。  
*RequireJS*用一个相对于*baseUrl*的地址来加载所有的代码。页面顶层的`<script>`标签含有一个特殊属性`data-main`，*require.js*使用它来启动脚本加载过程，而*baseUrl*一般设置到与该属性相一致的目录。   
```Javascript
	<script data-main="scripts/main.js" src="scripts/require.js"></script>
```  
  
*baseUrl*可通过`RequireJS config` 手动设置。如果没有显示指定*config*及*data-main*,则默认的*baseUrl*为包含*RequireJS*的哪个*HTML*页面所属目录。  
*RequireJS*默认假定所有的依赖资源都是*js*脚本，因此无需在*module ID*上再加*.js*后缀。  
  
## data-main 入口点 ##
  
*require.js* 在加载的时候会检查`data-main`属性。  
```Javascript
<script data-main="scripts/main" src="scripts/require.js"></script>
```  
可以在`data-main`指向的脚本中设置模板加载选型，然后加载第一个应用模块。**注意：**在*main.js*中所设置的脚本是一步加载的。所以如果你在页面中配置了其他*JS*加载，则不能保证它所依赖的*JS*已加载成功。  
  
## 定义模块 ##
  
模块不同于传统的脚本文件，它良好地定义了一个作用域来避免全局名称空间污染。它可以显示地列出其依赖关系，并以函数参数的形式将这些依赖进行注入，而无需引用全局变量。*RequireJS*的模块是**模块模式**的一个扩展，其好处是无需全局地引用其他模块。  
  
**虽然加载的顺序不定，但依赖的顺序最终是正确的。**同时因为无需创建全局变量，甚至可以做到在同一页面上同时加载同一模块的不同版本。  
一个磁盘文件应该只定义 1 个模块。多个模块 可以使用内置优化工具将其组织打包。  
  
**简单的值对：**  
如果一个模块仅含值对，没有任何依赖，则在`define()`中定义这些值对就好了。  
```Javascript
//Inside file my/shirt.js:
define({
    color: "black",
    size: "unisize"
});
```  
  
**函数式定义：**  
如果一个模块没有任何依赖，但需要一个做`setup`工作的函数，则在`define()`中定义该函数，并将其传给`define()`,  
```Javascript
//my/shirt.js now does setup work
//before returning its module definition.
define(function () {
    //Do setup work here

    return {
        color: "black",
        size: "unisize"
    }
});
```  
**存在依赖关系的函数式定义：**  
如果模块存在依赖，则第一个参数是依赖的名称数组，第二个参数是函数，在模块的所有依赖加载完毕后，该函数会被调用用来定义该模块。因此该模块中应该返回一个定义了模块的`object`，依赖关系会以参数的形式注入到该函数上，参数列表与依赖名称列表一一对应。  
```Javascript
//my/shirt.js now has some dependencies, a cart and inventory
//module in the same directory as shirt.js
define(["./cart", "./inventory"], function(cart, inventory) {
        //return an object to define the "my/shirt" module.
        return {
            color: "blue",
            size: "large",
            addToCart: function() {
                inventory.decrement(this);
                cart.add(this);
            }
        }
    }
);
```  
函数参数的顺序应该与依赖顺序保持一致。  
  
**将模块定义为一个函数：**  
对模块的返回值类型并没有强制为一定是一个*object*，任何函数的返回值都是允许的。此处是一个返回了函数的模块定义：  
```Javascript
//A module definition inside foo/title.js. It uses
//my/cart and my/inventory modules from before,
//but since foo/title.js is in a different directory than
//the "my" modules, it uses the "my" in the module dependency
//name to find them. The "my" part of the name can be mapped
//to any directory, but by default, it is assumed to be a
//sibling to the "foo" directory.
define(["my/cart", "my/inventory"],
    function(cart, inventory) {
        //return a function to define "foo/title".
        //It gets or sets the window title.
        return function(title) {
            return title ? (window.title = title) :
                   inventory.storeName + ' ' + cart.name;
        }
    }
);
```  

## 定义一个命名模块 ##
  
