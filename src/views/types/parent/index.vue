<template>
  <div class="parent">
    parent - {{count}}
    <child></child>
    <button @click="addCount">click me</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import child from "../child/index.vue";

export const aObject: {
  count: number;
} = {
  count: 0
};

@Component({
  components: {
    child
  }
})
export default class Parent extends Vue {
  count: number = aObject.count;
  addCount() {
    this.count += 1;
    aObject.count = this.count;
  }
}
</script>
