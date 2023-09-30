"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/redux/services/auth.service";
import { Col, Row } from "antd";

const CreateAdminPage = () => {
  const { role } = getUserInfo() as any;
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };
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
            link: `/${role}/admin`,
          },
        ]}
      />
      <h1>Create admin</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={8}>
            <FormInput
              type="text"
              name="name"
              size="large"
              label="First Name"
            />
          </Col>
          <Col className="gutter-row" span={8}>
            <FormInput
              type="text"
              name="name"
              size="large"
              label="Middle Name"
            />
          </Col>
          <Col className="gutter-row" span={8}>
            <FormInput
              type="text"
              name="name"
              size="large"
              label="Last Name"
            />
          </Col>
          <Col className="gutter-row" span={8}>
            <FormInput
              type="password"
              name="password"
              size="large"
              label="Password"
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CreateAdminPage;
