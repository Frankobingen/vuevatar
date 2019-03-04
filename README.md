# vuevatar

A flexible svg based vue.js component to create an avatar.

Important Note: The component is still under development and not yet meant for productive use. 
[Issues can be tracked on Github](https://github.com/Frankobingen/vuevatar/issues/).

## Demo

A demo can be found [here](https://vuevata.tippfehlr.de/)

## Usage

```
npm install --save @frnak/vuevatar
```

### Single File Components

```
<template>
  <div class="page">
    <vue-avatar 
      @load="onAvatarLoad" 
      v-model="user.avatar"
    ></vue-avatar>
  </div>
</template>

<script>
import Vuevatar from '@frnak/vuevatar'

export default {
  data () {
    return {
      user: {
        avatar: null
      }
    }
  },

  methods: {
    onAvatarLoad (data) {
      this.user.avatar = data.random
    }
  },

  components: {
    'vue-avatar': Vuevatar
  }
}
</script>
```
