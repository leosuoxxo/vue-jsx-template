<script>
import { Vue, Component } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component
export default class Home extends Vue {
  render() {
    return (
      <div class="home">
        <img src="../assets/logo.png" />
        <HelloWorld propA={3} msg={'Welcome to Your Vue.js App'} />
      </div>
    );
  }
}
</script>
