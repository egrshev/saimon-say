<template>
  <div id="app" class="wrapper">
    <h1>Simon Says</h1>
    <div class="game-board">
      <div class="simon">
        <ul>
          <li class="tile red"
              :class="{ highlight: highlight1 }"
              @click="handler(1)">
          </li>
          <li class="tile blue"
              :class="{ highlight: highlight2 }"
              @click="handler(2)">
          </li>
          <li class="tile yellow"
              :class="{ highlight: highlight3 }"
              @click="handler(3)">
          </li>
          <li class="tile green"
              :class="{ highlight: highlight4 }"
              @click="handler(4)">
          </li>
        </ul>
      </div>
    </div>
    <div class="game-info">
      <div data-action="lose"
           v-if="overMessage === true">
        Извините Вы проиграли!
      </div>
      <h2 v-else>Уровень:
        <span>{{ rounds }}</span>
      </h2>
      <button data-action="start"
              @click="startGame">
        Старт
      </button>
    </div>
    <div class="game-options" v-if="rounds === 0">
      <h2>Выбор уровня сложности:</h2>
      <input type="radio"
             name="mode"
             value="1500"
             v-model="timeOut">Легкий<br>
      <input type="radio"
             name="mode"
             value="1000"
             v-model="timeOut">Средний<br>
      <input type="radio"
             name="mode"
             value="400"
             v-model="timeOut">Сложный<br>
    </div>
<!--    <div data-action="sound"></div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeOut: 1500,
      selectedNumbers: [],
      num: [],
      rounds: 0,
      clickNumber: 1,
      highlight1: false,
      highlight2: false,
      highlight3: false,
      highlight4: false,
      overMessage: false,
      inputOn: false,
    }
  },
  methods: {
    startGame() {
      this.firstLevel()
    },
    setNumbers() {
      for (let i = 1; i <= this.rounds; i++) {
        this.num.push(Math.floor(Math.random() * 4) + 1)
      }
      this.inputOn = false;
      this.timer()
    },
    timer() {
      for (let i = 0; i <= this.num.length - 1; i++) {
          this.highlight1 = false;
          this.highlight2 = false;
          this.highlight3 = false;
          this.highlight4 = false;

          setTimeout(() => {
            let audio = new Audio(`sounds/${this.num[i]}.mp3`)
            this.inputOn = false;
            if (this.num[i] === 1) {
              this.highlight1 = true;
            }

            if (this.num[i] === 2) {
              this.highlight2 = true;
            }

            if (this.num[i] === 3) {
              this.highlight3 = true;
            }

            if (this.num[i] === 4) {
              this.highlight4 = true;
            }

            audio.play()

            setTimeout(() => {
              if (this.num[i] === 1) {
                this.highlight1 = false;
              }

              if (this.num[i] === 2) {
                this.highlight2 = false;
              }

              if (this.num[i] === 3) {
                this.highlight3 = false;
              }

              if (this.num[i] === 4) {
                this.highlight4 = false;
              }

              if (i === this.num.length - 1) {
                this.inputOn = true;
              }
            }, 100);

          }, this.timeOut*i);
      }
    },
    nextLevel() {
      this.inputOn = false;
      setTimeout(() => {
        this.rounds++;
        this.num = [];
        this.clickNumber = 1;
        this.selectedNumbers = [];
        this.setNumbers();
      }, 500);

    },
    firstLevel() {
      this.inputOn = false;
      this.rounds = 1;
      this.num = [];
      this.clickNumber = 1;
      this.selectedNumbers = [];
      this.setNumbers();

    },
    gameOverMessage() {
      this.overMessage = true;
      setTimeout(() => {
        this.overMessage = false;
      }, 1500);
    },
    checkAnswer() {
      if (this.selectedNumbers[this.clickNumber - 1] === this.num[this.clickNumber - 1]) {
        if (this.clickNumber === this.num.length) {
          this.nextLevel();
        } else {
          this.clickNumber++;
        }
      } else {
        this.gameOverMessage();
        this.rounds = 0;
      }
    },
    handler(a) {
      if (this.inputOn === true) {
        this.selectedNumbers.push(a);
        let audio = new Audio(`sounds/${a}.mp3`);
        audio.play();
        this.checkAnswer();
      }
    }
  }
}
</script>

<style>
body {
  font-family: Arial, serif;
  color: #333;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  -o-user-select: none;
  user-select: none;
}

h1 {
  margin: 1em 0 2em;
  text-align: center;
}

ul {
  list-style: none;
}

ul, li {
  padding: 0;
  margin: 0;
}

div[data-action="lose"] {
  color: red;
  font-size: 20px;
}

.wrapper {
  width: 540px;
  margin: 0 auto;
}

.simon {
  background: #fff;
  position: relative;
  float: left;
  margin-right: 3em;
  width: 302px;
  height: 295px;
  -webkit-border-radius: 150px 150px 150px 150px;
  border-radius: 150px 150px 150px 150px;
  -moz-box-shadow: 2px 1px 12px #aaa;
  -webkit-box-shadow: 2px 1px 12px #aaa;
  -o-box-shadow: 2px 1px 12px #aaa;
  box-shadow: 2px 1px 12px
  #aaa;
}

.tile {
  opacity: 0.6;
  -webkit-transition: opacity 250ms ease;
  -moz-transition: opacity 250ms ease;
  -ms-transition: opacity 250ms ease;
  -o-transition: opacity 250ms ease;
  transition: opacity 250ms ease;
}

.tile.lit {
  opacity: 1;
}

.red, .blue, .yellow, .green {
  height: 290px;
  -webkit-border-radius: 150px 150px 150px 150px;
  border-radius: 150px 150px 150px 150px;
  position: absolute;
  text-indent: 10000px;
}

.red:hover, .blue:hover, .yellow:hover, .green:hover {
  border: 2px solid black
}

.red {
  background: #FF5643;
  clip: rect(0px, 300px, 150px, 150px);
  width: 296px;
}

.blue {
  background: dodgerblue;
  clip: rect(0px, 150px, 150px, 0px);
  width: 300px;
}

.yellow {
  background: #FEEF33;
  clip: rect(150px, 150px, 300px, 0px);
  width: 300px;
}

.green {
  background: #BEDE15;
  clip: rect(150px, 300px, 300px, 150px);
  width: 296px;
}

.game-info {
  margin-top: 90px;
}

.game-info button {
  width: 5em;
  box-sizing: border-box;
  font-size: 1.4em;
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #6DABE8;
  border: none;
  padding: 0.3em 0.6em;
}

.game-info button:hover {
  background: #78BCFF;
}

.game-options h2 {
  margin-top: 30px;
  margin-bottom: 0;
}

.game-options input[type="radio"] {
  margin-right: 10px;
}

.hoverable:hover {
  cursor: pointer;
}

footer {
  position: absolute;
  bottom: 20px;
  width: 540px;
  clear: both;
  text-align: center;
}

.highlight {
  opacity: 0.1;
}

</style>

