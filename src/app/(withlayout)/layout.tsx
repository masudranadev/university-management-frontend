"use client";
import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedin } from "@/redux/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userloggedIn = isLoggedin();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!userloggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [userloggedIn, router]);

  if (!isLoading) {
    return <Loading />;
  }
  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
