<template>
  <div id="app">
    <Map style="height:100%;width:100%;text-align:left;"></Map>
  </div>
</template>

<script>
  import Map from '@/components/Map'

  export default {
    name: 'mapviz',
    components: {
      Map
    }
  }
</script>

<style>
  /* CSS */
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0; padding:0; overflow: hidden; width: 100%; height: 100%
}

</style>
