import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import axios from "axios";

import { icons } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    useSidebar,
} from "@/Components/ui/sidebar";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./ui/collapsible";

interface Subcategory {
    id: number;
    name: string;
    slug: string;
}

interface Category {
    id: number;
    name: string;
    icon: string;
    subcategories: Subcategory[];
    slug: string;
}

export function AppSidebar() {
    const [categories, setCategories] = useState<Category[]>([]);
    const { state } = useSidebar();
    useEffect(() => {
        axios
            .get("/categories")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    return (
        <Sidebar collapsible="icon" variant="floating">
            <Link href="/" className=" pt-3 px-5 text-xl font-bold">
                {state === "collapsed" ? "P." : "ProgrammerNeeds"}
            </Link>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Categories</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {categories.map((category) => {
                                const IconComponent =
                                    icons[category.icon as keyof typeof icons];

                                return (
                                    <Collapsible
                                        key={category.id}
                                        className="group/collapsible"
                                    >
                                        <SidebarMenuItem>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton>
                                                    {IconComponent ? (
                                                        <IconComponent />
                                                    ) : (
                                                        ""
                                                    )}

                                                    <Link
                                                        href={`/categories/${category.slug}`}
                                                    >
                                                        {category.name}
                                                    </Link>
                                                    {category.subcategories &&
                                                        category.subcategories
                                                            .length > 0 && (
                                                            <icons.ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                        )}
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>

                                            {/* Subcategories */}

                                            {category.subcategories &&
                                                category.subcategories.length >
                                                    0 && (
                                                    <CollapsibleContent className="CollapsibleContent">
                                                        <SidebarMenuSub>
                                                            {category.subcategories &&
                                                                category.subcategories.map(
                                                                    (sub) => (
                                                                        <SidebarMenuSubItem
                                                                            key={
                                                                                sub.id
                                                                            }
                                                                        >
                                                                            <SidebarMenuButton
                                                                                asChild
                                                                            >
                                                                                <Link
                                                                                    href={`/categories/${sub.slug}`}
                                                                                >
                                                                                    {
                                                                                        sub.name
                                                                                    }
                                                                                </Link>
                                                                            </SidebarMenuButton>
                                                                        </SidebarMenuSubItem>
                                                                    )
                                                                )}
                                                        </SidebarMenuSub>
                                                    </CollapsibleContent>
                                                )}
                                        </SidebarMenuItem>
                                    </Collapsible>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarGroupLabel>Help</SidebarGroupLabel>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <icons.LifeBuoy />
                            <Link href="#">Support</Link>
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            <icons.MessageCircleQuestion />
                            <Link href="#">Feedback</Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
