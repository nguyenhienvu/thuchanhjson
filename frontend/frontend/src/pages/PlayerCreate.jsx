import React, { useState } from 'react';
import { Table, Form, Button, InputGroup, Pagination } from 'react-bootstrap';

const PlayerCreate = () => {
    // State cho form tạo người chơi
    const [playerData, setPlayerData] = useState({
        username: '',
        password: '',
        balance: ''
    });





    // Xử lý thay đổi form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPlayerData({
            ...playerData,
            [name]: value
        });
    };





    return (
        <div className="container-fluid py-4">
            <div className="row player-container mx-1 rounded shadow flex ">
                {/* Form bên trái */}
                <div className="col-md-5 p-4 border-end">
                    <h2 className="mb-4 text-primary">Tạo tài khoản người chơi</h2>

                    <Form >
                        <Form.Group className="mb-3">

                            <Form.Control
                                type="text"
                                name="username"
                                value={playerData.username}
                                onChange={handleInputChange}
                                placeholder="Nhập tên đăng nhập"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Control
                                type="password"
                                name="password"
                                value={playerData.password}
                                onChange={handleInputChange}
                                placeholder="Nhập mật khẩu"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">

                            <InputGroup>
                                <Form.Control
                                    type="number"
                                    name="balance"
                                    value={playerData.balance}
                                    onChange={handleInputChange}
                                    placeholder="Nhập số tiền"
                                />
                                <InputGroup.Text>VND</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 py-2">
                            Tạo tài khoản
                        </Button>
                    </Form>
                </div>

                {/* Danh sách bên phải */}
                <div className="  w-full col-md-7 p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="text-primary">Danh sách người chơi</h2>
                        <InputGroup style={{ width: '200px' }}>
                            <Form.Control placeholder="Tìm kiếm..." />
                            <Button variant="outline-secondary">
                                Tìm
                            </Button>
                        </InputGroup>
                    </div>

                    <div className="w-full table-responsive">
                        <Table className='w-full text-left' striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tài khoản</th>
                                    <th>Số dư</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>vudeptrai</td>
                                    <td>10000</td>
                                    <td>Xoá</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>


                </div>
            </div>
        </div>
    );
};

<script>




</script>

export default PlayerCreate;