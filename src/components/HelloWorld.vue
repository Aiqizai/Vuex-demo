<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> 
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
    <h3></h3>
    <table border="1" style="margin: 0 auto" cellspacing="0">
      <thead>
        <tr>
          person message
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>姓名</td>
          <td>年龄</td>
          <td>性别</td>
        </tr>
        <tr>
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>
          <td>{{ person.sex }}</td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top: 10px">book: {{ book }}</div>
    <div style="margin-top: 10px">score: {{ score }}</div>
    <div style="margin-top: 10px">calcScore: {{ calcScore }}</div>
    <button @click="changePerMsg">点我改变信息</button>
    <button @click="changeBookByCom">点我更换书籍(mutations)</button>
    <button @click="mapMutaChangeBook('VueXXXX')">点我更换书籍(mapMutations)</button>
    <button @click="changeBookFormAct">点我更换书籍(actions)</button>
    <button @click="mapActChangeBook('webpack')">点我更换书籍(mapActions)</button>
    <br /><br /><br />
    <h3>模块化</h3>
    -------------state------------------
    <div>count:{{ count }}</div>
    <div>mapState-dog:{{ dog }}</div>
    ----------getters------------
    <div>doubleCount:{{ doubleCount }}</div>
    <div>mapGetters-car:{{ car }}</div>
    <button @click="increment">increment count(mutations)</button>
    <button @click="mapMutationsIncrement(10)">mapMutations-increment count(mutations)</button>
    <button @click="disIncrement">increment count(actions)</button>
    <button @click="mapActionsDisIncrement(20)">mapActions-increment count(actions)</button>
  </div>
</template>

<script>
/* 
      state, getter 在computed中获取使用
        1、 return this.$store.state.person;
        2、 辅助函数 mapState (要先引入)

      mutation, action 在methods中使用
      
  */
/* 
      辅助函数会产生映射关系

      //将mutation里的方法映射到该组件内
      //等同于this.$store.commit('SET_NIGHT_MODE') 
      // ...mapMutations([
      //   'SET_NIGHT_MODE',
     //   'SET_SKIN_COLOR',
     //   'SET_FONT_SIZE',
     // ]),
 
 */
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
// import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$store.getters.moduleA);
  },
  computed: {
    // store已注入到根组件  所以可以使用  this.$store.state 访问
    person() {
      return this.$store.state.person;
    },
    // 辅助函数引入state
    // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
    // 映射 this.book 为 store.state.book
    ...mapState(["book"]),

    // getters
    score() {
      return this.$store.getters.calcScore;
    },
    ...mapGetters(["calcScore"]), // 辅助函数










    // 模块化

    // state
    count() {
      return this.$store.state.moduleA.count;
    },
    ...mapState({
      dog: (state) => state.moduleA.dog,
    }),

    // getters
    doubleCount() {
      return this.$store.getters["moduleA/doubleCount"];
    },

    // 获取moduleA getters里的 car
    /* 
       moduleA 指的是模块A （模块名）
       第一个car是我自定义的名称
       第二个car是对应moduleA里的getters里的car       
    */
    ...mapGetters("moduleA", {
      car: "car",
    }),
  },
  methods: {
    // mutations
    changePerMsg() {
      this.$store.commit("changeState", {
        name: "小花",
        age: 20,
        sex: "woman",
      });
    },
    changeBookByCom() {
      this.$store.commit("changeBook", "JavaScript");
    },
    // ----------mapMutations-----------
    ...mapMutations(["changeBook"]), // 引入mutations函数
    mapMutaChangeBook(bk) {
      // 使用引入的函数
      this.changeBook(bk);
    },

    // actions
    changeBookFormAct() {
      let bk = "Vue+Vuex";
      this.$store.dispatch("changeBookAct", bk).then(() => {
        // 分发完之后的异步操作, 比如存储到localStorage
        window.localStorage.setItem("book", bk);
      });
    },
    // ----------mapActions-----------
    ...mapActions(['changeBookAct']),
    mapActChangeBook(bk) {
      this.changeBookAct(bk);
    },







    // 模块化
    increment() {
      // mutations
      this.$store.commit("moduleA/increment", 6);
    },
    ...mapMutations('moduleA',{
      mapMutaIncrement: 'increment'
    }),
    mapMutationsIncrement(num){
       this.mapMutaIncrement(num);
    },


    disIncrement() {
      // actions
      let num = 999;
      this.$store.dispatch("moduleA/disIncrement", num);
    },
    ...mapActions('moduleA',{
      mapActDisIncrement: 'disIncrement'
    }),
    mapActionsDisIncrement(num) {
      this.mapActDisIncrement(num);
    }
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
