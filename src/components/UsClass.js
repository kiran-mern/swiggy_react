import React from "react"


class UsClass extends React.Component{

    constructor(props){

        super(props)

        this.state={
            userInfo:{

                name:'ddddd',
                location:'ddd',
                // avatar_url:
            }
           
        }

        
    }

    async componentDidMount(){

      const data=  await fetch("https://api.github.com/users/akshaymarch7")
      const json=await data.json()
      console.log(json);

       this.setState({
            userInfo:json
        })
      
    }
    render(){
        const {name,location,avatar_url}=this.state.userInfo
        // const{count}=this.state

       

        return(
            <div className="user-demo">

                <img  src={avatar_url}/>

            <h2>{name}</h2>
           
           
            <h3>{location}</h3>


        </div>

        )
    }
}
export default UsClass