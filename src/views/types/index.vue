<template>
  <div class="home">
    <base-type />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseType from "./base-type/index";

@Component({
  components: {
    BaseType,
  },
})
export default class Types extends Vue {}
</script>
