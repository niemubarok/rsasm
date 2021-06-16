<template>
  <banner v-if="!store.components.state.searchBoxClicked" />

  <div class="bg-primary">

     
  </div>
  <div :class="$q.screen.gt.md ? 'q-ml-md ' : ''">
    <div class="row rounded-borders q-pa-md justify-center">
      <q-expansion-item
        class="shadow-1 overflow-hidden bg-primary"
        :class="!store.components.state.leftDrawerOpen ? 'z-top' : ''"
        style="border-radius: 30px; width: 80vh"
        :style="
          $q.screen.lt.lg && !store.components.state.searchBoxClicked
            ? 'width:100%; margin-top:-50px'
            : ''
        "
        icon="people"
        label="Praktek Dokter Hari Ini"
        header-class="text-accent text-h6"
        expand-icon-class="text-grey-10"
        expand-icon="search"
        expanded-icon="close"
        @show="
          [
            $nextTick(() => {
              $refs.input.focus();
            }),
            (store.components.state.searchBoxClicked = true),
          ]
        "
        @hide="
          [
            (store.doctor.searchText.value = ''),
            (store.components.state.searchBoxClicked = false),
          ]
        "
      >
        <!-- <q-scroll-observer @scroll="showScrollGuide = true" /> -->
        <!-- <template v-slot:header>
        
        <div class="text-subtitle2">
          <q-icon size="40px" name="people" color="grey-8"/>
          Praktek Dokter Hari Ini
          <q-space />
          </div>
      </template> -->
        <q-card>
          <q-card-section>
            <!-- search -->
            <q-input
              ref="input"
              v-model="store.doctor.searchSpecialist.value"
              autofocus
              class="q-mr-md"
              dense
              outlined
              rounded
              placeholder="Ketik   Nama Dokter / Poli"
            >
              <template #prepend>
                <q-icon v-if="store.doctor.searchText.value === ''" name="search" />
                <!-- <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" /> -->
              </template>
            </q-input>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>
  <div class="rounded-borders" :class="$q.screen.gt.sm ? 'q-mx-lg' : ''">
    <carousel-doctor
      :scroll-area-style="scrollArea()"
      :row-class="
        store.components.state.searchBoxClicked
          ? 'row justify-center '
          : 'no-wrap'
      "
    />
    
  </div>

  <!-- PARTNER SECTION -->
  <q-card
    v-if="!store.components.state.searchBoxClicked"
    class="bg-grey-2 q-ma-sm"
    style="
      border-left: 2px solid #527c51;
      border-right: 2px solid #527c51;
      border-radius: 30px;
    "
  >
    <div>
      <q-chip
        class="q-ml-lg bg-secondary text-light"
        size="sm"
        text-color="primary"
        label="Partner Kami"
      />
    </div>
    <div class="no-wrap row">
      <div class="row no-wrap full-width">
        <partner-logo />
      </div>
    </div>
  </q-card>
</template>

<script>
// import CarouselDoctor from 'src/components/CarouselDoctor.vue'
import Banner from "src/components/Banner.vue";
import { ref, inject } from "vue";
// import CardDoctor from 'src/components/CardDoctor.vue'
import PartnerLogo from "src/components/PartnerLogo.vue";
import CarouselDoctor from "src/components/CarouselDoctor.vue";
import { useQuasar } from 'quasar';

export default {
  components: { Banner, PartnerLogo, CarouselDoctor },
  setup() {
    const $q= useQuasar()
    const scrollArea = ()=>{
      console.log('scrollArea');
      if(store.components.state.searchBoxClicked){
        return 'height:90vh'
      }else if($q.platform.is.mobile){
        return 'height:30vh;'
      }
      return 'height:35vh;padding-top: 10px; margin-top: -5vh'
    }

    function setFocus() {
      let searchId = document.getElementById("search");
      searchId.focus();
    }
    const store = inject("store");

    const show = ref(true);

    return {
      scrollArea,
      show,
      setFocus,
      store,
    };
  },
};
</script>
