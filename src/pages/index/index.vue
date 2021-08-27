<template>
  <view class="flex">
    <image
      class="logo w-48 w-1-div-3"
      src="../../static/logo.png"
    ></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {
      title: "hello",
    };
  },
});
</script>

<style lang="scss">
</style>
