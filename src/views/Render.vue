<script>
// 不写 template 就可以了, 现在的 vue-loader 是把 template 转换成 render 函数，所以你不写 template 直接写 render就可以了
export default {
  //  createElement ==> h
  props: ["title"],
  render: function (h) {
    return h("div", [
      h("div", this.blogTitle),
      // 写法一：
      // h(
      //   "span",
      //   {
      //     on: {  // 事件
      //       click: () => {
      //         this.titleHandle();
      //       },
      //     },

      //   },
      //   [h("button", "点击")]
      // ),
      //  写法二：
      h("button", {
        on: {
          click: () => {
            this.titleHandle();
          },
        },
        domProps: {
          innerHTML: "change Title",
        },
        props: {
          title: this.props,
        },
        attrs: { // 添加类名和Id
          class: 'title',
          id: '1'
        }
      }),
    ]);
  },
  data() {
    return {
      blogTitle: "Render 函数",
      props: ''
    };
  },
  mounted() {
    console.log(this.props);
  },
  methods: {
    titleHandle() {
      this.blogTitle = "Render 函数 改变";
    },

    /* 

    ----------------------
    createElement 参数

      // @returns {VNode}
    createElement(
      // {String | Object | Function}
      // 一个 HTML 标签名、组件选项对象，或者
      // resolve 了上述任何一种的一个 async 函数。必填项。
      'div',

      // {Object}
      // 一个与模板中 attribute 对应的数据对象。可选。
      {
        // (详情见下一节)
      },

      // {String | Array}
      // 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
      // 也可以使用字符串来生成“文本虚拟节点”。可选。
      [
        '先写一些文字',
        createElement('h1', '一则头条'),
        createElement(MyComponent, {
          props: {
            someProp: 'foobar'
          }
        })
      ]
    )

    -------------------------
    深入数据对象

    有一点要注意：正如 v-bind:class 和 v-bind:style 在模板语法中会被特别对待一样，它们在 VNode 数据对象中也有对应的顶层字段。该对象也允许你绑定普通的 HTML attribute，也允许绑定如 innerHTML 这样的 DOM property (这会覆盖 v-html 指令)。

      {
    // 与 `v-bind:class` 的 API 相同，
    // 接受一个字符串、对象或字符串和对象组成的数组
    'class': {
      foo: true,
      bar: false
    },
    // 与 `v-bind:style` 的 API 相同，
    // 接受一个字符串、对象，或对象组成的数组
    style: {
      color: 'red',
      fontSize: '14px'
    },
    // 普通的 HTML attribute
    attrs: {
      id: 'foo'
    },
    // 组件 prop
    props: {
      myProp: 'bar'
    },
    // DOM property
    domProps: {
      innerHTML: 'baz'
    },
    // 事件监听器在 `on` 内，
    // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
    // 需要在处理函数中手动检查 keyCode。
    on: {
      click: this.clickHandler
    },
    // 仅用于组件，用于监听原生事件，而不是组件内部使用
    // `vm.$emit` 触发的事件。
    nativeOn: {
      click: this.nativeClickHandler
    },
    // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
    // 赋值，因为 Vue 已经自动为你进行了同步。
    directives: [
      {
        name: 'my-custom-directive',
        value: '2',
        expression: '1 + 1',
        arg: 'foo',
        modifiers: {
          bar: true
        }
      }
    ],
    // 作用域插槽的格式为
    // { name: props => VNode | Array<VNode> }
    scopedSlots: {
      default: props => createElement('span', props.text)
    },
    // 如果组件是其它组件的子组件，需为插槽指定名称
    slot: 'name-of-slot',
    // 其它特殊顶层 property
    key: 'myKey',
    ref: 'myRef',
    // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
    // 那么 `$refs.myRef` 会变成一个数组。
    refInFor: true
  }
    
    */
  },
  components: {},
};
</script>

<style>
</style>