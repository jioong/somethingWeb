# Canvas 宽高设置 #
  
`Canvas` 元素的默认宽高分别为 300px， 150px。有时需要去设置其大小：  
1. 在 `canvas` 元素中设置  
```html5
	<canvas width="300" height="300"></canvas>
```  
**不是**使用 `style="width:300px; height:300px` 去设置，这样的方法设置没有用。  
  
2. 使用 `Canvas API` 操作：  
```javascript
	var canvas = document.getElementById("canvas id");
	canvas.width = 300;
	canvas.height = 300;
```   
这里指定的高宽度值不要带单位。
  
3. 使用 `API`  
```javascript
	var canvas = document.getElementById("canvas id");
	canvas.setAttribute("width", 300);
	canvas.setAttribute("height", 300);
```  
  
4. 使用屏幕宽度、高度  
```javascript
	var canvas = document.getElementById("canvas id");
	canvas.setAttribute("width", screen.availWidth);
	canvas.setAttribute("height", screen.avail.Height);
```  