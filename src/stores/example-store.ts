import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { IProducts } from 'src/components/models';
// import { useRouter } from 'vue-router';
// const router = useRouter();

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    oneProduct: {
      id: 0,
      product_type_id: 0,
      name_uz: '',
      cost: 0,
      address: '',
      created_date: Date.now(),
    },
    formData: {
      id: 0,
      product_type_id: 0,
      name_uz: '',
      cost: 0,
      address: '',
      created_date: Date.now(),
    },

    postMessage: null,
    deleteMessage: null,
  }),
  getters: {},
  actions: {
    // async
    async getProducts(reqParams?: string, reqConfig?: object) {
      try {
        const res = await api.get(
          import.meta.env.VITE_API_URL + reqParams,
          reqConfig
        );
        this.products = await res.data;
        // if req to one prod
        if (reqParams?.includes('?id=')) {
          this.oneProduct = await res.data[0];
        }
      } catch (err) {
        return err;
      }
    },
    async postProduct(reqParams: string, reqConfig: IProducts) {
      try {
        if (!reqConfig) {
          console.error('Empty records');
        }
        delete reqConfig.id;

        const res = await api.post(
          import.meta.env.VITE_API_URL + reqParams,
          reqConfig
        );
        this.postMessage = await res.data;
      } catch (err) {
        return err;
      }
    },

    async updateServerProduct(reqConfig: object) {
      try {
        if (!reqConfig) {
          console.error('Empty records');
        }
        const res = await api.put(import.meta.env.VITE_API_URL, reqConfig);
        this.formData = await res.data;
      } catch (err) {
        return err;
      }
    },

    async deleteProduct(reqParams: string | number) {
      try {
        const res = await api.delete(
          `${import.meta.env.VITE_API_URL}/${reqParams}`
        );
        this.deleteMessage = await res.data;
        console.log(this.deleteMessage);
      } catch (err) {
        return err;
      }
    },
  },
});
