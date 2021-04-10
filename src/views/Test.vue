<template>
  <div class="test">
    <section class="shadow">
      <bma-header />
      <div v-if="questions.length" class="q-timer d-flex justify-content-between align-items-center">
        <span>Question {{questionIndex + 1}} of {{questions.length}}</span>
        <span
            :class="{'text-danger': timer < 21}"
            class="d-flex justify-content-start align-items-center"
          >
          <i class="fas fa-stopwatch"></i>
          <span class="count-down-timer ml-2">{{timer}}s</span>
        </span>
      </div>
      <hr>
      <div v-if="questions.length" class="questions">
        <div v-if="timer !== 0" class="question-box d-flex flex-column justify-content-start align-items-start">
          <div>
            <b>{{ questions[questionIndex].question }}</b>
          </div>
          <div class="answer-options mt-4">
            <ol type="a" class="text-left">
              <li
                v-for="(answer, index) in questions[questionIndex].choices" 
                :key="answer.id"
              >
                <label :for="`answer${answer.id}`">
                  <input
                  class="ml-2"
                    type="radio"
                    name="option"
                    :id="`answer${answer.id}`"
                    :value="`answer${index}`"
                    @click="selectedAnswer(questions[questionIndex], answer.choice, answer.is_correct_choice)"
                  />
                  {{answer.choice}}
                </label>
              </li>
            </ol>
          </div>
        </div>
        <div
          v-else
          class="game-over d-flex justify-content-center align-items-center text-danger text-center h-100"
        >
        <h3>GAME OVER</h3>
        </div>
      </div>
      <div v-else class="text-center">
        <p class="d-flex justify-content-center align-items-center">
          <span v-if="loading" class="d-flex justify-content-start align-items-center">
            <b-spinner />
            <span class="ml-2">fetching questions....</span>
          </span>
          <span v-else>No questions available</span>
        </p>
      </div>
      <hr>
      <div
        v-if="questions.length && timer !== 0"
        class="next"
      >
        <button
          v-if="is_completed == false"
         @click="nextQuestion"
          class="btn btn-primary px-3 py-2"
        >Next</button>
        <button
          v-else
         @click="submitTest"
          class="btn btn-success px-3 py-2 w-100"
        >Submit</button>
      </div>
    </section>
  </div>
</template>

<script>
import bmaHeader from '../components/bmaHeader.vue'

export default {
	components: { bmaHeader },
  data() {
    return {
      loading: false,
      timer: 120,
      stopWatch: null,
      questions: [],
      questionIndex: 0,
      question: {},
      answer: '',
      is_correct: null,
      correctAnswer: 0,
      points: 0,
      is_completed: false
    }
  },
  methods: {
    async fetchQuestions () {
      this.loading = true;
      await setTimeout(() => {
        fetch(process.env.VUE_APP_URL)
          .then(res => res.json())
          .then(data => {
            this.loading = false
            this.questions = data.data
            setTimeout(() => this.startTimer (), 1000);
          })
          .catch(err => {
            this.loading = false
          })
      }, 300);
    },
    selectedAnswer (question, answer, isCorrect) {
      this.question = question
      this.answer = answer
      this.is_correct = isCorrect
    },
    startTimer () {
      this.stopWatch = setInterval(() => this.timer --, 1500)
    },
    stopTimer () {
      clearInterval(this.stopWatch)
    },
    nextQuestion () {
      switch (this.is_correct) {
        case 1:
          this.correctAnswer ++
          this.points += parseInt(this.question.points)
          this.is_correct = null
          break;
        case 0:
          this.is_correct = null
          break;

        default:
          this.is_correct = null
          break;
      }
      if (this.questionIndex < this.questions.length) {
        this.timer = 120
        this.questionIndex ++
      }
    },
    completed() {
      this.is_completed = true
    },
    submitTest () {
      switch (this.is_correct) {
        case 1:
          this.correctAnswer ++
          this.points += parseInt(this.question.points)
          break;
        case 0:
          this.correctAnswer ++
      }
      this.$router.push({
        name: 'Result',
        params: {
          user: this.$route.params.user,
          summary: {
            question_length: this.questions.length,
            is_correct: this.correctAnswer,
            is_wrong: (this.questions.length - this.correctAnswer),
            points: this.points
          }
        }
      })
    }
  },
  beforeMount() {
    (!this.$route.params.user.country) ? this.$router.push('/') : false;
    this.fetchQuestions()
  },
  watch: {
    timer (elapsedTime) {
      if (elapsedTime == 0) {
        this.stopTimer()
        setTimeout(() => this.submitTest(), 3000);
      }
    },
    questionIndex (nv) {
      if (nv == this.questions.length - 1) {
        this.completed()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  div.test {
    section.shadow {
      width: 50%;
      margin: 2% auto;
      padding: 2% 1%;
      background-color: whitesmoke;

      &>div.q-timer {
        span {
          font-size: 17px;
          font-weight: bold;
        }
      }
      div.questions {
        height: 180px;

        b {
          font-size: 16px;
        }
      }
      &>div.next {
        display: flex;
        justify-content: flex-end;
        
        button {
          width: 150px;
          margin-top: 2%;
          font-weight: bolder;
        }
      }
    }
  }

  // xxs
  @media (max-width: 450px) {
    div.test {
      section.shadow {
        width: 90%;
        margin: 5% auto;
        padding: 10% 1.5%;

        &>div.q-timer {
          margin-top:  5%;
          span {
            font-size: 18px;
            font-weight: bold;
          }
        }
        div.questions {
          height: 220px;

          b {
            font-size: 16px;
          }
        }
        &>div.next {
          button {
            width: 100%;
          }
        }
      }
    }
  }

  // xs
  @media (min-width:450px) and (max-width: 576px) {
    div.test {
      section.shadow {
        width: 80%;
        margin: 5% auto;
        padding: 7% 1.5%;

        &>div.q-timer {
          margin-top:  5%;
        }
        div.questions {
          height: 220px;

          b {
            font-size: 15px;
          }
        }
      }
    }
  }

  // sm
  @media (min-width: 576px) and(max-width: 768px) {
    div.test {
      section.shadow {
        width: 70%;
        margin: 5% auto;
        padding: 7% 1.5%;

        &>div.q-timer {
          margin-top:  5%;
        }
        div.questions {
          height: 220px;

          b {
            font-size: 15px;
          }
        }
      }
    }
  }

  // md
  @media (min-width: 768px) and(max-width: 992px) {
    div.test {
      section.shadow {
        width: 70%;
        margin: 4% auto;
        padding: 5% 1.5%;

        &>div.q-timer {
          margin-top:  5%;
        }
        div.questions {
          height: 180px;

          b {
            font-size: 15px;
          }
        }
      }
    }
  }

  // lg
  @media (min-width: 992px) and(max-width: 1200px) {}

  // xl
  @media (min-width: 1200px) {}
</style>
