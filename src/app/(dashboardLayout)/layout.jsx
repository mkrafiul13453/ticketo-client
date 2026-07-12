"use client";
import DashboardSidebar from '@/components/DashboardSidebar';



const DashboardLayout = ({ children }) => {
        
    return (
        <div className="min-h-screen flex bg-[#080c16]">
           <DashboardSidebar></DashboardSidebar>
            <div className="px-6 py-5">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;