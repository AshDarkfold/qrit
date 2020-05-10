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
                <div class="auth" style={{width:"50%",float:"left",height:"100vh"}}>
                <br></br><br></br><br></br><br></br>
                <div style={{textAlign:"center",display:"inline-block",width:"100%"}}>               
                    <FontAwesomeIcon icon={faCoffee} size= "3x" alt="coffee" />
                    <h2 className="login1"style={{fontSize:"3vw"}}>Welcome</h2>
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
                             style={{width:"40%",borderTop:"none",borderLeft:"none",borderRight:"none",borderBottom:"2px solid black",minWidth:"230px"}}
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
                            style={{width:"40%",borderTop:"none",borderLeft:"none",borderRight:"none",borderBottom:"2px solid black",minWidth:"230px"}}
                            />
                        </Form.Item>
                        

                        <Form.Item>
                            <div style={{textAlign:"center",display:"inline-block",width:"100%"}}>
                            <Button htmlType="submit" className="login-form-button signup" style={{textALign:"center", borderRadius:"10px",width:"20%",border:"1px solid #00FF84",color:"#00FF84",fontSize:"100%",height:"100%"}}>
                            Sign Up
                            </Button>
                            <Button htmlType="submit" className="login-form-button login" style={{textALign:"center", borderRadius:"10px",width:"20%",backgroundColor:"#00FF84",color:"white",fontSize:"100%",height:"100%"}}>
                            Log in
                            </Button> 
                            </div>
                            </Form.Item>
                        <Form.Item>
                        <div style={{textAlign:"center",display:"inline-block",width:"100%"}}>
                            <Form.Item name="remember" valuePropName="" noStyle>
                            <Checkbox className="check" style={{marginRight:"20px"}}>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot check" href=""style={{marginLeft:"20px",color:"#00FF84"}}>
                            Forgot password
                            </a>
                            </div>
                        </Form.Item>
                </Form>
                </div>
                <div className="image" style={{width:"50%",height:"100vh",float:"left"}}>
                    <img className="image" src={leaves} style={{width:"100%",height:"629px",objectFit:"cover"}}/>
                </div>
            </div>
           
        )
    }
}

export default Auth;
