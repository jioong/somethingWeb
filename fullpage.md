# fullPage.js #
  
## 配置项 ##
  
* `sectionsColor` 可以为每一个`section`设置`background-color`属性。   
* `controlArrows` 定义是否通过箭头来控制*slide*幻灯片，默认为`true`。当设置为`false`时，则幻灯片两侧的箭头就会消失，在移动设备上，可以通过华东来操作幻灯片。  
* `verticalCentered` 每一页的内容是否垂直居中，默认为`true`。一般保持默认值。  
* `resize` 字体是够随着窗口缩放而缩放，默认为`false`。  
* `scrollingSpeed` 滚动速度，单位为毫秒，默认为 700。  
* `anchors` 定义锚链接，默认为`[]`。有了锚链接，可以快速打开定位到某一页面。注意，定义锚链接的时候，值不要和页面中任意的`id, name` 相同，而且定义时不需要加`#`。  
* `lockAnchors` 是否锁定锚链接，默认值为`false`。如果为`true`，那么定义的锚链接就没有效果。  
* `active` 为一个`section`的`class`的值之一时，打开该页面时，直接定位到该`section`所对应的页面。  
* `easing` 定义页面`section`滚动的动画方式，默认为`easeInOutCubic`,如果修改此项，需要引入`jquery.easings`插件，或者`jquery ui`。  
* `css3` 是否使用`css3 traansforms`来实现滚动效果，默认为`true`。该配置项可以提高支持`CSs3`的浏览器。  
* `loopTop` 滚动到最顶部后是否连续滚动到底部，默认为`false`。  
* `loopBottom` 滚动到最底部后是否连续滚动回顶部，默认为`false`。  
* `loopHorizontal` 横向`slider`幻灯片是否循环滚动，默认值为`true`。  
* `autoScrolling` 是否使用插件的自动滚动方式，默认为`true`，如果选择为`false`，则会出现浏览器自带的滚动条，将不会按页滚动，而是按滚动条的默认行为来滚动。  
* `scrollBar` 是否包含滚动条，默认为`false`,如果设置为`true`,则浏览器自带的滚动条出现，页面滚动时还是按页滚动，但是滚动条的默认行为也有效。  
* `paddingTop/paddingBottom` 设置每一个`section`顶部和底部的`padding`,默认都为*0*。一般如果需要设置一个固定在顶部或者底部的菜单、导航、元素等，可以使用这两个配置项。  
* `fixedElements` 固定的元素，默认为`null`.需要配置一个`jquery`选择器，在页面滚定的时候，`fixedElements`设置的元素固定不动。  
* `keyboardScrolling` 设置是否可以使用键盘方向导航，默认为`true`。  
* `touchSecsitivity`  
* `continuousVertical`是否循环滚动，默认为`false`。如果设置为`true`,则页面会循环滚动，而不是像`loopTop, loopBottom`那样出现跳动，并且该属性与`loopTop, loopBottom`不兼容，不要同时设置。  
* `animateAnchor` 锚连接是否可以控制滚动动画，默认为`true`.如果设置为`false`则通过锚链接定位到某个页面显示不再有动画效果。  
* `recordHistory` 是否记录历史，默认为`true`,可以记录页面滚动的历史，通过浏览器的前进后退来导航。  
* `menu` 绑定菜单，设定的相关属性与`anchors`的值对应后，菜单可以控制滚动，默认为`false`,可以设置为菜单的`jquery`选择器。  
* `navigation` 是否显示导航，默认为`false`。如果设置为`true`,会显示小圆点，作为导航。  
* `navigationPosition` 导航小圆点的位置，可以设置`left, right`。  
* `navigationTooltips` 导航小圆点的`tooltips`设置，默认为`[]`，注意按照顺序设置。  
* `showActiveTooltips` 是否显示当前页面的导航`tooltips`信息，默认为`false`。  
* `slidesNavigation`  
* `slidesNavigationPosition` 幻灯片  
* `scrollOverflow` 内容超过满屏后是否显示滚动条，默认为`false`。如果设置为`true`,则会显示滚动条，如果要滚动查看的内容，还需要`jquery.slimscroll`插件的配合。  
* `sectionSelector` `section`的选择器，默认为`.section`。  
* `slideSelector` `slide`的选择器，默认为`.slide`