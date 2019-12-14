import React, { Component } from 'react'

 class Postform extends Component {
    constructor(){
        super();
        this.state ={
            title :'',
            body:''
        }
    }

    handleChange= (e)=>{
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }

    handleSubmit =(e)=>{
        e.preventDefault();

        const post ={
        title : this.state.title,
        body : this.state.body
        }

        

  fetch("https://jsonplaceholder.typicode.com/posts", {
     method: "post",
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
     },

  //make sure to serialize your JSON body
  body: JSON.stringify(post)
})
.then( response => response.json())
.then(data => console.log(data));


    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit ={this.handleSubmit}>
                <div>
                    <label>
                        Title:
                     </label><br/> 
                     <input type="text" 
                     name="title" 
                     value ={this.state.title}
                     onChange ={this.handleChange}
                     /> 
                </div>

                <div>
                    <label>
                        Body:
                     </label> <br/> 
                     <textarea
                      name="body" 
                     value={this.state.body} 
                     onChange ={this.handleChange}
                     /> 
                </div>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Postform;
