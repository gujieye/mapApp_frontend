<template>
  <div class="layout">
    <!-- <div id="mapContainer" style="width: 100%; height: 100%; background:#ccc"></div> -->
    <mgl-map :accessToken="accessToken" :mapStyle.sync="style" :zoom="zoom" :center="center" style="width: 100%; height: 100%; background:#ccc">
        <mgl-navigation-control position="top-right"></mgl-navigation-control>
    </mgl-map>
  </div>
 
</template>

<script>
import { MglMap,MglNavigationControl } from 'vue-mapbox'
export default {
  name: "Map",
  components:{
      MglMap,MglNavigationControl
  },
  props: {},
  data: function() {
    return {
         accessToken:"pk.eyJ1Ijoib2tpZWJ1YmJhIiwiYSI6ImNpdHZscGs3ajAwNXYyb284bW4ydWUzbGsifQ.1PoNrSP0F65WolWgqKhV4g",
         style:{
            "version": 8,
            "name": "Custom",
            "sources": {
              "test": {
                "type": "vector",
                "tiles": ['http://localhost:9871/mvt/{z}/{x}/{y}.mvt'],
                "maxzoom": 19
              }
            },
          "layers": [
            {
              "id": "layer0",
              "type": "fill",
              "source": "test",
              "source-layer": "layer0",
              "paint": {
            "fill-color": "#436",
            "fill-opacity":0.75
              }
            }       
          ]
        },
        minZoom: 3,
        zoom: 5,
        maxZoom: 19,
        center: [116.624729,39.304476]
    };
  },
  mounted() {
    //this.init();
  },
  methods: {
    init(){
       mapboxgl.accessToken = "pk.eyJ1Ijoib2tpZWJ1YmJhIiwiYSI6ImNpdHZscGs3ajAwNXYyb284bW4ydWUzbGsifQ.1PoNrSP0F65WolWgqKhV4g";
       let map = new mapboxgl.Map({
          container: "mapContainer",
          style: {
            "version": 8,
            "name": "Custom",
            "sources": {
              "test": {
                "type": "vector",
                "tiles": ['http://localhost:9871/mvt/{z}/{x}/{y}.mvt'],
                "maxzoom": 19
              }
            },
          "layers": [
            {
              "id": "layer0",
              "type": "fill",
              "source": "test",
              "source-layer": "layer0",
              "paint": {
            "fill-color": "#436",
            "fill-opacity":0.75
              }
            }       
          ]
      },
        // center: [-0.1047, 51.5236],
        center: [116.624729,39.304476], // 
        // These affect the hard limits of the zoom controls
        minZoom: 3,
        zoom: 8,
        maxZoom: 19
    });
    map.addControl(new mapboxgl.NavigationControl());
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .layout {
        margin: 0; 
        padding:0; 
        overflow: hidden; 
        width: 100%; 
        height: 100%
    }
    @import url('https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css');
</style>
