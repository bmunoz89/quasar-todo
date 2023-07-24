<template>
  <q-page padding>
    <span class="text-h3">Forms</span>
    <q-separator spaced inset />

    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md col-xs-12 col-sm-12 col-md-6 q-pt-xl"
      >
        <q-input
          filled
          type="email"
          v-model="userForm.email"
          label="Email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Required field',
            (val) => validateEmail(val) || 'Invalid email',
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password"
          label="Password"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Required field']"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.repeatedPassword"
          label="Repeat password"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Required field',
            (val) => val === userForm.password || 'Passwords doesn\'t match',
          ]"
        />

        <q-toggle
          name="accept"
          v-model="userForm.accept"
          label="I accept the license and terms"
          color="green"
          :style="{
            color:
              errorInAccept && userForm.accept !== true ? 'red' : undefined,
          }"
        />

        <div class="row justify-end">
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <q-btn unelevated label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useQuasar } from 'quasar';

const $q = useQuasar();

interface UserForm {
  email: string;
  password: string;
  repeatedPassword: string;
  accept?: boolean;
}

const initialUserForm = Object.freeze<UserForm>({
  email: '',
  password: '',
  repeatedPassword: '',
  accept: undefined,
});

const userForm = ref<UserForm>({ ...initialUserForm });

const errorInAccept = ref(false);

function onSubmit() {
  if (userForm.value.accept !== true) {
    errorInAccept.value = true;
    $q.notify({
      type: 'negative',
      message: 'You must accept the license and terms before submit.',
      icon: 'las la-exclamation-triangle',
      badgeColor: 'orange',
    });
  }
}

function onReset() {
  userForm.value = { ...initialUserForm };
}

function validateEmail(email: string): boolean {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
</script>
