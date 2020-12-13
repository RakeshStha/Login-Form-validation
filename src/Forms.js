import React from 'react'
import {Button,Form} from 'react-bootstrap'
import {useForm} from 'react-hook-form'

export default function Forms() {

    const {register,handleSubmit,errors} = useForm()
                                                
    const Onsubmit = data =>{
        console.log(data)
    }

    return (
        <div>
            <Form onSubmit = {handleSubmit(Onsubmit)}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name = "email" ref = {register} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name = "password" ref = {register({required:true, minLength:8})}/>
                    
                    {errors.password && <p>Password is too short</p>}
                    
                </Form.Group>
                <Form.Group className="text-center">
                    <Button type="submit" className="btn btn-success" >Submit</Button> 
                </Form.Group>
            </Form>
        </div>
    );
}
