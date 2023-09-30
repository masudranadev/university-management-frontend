"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/redux/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageStudentPage = () => {
  const { role } = getUserInfo() as any;

  return (
    <>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `student`,
            link: "",
          },
        ]}
      />
      <ActionBar title="Student List">
      <Link href="/super_admin/manage-student/create">
      <Button type="primary" ghost>
        create
      </Button>
      </Link>
      </ActionBar>
      
    </>
  );
};

export default ManageStudentPage;
