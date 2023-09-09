import { Catalog } from "../components/Catalog/Catalog";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { Register } from "../pages/Register";
import { Auth } from "../pages/Auth";
import { Basket } from "../pages/Basket";
import { ProductPage } from "../pages/ProductPage";
import {
  // ADMIN_ROUTE,
  BASKET_ROUTE,
  CATALOG_ROUTE,
  LANDING_PAGE,
  LOGIN_ROUTE,
  PRODUCT_ROOUTE,
  REGISTRATION_ROUTE,
  PRODUCT_SEARCH,
  FAVORITE_ROUTE,
  ERROR_ROUTE
  
} from "./consts";
import { ProductsSearch } from "../pages/ProductsSearch";
import { Favorite } from "../pages/Favorite";
import { ErrorPage } from "../pages/ErrorPage";

// export const authRoutes = [
//   {
//     path: ADMIN_ROUTE,
//     Component: Register,
//   },
//   {
//     path: BASKET_ROUTE,
//     Component: Basket,
//   },
// ];

export const publickRoutes = [
  
  {
    path: LANDING_PAGE,
    Component: LandingPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Register,
  },
  {
    path: PRODUCT_ROOUTE + "/:id",
    Component: ProductPage,
  },
  {
    path: CATALOG_ROUTE + '/:category',
    Component: Catalog ,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
  {
    path: PRODUCT_SEARCH + '/:value',
    Component: ProductsSearch
  },
  {
    path: FAVORITE_ROUTE,
    Component: Favorite
  },
  {
    path: ERROR_ROUTE,
    Component: ErrorPage
  }
];
