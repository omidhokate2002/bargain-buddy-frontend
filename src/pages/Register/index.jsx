import { Form, Button, Input } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen bg-primary flex justify-center items-center">
      <div className="bg-white p-5 rounded w-[450px]">
        <Form layout="vertical">
          <Form.Item label="Name" name="name">
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
          <div className="mt-5 text-center">
            <span className="text-gray-500">
              Already have an account?{" "}
              <Link className="text-primary" to="/login">
                Login
              </Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
