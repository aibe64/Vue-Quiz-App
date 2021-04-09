<template>
  <div class="home">
    <section class="shadow">
      <bma-header />
      <div class="text-center">
        <h2>Welcome to BMA Quiz Game</h2>
        <p class="lead">Please read the <a href="" @click.prevent v-b-modal.instructions>instuctions</a> carefully before getting started.</p>
      </div>
      <!-- instruction modal -->
      <b-modal
        id="instructions"
        hide-footer
        size="sm"
      >
        <template>
          <div class="text-center">
            <h5><u>Instructions</u></h5>
            <ol class="text-left">
              <li>
                Select your country and input your phone number to get started.
              </li>
              <li>
                Choose the correct answer from the list of options for each question to earn points.
              </li>
              <li>
                You have 2 minutes (120 seconds) to answer each question.
              </li>
              <li>
                Each question has 5 points.
              </li>
              <li>
                If no answer is selected before the time elapses, it is game over.
              </li>
            </ol>
          </div>
        </template>
      </b-modal>

      <!-- sign in form -->
      <form class="form" @submit.prevent="startTest">
        <div>
          <select
            id="country"
            class="form-control"
            :class="{required: countryReq !== ''}"
            v-model="country"
          >
            <option value="">Select Country</option>
            <option
              v-for="(country, index) in countries"
              :key="index"
              :value="country"
            >{{country}}</option>
          </select>
          <small
            v-if="countryReq !== ''"
          >{{countryReq}}</small>
        </div>
        <div>
          <input
            type="tel"
            class="form-control"
            :class="{required: phoneReq !== ''}"
            placeholder="Phone Number eg. +23481654..."
            v-model="phoneNumber"
          >
          <small
            v-if="phoneReq !== ''"
          >{{phoneReq}}</small>
        </div>
        <div>
          <button
            class="btn btn-primary py-2 w-100"
            type="submit"
          >Start Test</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import bmaHeader from '../components/bmaHeader.vue'

export default {
	components: { bmaHeader },
  name: 'Home',
  data() {
    return {
      country: '',
      countryReq: '',
      phoneNumber: '',
      phoneReq: '',
      countries: [
        'Algeria', 'Cameroon', 'Dr. Congo', 'Egypt', 'Ethiopia', 'Gambia', 'Ghana', 'Liberia', 'Namibia', 'Nigeria', 'Senegal', 'South-Africa', 'Tanzania', 'Venezuela'
      ]
    }
  },
  methods: {
    validatePhoneNumber (phoneNumber) {
      const user = {
        country: this.country,
        phone: phoneNumber
      }
      const pattern = /^[+][0-9]{3}[0-9]{1,5}[0-9]{4,6}/

      if (phoneNumber === '') {
        this.phoneReq = 'Please provide phone number'
        return
      }
      if (pattern.test(phoneNumber)) {
        this.phoneReq = ''
        // go to test url
        this.$router.push({
          name: 'Test',
          params: {
            user: user
          }
        })
      } else {
        this.phoneReq = 'Incorrect phone number pattern'
      }
    },
    startTest () {
      if (this.country === '') {
        this.countryReq = 'Please select your country'
        return
      }
      // validate phone number
      this.validatePhoneNumber (this.phoneNumber)
    }
  },
  watch: {
    country (nv) {
      if (nv === '') {
        this.countryReq = 'Please select your country'
      } else this.countryReq = ''
    }
  },
}
</script>

<style lang="scss" scoped>

  section.shadow {
    width: 50%;
    margin: 3% auto;
    padding: 4% 1%;
    border-radius: 8px;
    background-color: whitesmoke;

    #instructions {
      .modal-header {
        border-bottom: none !important;
      }
    }

    form {
      width: 50%;
      margin: 4% auto;
      border: transparent;

      &>div {
        margin-bottom: 10px;

        // required field
        .required {
          border: 0.5px solid red;
          transition: all 0.5s;
        }

        small {
          color: red;
        }

        button {
          margin-top: 3%;
          font-weight: bolder;
        }
      }
    }
  }

  // xxs
  @media (max-width: 450px) {
    section.shadow {
      width: 90%;
      margin: 5% auto;
      padding: 10% 1.5%;

      h2 {
        font-size: 26px;
        margin-top: 3%;
      }

      p {
        font-size: 16px;
      }

      form {
        width: 85%;
        margin: 4% auto;

        &>div {
          select option {
            font-size: 12px;
          }

          input::placeholder {
            font-size: 14px;
          }
          button {
            margin-top: 3%;
            font-weight: bolder;
          }
        }
      }
    }
  }

  // xs
  @media (min-width: 450px) and(max-width: 576px) {
    section.shadow {
      width: 80%;
      margin: 10% auto;
      padding: 10% 1.5%;

      h2 {
        font-size: 28px;
        margin-top: 3%;
      }

      p {
        font-size: 19px;
      }

      form {
        width: 80%;
        margin: 7% auto;
        border: transparent;

        &>div {
          button {
            margin-top: 3%;
            font-weight: bolder;
          }
        }
      }
    }
  }

  // sm
  @media (min-width: 576px) and(max-width: 768px) {
    section.shadow {
      width: 80%;
      margin: 5% auto;
      padding: 9% 1.5%;

      h2 {
        font-size: 28px;
        margin-top: 3%;
      }

      form {
        width: 70%;
        margin: 7% auto;
        border: transparent;

        &>div {
          button {
            margin-top: 3%;
            font-weight: bolder;
          }
        }
      }
    }
  }

  // md
  @media (min-width: 768px) and(max-width: 992px) {
     section.shadow {
      width: 80%;
      margin: 5% auto;
      padding: 6% 1.5%;

      h2 {
        font-size: 28px;
        margin-top: 3%;
      }

      form {
        width: 50%;
        margin: 5% auto;
        border: transparent;

        &>div {
          button {
            margin-top: 3%;
            font-weight: bolder;
          }
        }
      }
    }
  }

  // lg
  @media (min-width: 992px) and(max-width: 1200px) {
    section.shadow {
      width: 60%;
      margin: 3% auto;
      padding: 3% 1.5%;

      form {
        width: 50%;
        margin: 5% auto;
        border: transparent;

        &>div {
          button {
            margin-top: 3%;
            font-weight: bolder;
          }
        }
      }
    }
  }

  // xl
  @media (min-width: 1200px) {}
</style>
