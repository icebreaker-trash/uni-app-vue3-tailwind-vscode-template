<template>
  <view class="flex">
    <image
      class="logo w-48"
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
// 小程序不需要 'base' 'components'，里面标签是给 html 准备的
// @import 'tailwindcss/base';
// @import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
