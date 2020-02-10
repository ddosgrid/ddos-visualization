''<template>
  <div class="dashboard">
    <h1>
    Visualization Dashboard
    </h1>

    <div id="" class="grid">
      <md-empty-state
        md-icon="grid_on"
        md-label="No analysis files were added"
        md-description="You can add a tile for each dataset that you have uploaded on the datasets page" v-if="tiles.length === 0" class="empty-notification">
        <md-button class="md-primary md-raised" to="/datasets">Open a dataset</md-button>
        {{ tiles }}
      </md-empty-state>
      <div class="item" v-for="tile in tiles" :key="tile.key" ref="tiles">
        <component class="item-content" v-bind:is="getComponentType(tile)" :analysisfile="tile" :dataset="tile"></component>
      </div>
    </div>

    <md-speed-dial class="md-bottom-right no-print above" md-event="hover" id="dial">
      <md-speed-dial-target class="md-primary">
        <md-icon class="md-morph-initial">grid_on</md-icon>
        <md-icon class="md-morph-final no-print">close</md-icon>
        <!--md-icon>storage</md-icon-->
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button :disabled="dashBoardIsEmpty" class="md-icon-button" @click="exportToPdf">
          <md-tooltip md-direction="top" v-if="dashBoardIsEmpty">Please add some visualizations first</md-tooltip>
          <md-tooltip md-direction="top" v-else>Export dashboard as PDF or print it</md-tooltip>
          <md-icon>picture_as_pdf</md-icon>
        </md-button>

        <md-button :disabled="!savedDashBoardsExist" class="md-icon-button" @click="showLoadSetups = !showLoadSetups">
          <md-tooltip md-direction="top" v-if="savedDashBoardsExist">Load a previously stored setup</md-tooltip>
          <md-tooltip md-direction="top" v-else>No setups saved</md-tooltip>
          <md-icon>restore</md-icon>
        </md-button>

        <md-button :disabled="dashBoardIsEmpty" class="md-icon-button" @click="showSaveSetups = !showSaveSetups">
          <md-tooltip md-direction="top" v-if="dashBoardIsEmpty">Please add some visualizations first</md-tooltip>
          <md-tooltip md-direction="top" v-else>Save your current setup</md-tooltip>
          <md-icon>save</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>

    <md-dialog :md-active.sync="showLoadSetups">
      <md-dialog-title>Load a saved dashboard</md-dialog-title>
      <md-list>
        <md-list-item v-for="setup in storedSetups" :key="setup.id">
        <md-button class="md-raised md-primary md-icon-button" @click="loadSetup(setup.id)" v-if="!loading">
          <md-icon>restore</md-icon>
        </md-button>
          <span class="md-list-item-text">{{setup.name}}</span>
        </md-list-item>
      </md-list>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showLoadSetups = false">
          <md-icon>close</md-icon>
        </md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showSaveSetups">
      <md-dialog-title>Save this dashboard</md-dialog-title>
      <div class="form">
        <md-field>
          <label>Name</label>
          <md-input v-model="setupName" placeholder="Give the setup a name"></md-input>
        </md-field>
        <md-button :disabled="!setupName" class="md-raised md-primary md-icon-button" @click="saveSetup" v-if="!loading">
          <md-icon>save</md-icon>
        </md-button>
        <md-progress-spinner v-else :md-diameter="36" :md-stroke="4" md-mode="indeterminate"></md-progress-spinner>
      </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showSaveSetups = false">
          <md-icon>close</md-icon>
        </md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import Muuri from 'muuri'
import DataSetTile from '../components/DataSetTile'
import VisualizationTile from '../components/VisualizationTile'

export default {
  name: 'DashBoard',
  data: function () {
    return {
      showLoadSetups: false,
      showSaveSetups: false,
      setupName: '',
      loading: false,
      numberOfTiles: 0
    }
  },
  components: {
    'datasettile': DataSetTile,
    'visualizationtile': VisualizationTile
  },
  mounted: function () {
    window.gg = this.$store
    this.numberOfTiles = this.tiles.length
    window.grid = new Muuri('.grid', {
      dragEnabled: true
    })
  },
  methods: {
    loadSetup: function saveSetup (id) {
      this.loading = true
      this.$store.commit('loadSetup', id)
      setTimeout(() => {
        this.loading = false
        this.showLoadSetups = false
      }, 300)
    },
    saveSetup: function saveSetup () {
      this.loading = true
      this.$store.commit('storeSetup', this.setupName)
      setTimeout(() => {
        this.loading = false
        this.showSaveSetups = false
      }, 300)
    },
    exportToPdf: function exportToPdf () {
      window.print()
    },
    getComponentType: function getComponentType (tile) {
      if (Object.prototype.hasOwnProperty.call(tile, 'file')) {
        return 'visualizationtile'
      } else if (Object.prototype.hasOwnProperty.call(tile, 'md5')) {
        return 'datasettile'
      }
    }
  },
  watch: {
    tiles () {
      console.log('in watcher ' + this.tiles)
      for (var tile of this.$refs.tiles) {
        console.log(tile)
      }

      setTimeout(asdf, 100)
      function asdf () {
        window.grid = new Muuri('.grid', {
          dragEnabled: true
        })
      }
    }
  },
  computed: {
    tiles () {
      return this.$store.state.tiles
    },
    storedSetups () {
      return this.$store.state.setups
    },
    dashBoardIsEmpty () {
      try {
        var openTiles = this.$store.state.tiles
        return openTiles.length === 0
      } catch (e) {
        return false
      }
    },
    savedDashBoardsExist () {
      try {
        return this.$store.state.setups.length > 0
      } catch (e) {
        return false
      }
    }
  }
}
</script>

<style scoped>
@media print {
  .no-print, .no-print * {
    display: none !important;
  }
}
@media only screen and (max-device-width: 768px){
  .tile {
    flex-basis: 100%;
  }
}

#dial {
  position: fixed;
}
.form {
  padding: 24px 24px 0
}
.empty-notification {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.above {
  z-index: 1;
}

.grid {
  position: relative;
}

.item {
  display: block;
  position: absolute;
  margin: 5px;
  z-index: 1;
}
.item.muuri-item-dragging {
  z-index: 3;
}
.item.muuri-item-releasing {
  z-index: 2;
}
.item.muuri-item-hidden {
  z-index: 0;
}
.item-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
