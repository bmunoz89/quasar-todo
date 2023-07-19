<template>
    <q-page padding>
        <span class="text-h1">Dialogs</span>

        <q-separator spaced inset />

        <div class="q-pa-md q-gutter-sm">
            <q-btn color="primary" label="Alert" @click="alert"/>
            <q-btn color="primary" label="Confirm" @click="confirm"/>
            <q-btn color="primary" label="Prompt" @click="prompt"/>
        </div>
    </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar();

const alert = () => {
    $q.dialog({
        title: 'Alert',
        message: 'Some message'
    });
}

const confirm = () => {
    const dialog = $q.dialog({
        title: 'Confirm',
        message: 'Would you like to turn on the wifi?',
        cancel: true,
        persistent: true
    });

    dialog.onOk((payload) => {
        alert(payload);
    });
}

const prompt = () => {
    $q.dialog({
        title: 'Prompt',
        message: 'What is your name?',
        cancel: true,
        persistent: true,
        prompt: {
            model: '',
            type: 'text'
        }
    });
}

</script>
