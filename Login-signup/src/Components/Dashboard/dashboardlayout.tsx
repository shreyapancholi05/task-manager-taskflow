import { Outlet } from "react-router";
import Topbar from "../Layout/Topbar";
import Sidebar from "../Layout/Sidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-slate-900 bg-white">
        <div className="flex justify-between items-center px-4 py-3 lg:px-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setOpen(!open)} className="lg:hidden">
              <Menu size={28} />
            </button>

            <h1 className="text-3xl font-bold tracking-wide">TaskFlow</h1>
          </div>

          <Topbar />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden bg-slate-100">
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          />
        )}

        <aside
          className={`
            fixed lg:static top-0 left-0 z-40
            h-screen w-64 bg-white border-r
            transform transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
          `}
        >
          <div className="flex justify-end p-4 lg:hidden bg-white
border-slate-200">
            <button onClick={() => setOpen(false)}>
              <X size={22} />
            </button>
          </div>

          <Sidebar />
        </aside>

        <main className="flex-1 overflow-y-auto p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
