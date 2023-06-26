import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import SpinnerComponent from "./components/UI/SpinnerComponent";

const AdminDashboardPage = React.lazy(() =>
  import("./pages/AdminPages/AdminDashboardPage")
);
const PageNotFound = React.lazy(() =>
  import("./pages/AdminPages/PageNotFound")
);
const ManageUsersPage = React.lazy(() =>
  import("./pages/AdminPages/ManageUsersPage")
);
const ManageJobsPage = React.lazy(() =>
  import("./pages/AdminPages/ManageJobsPage")
);
const ReportsPage = React.lazy(() => import("./pages/AdminPages/ReportsPage"));
const ChangePassword = React.lazy(() =>
  import("./components/UI/ChangePassword")
);

function AdminScreen() {
  return (
    <Layout>
      <Suspense fallback={<SpinnerComponent />}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />

          <Route path="/dashboard" element={<AdminDashboardPage />} />

          <Route path="/manage-users" element={<ManageUsersPage />} />

          <Route path="/manage-jobs" element={<ManageJobsPage />} />

          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/change-password" element={<ChangePassword />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default AdminScreen;
