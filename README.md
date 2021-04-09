### 使用辅助函数前必须导入
```
import { mapState , mapGetters, mapMutations, mapActions } from 'vuex';
```
### (1) vuex 中 state 定义的数据
```
　　state: {
　　　　msg: 'vuex中的数据'
　　}
　　使用方法： 在组件(computed)中使用
　　1. msg() {
　　　　return this.$store.state.msg;
　　   },
　　2. ...mapState(['msg'])
```

### (2) vuex 中 getters 定义的数据
```
　　getters() {
　　　　score30(state) {
　　　　　　// p(state, getters, rootState, rootGetters)
　　　　　　//state: 当前模块的state
　　　　　　//getters: 当前模块的getters
　　　　　　//rootState: 全局的state
　　　　　　//rootGetters: 全局的getters
　　　　　　let ps = state.price.filter(v => {
　　　　　　return v >= 30;
　　　　})

　　　　return ps.join('-');
　　　　}
　　}
　　使用方法： 在组件(computed)中使用
　　1. score30() {
　　　　return this.$store.getters.score30;
　　　},
　　2. ...mapGetters(['score30'])
```
### (3) vuex 中 mutations 定义的修改state的方法
```
　　mutations: {
　　　　changeMsg(state, data) {
　　　　//state: 当前模块的state
　　　　//data: 组件提交mutation时携带的参数(载荷)
　　　　console.log('data ==> ', data);

　　　　state.msg = data.name;

　　　　},
　　},
　　使用方法： 在组件(methods)中使用
　　1. changeStateMsg() {
　　　　this.$store.commit('changeMsg', 'kevin');
　　},
　　2. ...mapMutations(['changeMsg']), // 调用时要传参, 载荷(即要修改state的值为什么)
```
### (4) vuex 中 actions 定义的提交mutations的方法
```
　　actions: {
　　　　ac3({commit}, data) {

　　　　//提交mutations的changeMsg
　　　　commit('changeMsg', data)

　　　　//actions内部可以返回一个结果让组件使用
　　　　return context.state.msg;

　　　　}

　　}
　　使用方法： 在组件(methods)中使用
　　1.ac3() {

　　　　//提交actions并且携带一个参数后，返回一个promise, 就可以执行异步操作
　　　　this.$store.dispatch('ac3', '我要修改vuex中的数据').then(v => {
　　　　// v ==> context.state.msg ==> vuex中的数据 (actions内部返回的结果)
　　　　console.log('v ==> ', v);
　　});

　　2....mapActions(['ac3'])
```
### (5) dispatch、mutations的相同之处和区别
```
1、commit 和 dispatch 两个方法都是传值给vuex的mutation改变state

2、区别总的来说他们只是存取方式的不同　　　　

　　　　　　// commit: 用来提交当前模块的mutations 
　　　　　　// dispatch: 用来提交当前模块的actions(actions可以提交mutations,可以进行异步操作)  
　　　　　　// commit 有些做不到的可以用 dispatch 进行提交

3、 mutations修改state, action提交mutations。但是如果修改完还想做其他事情就用actions比较方便(then后执行想要做的事情) ==> this.$store.dispatch().then()

4、同步和异步之别

　　　　　commit: 同步操作
　　　　　存储 this.$store.commit('changeValue',name)
　　　　　取值 this.$store.state.changeValue

　　　　　dispatch: 异步操作
　　　　　存储 this.$store.dispatch('getlists',name)
　　　　　取值 this.$store.getters.getlists
```


# vuex-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
