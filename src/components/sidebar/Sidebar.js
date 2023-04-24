import SidebarMenu from "../menus/SidebarMenu";

function Sidebar() {
    return (
        <aside aria-label="Sidebar" className="overflow-y-auto bg-gray-50 dark:bg-gray-800 py-8 px-4 sm:w-3/12">
            <h2 className="text-2xl mb-10 text-gray-900 dark:text-white">Components</h2>
            <SidebarMenu />
        </aside>
    );
}

export default Sidebar;