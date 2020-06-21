import React from 'react'
import {
    Drawer,
    Form,
    Divider,
    Col,
    Row,
    Input
} from 'antd';
import useData from '../hooks/useData';

const  UserDEtails = ({ current, onClose }) => {

    return (
        <Drawer
            title={"User: " + current.name}
            width={720}
            onClose={onClose}
            visible={true}
            bodyStyle={{ paddingBottom: 80 }}
        >
            <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="name"
                            label="Name"
                        >
                            <Input
                                defaultValue={current.name}
                                disabled={true}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="username"
                            label="User Name"
                        >
                            <Input
                                defaultValue={current.username}
                                disabled={true}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="email"
                            label="Email"
                        >
                            <Input
                                defaultValue={current.email}
                                disabled={true}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="phone"
                            label="Phone"
                        >
                            <Input
                                defaultValue={current.phone}
                                disabled={true}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Divider dashed />

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="street"
                            label="Street"
                        >
                            <Input
                                defaultValue={current.address.street}
                                disabled={true}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="suite"
                            label="Suite"
                        >
                            <Input
                                defaultValue={current.address.suite}
                                disabled={true}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="city"
                            label="City"
                        >
                            <Input
                                defaultValue={current.address.city}
                                disabled={true}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="zipcode"
                            label="Zip Code"
                        >
                            <Input
                                defaultValue={current.address.zipcode}
                                disabled={true}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Divider dashed />

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="company.name"
                            label="Company Name"
                        >
                            <Input
                                defaultValue={current.company.name}
                                disabled={true}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="BS"
                            label="Company BS"
                        >
                            <Input
                                defaultValue={current.address.BS}
                                disabled={true}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="catchPhrase"
                            label="Catch Phrase"
                        >
                            <Input
                                defaultValue={current.company.catchPhrase}
                                disabled={true}
                            />
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
        </Drawer>
    )
}

export default UserDEtails