import { Link } from "@inertiajs/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "./ui/dropdown-menu";
import {Button } from "./ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";
import {useSettings} from "@/contexts/settings-context.tsx";


const Topbar = () => {
    const { settings } = useSettings()

    return (
        <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="hidden md:block">
                    <nav className="flex items-center space-x-2">
                        <Link href="/" className="text-sm font-medium">
                            Home
                        </Link>
                        {/*{pathSegments.map((segment, index) => (*/}
                        {/*    <React.Fragment key={segment}>*/}
                        {/*        <span className="text-muted-foreground">/</span>*/}
                        {/*        <Link href={`/${pathSegments.slice(0, index + 1).join("/")}`} className="text-sm font-medium">*/}
                        {/*            {segment.charAt(0).toUpperCase() + segment.slice(1)}*/}
                        {/*        </Link>*/}
                        {/*    </React.Fragment>*/}
                        {/*))}*/}
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    {/*<Notifications />*/}
                    {/*<ThemeToggle />*/}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={settings.avatar} alt={settings.fullName} />
                                    <AvatarFallback>
                                        {/*{settings.fullName*/}
                                        {/*    .split(" ")*/}
                                        {/*    .map((n) => n[0])*/}
                                        {/*    .join("")}*/}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">{settings.fullName}</p>
                                    <p className="text-xs leading-none text-muted-foreground">{settings.email}</p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/settings">Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/settings">Settings</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Log out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
};

export default Topbar;