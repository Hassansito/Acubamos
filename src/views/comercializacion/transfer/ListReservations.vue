<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Listado de reservaciones</h3>
            <div class="card-toolbar">
                <div v-if="selectedIds.length === 0" class="d-flex justify-content-end"
                    data-kt-subscription-table-toolbar="base"></div>
                <div v-else class="d-flex justify-content-end align-items-center">
                    <div class="fw-bold me-5">
                        <span class="me-2">{{ selectedIds.length }}</span>Selected
                    </div>
                    <button type="button" class="btn btn-danger" @click="deleteFewReservas()">
                        Delete Selected
                    </button>
                </div>
            </div>
        </div>
        <div class="card-body">
            <KTDatatable :header="tableHeader" :data="reservas" @on-sort="sort" :checkbox-enabled="true" :items-per-page="1000000000000"
                @on-items-select="onItemSelect">
                <template v-slot:id="{ row: data }">
                    {{ data.id }}
                </template>
                <template v-slot:nombre="{ row: data }">
                    {{ data.nombre }}
                </template>
                <template v-slot:pasaporte="{ row: data }">
                    {{ data.pasaporte }}
                </template>
                <template v-slot:telefono="{ row: data }">
                    {{ data.telefono }}
                </template>
                <template v-slot:origen="{ row: data }">
                    {{ data.origen }}
                </template>
                <template v-slot:destino="{ row: data }">
                    {{ data.destino }}
                </template>
                <template v-slot:fecha="{ row: data }">
                    {{ formatDate(data.fecha) }}
                </template>
                <template v-slot:hora="{ row: data }">
                    {{ data.hora }}
                </template>
                <template v-slot:tipodepago="{ row: data }">
                    {{ data.tipodepago }}
                </template>
                <template v-slot:tipodemercado="{ row: data }">
                    {{ data.tipodemercado }}
                </template>
                <template v-slot:tipodetrasnporte="{ row: data }">
                    {{ data.tipodetrasnporte }}
                </template>
                <template v-slot:condicionesadicionales="{ row: data }">
                    {{ data.condicionesadicionales }}
                </template>
                <template v-slot:actions="{ row: data }">
                    <div>
                        <a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions
                            <KTIcon icon-name="down" icon-class="fs-5 m-0" />
                        </a>
                        <!--begin::Menu-->
                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                            data-kt-menu="true">
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                                <a @click="openModal(data)" class="menu-link px-3">Editar</a>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                                <a @click="deleteReserva(data.id)" class="menu-link px-3">Delete</a>
                            </div>
                            <!--end::Menu item-->
                        </div>
                        <!--end::Menu-->
                    </div>
                </template>
            </KTDatatable>
            <!--Modal-->
            <div class="modal fade" tabindex="-1" id="kt_modal_1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title">Detalles de la reserva</h3>
                            <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                                aria-label="Close">
                                <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span
                                        class="path2"></span></i>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div>
                                <div v-if="isEditable">
                                    <p>
                                        Nombre:
                                        <input type="text" v-model="selectedReserva!.nombre"
                                            class="form-control form-control-solid w-250px"
                                            aria-label="Edit customer name" />
                                    </p>
                                    <p>
                                        Pasaporte:
                                        <input type="text" v-model="selectedReserva!.pasaporte"
                                            class="form-control form-control-solid w-250px"
                                            aria-label="Edit pasaporte" />
                                    </p>
                                    <p>
                                        Teléfono:
                                        <input type="text" v-model="selectedReserva!.telefono"
                                            class="form-control form-control-solid w-250px"
                                            aria-label="Edit telefono" />
                                    </p>
                                    <p>
                                        Origen:
                                        <input type="text" v-model="selectedReserva!.origen"
                                            class="form-control form-control-solid w-250px" aria-label="Edit origen" />
                                    </p>
                                    <p>
                                        Destino:
                                        <input type="text" v-model="selectedReserva!.destino"
                                            class="form-control form-control-solid w-250px" aria-label="Edit destino" />
                                    </p>
                                    <p>
                                        Fecha:
                                        <input type="date" v-model="selectedReserva!.fecha"
                                            class="form-control form-control-solid w-250px" aria-label="Edit fecha" />
                                    </p>
                                    <p>
                                        Hora:
                                        <input type="time" v-model="selectedReserva!.hora"
                                            class="form-control form-control-solid w-250px" aria-label="Edit hora" />
                                    </p>
                                    <p>
                                        Tipo de pago:
                                        <input type="text" v-model="selectedReserva!.tipodepago"
                                            class="form-control form-control-solid w-250px"
                                            aria-label="Edit tipo de pago" />
                                    </p>
                                    <p>
                                        Tipo de mercado:
                                        <input type="text" v-model="selectedReserva!.tipodemercado"
                                            class="form-control form-control-solid w-250px"
                                            aria-label="Edit tipo de mercado" />
                                    </p>
                                    <p>
                                        Tipo de transporte:
                                        <input type="text" v-model="selectedReserva!.tipodetrasnporte"
                                            class="form-control form-control-solid w-250px"
                                            aria-label="Edit tipo de transporte" />
                                    </p>
                                    <p>
                                        Condiciones adicionales:
                                        <input type="text" v-model="selectedReserva!.condicionesadicionales"
                                            class="form-control form-control-solid w-250px"
                                            aria-label="Edit condiciones adicionales" />
                                    </p>
                                    <button type="button" class="btn btn-primary my-5" @click="toggleEditMode">
                                        Guardar Cambios
                                    </button>
                                </div>
                                <div v-else>
                                    <p>ID: {{ selectedReserva?.id }}</p>
                                    <p>Nombre: {{ selectedReserva?.nombre }}</p>
                                    <p>Pasaporte: {{ selectedReserva?.pasaporte }}</p>
                                    <p>Teléfono: {{ selectedReserva?.telefono }}</p>
                                    <p>Origen: {{ selectedReserva?.origen }}</p>
                                    <p>Destino: {{ selectedReserva?.destino }}</p>
                                    <p>Fecha: {{ formatDate(selectedReserva?.fecha) }}</p>
                                    <p>Hora: {{ selectedReserva?.hora }}</p>
                                    <p>Tipo de pago: {{ selectedReserva?.tipodepago }}</p>
                                    <p>Tipo de mercado: {{ selectedReserva?.tipodemercado }}</p>
                                    <p>Tipo de transporte: {{ selectedReserva?.tipodetrasnporte }}</p>
                                    <p>Condiciones adicionales: {{ selectedReserva?.condicionesadicionales }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary my-5 mx-4" @click="toggleEditMode">
                                Editar
                            </button>
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!--End Modal-->
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import KTDatatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable/table-partials/models";
import arraySort from "array-sort";
import { useReservasStore } from "@/stores/reservas";
import { type IReservaciones } from "@/core/data/reservaciones";
import { Modal } from "bootstrap";

export default defineComponent({
    name: "ListReservations",
    components: {
        KTDatatable,
    },
    setup() {
        const reservasStore = useReservasStore();
        const reservas = computed(() => reservasStore.getProducts);


        console.log("Productos en el store:", reservas.value);

        const tableHeader = ref([
            {
                columnName: "",
                columnLabel: "id",
                sortEnabled: true,
                columnWidth: 80,
            },
            {
                columnName: "Nombre",
                columnLabel: "nombre",
                sortEnabled: true,
                columnWidth: 180,
            },
            {
                columnName: "Pasaporte",
                columnLabel: "pasaporte",
                sortEnabled: true,
                columnWidth: 100,
            },
            {
                columnName: "Telefono",
                columnLabel: "telefono",
                sortEnabled: true,
                columnWidth: 100,
            },
            {
                columnName: "Origen",
                columnLabel: "origen",
                sortEnabled: true,
                columnWidth: 100,
            },
            {
                columnName: "Destino",
                columnLabel: "destino",
                sortEnabled: true,
                columnWidth: 100,
            },
            {
                columnName: "Fecha",
                columnLabel: "fecha",
                sortEnabled: true,
                columnWidth: 100,
            },
            {
                columnName: "Hora",
                columnLabel: "hora",
                sortEnabled: true,
                columnWidth: 100,
            },
            {
                columnName: "Pago",
                columnLabel: "tipodepago",
                sortEnabled: true,
                columnWidth: 100,
            },
            {
                columnName: "Mercado",
                columnLabel: "tipodemercado",
                sortEnabled: true,
                columnWidth: 100,
            },
            {
                columnName: "Transporte",
                columnLabel: "tipodetrasnporte",
                sortEnabled: true,
                columnWidth: 100,
            },
            {
                columnName: "Condiciones adicionales",
                columnLabel: "condicionesadicionales",
                sortEnabled: true,
                columnWidth: 200,
            },
            {
                columnName: "",
                columnLabel: "actions",
                columnWidth: 120,
            },
        ]);

        const sort = (sort: Sort) => {
            const reverse: boolean = sort.order === "asc";
            if (sort.label) {
                arraySort(reservas.value, sort.label, { reverse });
            }
        };
        const deleteReserva = (id: number) => {
            for (let i = 0; i < reservas.value.length; i++) {
                if (reservas.value[i].id === id) {
                    reservas.value.splice(i, 1);
                }
            }
        };
        const selectedIds = ref<Array<number>>([]);
        const deleteFewReservas = () => {
            selectedIds.value.forEach((item) => {
                deleteReserva(item);
            });
            selectedIds.value.length = 0;
        };
        const onItemSelect = (selectedItems: Array<number>) => {
            selectedIds.value = selectedItems;
        };

        const selectedReserva = ref<IReservaciones | null>(null);
        const openModal = (order: IReservaciones) => {
            selectedReserva.value = order;
            const modalElement = document.getElementById("kt_modal_1");
            if (modalElement) {
                const modal = new Modal(modalElement);
                modal.show();
            }
        };

        const closeModal = () => {
            const modalElement = document.getElementById("kt_modal_1");
            if (modalElement) {
                const modal = new Modal(modalElement);
                modal.hide();
            }
        };
        const isEditable = ref(false);
        const editCell = <K extends keyof IReservaciones>(
            row: IReservaciones,
            key: K,
            value: IReservaciones[K],
        ) => {
            row[key] = value;
        };
        const toggleEditMode = () => {
            isEditable.value = !isEditable.value;
        };
        const updateReserva = (order) => {
            console.log("Order updated:", order);
        };
        const formatDate = (dateString) => {
            if (!dateString) return '';
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                return 'Invalid Date';
            }
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getUTCDate()).padStart(2, '0');
            return `${year}/${month}/${day}`;
        };
        return {
            tableHeader,
            reservas,
            sort,
            deleteReserva,
            deleteFewReservas,
            selectedIds,
            onItemSelect,
            selectedReserva,
            openModal,
            closeModal,
            editCell,
            toggleEditMode,
            updateReserva,
            isEditable,
            formatDate,
        };
    },
});
</script>