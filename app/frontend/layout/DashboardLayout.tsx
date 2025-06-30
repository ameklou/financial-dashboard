import Sidebar from "@/components/Sidebar.tsx";
import Topbar from "@/components/Topbar.tsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import {SettingsProvider} from "@/contexts/settings-context.tsx";


const DashboardLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <SettingsProvider>
        <TooltipProvider delayDuration={0}>
            <div className="min-h-screen flex">
                <Sidebar />
                <div className="flex-1">
                    <Topbar />
                    <div className="container mx-auto p-6 max-w-7xl">
                        <main className="w-full">{children}</main>
                    </div>
                </div>
            </div>
        </TooltipProvider>
        </SettingsProvider>
    );
};

export default DashboardLayout;