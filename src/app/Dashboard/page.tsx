"use client";

import withPageAuthRequired from "@/shared/components/withPageAuthRequired";
import DashboardView from "@/features/Dashboard/components/DashboardView";

function DashboardPage() {
  return <DashboardView />;
}

export default withPageAuthRequired(DashboardPage);
