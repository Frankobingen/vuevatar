<template>
  <div class="avataa-component" v-if="statics">
    <svg viewBox="0 0 100 100" v-if="value">
      <!-- background -->
      <component :is="load('background')"
                 :color="load('background', 'colors', 'backgroundColor')" />
      <!-- hair (backside) -->
      <component :is="load('hair', 'back')"
                 :color="load('hair', 'colors', 'hairColor')" />
      <!-- head -->
      <component :is="load('head')"
                 :color="load('head', 'colors', 'headColor')" />
      <!-- mouth -->
      <component :is="load('mouth')" />
      <!-- eyes -->
      <component :is="load('eyes')" />
      <!-- eyebrows -->
      <component :is="load('eyebrows')" />
      <!-- shirt -->
      <component :is="load('clothes')" />
      <!-- hair (front) -->
      <component :is="load('hair', 'front')"
                 :color="load('hair', 'colors', 'hairColor')" />
      <!-- accessoir -->
      <component :is="load('accessoir')" />
    </svg>
  </div>
</template>

<script>
import statics from './statics'

export default {
  data () {
    return {
      statics: statics
    }
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          background: null,
          backgroundColor: null,
          head: null,
          headColor: null,
          mouth: null,
          eyes: null,
          eyebrows: null,
          clothes: null,
          hair: null,
          hairColor: null,
          accessoir: null
        }
      }
    }
  },
  created () {
    this.$emit('load', {
      options: this.statics,
      random: this.random()
    })
  },
  methods: {
    load (key, detail, detailKey) {
      let value = this.value[key]

      if (!this.statics[key] || !this.statics[key][value]) {
        return null
      }

      let loadedValue = this.statics[key][value]

      if (detail !== undefined) {
        if (!detailKey) {
          return loadedValue[detail]
        }
        return loadedValue[detail] ? loadedValue[detail][this.value[detailKey]] : null
      }

      if (typeof loadedValue === 'object' && loadedValue.svg) {
        return loadedValue['svg']
      }

      return loadedValue
    },

    random () {
      let rand = {}

      for (let i in this.statics) {
        if (this.statics.hasOwnProperty(i)) {
          let keys = Object.keys(this.statics[i])
          rand[i] = keys[ keys.length * Math.random() << 0]

          if (this.statics[i][rand[i]] && this.statics[i][rand[i]].colors) {
            let colors = Object.keys(this.statics[i][rand[i]].colors)
            rand[i + 'Color'] = colors[ colors.length * Math.random() << 0]
          }
        }
      }

      return rand
    }
  },
  computed: {
    state () {
      let props = {}

      for (let key in this._props) {
        if (this._props.hasOwnProperty(key)) {
          props[key] = this._props[key]
        }
      }

      return this.stringify(props)
    }
  }
}
</script>

<style>
.avataa-component {
  width: 250px; height: 250px;
  position: relative;
}

.avataa-component > svg {
  width: 100%; height: 100%;
}

.avataa-component > img{
  display: none;
}

.avataa-component > img[src*=".svg"] {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  width: 100%; height: 100%;
  display: block;
}
</style>
