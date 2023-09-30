"use client"
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/redux/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageUserPage = () => {
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
            label: `user`,
            link: "",
          },
        ]}
      />
      <ActionBar title="User List">
        <Link href="/super_admin/user/create">
          <Button type="primary" ghost>
            create user
          </Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageUserPage;
