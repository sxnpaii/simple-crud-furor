<template>
  <q-page style="padding: 20px">
    <section class="Products" style="margin-top: 100px; columns: 2">
      <OneProduct
        v-for="product of products"
        :key="product.id"
        :productData="product"
      />
    </section>
    <q-btn
      color="primary"
      label="Load More"
      @click="page++"
      style="margin-top: 30px"
    />
  </q-page>
</template>

<script setup lang="ts">
import { useProductsStore } from 'src/stores/example-store';
import { computed, watch, ref } from 'vue';
import OneProduct from 'src/components/OneProduct.vue';
import { IProducts } from 'src/components/models';
const store = useProductsStore();
const page = ref(1);

const products = computed(() => store.products) as unknown as IProducts[];
watch(page, () => store.getProducts(`?page=${page.value}&perPage=6`, {}), {
  immediate: true,
});
</script>

<style scoped lang="scss">
.Products {
  // display: flex;
}
</style>
