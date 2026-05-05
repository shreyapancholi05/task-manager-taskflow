import AdminDashboard from "../Dashboard/AdminDashboard";

import MemberDashboard from "../Dashboard/MemberDashboard";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  return (
    <>
      {user.role === "admin" ? (
        <AdminDashboard />
      ) : (
        <MemberDashboard />
      )}
    </>
  );
}

export default Dashboard;