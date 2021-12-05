import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Segment,Form,Button, Header,Image,Message, MessageHeader } from 'semantic-ui-react';
import {getAuth, createUserWithEmailAndPassword} from '../../Firebase';

export default class Register extends Component {

    state={
        fname: "",
        email: "",
        password: "",
        confirmPassword: "",
        errorMsg: ""
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    // Form Empty function
    isFormEmpty=({fname,email,password,confirmPassword})=>{
        if(!fname.length || !email.length || !password.length || !confirmPassword.length){
            this.setState({errorMsg: "Apni form gulo agay puron korayn"})
        }else if(password.length < 8 || confirmPassword.length < 8){
            this.setState({errorMsg: "Password should be 8 character"})
        }else if(password.length !== confirmPassword.length){
            this.setState({errorMsg: "Password does not match"})
        }else{
            return true
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        if(this.isFormEmpty(this.state)){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.state.email, this.state.password).then((userCredential)=>{
                console.log(userCredential)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error achay")
                console.log(errorCode)
                console.log(errorMessage)
            });
        }
    }


    render() {
        const {fname,email,password,confirmPassword,errorMsg} = this.state
        return (
            <>
                <div>
                    <Container>
                        <Grid centered style={{height:"100vh"}} verticalAlign= "middle">
                            <Grid.Column width={6}>
                                <Header style={{textAlign: "center"}}>
                                    <h1 style={{color: "#F36B80"}}>Registration Form</h1>
                                    <h2 style={{color: "#8B5DD0"}}>Create An Account</h2>
                                    <p style={{color: "silver"}}>It is a long established fact that a reader will be distracted by the readable.</p>
                                </Header>
                                <Segment style={{background: "#34BED1"}}>
                                    
                                    {errorMsg ? <Message negative>
                                        <Message.Header>{errorMsg}</Message.Header>
                                    </Message>
                                    : ""}

                                    <Form >
                                        <Form.Field>
                                        <label>Full Name</label>
                                        <input name="fname" type="text" onChange={this.handleChange} placeholder='First Name' value={fname} />
                                        </Form.Field>
                                        <Form.Field>
                                        <label>E-mail</label>
                                        <input name="email" type="email" onChange={this.handleChange} placeholder='E-mail' value={email} />
                                        </Form.Field>
                                        <Form.Field>
                                        <label>Password</label>
                                        <input name="password" type="password" onChange={this.handleChange} placeholder='Password' value={password} />
                                        </Form.Field>
                                        <Form.Field>
                                        <label>Confirm Password</label>
                                        <input name="confirmPassword" type="password" onChange={this.handleChange} placeholder='Confirm Password' value={confirmPassword}/>
                                        </Form.Field>
                                        <Button fluid textAlign="center" style={{ background: "#31DAE7", marginTop: "30px" }} onClick={this.handleSubmit} type='submit'>Sign Up</Button>
                                    </Form>
                                </Segment>
                                <Message style={{background: "#34BED1"}}>
                                    <MessageHeader>Already Have An Account ? <Link to="/login">Log In</Link></MessageHeader>
                                </Message>
                            </Grid.Column>
                            <Grid.Column width={10}>
                            <Image src='/images/3.png' />
                            </Grid.Column>
                        </Grid>
                    </Container>
                </div>
            </>
        )
    }
}
