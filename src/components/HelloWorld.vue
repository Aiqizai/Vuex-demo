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
    <button @click="changePerMsg">点我改变信息</button>
    <button @click="changeBook">点我更换书籍(mutations)</button>
    <button @click="changeBookFormAct">点我更换书籍(actions)</button>
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
import { mapState } from "vuex";
// import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {};
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
    changeBook() {
      this.$store.commit("changeBook", "JavaScript");
    },

    // actions
    changeBookFormAct() {
      let bk = 'Vue+Vuex';
      this.$store.dispatch('changeBookAct',bk).then(() => {
        // 分发完之后的异步操作, 比如存储到localStorage
        window.localStorage.setItem('book', bk);
      })
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
