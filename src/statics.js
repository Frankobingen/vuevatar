// backgrounds
import background_circle from './svg/backgrounds/circle.svg'
// heads
import head_default from './svg/heads/default.svg'
// mouhts
import mouth_gap from './svg/mouths/gap.svg'
import mouth_grin from './svg/mouths/grin.svg'
import mouth_kiss from './svg/mouths/kiss.svg'
import mouth_neutral from './svg/mouths/neutral.svg'
import mouth_sad from './svg/mouths/sad.svg'
import mouth_shocked from './svg/mouths/shocked.svg'
import mouth_showteeth from './svg/mouths/showteeth.svg'
import mouth_smile from './svg/mouths/smile.svg'
import mouth_tongue from './svg/mouths/tongue.svg'
// eyes
import eyes_default from './svg/eyes/default.svg'
import eyes_happy from './svg/eyes/happy.svg'
import eyes_squint from './svg/eyes/squint.svg'
import eyes_closed from './svg/eyes/closed.svg'
import eyes_chinese from './svg/eyes/chinese.svg'
import eyes_zombie from './svg/eyes/zombie.svg'
// eyebrows
import eyebrows_concerned from './svg/eyebrows/concerned.svg'
import eyebrows_mono from './svg/eyebrows/mono.svg'
import eyebrows_bushy from './svg/eyebrows/bushy.svg'
import eyebrows_angry from './svg/eyebrows/angry.svg'
import eyebrows_evil from './svg/eyebrows/evil.svg'
// clothes
import clothes_shirt from './svg/clothes/shirt.svg'
import clothes_fancy_shirt from './svg/clothes/fancy_shirt.svg'
import clothes_v_neck from './svg/clothes/v_neck.svg'
// hair
import hair_Male01 from './svg/hair/Male01.svg'
import hair_Female01f from './svg/hair/Female01-front.svg'
import hair_Female01b from './svg/hair/Female01-back.svg'
import hair_bommel from './svg/hair/bommel.svg'
import hair_worker from './svg/hair/worker.svg'
// accessoir
import accessoir_ninja from './svg/accessoirs/ninja.svg'
import accessoir_flower from './svg/accessoirs/flower.svg'

function getDefaultHairColors() {
  return {
    Black: "#090806",
    Blonde: "#DCD0BA",
    Red: "#B55239",
    Brown: "#6A4E42"
  }
}

function getDefaultClothesColor() {
  return {
    Black: "#000000",
    White: "#ffffff",
    Blue: "#63cbe2",
    Green: "#a4e263",
    Grey: "#d3d3d3",
    Pink: "#e263d8",
    Purple: "#8263e2",
    Red: "#e28963",
    Yellow: "#e2cd63"
  }
}

const statics = {
  background: {
    Circle: {
      svg: background_circle,
      colors: {
        Black: "#000000",
        White: "#ffffff",
        Blue: "#63cbe2",
        Green: "#a4e263",
        Grey: "#d3d3d3",
        Pink: "#e263d8",
        Purple: "#8263e2",
        Red: "#e28963",
        Yellow: "#e2cd63"
      }
    }
  },
  head: {
    Default: {
      svg: head_default,
      colors: {
        White: '#e2ca7a',
        Brown: '#b89011',
        Yellow: '#fdd965',
        Black: '#634b01'
      }
    }
  },
  mouth: {
    Gap: mouth_gap,
    Grin: mouth_grin,
    Kiss: mouth_kiss,
    Neutral: mouth_neutral,
    Sad: mouth_sad,
    Shocked: mouth_shocked,
    ShowTeeth: mouth_showteeth,
    Smile: mouth_smile,
    Tongue: mouth_tongue
  },
  eyes: {
    Default: eyes_default,
    Happy: eyes_happy,
    Sqint: eyes_squint,
    Closed: eyes_closed,
    Chinese: eyes_chinese,
    Zombie: eyes_zombie
  },
  eyebrows: {
    Concerned: eyebrows_concerned,
    Mono: eyebrows_mono,
    Angry: eyebrows_angry,
    Bushy: eyebrows_bushy,
    Evil: eyebrows_evil
  },
  clothes: {
    Shirt: {
      svg: clothes_shirt,
      colors: getDefaultClothesColor()
    },
    vNeckShirt: {
      svg: clothes_v_neck,
      colors: getDefaultClothesColor()
    },
    FancyShirt: {
      svg: clothes_fancy_shirt,
      colors: getDefaultClothesColor()
    }
  },
  hair: {
    Male01: {
      front: hair_Male01,
      colors: getDefaultHairColors()
    },
    Female01: {
      front: hair_Female01f,
      back: hair_Female01b,
      colors: getDefaultHairColors()
    },
    Bommel: {
      front: hair_bommel
    },
    WorkerHelmet: {
      front: hair_worker
    }
  },
  accessoir: {
    Ninja: accessoir_ninja,
    Flower: accessoir_flower
  }
}

export default statics
