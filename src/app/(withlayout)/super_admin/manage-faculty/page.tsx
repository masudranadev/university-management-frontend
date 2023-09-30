"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/redux/services/auth.service";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageFacultyPage = () => {
  const {role} = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `faculy`,
            link: "",
          },
        ]}
      />
      <ActionBar title="Faculty List">
        <Link href="/super_admin/manage-faculty/create">
          <Button type="primary" ghost>
            create faculty
          </Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageFacultyPage;
