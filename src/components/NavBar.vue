<template>
  <q-toolbar class="Toolbar text-white shadow-3">
    <q-btn flat label="Homepage" :to="{ name: 'homepage' }" />
    <q-space />
    <q-tabs v-model="tab" shrink stretch dense>
      <q-route-tab
        exact
        :to="{ name: 'allproducts' }"
        name="tab2"
        label="all products"
      />
      <q-route-tab
        exact
        :to="{ name: 'adminpage' }"
        name="tab1"
        label="admin panel"
      />
    </q-tabs>
  </q-toolbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tab = ref('');
</script>

<style lang="scss" scoped>
.Toolbar {
  position: fixed;
  top: 0;
  z-index: 9999;
  background: #5dbf79;
  backdrop-filter: blur(30px);
  font-family: 'Poppins', sans-serif;
}
</style>
