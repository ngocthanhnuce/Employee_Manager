import { Divider, Modal } from 'antd';
import { Form, Input, Button } from 'antd';
import React, { useRef } from 'react';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: 'Name is required!',
    types: {
        'date': 'Date is not validate date!',
        'number': 'Number is not a validate number!',
    },
    number: {
        'range': 'label must be between min and max',
    }
};
const AddNewEmployee = ({ isModal, handleOk, handleCancel ,AddEmployee}) => {
    const form = useRef(null);
    const onFinish = user => {
        AddEmployee(user.user);
        handleCancel()
        if (form.current) {
            form.current.resetFields()
        }
    };
    return (
        <Modal
            title="Thêm nhân viên"
            visible={isModal}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
            footer= ""
        >
            <Form  {...layout}  ref={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'code']} label="Code" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'birth']} label="Date of birth" rules={[{ type: 'date' }]}>
                    <Input type="date"/>
                </Form.Item>
                <Form.Item name={['user', 'address']} label="Address">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name={['user', 'company']} label="Company">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'description']} label="Description" >
                    <Input.TextArea/>
                </Form.Item>
                <Divider></Divider>
                <Form.Item className="mt-3 " wrapperCol={{ ...layout.wrapperCol, offset: 4 }} style = {{textAlign: "right"}}>
                    <Button type="primary" htmlType="submit" style = {{marginRight: "1%"}}>
                        Add New Employee
                    </Button>
                    <Button  onClick={handleOk} className="ml-3">
                       Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default AddNewEmployee;
