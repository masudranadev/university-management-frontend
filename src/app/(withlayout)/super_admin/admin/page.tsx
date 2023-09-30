"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/redux/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageAdminPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `admin`,
            link: "",
          },
        ]}
      />
      <ActionBar title="Admin List">
        <Link href="/super_admin/admin/create">
          <Button type="primary" ghost>
            create admin
          </Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageAdminPage;
