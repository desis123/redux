import React, { Component } from 'react'


class Posts extends Component {

    constructor(){
        super()
        this.state ={
            posts:[]
        }
    }

    UNSAFE_componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
              .then(response => response.json())
              .then(json => this.setState({posts:json}))
    }

    render() {

     const postItems = this.state.posts.map(item=>{
         return (
         <div key={item.id}>
             <h3>{item.title}</h3>
             <p>{item.body}</p>
         </div>

     )})

        return (
            <div>

               <h1> Posts </h1>
               
                {postItems}
            </div>
        )
    }
}
export default Posts;