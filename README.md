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

```vue
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

### Using the Test.vue

You can clone this repo and play with the `Test.vue` file in the `test` directory. You'll need vue-cli and the services intalled globally in order to make it run. (See the docs for more infromation)[https://cli.vuejs.org/guide/prototyping.html]

- `npm install -g @vue/cli-service-global`
- `npm install`
- `npm run test`

# Features

Most important is the `value` property that can be bound to the component. This can either be done using `v-model` or `:value`. The passed object can set the different attributes of the avatar. An avatar consists of

- background
- backgroundColor
- head
- headColor
- mouth
- eyes
- eyebrows
- clothes
- clothesColor
- hair
- hairColor
- accessoir
- beard

Each of these has a predefined set of options that can be passed via the `value` property of the component.

To make it easy to build an editor for the avatar component, the component will emit a `load` event after it is setup. The event will contain the information about the options that can be passed to the different properties of `value` and in addition it will contain a random avatar setup.

The data payload looks like

```
{
  options: {
    accessoir: {
      Flower: Object,
      Ninja: Object
    },
    background: {
      ...
    },
    ...
  }
  random: {
    accessoir: "Ninja",
    background: "Circle",
    ...
  }
}
```

The properties that are represented in `random` can directly passed to the `value` prop of the component as shown in the basic example at the very top. You can ofcourse also set every attribute individually.

```js
data () {
  return {
    avatar: {
      background: "Circle",
      backgroundColor: "Blue",
      accessoir: "Ninja"
      clothes: "Shirt",
      clothesColor: "Green",
      eyebrows: "Mono",
      eyes: "Closed",
      hair: "WorkerHelmet",
      head: "Default",
      headColor: "Black",
      mouth: "Grin",
      beard: "None"
    }
  }
}
```

And bind these directly to the component

```html
<vue-avatar :value="avatar"></vue-avatar>
```

## Available Options

| Property        | Allowed Values | 
| --------------- | ------------- |
| background      | Circle,Box |
| backgroundColor | Black,White,Blue,Green,Grey,Pink,Purple,Red |
| accessoir       | None,Ninja,Flower,Glasses,Devil,Feather |
| clothes         | Shirt,vNeckShirt,FancyShirt,Hoodie,Dress |
| clothesColor    | Black,White,Blue,Green,Grey,Pink,Purple,Red,Yellow |
| eyebrows        | None,Concerned,Mono,Angry,Bushy,Evil |
| hair            | None,Male01,Male02,Female01,Female02,Female03,Female04,Bommel,WorkerHelmet |
| hairColor       | Black,Blonde,Red,Brown |
| head            | Default |
| headColor       | White,Brown,Yellow,Black |
| mouth           | Gap,Grin,Kiss,Neutral,Sad,Shocked,ShowTeeth,Smile,Tongue |
| beard           | None,Walrus,Goaty |

Not every `hair` accepts a color via `hairColor`. Not every `clothes` accepts a color via `clothesColor`.

## Download

The vuevatar component has a `download` method that will trigger the download of the currently configured avatar. Example

Define a ref to make the component accessible via this.$refs

```html
<vue-avatar 
  ref="avatar"
  ...
></vue-avatar>

<button @click="download">Download</button>
```

Get the component and call the download method.

```js
methods: {
  download () {
    this.$refs.avatar.download()
  }
}
```