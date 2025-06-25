import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Context } from '../context/Context';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

interface ValueType {
    username: string;
    password: string;
}

const SignInForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { setToken } = useContext(Context);

    const onFinish = (values: ValueType) => {
        setIsLoading(true);

        axios.get('http://localhost:3000/users').then(({ data }) => {
            const isUser = data.some((item: ValueType) =>
                item.username === values.username && item.password === values.password
            );

            setTimeout(() => {
                if (isUser) {
                    setToken(true);
                    location.pathname = "/";
                } else {
                    toast.error("Foydalanuvchi topilmadi!");
                    setIsLoading(false);
                }
            }, 1000);
        });
    };

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <Form
                autoComplete="off"
                name="login"
                initialValues={{ remember: true }}
                style={{ maxWidth: 360 }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Iltimos foydalanuvchi nomini kiriting!' }]}
                >
                    <Input
                        name="username"
                        allowClear
                        size="large"
                        prefix={<UserOutlined />}
                        placeholder="Username"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password
                        name="password"
                        allowClear
                        size="large"
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        loading={isLoading}
                        size="large"
                        block
                        type="primary"
                        htmlType="submit"
                    >
                        Kirish
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default SignInForm;
