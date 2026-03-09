import { Toaster } from "@/components/ui/sonner";
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Layout } from "./components/Layout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { BathroomCleaningPage } from "./pages/services/BathroomCleaningPage";
import { BondCleaningPage } from "./pages/services/BondCleaningPage";
import { CarpetSteamPage } from "./pages/services/CarpetSteamPage";
import { EndOfLeasePage } from "./pages/services/EndOfLeasePage";
import { OvenKitchenPage } from "./pages/services/OvenKitchenPage";
import { VacateCleaningPage } from "./pages/services/VacateCleaningPage";
import { WindowCleaningPage } from "./pages/services/WindowCleaningPage";

// Root route with layout
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Toaster richColors position="top-right" />
      <FloatingWhatsApp />
      <Layout />
    </>
  ),
});

// Routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});
const vacateCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/vacate-cleaning",
  component: VacateCleaningPage,
});
const bondCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/bond-cleaning",
  component: BondCleaningPage,
});
const endOfLeaseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/end-of-lease-cleaning",
  component: EndOfLeasePage,
});
const carpetSteamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/carpet-steam-cleaning",
  component: CarpetSteamPage,
});
const ovenKitchenRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/oven-kitchen-cleaning",
  component: OvenKitchenPage,
});
const windowCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/window-cleaning",
  component: WindowCleaningPage,
});
const bathroomCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/bathroom-cleaning",
  component: BathroomCleaningPage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  vacateCleaningRoute,
  bondCleaningRoute,
  endOfLeaseRoute,
  carpetSteamRoute,
  ovenKitchenRoute,
  windowCleaningRoute,
  bathroomCleaningRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

// Re-export Link for use in other components
export { Link, Outlet };
