<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div
      v-show="
        store.components.state.isOldPatient ||
        store.components.state.isNewPatient
      "
      class="q-mt-sm"
    >
      <div class="row no-wrap items-center">
        <q-card
          flat
          style="border-radius: 30px; border-left: 1px solid grey"
          class="bg-grey-3 full-width q-pa-sm q-pb-md"
        >
          <!-- <q-icon name="forward" color="primary" size="50px"/> -->
          <div>
            <q-chip>Silahkan Lengkapi Data Pasien</q-chip>
          </div>
          <q-form @submit="[onSubmit,
                      (store.components.state.isConfirm = true),
                      (store.components.state.dialogConfirm = true),
                    ]">
            <div>
              <q-input
                v-model="store.patient.oldPatientForm.nik"
                mask="card"
                :rules="[
                  (val) => !!val || 'Mohon masukan NIK',
                  (val) => val.length > 10 || 'Angka yang anda masukan kurang',
                ]"
                clearable
                autofocus
                class="q-mt-sm"
                flat
                label="NIK / No. KTP"
              />
              <q-input
                v-model="store.patient.oldPatientForm.name"
                clearable
                class="q-mt-sm"
                flat
                label="Nama Lengkap Pasien Sesuai KTP"
              />
              <q-input
                v-model="store.patient.oldPatientForm.birthDate"
                clearable
                type="date"
              />
              <q-input
                v-model="store.patient.oldPatientForm.phone"
                clearable
                mask="####-####-####"
                class="q-mt-sm"
                flat
                label="No. HP"
              />
            </div>
            <div class="row flex items-end">
              <div class="col">
                <q-btn
                  push
                  type="submit"
                  rounded
                  color="primary"
                  text-color="accent"
                  class="q-mt-md"
                  label="Konfirmasi"
                />
                  <!-- @click="
                    [
                      (store.components.state.isConfirm = true),
                      (store.components.state.dialogConfirm = true),
                    ]
                  " -->
              </div>
            </div>
          </q-form>
        </q-card>
      </div>
    </div>
  </transition>

  <!-- CONFIRM -->
  <dialog-confirm />
</template>

<script>
import { inject } from "vue";
import DialogConfirm from "./DialogConfirm.vue";
export default {
  components: { DialogConfirm },
  setup() {
    return {
      store: inject("store"),
    };
  },
};
</script>
