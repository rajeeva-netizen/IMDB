import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {searchMovie, fetchMovie, setLoading} from '../../actions/searchActions'
// import { Input, Space } from 'antd';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';

// const { Search } = Input;




function searchForm({searchMovie, fetchMovie, setLoading, text}){

// handleform is used to get the value from the text input 

   function handleForm(e){
        console.log(e.target.value)
        searchMovie(e.target.value)

    }
//after the click event we are sending the text to the fetchMovie Function

    function HandleClick(e){
        e.preventDefault();
        fetchMovie(text)
        setLoading()
        // console.log(text)
    }
    // render(){
        return(
            <>
                <h1 style={{margin:'0px 0px 0px 450px' }}>Search Your Movie</h1>

                {/* form for searching the movies */}
                 <Form onClick ={HandleClick} >
                     <Form.Item 
                        name="search">
                            <Input style={{width:'500px',margin:'100px 0px 0px 350px' }} onChange = {handleForm} />
                    </Form.Item>
                    <Button style={{textAlign: 'center', margin:'0 0px 100px 550px'}}>Search Here</Button>
                 </Form>
            </>
    
        )
    }
    
// }
//props recieved using the mapStateToProps and 
const mapStateToProps = state=>({
    text:state.movies.text
})

export default connect(mapStateToProps,{searchMovie, fetchMovie, setLoading} )(searchForm)


