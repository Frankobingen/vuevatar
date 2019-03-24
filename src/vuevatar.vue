<template>
  <div class="avataa-component" v-if="statics">
    <svg viewBox="0 0 100 100" v-if="value" xmlns="http://www.w3.org/2000/svg">
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
      <!-- beards -->
      <component :is="load('beards')" />
      <!-- shirt -->
      <component :is="load('clothes')"
                 :color="load('clothes', 'colors', 'clothesColor')" />
      <!-- hair (front) -->
      <component :is="load('hair', 'front')"
                 :color="load('hair', 'colors', 'hairColor')" />
      <!-- accessoir -->
      <component :is="load('accessoir')" />

      <clipPath id="background">
        <path :transform="load('background', 'transform')" :d="loadClipPath('background', 'clipPath')" />
      </clipPath>
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
          beards: null,
          clothes: null,
          clothesColor: null,
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
    loadClipPath (key, detail) {
      let clipPath = this.load(key, detail);

      return clipPath || "M0 100V10H100V100H0Z"
    },

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
    },

    download () {
      let innerHtml = this.getInnerHtmlAndAddColors()
      let svg = '<?xml version="1.0" encoding="utf-8" ?>' + innerHtml

      let evt = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true
      })

      var a = document.createElement('a')
      a.setAttribute('download', 'vuevatar.svg')
      a.setAttribute('href', "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg))))
      a.setAttribute('target', '_blank')

      a.dispatchEvent(evt)

      return svg
    },

    getInnerHtmlAndAddColors () {
      let innerHtml = this.$el.innerHTML
      let parts = innerHtml.split('<svg')

      parts = parts.map(part => {
        if (part.indexOf('currentColor') > -1) {
          let regexResults = /color="(.*?)"/g.exec(part)
          if (Array.isArray(regexResults) && regexResults.length > 1) {
            let color = regexResults[1]
            part = part.replace(/"currentColor"/, '"' + color + '"')
          } else {
            // eslint-disable-next-line
            console.error("Could not determine color for part ", part)
          }
        }

        return part
      })

      return parts.join('<svg')
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
