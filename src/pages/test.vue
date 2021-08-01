<template>
  <div>
    <q-btn @click="submit">submit</q-btn>

    <q-card style="width: 200px; height: 200px" class="q-pa-sm">
      <img :src="qr" />
    </q-card>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const qr = ref(null);
    const submit = async () => {
      await axios
        .get("http://127.0.0.1:3333/api/test", {
        })
        .then((data) => {
          qr.value = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      submit,
      qr,
    };
  },
};
</script>

<style></style>
