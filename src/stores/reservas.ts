import reservas,{ type IReservaciones} from "@/core/data/reservaciones";
import { defineStore } from "pinia";


export const useReservasStore = defineStore("reservas", {
  state: () => ({
    reservas: reservas, 
  }),
  actions: {
    addReserva(product: IReservaciones) {
      product.id = this.reservas.length + 1; 
      this.reservas.push(product);
      console.log("Productos en el store:", this.reservas); 
    },
  },
  getters: {
    getProducts: (state) => state.reservas,
  },
});