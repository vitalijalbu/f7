/*
  - Routes involved in Next.js routing (main pages) should be used as "asyncComponent"
  - Routes involved in other Framework7 routers (in Views other than main View) should be imported and used directly as "component"
*/

export const routes = [
  {
    path: "/",
    asyncComponent: () => import("pages/index"),
  },
  {
    path: "/about",
    asyncComponent: () => import("pages/about"),
  }, 
  {
    path: "/signin",
    asyncComponent: () => import("pages/auth/signin"),
  },  
  {
    path: "/signup",
    asyncComponent: () => import("pages/auth/signup"),
  },  
  {
    path: "/forgot-password",
    asyncComponent: () => import("pages/auth/forgot-password"),
  },
  {
    path: "/search",
    asyncComponent: () => import("pages/search/"),
  },
  {
    path: "/blog/:postId",
    asyncComponent: () => import("pages/blog/[postId]"),
  },
  {
    path: "/listings",
    asyncComponent: () => import("pages/listings"),
  },
  {
    path: "/listings/:id",
    asyncComponent: () => import("pages/listings/[id]"),
  },
  {
    path: "/hosts",
    asyncComponent: () => import("pages/hosts/"),
  },
  {
    path: "/hosts/:id",
    asyncComponent: () => import("pages/hosts/[id]"),
  },
  {
    path: "/account",
    asyncComponent: () => import("pages/account/"),
  },
  {
    path: "/account/alerts",
    asyncComponent: () => import("pages/account/alerts"),
  },
  {
    path: "/account/listings",
    asyncComponent: () => import("pages/account/listings"),
  },
  {
    path: "/account/favorites",
    asyncComponent: () => import("pages/account/favorites"),
  },
  {
    path: "/settings/account",
    asyncComponent: () => import("pages/settings/"),
  },
  {
    path: "/settings/billing",
    asyncComponent: () => import("pages/settings/billing"),
  },
  {
    path: "/settings/security",
    asyncComponent: () => import("pages/settings/security"),
  },
  {
    path: "/settings/notifications",
    asyncComponent: () => import("pages/settings/notifications"),
  },
  {
    path: "/hosting/create",
    asyncComponent: () => import("pages/hosting"),
  },
  {
    path: "/hosting/location",
    asyncComponent: () => import("pages/hosting/location"),
  }, 
  {
    path: "/hosting/media",
    asyncComponent: () => import("pages/hosting/media"),
  }, 
  {
    path: "/hosting/photos",
    asyncComponent: () => import("pages/hosting/photos"),
  },   
  {
    path: "/hosting/planimetry",
    asyncComponent: () => import("pages/hosting/planimetry"),
  },   
  {
    path: "/hosting/video",
    asyncComponent: () => import("pages/hosting/video"),
  },   
  {
    path: "/hosting/virtual-tour",
    asyncComponent: () => import("pages/hosting/virtual-tour"),
  }, 
  {
    path: "/hosting/pricing",
    asyncComponent: () => import("pages/hosting/pricing"),
  },   
  {
    path: "/hosting/financial",
    asyncComponent: () => import("pages/hosting/financial"),
  },    
  {
    path: "/hosting/publish",
    asyncComponent: () => import("pages/hosting/publish"),
  },   
  {
    path: "/hosting/amenities",
    asyncComponent: () => import("pages/hosting/amenities"),
  },  
  {
    path: "/hosting/floor-plan",
    asyncComponent: () => import("pages/hosting/floor-plan"),
  },
];