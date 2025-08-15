import DashboardLayout from "@/components/Commons/PageHead/layouts/AuthLayout/DashboardLayout";
import Dashboard from "@/components/views/Admin/Dashboard";

// for login page load
const DashboarAdminPage = () => {
  return (
    <DashboardLayout title="Dashboard" description="Dashboard Admin" type="admin">
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboarAdminPage;