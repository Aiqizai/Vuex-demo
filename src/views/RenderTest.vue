<template>
  <Render :title="testTitle"></Render>
</template>

<script>
import Render from '@/views/Render.vue'

export default {
  data() {
    return {
      testTitle: '好好学习'
    }
  },
  components: {
    Render
  }
}
</script>

<style>

</style>