import {useState} from "react";
import {Link, usePage} from "@inertiajs/react";
import {
    BarChart2, Building2, ChevronLeft, CreditCard, Folder,
    HelpCircle, Home, Menu, MessagesSquare, Receipt, Settings, Shield, Users2, Video, Wallet
} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import {cn} from "@/lib/utils.ts";
import {Button} from "@/components/ui/button.tsx";


const Sidebar = () => {
    const url = usePage().url;
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)


    const navigation = [
        { name: "Dashboard", href: "/dashboard", icon: Home, current: url.startsWith('/dashboard')  },
        { name: "Analytics", href: "/analytics", icon: BarChart2 , current: url.startsWith('/analytics')},
        { name: "Organization", href: "/organization", icon: Building2 , current: url.startsWith('/organization')},
        { name: "Projects", href: "/projects", icon: Folder , current: url.startsWith('/projects')},
        { name: "Transactions", href: "/transactions", icon: Wallet, current: url.startsWith('/transactions') },
        { name: "Invoices", href: "/invoices", icon: Receipt, current: url.startsWith('/invoices') },
        { name: "Payments", href: "/payments", icon: CreditCard , current: url.startsWith('/payments')},
        { name: "Members", href: "/members", icon: Users2 , current: url.startsWith('/members')},
        { name: "Permissions", href: "/permissions", icon: Shield , current: url.startsWith('/permissions')},
        { name: "Chat", href: "/chat", icon: MessagesSquare , current: url.startsWith('/chat')},
        { name: "Meetings", href: "/meetings", icon: Video , current: url.startsWith('/meetings')},
    ]

    const bottomNavigation = [
        { name: "Settings", href: "/settings", icon: Settings },
        { name: "Help", href: "/help", icon: HelpCircle },
    ]

    // @ts-ignore
    const NavItem = ({ item, isBottom = false }) => (
        <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
                <Link
                    href={item.href}
                    className={cn(
                        "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        item.current
                            ? "bg-secondary text-secondary-foreground"
                            : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground",
                        isCollapsed && "justify-center px-2",
                    )}
                >
                    <item.icon className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
                    {!isCollapsed && <span>{item.name}</span>}
                </Link>
            </TooltipTrigger>
            {isCollapsed && (
                <TooltipContent side="right" className="flex items-center gap-4">
                    {item.name}
                </TooltipContent>
            )}
        </Tooltip>
    )


    return (
        <TooltipProvider>
            <>
                <button
                    className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background rounded-md shadow-md"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Toggle sidebar"
                >
                    <Menu className="h-6 w-6" />
                </button>
                <div
                    className={cn(
                        "fixed inset-y-0 z-20 flex flex-col bg-background transition-all duration-300 ease-in-out lg:static",
                        isCollapsed ? "w-[72px]" : "w-72",
                        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
                    )}
                >
                    <div className="border-b border-border">
                        <div className={cn("flex h-16 items-center gap-2 px-4", isCollapsed && "justify-center px-2")}>
                            {!isCollapsed && (
                                <Link href="/" className="flex items-center font-semibold">
                                    <span className="text-lg">Flowers&Saints</span>
                                </Link>
                            )}
                            <Button
                                variant="ghost"
                                size="sm"
                                className={cn("ml-auto h-8 w-8", isCollapsed && "ml-0")}
                                onClick={() => setIsCollapsed(!isCollapsed)}
                            >
                                <ChevronLeft className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
                                <span className="sr-only">{isCollapsed ? "Expand" : "Collapse"} Sidebar</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 overflow-auto">
                        <nav className="flex-1 space-y-1 px-2 py-4">
                            {navigation.map((item) => (
                                <NavItem key={item.name} item={item} />
                            ))}
                        </nav>
                    </div>
                    <div className="border-t border-border p-2">
                        <nav className="space-y-1">
                            {bottomNavigation.map((item) => (
                                <NavItem key={item.name} item={item} isBottom />
                            ))}
                        </nav>
                    </div>
                </div>
            </>
        </TooltipProvider>
    );
};

export default Sidebar;