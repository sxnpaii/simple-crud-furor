<template>
  <div
    class="Form q-pa-md"
    dark
    style="
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
    "
  >
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-select
        filled
        v-model="formData.product_type_id"
        :options="options"
        label="product_type_id"
        class="Input"
        dark
      />

      <q-input
        filled
        type="text"
        v-model="formData.name_uz"
        label="Product Name"
        class="Input"
        lazy-rules
        dark
        :rules="[
          (val) =>
            (val !== null && val !== '') || 'Please type name of your product',
        ]"
      />
      <q-input
        filled
        dark
        type="number"
        v-model="formData.cost"
        label="Price"
        class="Input"
        lazy-rules
        :rules="[
          (val) =>
            (val !== null && val !== '') || 'Please type price of your product',
          (val) => (val > 10.0 && val < 10000.0) || 'Please type a real price',
        ]"
      />
      <q-input
        filled
        type="text"
        v-model="formData.address"
        label="Address"
        dark
        class="Input"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type Address',
        ]"
      />
      <div>
        <q-btn push label="Submit" type="submit" color="primary" />
        <q-popup-proxy v-if="store.postMessage">
          <q-banner dark>
            {{ store.postMessage }}
          </q-banner>
        </q-popup-proxy>
        <q-btn
          label="Update"
          type="button"
          color="secondary"
          class="q-ml-sm"
          @click="onUpdate"
        />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>

    <OneProduct :productData="formData" />
  </div>
</template>

<script setup lang="ts">
// import { ref, watch, watchEffect } from 'vue';
import { useProductsStore } from 'stores/example-store';
import OneProduct from './OneProduct.vue';
import { storeToRefs } from 'pinia';
// import { Vue } from 'vue';
const store = useProductsStore();

// const { formData, updateProduct } = store;
const { formData } = storeToRefs(store);
const options = [1, 2, 3];

// methods
const onUpdate = () => {
  store.updateServerProduct(formData.value);
};
const onSubmit = () => {
  // Vue.delete(formData.value.id);
  store.postProduct(
    '',
    formData.value
  );
  onReset();
};

const onReset = () => {
  formData.value.product_type_id = 0;
  formData.value.name_uz = '';
  formData.value.cost = 0;
  formData.value.address = '';
  formData.value.created_date = Date.now();
};
</script>

<style lang="scss" scoped>
.Form {
  .Input {
    min-width: 300px;
  }
}
</style>
