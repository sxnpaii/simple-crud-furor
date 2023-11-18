<template>
  <q-page class="AdminPage">
    <h3>Publish Products</h3>
    <ProductForm />

    <section class="EditableProducts">
      <OneProduct
        v-for="product of products"
        :key="product.id"
        :productData="product"
        :editable="true"
      />
      <!-- :formData= -->
    </section>
  </q-page>
</template>
<script setup lang="ts">
// import { ref, onMounted, defineAsyncComponent, Suspense } from 'vue';

import {watchEffect } from 'vue';

import { useProductsStore } from 'src/stores/example-store';
// import { IProducts } from 'src/components/models';

import ProductForm from 'src/components/ProductForm.vue';
import OneProduct from 'src/components/OneProduct.vue';
import { storeToRefs } from 'pinia';

const store = useProductsStore();
const { products } = storeToRefs(store);

// GET LIST OF PRODUCTS
watchEffect(() => store.getProducts('', {}));
</script>

<style scoped lang="scss">
.AdminPage {
  h3 {
    margin-top: 100px;
  }
  .EditableProducts {
    width: 80%;
    margin: 30px auto;
    columns: 2;
    @media (max-width: 600px) {
      columns: 1;
    }
  }
}
</style>
