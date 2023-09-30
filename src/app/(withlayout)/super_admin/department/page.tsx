"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/redux/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
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
            label: `department`,
            link: "",
          },
        ]}
      />
      <ActionBar title="Department List">
        <Link href="/super_admin/department/create">
          <Button type="primary" ghost>
            create department
          </Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default DepartmentPage;
