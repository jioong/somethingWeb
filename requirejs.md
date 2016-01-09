# RequireJS #
  
*RequireJS*的目标是鼓励代码的模块化，主要目的是代码的模块化，同时还可以用来加速、优化代码。鼓励在使用脚本时以*module ID* 提花*URL*地址。  
*RequireJS*用一个相对于*baseUrl*的地址来加载所有的代码。页面顶层的`<script>`标签含有一个特殊属性`data-main`，*require.js*使用它来启动脚本加载过程，而*baseUrl*一般设置到与该属性相一致的目录。   
```Javascript
	<script data-main="scripts/main.js" src="scripts/require.js"></script>
```  
  
*baseUrl*可通过`RequireJS config` 手动设置。如果没有显示指定*config*及*data-main*,则默认的*baseUrl*为包含*RequireJS*的哪个*HTML*页面所属目录。  
*RequireJS*默认假定所有的依赖资源都是*js*脚本，因此无需在*module ID*上再加*.js*后缀。