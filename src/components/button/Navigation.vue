<template>
  <q-btn
    style="z-index: 2"
    flat
    rounded
    ripple="false"
    icon="west"
    @click="
      [
        (store.doctor.searchText.value = ''),
        $router.go(-1),
        (store.doctor.isFiltered.value = false),
        (store.components.state.searchBoxClicked = false),
      ]
    "
  />
  <q-btn
    style="z-index: 2"
    flat
    rounded
    ripple="false"
    icon="home"
    @click="
      [
        (store.doctor.searchText.value = ''),
        (store.doctor.isFiltered.value = false),
        $router.push('/'),
        (store.components.state.searchBoxClicked = false),
      ]
    "
  />
  <q-chip rounded class="bg-grey-3 text-grey-7">
    <h5 :style="$q.platform.is.mobile ? 'font-size:16px' : ''">
      {{ cardTitle }}
    </h5>
  </q-chip>
</template>

<script>
import { inject } from "vue";

export default {
  props: {
    cardTitle: {
      type: String,
      default: "",
    },
  },

  setup() {
    return {
      store: inject("store"),
    };
  },
};
</script>

<style></style>
