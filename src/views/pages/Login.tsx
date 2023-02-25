import React, { useState } from 'react';
import { Button, Modal, Form, Input, Row } from 'antd';
import { useNavigate } from "react-router-dom";
import "./../../styles/loginPage.css";
import { userFormValues } from '../../types/Auth';

const LoginPage = (): JSX.Element => {
    const navigate = useNavigate()
    const [open, setOpen] = useState<boolean>(false);
    const onFinish = (values: userFormValues): void => {
        if ([values.username === "Admin", values.password === "12345"].every(statement => statement)) {
            localStorage.setItem("isAuth", "true");
            redirectTo("/profile")
        }
        else {
            showModal()
        }
      };

    const redirectTo = (path: string): void => {
        navigate(path)
    }

    const showModal = (): void => {
        setOpen(true);
    };

    const handleOk = (): void => {
        setOpen(false);
    };
    const handleCancel = (): void => {
        setOpen(false);
    };

    return (
        <Row>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" style={{ backgroundColor: "indianred"}} htmlType="submit">
                    Отправить
                </Button>
                <Modal
                    title="Внимание!"
                    open={open}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="primary" type="primary" onClick={handleOk}>
                            Ок
                        </Button>
                    ]}
                >
                    <p>Имя пользователя или пароль введены не верно</p>
                </Modal>
                </Form.Item>
            </Form>
        </Row>
        
    );
};


export default LoginPage;