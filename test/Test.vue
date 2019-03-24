<template>
  <!--
    this test component is meant to be used via the vue-cli-service
  -->
  <div class="page">
    <v-avataa @load="applyOptions"
              v-model="user.avatar"
              ref="avatar"
    ></v-avataa>

    <button @click="download">Download</button>

    <div class="options">
      <div class="option" v-for="(option, i) in options"
                          :key="i"
      >
        <label>{{ i }}</label>
        <select v-model="user.avatar[i]">
          <option v-for="(choice, j) in options[i]"
                  :key="j"
                  :value="j"
          >{{ j }}</option>
        </select>

        <!-- color-picker for custom options -->
        <select v-if="option[user.avatar[i]] && option[user.avatar[i]].colors" 
                v-model="user.avatar[i + 'Color']"
        >
          <option v-for="(color, k) in option[user.avatar[i]].colors"
                  :key="k"
                  :value="k"
          >{{ k }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import Vuevatar from './../src/vuevatar.vue'

export default {
  data () {
    return {
      options: null,
      user: {
        avatar: null
      }
    }
  },
  methods: {
    applyOptions (data) {
      this.options = data.options
      this.user.avatar = data.random
    },

    download () {
      this.$refs.avatar.download();
    }
  },
  components: {
    'v-avataa': Vuevatar
  }
}
</script>

<style>
html, body {
  width: 100%; height: 100vh;
  margin: 0; padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.page {
  padding: 50px;
}

.avataa-component {
  margin: auto;
}

button {
  margin: 1rem auto;
  display: block;
  padding: 8px 12px;
  background: #efefef;
  border: 1px solid #bbbbbb;
  cursor: pointer;
}

.options {
  width: 200px;
  margin: 20px auto;
}

.options select {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.options select + select {
  border-top: none;
}

.options label {
  margin: 10px auto;
  display: block;
}
</style>