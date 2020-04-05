设计文档
====
## 个人信息
----
学号：19302010074<br>
姓名：张诗涵<br>
## 地址
----
Github地址：https://github.com/yoyazhang/My-Project1<br>
Github Pages地址：<br>
## 项目完成情况
----
自认为完成了！（叉腰）<br>
鉴于完成的东西肉眼都能看得到，就说点特别的：<br>
1. 问题：一开始没准备用响应式设计的时候，很多东西写出来只是保证了它们在那些地方而已，背后整个margin、padding、content都很混乱，在翻新为响应式
的过程中改正了大部分乱的布局，但还是很多有小问题，体现在拉伸得较小时会有错位等问题；
2. 自认为很机智：把图片详情页城市、国家、主题、标题的信息设置为{float：right}
## bonus完成情况
----
### 响应式设计
布局里面基本全部改成了百分比，字体用vw，图片用{width: auto; max-width:100%}的格式就能保证基本不会变形，但是还存在一点小问题。<br>
+ 没有对平板和手机设计专门的样式，所以可以想见，在手机上的字体恐怕会比较小。
+ 对于内容不足时如何填充满整个屏幕的问题，注册页面的通过flex布局解决了，但使用的前提时有header、main和footer，首页的设计header和main
能保证不变形
### 图片剪裁
尝试了多种方式,但感觉都不是很满意：<br>
1. 直接设width和height为150px，这样就和给的square里的图一样大了，但是不可避免地会变形，这显然不可能是正确的解决方案（吧？万一是感觉错亿）。<br>
2. 对img设{width: auto; max-width:100%},这样能保证图片无变形的显示在每个框内，但是仅宽相同，在长上就会有的短有的长，排列
并不整齐。
   + 针对有长有短的情况，我觉得瀑布流布局是个挺好的解决方案，而且这样就能保证每张图片完整的呈现，但是要想合理地实现似乎只有用到JS，
   用css实现的瀑布流是纵向排列顺序的，没办法增加新的格子进去。如果要完全合理地实现，其难度感觉比第三种更高。
3. 是三者之中最靠谱，结果也最像助教给的square图片效果的方法。如果使用这个我基本可以在直接的表格样式（browser页面）中正常显示，
在类似首页、search等图片和文字在一个框内的样式就会有奇怪的bug，我还没找到解决方法。除此之外还有别的问题。
   + 实现原理和方法：
   + 问题: 这个方法相当于设的不是img而是对div设置background-image，在页面展示的图片不一样的时候（不用JS）就得用到行内css了。要避免行内css，
   我的想法是可以用JS来给每个div动态加，就目前学到的能力还做不太到；另一个问题则是在主页实验的时候发现不能居中，右边会有一个不知从何而来的margin，
   所以目前还是放弃了，要是搞定了再更新！
## 对PJ1和本课程的建议和意见
----
感觉PJ1的基础部分还可以，bonus部分挺难的，我自己最大的问题可能是返工无数次，css第一遍写完发现响应式设计应该用百分比
字体应该用vw，改的时候也会有前面改的不如后面改的精致，于是又返回去重改（好累orz）<br>
课程挺好的，就是我太菜。
