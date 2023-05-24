import { DeleteOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Input, Modal, Popconfirm, Table } from "antd"

const UserAdmin = () => {
    const columns = [
        {
            title: "Tên tài khoản",
            dataIndex: "username",
            width: "25%",
        },
        {
            title: "Mật khẩu",
            dataIndex: "password",
            width: "20%",
            render: (value: string) => <Input.Password className="border-none" value={value} />,
        },
        {
            title: "Quyền",
            dataIndex: "role",
            width: "25%",
        },
        {
            dataIndex: "action",
            render: (text: any, record: any) => (
                <div>
                    <Popconfirm
                        title="Bạn có muốn xóa tài khoản này không?"
                        // onConfirm={() => this.deleteUser(record?.username)}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button danger type="primary">
                            <DeleteOutlined /> Xóa
                        </Button>
                    </Popconfirm>
                    ,
                </div>
            ),
        },
    ];
    return (
        <div>
            <Button
                style={{ marginBottom: "30px" }}
                type="primary"
            // onClick={() => this.setState({ visible: true })}
            >
                <PlusOutlined />
                Tạo tài khoản
            </Button>
            <Table
                rowKey={(record) => record.id}
                tableLayout="fixed"
                columns={columns}
                dataSource={[
                    {
                        id: 1,
                        username: 'admin',
                        password: 'sdfasd',
                        role: "Admin"
                    },
                    {
                        id: 1,
                        username: 'admin',
                        password: 'sdfasd',
                        role: "Admin"
                    }
                    ,
                    {
                        id: 1,
                        username: 'admin',
                        password: 'sdfasd',
                        role: "Admin"
                    },
                    {
                        id: 1,
                        username: 'admin',
                        password: 'sdfasd',
                        role: "Admin"
                    },
                    {
                        id: 1,
                        username: 'admin',
                        password: 'sdfasd',
                        role: "Admin"
                    }
                    ,
                    {
                        id: 1,
                        username: 'admin',
                        password: 'sdfasd',
                        role: "Admin"
                    },
                    {
                        id: 1,
                        username: 'admin',
                        password: 'sdfasd',
                        role: "Admin"
                    },
                    {
                        id: 1,
                        username: 'admin',
                        password: 'sdfasd',
                        role: "Admin"
                    }
                    ,
                    {
                        id: 1,
                        username: 'admin',
                        password: 'sdfasd',
                        role: "Admin"
                    },
                    {
                        id: 1,
                        username: 'admin',
                        password: 'sdfasd',
                        role: "Admin"
                    },
                    {
                        id: 1,
                        username: 'admin',
                        password: 'sdfasd',
                        role: "Admin"
                    }
                    ,
                    {
                        id: 1,
                        username: 'admin',
                        password: 'sdfasd',
                        role: "Admin"
                    }
                ]}
            />
            {/* <Modal
                title="Tạo tài khoản mới"
                visible={state.visible}
                onCancel={() => setState({ visible: false })}
                footer={false}
            >
                <FormCreate onCancel={onCancel} />
            </Modal> */}
        </div>
    )
}

export default UserAdmin