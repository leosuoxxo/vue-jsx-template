<script>
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {
  @Prop(String) msg;
  @Prop() propA;
  mounted() {
    console.log(this.propA);
    console.log(this.msg);
  }
  render() {
    return (
      <div class="hello">
        <h1>{this.msg}</h1>
        <h3>Ecosystem {this.propA}</h3>
        <ul>
          <li>
            <a href="https://router.vuejs.org" target="_blank">
              {this.propA}
            </a>
          </li>
          <li>
            <a href="https://vuex.vuejs.org" target="_blank">
              vuex
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-devtools#vue-devtools"
              target="_blank">
              vue-devtools
            </a>
          </li>
          <li>
            <a href="https://vue-loader.vuejs.org" target="_blank">
              vue-loader
            </a>
          </li>
          <li>
            <a href="https://github.com/vuejs/awesome-vue" target="_blank">
              awesome-vue
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
