# learnreact
react todo

### 创建组建的生命周期
- constructor
- componentWillMount
- render
- componentDidMount

### state更新组建的生命周期
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

### props更新组建的生命周期
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate
----------------------------------
### React-Router4

> route
+ Route props 包含(match location history)
+ Route render methods（render/component/children） | <font color=#f90>render</font>性能优于<font color=#f90>component</font>，<font color=#f90>children</font>不考虑路由匹配都会渲染。优先级component > render > children。官网参考[`链接`](<https://reacttraining.com/react-router/web/api/Route/render-func>)
+ **strict** & **exact** 微妙关系（用到的不多） | strict can be used to enforce that a location.pathname has no trailing slash, but in order to do this both strict and exact must be true. 还有一个**sensitive** 区分大小写
