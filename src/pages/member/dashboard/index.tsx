import DashboardLayout from "@/components/Commons/PageHead/layouts/AuthLayout/DashboardLayout";
import Dashboard from "@/components/views/Member/Dashboard";

// for login page load
const DashboarMemberPage = () => {
  return (
    <DashboardLayout title="Dashboard" description="Dashboard Member" type="member">
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboarMemberPage;