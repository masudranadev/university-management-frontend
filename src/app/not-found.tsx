import { Result, Button, Row, Col } from "antd";
import Link from "next/link";
import { SmileOutlined } from "@ant-design/icons";

interface NotFoundPageProps {
  subTitle: string;
}

const NotFoundPage = ({ subTitle }: NotFoundPageProps) => {
  return (
    <Row
      justify="center" // Center horizontally
      align="middle" // Center vertically
      style={{ minHeight: "100vh" }} // Make the container full-height
    >
      <Col xs={24} sm={16} md={12} lg={8}>
        <Result
          status="404"
          title="404"
          subTitle={subTitle}
          extra={
            <Link href="/">
              <Button type="primary">Back Home</Button>
            </Link>
          }
          icon={
            <SmileOutlined style={{ color: "#f9c700", fontSize: "48px" }} />
          }
        />
      </Col>
    </Row>
  );
};

export default NotFoundPage;
