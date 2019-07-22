<template>
  <div class="child">
    {{`${this.wCount} - ${new Date().getTime()}`}}
    <button @click="updateComp">child forceUpdate</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { aObject } from "../parent/index.vue";

@Component({})
export default class Child extends Vue {
  get wCount() {
    // wCount will never be update
    return aObject.count;
  }

  set wCount(val) {
    // return val;
    console.log(val);
  }
  updateComp() {
    this.$forceUpdate();
  }
  updated() {
    console.log("child updated");
  }
}
</script>
