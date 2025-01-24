import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      // {
      //   heading: "layoutBuilder",
      //   route: "/builder",
      //   keenthemesIcon: "switch",
      //   bootstrapIcon: "bi-layers",
      // },
    ],
  },

  /*               Administración            */
  {
    heading: "Adminintración",
    route: "/adminintracion",
    pages: [
      {
        sectionTitle: "nomencladores",
        route: "/nomencladores",
        keenthemesIcon: "element-plus",
        bootstrapIcon: "bi-archive",
        sub: [
          {
            heading: "provincia",
            route: "/administracion/nomencladores/provincia",
          },
          {
            heading: "localidad",
            route: "/administracion/nomencladores/localidad",
          },
          {
            heading: "categoría",
            route: "/administracion/nomencladores/categoria",
          },
          {
            heading: "municipio",
            route: "/administracion/nomencladores/municipio",
          },
          {
            heading: "tipo de transporte",
            route: "/administracion/nomencladores/tipotransporte",
          },
          {
            heading: "marca",
            route: "/administracion/nomencladores/marca",
          },
          {
            heading: "modelo",
            route: "/administracion/nomencladores/modelo",
          },
        ],
      },
      {
        sectionTitle: "roles",
        route: "/roles",
        keenthemesIcon: "profile-circle",
        bootstrapIcon: "bi-person",
        sub: [
          {
            heading: "admin",
            route: "/administracion/roles/admin",
          },
          {
            heading: "economico",
            route: "/administracion/roles/economico",
          },
          {
            heading: "comercio",
            route: "/administracion/roles/comercio",
          },
          {
            heading: "root",
            route: "/administracion/roles/root",
          },
        ],
      },
      {
        heading: "usuarios",
        route: "/administracion/usuarios",
        keenthemesIcon: "fingerprint-scanning",
        bootstrapIcon: "bi-sticky",
      },
      {
        sectionTitle: "reservas",
        route: "/reservas",
        keenthemesIcon: "fingerprint-scanning",
        bootstrapIcon: "bi-sticky",
      },
      {
        sectionTitle: "ofertas",
        route: "/ofertas",
        keenthemesIcon: "design",
        bootstrapIcon: "bi-shield-check",
      },
      {
        sectionTitle: "profile",
        route: "/profile",
        keenthemesIcon: "design",
        bootstrapIcon: "bi-shield-check",
        sub: [
          {
            heading: "profileOverview",
            route: "/crafted/pages/profile/overview",
          },
          {
            heading: "projects",
            route: "/crafted/pages/profile/projects",
          },
          {
            heading: "campaigns",
            route: "/crafted/pages/profile/campaigns",
          },
          {
            heading: "documents",
            route: "/crafted/pages/profile/documents",
          },
          {
            heading: "connections",
            route: "/crafted/pages/profile/connections",
          },
          {
            heading: "activity",
            route: "/crafted/pages/profile/activity",
          },
        ],
      },
      {
        sectionTitle: "account",
        route: "/account",
        keenthemesIcon: "profile-circle",
        bootstrapIcon: "bi-person",
        sub: [
          {
            heading: "accountOverview",
            route: "/crafted/account/overview",
          },
          {
            heading: "settings",
            route: "/crafted/account/settings",
          },
        ],
      },
      {
        sectionTitle: "customers",
        route: "/customers",
        keenthemesIcon: "abstract-38",
        bootstrapIcon: "bi-printer",
        sub: [
          {
            heading: "gettingStarted",
            route: "/apps/customers/getting-started",
          },
          {
            heading: "customersListing",
            route: "/apps/customers/customers-listing",
          },
          {
            heading: "customerDetails",
            route: "/apps/customers/customer-details",
          },
        ],
      },
      {
        sectionTitle: "subscriptions",
        route: "/subscriptions",
        keenthemesIcon: "basket",
        bootstrapIcon: "bi-cart",
        sub: [
          {
            heading: "getStarted",
            route: "/apps/subscriptions/getting-started",
          },
          {
            heading: "subscriptionList",
            route: "/apps/subscriptions/subscription-list",
          },
          {
            heading: "addSubscription",
            route: "/apps/subscriptions/add-subscription",
          },
          {
            heading: "viewSubscription",
            route: "/apps/subscriptions/view-subscription",
          },
        ],
      },
    ],
  },
  /*               Comercialización            */
  {
    heading: "Comercialización",
    route: "/comercializacion",
    pages: [
      {
        heading: "reservas",
        route: "/comercializacion/reservas",
        keenthemesIcon: "fingerprint-scanning",
        bootstrapIcon: "bi-sticky",
      },
      {
        heading: "contratos",
        route: "/comercializacion/contratos",
        keenthemesIcon: "fingerprint-scanning",
        bootstrapIcon: "bi-sticky",
      },
      {
        heading: "ofertas",
        route: "/comercializacion/ofertas",
        keenthemesIcon: "fingerprint-scanning",
        bootstrapIcon: "bi-sticky",
      },
      {
        heading: "productos",
        route: "/comercializacion/productos",
        keenthemesIcon: "fingerprint-scanning",
        bootstrapIcon: "bi-sticky",
      },
      {
        heading: "calendarApp",
        route: "/apps/calendar",
        keenthemesIcon: "calendar-8",
        bootstrapIcon: "bi-calendar3-event",
      },
    ],
  },
  /*               Pages            */
  {
    heading: "Páginas",
    route: "/pages",
    pages: [
      {
        heading: "ecomerce",
        route: "/pages/ecomerce",
        keenthemesIcon: "fingerprint-scanning",
        bootstrapIcon: "bi-sticky",
      },
      {
        heading: "files",
        route: "/pages/files",
        keenthemesIcon: "fingerprint-scanning",
        bootstrapIcon: "bi-sticky",
      },
      {
        heading: "correo",
        route: "/pages/correo",
        keenthemesIcon: "fingerprint-scanning",
        bootstrapIcon: "bi-sticky",
      },
      {
        heading: "calendario",
        route: "/pages/calendario",
        keenthemesIcon: "fingerprint-scanning",
        bootstrapIcon: "bi-sticky",
      },
      {
        heading: "contactos",
        route: "/pages/contactos",
        keenthemesIcon: "fingerprint-scanning",
        bootstrapIcon: "bi-sticky",
      },
      {
        heading: "customers",
        route: "/pages/customers",
        keenthemesIcon: "fingerprint-scanning",
        bootstrapIcon: "bi-sticky",
      },
      {
        heading: "facturas",
        route: "/pages/facturas",
        keenthemesIcon: "fingerprint-scanning",
        bootstrapIcon: "bi-sticky",
      },
    ],
  },
];

export default MainMenuConfig;
