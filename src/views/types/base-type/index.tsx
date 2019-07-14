

import { Component, Vue } from "vue-property-decorator";
import { VNode } from "vue";
@Component({})
export default class Types extends Vue {
  private str: string = "1";
  private render(): VNode {
    return (<div> Im tsx type</div>);
  }
}

