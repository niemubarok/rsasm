<template>
    <router-link to="/registration" style="text-decoration:none">
        <q-btn no-wrap push text-color="grey-9" color="primary" icon="assignment"  label="Daftar Berobat" class="q-ml-sm" />
    </router-link>
</template>

<script>
import {inject} from 'vue'

export default {
    setup() {
        return {
            store: inject('store')
        }
    },
}
</script>