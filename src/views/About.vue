<script>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class About extends Vue {
  @Prop() name = '123';
  render() {
    return (
      <div class="about">
        <h1>This is an about page</h1>
        <span>{this.name}</span>
      </div>
    );
  }
}
</script>
<style lang="scss" scoped>
.aaa {
  position: absolute;
  padding: 30px;
  &:hover {
    color: #fff;
  }
}
</style>
