import { Divider, Modal, Form, Input, Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

let validateMessages = {
    required: 'Name is required!',
    types: {
        'date': 'Date is not validate date!',
        'number': 'Number is not a validate number!',
    },
    number: {
        'range': 'label must be between min and max',
    },
};
const EditDataEmployee = ({ data, isModalEdit, handleOK, CanCleModalEdit, EditEmployee }) => {
    const [form] = Form.useForm();
    const formRef = useRef(null);
    const onFinish = user => {
        EditEmployee(user.user, data.id);
        CanCleModalEdit()
    };
    const [dataEdit, setDataEdit] = useState(data);
    useEffect(() => {
        setDataEdit(data)
        form.setFieldsValue({ user: data })
    }, [data, form])
    return (
        <>
            { dataEdit ? (
                <Modal
                    title="Sửa danh sách nhân viên"
                    visible={isModalEdit}
                    onOk={handleOK}
                    onCancel={CanCleModalEdit}
                    width={1000}
                    footer = ""
                >
                    <Form form={form} ref={formRef} value={data} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
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
                                Update Employee
                            </Button>
                            <Button onClick={handleOK} className="ml-3">
                                Cancle
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
                ): ('')
            }
        </>
    )
}

export default EditDataEmployee;