import Vue from 'vue'
import Vuex from 'vuex'
import createPersist from 'vuex-localstorage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    setups: [],
    tiles: [],
    moveQueue: {}
  },
  mutations: {
    storeSetup (state, name = `setup-${new Date().toJSON()}`) {
      state.setups.push({
        id: uuidv4(),
        name: name,
        tilesOpened: state.tiles
      })
    },
    loadSetup (state, id) {
      try {
        var setUp = state.setups.find(setup => setup.id === id)
        state.tiles = setUp.tilesOpened
      } catch (e) {
        console.error(`Unable to load setup ${id}`)
      }
    },
    addTile (state, newTile) {
      console.log('in store  ' + state.tiles)
      if (Object.prototype.hasOwnProperty.call(newTile, 'file')) {
        var found = state.tiles.find(existingVisualisation => newTile.file === existingVisualisation.file)
        if (!found) {
          state.tiles.splice(0, 0, newTile)
        }
      } else if (Object.prototype.hasOwnProperty.call(newTile, 'md5')) {
        var existing = state.tiles.find(dataset => dataset.md5 === newTile.md5)
        if (!existing) {
          state.tiles.splice(0, 0, newTile)
        }
      }
    },
    removeTile (state, toBeRemoved) {
      console.log('in store  ' + state.tiles)
      if (Object.prototype.hasOwnProperty.call(toBeRemoved, 'file')) {
        state.tiles = state.tiles.filter(visualization => visualization.file !== toBeRemoved.file)
      } else if (Object.prototype.hasOwnProperty.call(toBeRemoved, 'md5')) {
        state.tiles = state.tiles.filter(dataset => dataset.md5 !== toBeRemoved.md5)
      }
    },
    clearTiles (state) {
      state.tiles = []
    },
    moveTile (state, from, to) {
      console.log('tile moved!!!')
      state.moveQueue = { from: from, to: to }
      // state.tiles.splice(to, 0, state.tiles.splice(from, 1)[0])
    },
    rearrangeTiles (state) {
      console.log('tile rearranging!!!')
      state.tiles.splice(state.moveQueue.to, 0, state.tiles.splice(state.moveQueue.from, 1)[0])
    },
    newMoveTile (state, data) {
      console.log('tile moved!!!')
      state.tiles.splice(data.toIndex, 0, state.tiles.splice(data.fromIndex, 1)[0])
      console.log(state.tiles)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersist({
    namespace: 'ddosgrid-state-storage',
    initialState: {},
    // State expires in 6 months
    expires: 6 * 7 * 24 * 60 * 60 * 1e3
  })]
})

function uuidv4 () {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}
