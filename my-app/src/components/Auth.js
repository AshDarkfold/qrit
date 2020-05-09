import React, { Component } from 'react';
import leaves from '../assets/leaves.jpg'; 
import './Auth.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee}  from '@fortawesome/free-solid-svg-icons';


class Auth extends Component {


    render() {
        return (
            <div >
                <div class=" container "style={{width:"50%",height:"100%",float:"left"}}>
                <br></br><br></br><br></br><br></br>
                <div style={{textAlign:"center",display:"inline-block",width:"100%"}}>               
                    <FontAwesomeIcon icon={faCoffee} size= "3x" alt="coffee" />
                    <h2>Welcome</h2>
                </div>
                 <br></br><br></br> 
                 <Form
                        name="normal_login"
                        style={{textAlign:"center",display:"inline-block",width:"100%"}}
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                            <Input 
                            prefix={<UserOutlined className="site-form-item-icon" />}
                             placeholder="Username" 
                             style={{width:"40%",borderTop:"none",borderLeft:"none",borderRight:"none",borderBottom:"2px solid black"}}
                             />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            style={{width:"40%",borderTop:"none",borderLeft:"none",borderRight:"none",borderBottom:"2px solid black"}}
                            />
                        </Form.Item>
                        

                        <Form.Item>
                            <Button htmlType="submit" className="login-form-button" style={{textALign:"center",marginRight:"20px", borderRadius:"10px",fontSize:"100%",width:"20%",border:"1px solid #00FF84",color:"#00FF84"}}>
                            Sign Up
                            </Button>
                            <Button htmlType="submit" className="login-form-button" style={{textALign:"center",marginLeft:"20px", borderRadius:"10px",fontSize:"100%",width:"20%",backgroundColor:"#00FF84",color:"white"}}>
                            Log ind
                            </Button>                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="" noStyle>
                            <Checkbox style={{marginRight:"20px"}}>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href=""style={{marginLeft:"20px",color:"#00FF84"}}>
                            Forgot password
                            </a>
                        </Form.Item>
                </Form>
                </div>
                <div style={{width:"50%",height:"100%",float:"left"}}>
                    <img src={leaves} style={{width:"100%",height:"629px",objectFit:"cover"}}/>
                </div>
            </div>
           
        )
    }
}

export default Auth;
