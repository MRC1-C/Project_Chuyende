import { RouteType } from "./config";
import Login from "@/page/Login";
import UserAdmin from "@/page/Admin/UserAdmin";
import Admin from "@/page/Admin/Admin";

const adminRoutes: RouteType[] = [
  {
    element: <Admin />,
    path: "home",
    label: ['Home'],
    state: 'home',
    child: [
      {
        path: ":categoryID1",
        element: <Admin />,
      }
    ]
  },
  {
    element: <Admin />,
    path: "about",
    label: ['About'],
    state: 'about',
    child: [
      {
        path: ":categoryID1",
        element: <Admin />,
      }
    ]
  },
  {
    element: <Admin />,
    path: "products",
    label: ['Products'],
    state: 'products',
    child: [
      {
        path: ":categoryID1",
        element: <Admin />,
      }
    ]
  },
  {
    element: <Admin />,
    path: "case",
    label: ['Case'],
    state: 'case',
    child: [
      {
        path: ":categoryID1",
        element: <Admin />,
      }
    ]
  },
  {
    element: <Admin />,
    path: "services",
    label: ['Services'],
    state: 'services',
    child: [
      {
        path: ":categoryID1",
        element: <Admin />,
      }
    ]
  },
  {
    element: <UserAdmin />,
    path: "user",
    label: ['User'],
    state: 'user',
  }
];

export default adminRoutes;