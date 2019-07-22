<template>
  <div class="home">
    <base-type />
    <parent></parent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseType from "./base-type/index";
import parent from "./parent/index.vue";

@Component({
  components: {
    BaseType,
    parent
  }
})
export default class Types extends Vue {}
</script>
