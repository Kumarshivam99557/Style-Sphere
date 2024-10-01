import {
  ChartNoAxesCombined,
  DollarSign,
  LayoutDashboard,
  ShoppingBasket,
} from "lucide-react";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icons: <LayoutDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icons: <ShoppingBasket />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icons: <DollarSign />,
  },
];

function MenuItems() {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          onClick={() => navigate(menuItem.path)}
          key={menuItem.id}
          className=" flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground  hover:bg-muted hover:text-foreground  "
        >
          {menuItem.icons}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

const AdminSidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Fragment>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="w-64">
            <div className="flex flex-col h-full">
              <SheetHeader className="border-b">
                <SheetTitle className="flex gap-2 mt-5 mb-4">
                  <ChartNoAxesCombined size={30} />
                  <h1 className="text-2xl font-extrabold">Admin Panel </h1>
                </SheetTitle>
              </SheetHeader>
              <MenuItems />
            </div>
          </SheetContent>
        </Sheet>
        <aside className=" hidden w-64 flex-col border bg-background p-6 lg:flex">
          <div
            onClick={() => navigate("/admin/dashboard")}
            className=" flex cursor-pointer items-center gap-2"
          >
            <ChartNoAxesCombined size={30} />
            <h1 className="text-2xl font-extrabold">Admin Panel </h1>
          </div>
          <MenuItems />
        </aside>
      </Fragment>
    </div>
  );
};

export default AdminSidebar;
