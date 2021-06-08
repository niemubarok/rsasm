<template>
  <div class="q-mb-lg q-mt-lg">
    <navigation card-title="Cari Jadwal Dokter" />
    <q-space v-if="$q.screen.lt.sm" />
      <!-- :removable="store.doctor.searchText.value" -->
      <!-- v-model:selected="store.doctor.searchText.value" -->
    <q-chip
      clickable
      class="shadow-4"
      :class="store.doctor.searchText.value == '' ? 'bg-secondary text-white' : 'bg-grey-7 text-grey-2'"
      @click="[(store.doctor.searchText.value = ''),(store.doctor.searchDate.value = ''), (todaySelected = false), (chooseDateSelected = false)]"
      >Semua</q-chip
    >
      <!-- @remove="[(todaySelected = false)]" -->
    <q-chip
      v-model:selected="todaySelected"
      :removable="todaySelected"
      class="shadow-4"
      :class="todaySelected ? 'bg-secondary text-white' : 'bg-grey-7 text-grey-2'"
      @remove="[(todaySelected = false), (store.doctor.searchDate.value = '')]"
      @click="today()"
      >Hari Ini</q-chip
    >
    
    <!-- color="grey-5" -->
    <q-btn
      icon="event"
      rounded
      :label="chooseDateSelected ? store.doctor.searchText.value : 'Pilih Tanggal'"
      :class="
        chooseDateSelected & !todaySelected
          ? 'bg-secondary text-white'
          : 'bg-grey-7 text-grey-2'
      "
    >
      <q-popup-proxy
        transition-show="scale"
        transition-hide="scale"
        @before-show="updateProxy"
      >
      
        <q-date v-model="proxyDate" :options="optionFn" >
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn v-close-popup label="Cancel" color="primary" flat />
            <q-btn
              v-close-popup
              label="OK"
              color="primary"
              flat
              @click="save"
            />
          </div>
        </q-date>
      </q-popup-proxy>
    </q-btn>
    </div>
  
  <carousel-doctor :scroll-area-style="style" style="height: 95vh" />
</template>

<script>
import CarouselDoctor from "./CarouselDoctor.vue";
import { ref, inject } from "vue";
import { date } from "quasar";
import Navigation from "./button/Navigation.vue";

export default {
  components: { CarouselDoctor, Navigation },
  setup() {
    const style = () => {
      // if (store.components.state.searchBoxClicked) {
      return "height:100vh";
      // }
    };

    const store = inject("store");
    const todaySelected = ref(false);
    const chooseDateSelected = ref(false);

    const today = () => {
      todaySelected.value = true;
      store.doctor.searchDate.value = date.formatDate(Date.now(), "DD-MM-YYYY");
    };
    const timeStamp = date.formatDate(Date.now(), "YYYY/MM/DD");
    const datePicker = ref(timeStamp);
    const proxyDate = ref(timeStamp);
   

    return {
      store,
      chooseDateSelected,
      todaySelected,
      style,
      today,
      datePicker,
      proxyDate,

      updateProxy() {
        proxyDate.value = datePicker.value;
        // chooseDateSelected.value = true;
      },
       optionFn(proxyDate){
        //  console.log(timeStamp);
        // const date = new Date()
        const aWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        return  proxyDate >= timeStamp  && new Date(proxyDate) <= aWeek
    },

      save() {
          chooseDateSelected.value = true;
          todaySelected.value = false;
          store.doctor.searchDate.value = date.formatDate(
            proxyDate.value,
            "DD-MM-YYYY"
          );
      },
    };
  },
};
</script>

<style></style>
