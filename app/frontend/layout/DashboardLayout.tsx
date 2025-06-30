import Sidebar from "@/components/Sidebar.tsx";


const DashboardLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <Sidebar/>
            {children}
        </div>
    );
};

export default DashboardLayout;