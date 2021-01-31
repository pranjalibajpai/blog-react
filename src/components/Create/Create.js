import {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
import '../Posts/Posts.css';
import './Create.css';

const Create = () => {

    const[data, setData]= useState({title: "", content: "", error: null, success: null});
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errorMsg;
        if(data.title === "" && data.content === "")
        errorMsg="Please enter title and content!";
        else if (data.title === "")
        errorMsg="Please enter title!";
        else if(data.content === "")
        errorMsg="Please enter content!";

        if(errorMsg)
        setData({...data, error: errorMsg, success: null});
        else{

        
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;

        const newPost={title: data.title, content: data.content, date: today, likes: 0, author: "Pranjali"};

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPost)
        }).then((res) => {
            if(res.ok)
            setData({...data, error: null, success: 'Post Added Successfully'})
        else setData({...data, error: 'Could not add data to the resource!', success: null})} )
           .catch(err => setData({...data, error: err.message, success: null}));
        }
    }

    return (  
        <div className="post-item">
            <h2>Create New Post</h2>
            
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input type="text" name="title" value={data.title} onChange={handleChange} placeholder="Enter title"/>
                </FormGroup>
                <FormGroup>
                    <Label>Content</Label>
                    <Input type="textarea" name="content" value={data.content} onChange={handleChange} placeholder="Enter content"/>
                </FormGroup>
                {data.error && <Alert color="dark">{data.error}</Alert>}
                {data.success && <Alert color="success">{data.success}</Alert>}

                <Button outline>Submit</Button>
            </Form>
        </div>
    );
}
 
export default Create;