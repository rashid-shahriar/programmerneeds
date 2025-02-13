import { TbMenu } from "react-icons/tb";
import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";

interface TopBarProps extends React.HTMLAttributes<HTMLElement> {
    links: {
        title: string;
        href: string;
        isActive: boolean;
    }[];
}

export function TopBar({ className, links, ...props }: TopBarProps) {
    return (
        <>
            <div className="md:hidden">
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="outline">
                            <TbMenu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="bottom" align="start">
                        {links.map(({ title, href, isActive }) => (
                            <DropdownMenuItem key={`${title}-${href}`} asChild>
                                <Link
                                    href={href}
                                    className={
                                        !isActive ? "text-muted-foreground" : ""
                                    }
                                >
                                    {title}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <nav
                className={cn(
                    "hidden items-center space-x-4 md:flex lg:space-x-6",
                    className
                )}
                {...props}
            >
                {links.map(({ title, href, isActive }) => (
                    <Link
                        key={`${title}-${href}`}
                        href={href}
                        className={`font-medium transition-colors hover:text-primary ${
                            isActive ? "" : "text-muted-foreground"
                        }`}
                    >
                        {title}
                    </Link>
                ))}
            </nav>
        </>
    );
}
