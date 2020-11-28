<template>
  <DemoComponent></DemoComponent>
</template>

<script>
import {onBeforeMount} from 'vue'
import useStore from './modules/store'
import DemoComponent from "./components/DemoComponent";

export default {
  name: 'App',
  components: {
    DemoComponent,
  },
  setup() {
    onBeforeMount(() => {
      useStore().demo().fetchAll()
    })

    return {

    }
  }
}
</script>

<style lang="scss">

</style>
