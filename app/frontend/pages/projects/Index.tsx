import DashboardLayout from "@/layout/DashboardLayout.tsx";

const Index = () => {
    return (
        <div>
            Projects
        </div>
    );
};


// @ts-ignore
Index.layout = (page)=><DashboardLayout>{page}</DashboardLayout>
export default Index;