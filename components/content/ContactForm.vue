<template>
  <v-container class="grey lighten-2">
    <v-container>
      <v-card class="pa-3 elevation-6" tile>
        <v-card-title>Contact Us</v-card-title>
        <v-card-text>
          <p>
            If you want to reach out to our chapter please fill out our contact
            form.
          </p>

          <v-form
            v-if="show_form"
            ref="form"
            v-model="valid"
            @submit.prevent="submit"
          >
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="name"
                  :counter="30"
                  :rules="nameRules"
                  prepend-inner-icon="mdi-account"
                  label="Name"
                  required
                  autocomplete
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  prepend-inner-icon="mdi-email-outline"
                  label="E-mail"
                  required
                  autocomplete
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  prepend-inner-icon="mdi-phone-dial-outline"
                  label="Phone"
                  required
                  autocomplete
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  v-model="message"
                  :rules="messageRules"
                  prepend-inner-icon="mdi-comment-text-outline"
                  label="Message"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-spacer></v-spacer>

              <v-btn
                :disabled="!valid"
                color="primary"
                required
                class="gradient-border flat"
                flat
                type="submit"
                text="Submit"
              ></v-btn>
            </v-row>
          </v-form>
          <div v-if="progress" class="d-block text-center py-16">
            <h5>Sending request...</h5>
            <v-progress-circular
              indeterminate
              :size="93"
              class="mx-auto"
            ></v-progress-circular>
          </div>
          <div v-if="show_alert" class="d-block py-16">
            <v-alert :type="alert_type" :text="alert_message"></v-alert>
          </div>
        </v-card-text>
      </v-card>
      <h1></h1>
    </v-container>
  </v-container>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    valid: true,
    show_form: true,
    show_alert: false,
    alert_type: 'success',
    alert_message: "You're request was sucessfully sent.",
    progress: false,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 30) || 'Name must be less than 30 characters',
      (v) => (v && v.length > 2) || 'Name must be greater than 2 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) =>
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || 'E-mail must be valid',
    ],
    phone: '',
    phoneRules: [
      (v) => !!v || 'Phone # is required',
      (v) =>
        /(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/.test(v) ||
        'Phone # must be valid',
    ],
    message: '',
    messageRules: [
      (v) => !!v || 'Message is required',
      (v) => (v && v.length > 2) || 'Message must be greater than 2 characters',
    ],
  }),
  methods: {
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    async submit() {
      if (this.$refs.form.validate()) {
        this.show_form = false
        this.progress = true
        const data = await $fetch(this.url, {
          method: 'POST',
          body: {
            form: 'Contact Form',
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message,
          },
        })

        this.progress = false
        this.show_alert = true
        if (data.ok) {
          this.alert_type = 'success'
          this.alert_message = "You're request was sucessfully sent."
        } else {
          this.alert_type = 'error'
          this.alert_message = 'Oops! There was a problem submitting your form'
        }
        // eslint-disable-next-line no-console
        console.debug({ data })
      }
    },
  },
}
</script>
