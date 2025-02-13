import { PropsWithChildren } from "react";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import { AppSidebar } from "@/Components/app-sidebar";
import { TopBar } from "@/Components/ui/topbar";
import { Search } from "@/Components/Search";

export default function Main({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 sm:justify-center ">
            <div></div>

            <SidebarProvider>
                <AppSidebar />
                <main className="flex w-full flex-1 flex-col overflow-hidden px-4 py-6">
                    <div className="flex w-full items-center justify-between mb-4">
                        <div className="flex items-center">
                            <SidebarTrigger />
                            <TopBar links={topNav} />
                        </div>
                        <div className="ml-auto flex items-center space-x-4">
                            <Search />
                        </div>
                    </div>
                    {children}
                </main>
            </SidebarProvider>
        </div>
    );
}

const topNav = [
    {
        title: "Home",
        href: "dashboard/overview",
        isActive: true,
    },
    {
        title: "About Us",
        href: "dashboard/customers",
        isActive: false,
    },
    {
        title: "Products",
        href: "dashboard/products",
        isActive: false,
    },
];
