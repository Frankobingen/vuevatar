// backgrounds
import background_circle from './svg/backgrounds/circle.svg'
import background_rect from './svg/backgrounds/rect.svg'
// heads
import head_default from './svg/heads/default.svg'
// mouths
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
import clothes_hoodie from './svg/clothes/hoodie.svg'
import clothes_dress from './svg/clothes/dress.svg'
// hair
import hair_Male01 from './svg/hair/Male01.svg'
import hair_Male02 from './svg/hair/Male02.svg'
import hair_Female01f from './svg/hair/Female01-front.svg'
import hair_Female01b from './svg/hair/Female01-back.svg'
import hair_Female02f from './svg/hair/Female02-front.svg'
import hair_Female02b from './svg/hair/Female02-back.svg'
import hair_Female03 from './svg/hair/Female03.svg'
import hair_Female04f from './svg/hair/Female04-front.svg'
import hair_Female04b from './svg/hair/Female04-back.svg'
import hair_bommel from './svg/hair/bommel.svg'
import hair_worker from './svg/hair/worker.svg'
// accessoir
import accessoir_ninja from './svg/accessoirs/ninja.svg'
import accessoir_flower from './svg/accessoirs/flower.svg'
import accessoir_glasses from './svg/accessoirs/glasses.svg'
import accessoir_devil from './svg/accessoirs/devil.svg'
import accessoir_feather from './svg/accessoirs/feather.svg'
// breard
import beard_walrus from './svg/beards/walrus.svg'
import beard_goaty from './svg/beards/goaty.svg'

function getDefaultHairColors() {
  return {
    Black: "#090806",
    Blonde: "#CCA57D",
    Red: "#B55239",
    Brown: "#72442B"
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

function getBackgroundColors() {
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
      clipPath: 'M0 44.375C0 19.8674 19.8674 0 44.375 0C68.8826 0 88.75 19.8674 88.75 44.375C88.75 68.8826 68.8826 88.75 44.375 88.75C19.8674 88.75 0 68.8826 0 44.375Z',
      transform: 'translate(5.625 10.625)',
      colors: getBackgroundColors()
    },
    Box: {
      svg: background_rect,
      clipPath: 'M3 100V10H97V100H3Z',
      transform: null,
      colors: getBackgroundColors()
    }
  },
  head: {
    Default: {
      svg: head_default,
      colors: {
        White: '#ffdbac',
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
    None: null,
    Concerned: eyebrows_concerned,
    Mono: eyebrows_mono,
    Angry: eyebrows_angry,
    Bushy: eyebrows_bushy,
    Evil: eyebrows_evil
  },
  beards: {
    None: null,
    Walrus: beard_walrus,
    Goaty: beard_goaty
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
    },
    Hoodie: {
      svg: clothes_hoodie,
      colors: getDefaultClothesColor()
    },
    Dress: {
      svg: clothes_dress,
      colors: getDefaultClothesColor()
    }
  },
  hair: {
    None: null,
    Male01: {
      front: hair_Male01,
      colors: getDefaultHairColors()
    },
    Male02: {
      front: hair_Male02,
      colors: getDefaultHairColors()
    },
    Female01: {
      front: hair_Female01f,
      back: hair_Female01b,
      colors: getDefaultHairColors()
    },
    Female02: {
      front: hair_Female02f,
      back: hair_Female02b,
      colors: getDefaultHairColors()
    },
    Female03: {
      front: hair_Female03,
      colors: getDefaultHairColors()
    },
    Female04: {
      front: hair_Female04f,
      back: hair_Female04b,
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
    None: null,
    Ninja: accessoir_ninja,
    Flower: accessoir_flower,
    Glasses: accessoir_glasses,
    Devil: accessoir_devil,
    Feather: accessoir_feather
  }
}

export default statics
