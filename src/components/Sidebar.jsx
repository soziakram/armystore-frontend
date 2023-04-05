import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-fit p-10 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
      <nav className="space-y-8 text-sm">
        <div className="space-y-4">
          <h2 className="text-sm w-fit font-extrabold tracking-widest uppercase dark:text-gray-400">
            OVERVIEW BY CATEGORIES
          </h2>
          <div className="flex flex-col space-y-1">
            <a
              className="hover:text-green-600"
              rel="noopener noreferrer"
              href="#"
            >
              JACKETS
            </a>
            <a
              className="hover:text-green-600"
              rel="noopener noreferrer"
              href="#"
            >
              TACTICAL SHIRT
            </a>
            <a
              className="hover:text-green-600"
              rel="noopener noreferrer"
              href="#"
            >
              TACTICAL PANTS
            </a>
            {/* <a rel="noopener noreferrer" href="#">
              Appearance
            </a>
            <a rel="noopener noreferrer" href="#">
              Mamba UI
            </a> */}
          </div>
        </div>
        {/* <div className="space-y-2">
          <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
            Dashboard
          </h2>
          <div className="flex flex-col space-y-1">
            <a rel="noopener noreferrer" href="#">
              Header
            </a>
            <a rel="noopener noreferrer" href="#">
              Drawer
            </a>
            <a rel="noopener noreferrer" href="#">
              Page Title
            </a>
            <a rel="noopener noreferrer" href="#">
              Menus
            </a>
            <a rel="noopener noreferrer" href="#">
              Sidebar
            </a>
            <a rel="noopener noreferrer" href="#">
              Footer
            </a>
          </div>
        </div> */}
      </nav>
    </aside>
  );
};

export default Sidebar;
