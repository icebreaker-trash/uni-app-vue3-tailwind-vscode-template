<template>
  <view class="flex flex-col">
    <!-- <image
      class="logo w-[600rpx]"
      src="../../static/logo.png"
    ></image> -->
    <image
      class="logo w-16"
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
  mounted() {},
});
</script>

<style lang="scss">
</style>
