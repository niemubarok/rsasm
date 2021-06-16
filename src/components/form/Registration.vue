<template>
  <q-card
    flat
    class="bg-grey-3 q-py-sm q-mr-sm"
    :style="!$q.platform.is.mobile ? 'border-radius:30px;' : ''"
  >

  <q-img src="~assets/img/forms-amico.png" :ratio="$q.platform.is.mobile ? 4/3 : 16/9" class="absolute-top" 
  style="opacity:0.1"
  >
  <!-- :style="$q.platform.is.mobile ? 'opacity:0.1':'opacity:0.1'" -->

  </q-img>
    <div>
      <navigation card-title="Form Pendaftaran Online" />

      <q-badge
        :floating="$q.screen.gt.md"
        class="transparent q-ml-md"
        align="right"
      >
        <stepper
          :style="$q.platform.is.mobile ? 'font-size:10px' : ''"
          :done="$route.params.id"
          :edit="store.components.state.formEditing"
          :confirm="store.components.state.isConfirm"
        />
      </q-badge>
    </div>

    <div class="row q-mt-sm">
      <!-- STEP 1 -->
      <div class="col-md-3">
        <div class="row no-wrap items-center">
          <!-- Dokter -->
          <transition
            v-if="showCard"
            appear
            enter-active-class="animated fadeInLeft"
            leave-active-class="animated fadeOut"
          >
            <q-card
              flat
              class="transparent q-mt-sm q-pa-sm"
              style="
                border-radius: 30px;
                height: 250px;
                border-right: 1px solid grey;
              "
            >
              <div class="row no-wrap" style="margin-bottom: -15px">
                <q-chip color="secondary" text-color="white">
                  <q-avatar color="primary" text-color="accent"
                    ><strong>1</strong></q-avatar
                  >
                  Dokter Tujuan
                </q-chip>
                <q-space />
                <router-link to="/doctor/search" style="text-decoration: none">
                  <q-chip
                    v-if="$route.params.id"
                    icon="swap_horiz"
                    size="xs"
                    class="shadow-2 cursor-pointer"
                    rounded
                    color="primary"
                    text-color="accent"
                  >
                    Ganti Dokter
                  </q-chip>
                </router-link>
              </div>
              <card-doctor
                v-if="$route.params.id"
                :picture-url="store.doctor.selected().url"
                :doctor="store.doctor.selected().name"
                :specialist="store.doctor.selected().specialist"
                :time="store.doctor.selected().time"
              />
              <q-card-section
                v-if="!$route.params.id"
                class="row items-center justify-center q-mt-xl"
              >
                <router-link to="/doctor/search" style="text-decoration: none">
                  <q-btn class="text-primary bg-white" style="border-radius: 30px" @click="store.doctor.searchDate.value = store.components.state.today()">
                    Pilih Dokter
                  </q-btn>
                </router-link>
              </q-card-section>
              <!-- style="margin-top:-2px" -->
            </q-card>
          </transition>
          <!-- NEXT iCON -->
          <!-- <transition
											appear
											enter-active-class="animated fadeInLeft"
											leave-active-class="animated fadeOut"
											>
											<q-icon v-if="!$q.platform.is.mobile" style="margin-left:-10px;margin-top:100px" name="forward" color="secondary" size="50px"/>
							</transition> -->
        </div>
      </div>

      <!-- Step 2 -->
      <transition
        appear
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOut"
      >
        <div v-if="$route.params.id" v-show="showNext" class="col-md q-ml-sm">
          <q-card
            flat
            class="transparent q-mt-sm q-pa-sm"
            style="border-radius: 30px; border-left: 1px solid grey"
            :style="
              $q.screen.lt.xl && $q.screen.gt.sm
                ? 'width:60vw;margin-left:70px;'
                : 'width:85vw;'
            "
          >
            <!-- chip -->
            <div style="margin-bottom: -15px">
              <q-chip color="secondary" text-color="white">
                <q-avatar color="primary" text-color="accent"
                  ><strong>2</strong></q-avatar
                >
                Isi Data Pasien
              </q-chip>
              <!-- <div class="q-ml-md "> -->
              <q-badge
                class="text-bold"
                text-color="secondary"
                rounded
                color="transparent"
                align="left"
                label="Mendaftar sebagai :"
              />
              <!-- </div> -->
            </div>

            <!-- PILIIH BARU ATAU LAMA -->
            <div class="row no-wrap q-pt-md items-center">
              <div
                class="row justify-center no-wrap"
                :style="
                  $q.screen.lt.sm ? 'margin-left: 50px' : 'margin-left: 140px'
                "
              >
                <!-- CHIP PASIEN BARU -->
                <q-chip
                  v-model:selected="store.components.state.isNewPatient"
                  :removable="store.components.state.isNewPatient"
                  :disable="store.components.state.isOldPatient"
                  class="shadow-4"
                  :class="store.components.state.isNewPatient ? 'bg-green' : ''"
                  color="primary"
                  @remove="
                    [
                      (store.components.state.isNewPatient = false),
                      (store.components.state.formEditing = false),
                    ]
                  "
                  @click="store.components.state.formEditing = true"
                  >Pasien Baru</q-chip
                >

                <q-chip
                  v-model:selected="store.components.state.isOldPatient"
                  class="shadow-4"
                  :removable="store.components.state.isOldPatient"
                  :disable="store.components.state.isNewPatient"
                  color="primary"
                  :class="store.components.state.isOldPatient ? 'bg-green' : ''"
                  @remove="
                    [
                      (store.components.state.isOldPatient = false),
                      (store.components.state.formEditing = false),
                    ]
                  "
                  @click="[(store.components.state.formEditing = true)]"
                  >Pasien Lama</q-chip
                >
              </div>
              <!-- </q-card>  -->
              <!-- NEXT iCON -->
              <!-- <transition
									appear
									enter-active-class="animated fadeInLeft"
									leave-active-class="animated fadeOut"
									>
									<q-icon v-if="!$q.platform.is.mobile" v-show="store.components.state.isOldPatient || store.components.state.isNewPatient" name="forward" color="secondary" size="50px"/>
					</transition> -->
            </div>

            <!-- FORM PASIEN LAMA -->
            <old-patient-form />
          </q-card>

          <dialog-confirm />
        </div>
      </transition>
    </div>
  </q-card>
</template>

<script>
import CardDoctor from "../CardDoctor.vue";
import { inject, ref, onMounted } from "vue";
import Stepper from "./Stepper.vue";
import OldPatientForm from "./OldPatientForm.vue";
import DialogConfirm from "./DialogConfirm.vue";
import Navigation from "../button/Navigation.vue";

export default {
  components: {
    CardDoctor,
    Stepper,
    OldPatientForm,
    DialogConfirm,
    Navigation,
  },
  setup() {
    const showCard = ref(false);
    setTimeout(() => {
      showCard.value = true;
    }, 100);
    const showNext = ref(false);
    setTimeout(() => {
      showNext.value = true;
    }, 500);

    const store = inject("store");
    return {
      store,
      showCard,
      showNext,
    };
  },
};
</script>

<style>
.step {
  display: flex;
}
.step:before {
  display: none;
}
.step:after {
  content: "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0";
  text-decoration: line-through;
}
</style>
