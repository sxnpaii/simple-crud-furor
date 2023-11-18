<template>
  <q-page class="OneProduct">
    <div class="left">
      <h3>{{ product.name_uz }}</h3>
    </div>
    <div class="right">
      <pre>
        {{ product }}
      </pre>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useProductsStore } from 'src/stores/example-store';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const store = useProductsStore();
const route = useRoute();
store.getProducts(`?id=${route.params.id}`, {});

const product = computed(() => store.oneProduct);
</script>

<style scoped lang="scss">
.OneProduct {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
</style>
