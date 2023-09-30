import React from "react";
import { Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Space>
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default Loading;
