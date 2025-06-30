import {Button} from "@/components/ui/button.tsx";
import DashboardLayout from "@/layout/DashboardLayout.tsx";



const Index = () => {
    return (
        <div>
            Home Page
            <Button>Homi</Button>
        </div>
    );
};

// @ts-ignore
Index.layout = (page)=> <DashboardLayout>{page}</DashboardLayout>
export default Index;

