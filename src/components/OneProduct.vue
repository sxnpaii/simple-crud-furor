<template>
  <q-card class="Card">
    <q-card-section class="Body">
      <p class="text-h4">{{ productData.name_uz }}</p>
      <div class="flex">
        <b>🟢 {{ productData.address }}</b>
        <div v-if="editable" class="col-auto">
          <q-btn color="grey-7" round flat icon="more_vert" />
          <q-menu cover auto-close dark>
            <q-list>
              <q-item clickable @click="store.deleteProduct(productData.id)">
                <q-item-section>Remove Product</q-item-section>
              </q-item>
              <q-item clickable @click="handleUpdate">
                <q-item-section>Update Product</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="Body">
        <p>
          Created Date: {{ productData.created_date }}
          <br />
          Product category: {{ productData.product_type_id }}
        </p>
      </div>
      <q-card-actions align="right" class="Actions flex">
        <b class="cost" style="font-size: 28px; margin: 0 20px 0"
          >$ {{ productData.cost }}</b
        >
        <!-- size="md" -->
        <q-btn
          rounded
          class="Btn"
          color="orange"
          label="Go to Product "
          @click="navToProduct"
        />
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { IProducts } from './models';
import { useRouter } from 'vue-router';
import { useProductsStore } from 'src/stores/example-store';
import { storeToRefs } from 'pinia';
const store = useProductsStore();
const router = useRouter();

const props = defineProps<{
  productData: IProducts | string;
  // formData?: IProducts;
  editable?: boolean;
}>();
const { productData, editable } = props;
const { formData } = store;

// route
const navToProduct = () => {
  router.push({ name: 'product', params: { id: productData.id } });
};
// update
const handleUpdate = () => {
  formData.id = productData.id;
  formData.product_type_id = productData.product_type_id;
  formData.name_uz = productData.name_uz;
  formData.cost = productData.cost;
  formData.address = productData.address;
  formData.created_date = Date.now();
};
</script>

<style scoped lang="scss">
.Card {
  min-width: 300px;
  // margin-top: 100px;
  margin-bottom: 30px;
  background-color: #28272b;
  backdrop-filter: blur(30px);
  border-radius: 20px;
  break-inside: avoid;
  .Body {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .flex {
      display: flex;
      align-items: center;
    }
    .cost {
      font-size: 28px;
      margin: 0 5px;
    }
  }
}
</style>
