<template>
  <div class="summary">
    <section class="shadow">
      <bma-header />
      <div class="success-msg text-center">
        <h2 class="text-capitalize">Thanks for your participation</h2>
        <p class="lead">Below is a summary of your test</p>
      </div>
      <div class="table-responsive">
        <table class="summary-table table">
          <thead>
            <tr>
              <th colspan="2">Test Summary</th>
            </tr>
            <tr>
              <th>Country</th>
              <td>{{summary.user.country}}</td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>{{summary.user.phone}}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Total Questions</th>
              <td>{{summary.summary.question_length}}</td>
            </tr>
            <tr>
              <th>Correct Answesr</th>
              <td>{{summary.summary.is_correct}}</td>
            </tr>
            <tr>
              <th>Incorrect Answers</th>
              <td>{{summary.summary.is_wrong}}</td>
            </tr>
            <tr>
              <th>Total Points</th>
              <td>{{summary.summary.points}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="reset">
        <button @click="retakeTest" class="btn btn-success mt-3 py-3">Retake Test</button>
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
      summary: null
    }
  },
  methods: {
    fetchSummary () {
      this.summary = this.$route.params
    },
    retakeTest () {
      this.$router.replace({
        name: 'Home',
        path: '/'
      })
    }
  },
  beforeMount() {
    (!this.$route.params.user.country) ? this.$router.push('/') : false;
    this.fetchSummary()
  },

}
</script>

<style lang="scss" scoped>
  .summary {
    section.shadow {
      width: 50%;
      margin: 2% auto;
      padding: 2% 1%;
      border-radius: 8px;
      background-color: whitesmoke;

      table {
        // min-width: 200px;
        
        &, th, td {
          border: 1px solid rgba(200, 200, 200, 0.6);
          border-collapse: collapse !important;
        }
        thead, tbody {
          font-size: 15px;

          tr {
            td {
            text-align: center;
          }
          }
        }

        thead {
          tr {
            &:first-child {
              th {
              padding: 10px;
              font-size: 20px;
              text-align: center;
            }
            }
          }
        }
      }

      div.reset {
        display: flex;
        justify-content: center;
        margin-top: 5px;


        button {
          width: 50%;
        }
      }
    }
  }

  // xxs
  @media (max-width: 450px) {
    div.summary {
      section.shadow {
        width: 90%;
        margin: 5% auto;
        padding: 10% 1.5%;

        h2 {
          font-size: 28px;
        }

        div.reset {
          button {
            width: 100%;
          }
        }
      }
    }
  }

  // xs
  @media (min-width:450px) and (max-width: 576px) {
    div.summary {
      section.shadow {
        width: 90%;
        margin: 5% auto;
        padding: 10% 1.5%;

        h2 {
          font-size: 28px;
        }

        div.reset {
          button {
            width: 100%;
          }
        }
      }
    }
  }

  // sm
  @media (min-width: 576px) and(max-width: 768px) {
    div.summary {
      section.shadow {
        width: 90%;
        margin: 5% auto;
        padding: 10% 1.5%;

        h2 {
          font-size: 30px;
        }

        div.reset {
          button {
            width: 100%;
          }
        }
      }
    }
  }

  // md
  @media (min-width: 768px) and(max-width: 992px) {
    div.summary {
      section.shadow {
        width: 70%;
        margin: 4% auto;
        padding: 5% 1.5%;

        div.reset {
          button {
            width: 100%;
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
