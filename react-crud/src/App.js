import React, {Component} from 'react'
import axios from 'axios';
import TableRecord from './component/TableRecord';

const Base_url = 'https://jsonplaceholder.typicode.com/users';

export default class App extends Component {
  constructor(){
    super()
    this.state ={
        fetch_data: [],
        id:'',
        name:'',
        username:'',
        email:'',
        phone:''
    }
  }

  async componentDidMount() {
   let  {data} = await axios.get(Base_url);
   this.setState({fetch_data:data})
   
  }

  handleOnchange = ({target:{name,value}})=>{
    this.setState({[name]:value})
  }

  create= async()=>{
    
    let {data} = await axios.post(Base_url,{
      name:this.state.name,
      username:this.state.username,
      email:this.state.email,
      phone:this.state.phone
  })
  this.setState({name:'',username:'',email:'',phone:''})
  let state_data = [...this.state.fetch_data]
  state_data.push(data)
  this.setState({fetch_data:state_data})
  }

  update= async()=>{
   
   let {data} = await axios.put(`${Base_url}/${this.state.id}`,{
      name:this.state.name,
      username:this.state.username,
      email:this.state.email,
      phone:this.state.phone
    })
    let state_data = [...this.state.fetch_data]
   
    let ind = state_data.findIndex(ele=>ele.id===this.state.id)
    state_data[ind]=data

    this.setState({fetch_data:state_data})
    this.setState({id:'',name:'',username:'',email:'',phone:''})

  }

  delete= async(id)=>{
    let {data} = await axios.delete(`${Base_url}/${id}`)
    console.log(data)
    let state_data = [...this.state.fetch_data]
    let result = state_data.filter(user => user.id!==id)

    this.setState({fetch_data:result})
  }

  handleOnSubmit = (e)=>{
    e.preventDefault()
    
    if(this.state.id){
      this.update()
    }
    else{
      this.create()
    }
  }

  setUpdate=(id)=>{
    let fetch = [...this.state.fetch_data]
    let result = fetch.filter(user => user.id===id)
    result = result[0]
    this.setState({...result})
}

  render(){
    return (
      <div className="container">
        <div className="row">
        {/* <Form state={this.state}/> */}
        <form className="w-100" onSubmit={this.handleOnSubmit}>
          <div className="form-row my-2">
            <div className="col">
              <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" onChange={this.handleOnchange} value={this.state.name}/>
            </div>
            <div className="col">
              <input type="text" className="form-control" id="username" placeholder="Enter UserName" name="username"  onChange={this.handleOnchange} value={this.state.username}/>
            </div>
          </div>
          <div className="form-row my-2">
            <div className="col">
              <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email" onChange={this.handleOnchange} value={this.state.email} />
            </div>
            <div className="col">
              <input type="text" className="form-control" id="phone" placeholder="Enter Phone No" name="phone" onChange={this.handleOnchange} value={this.state.phone}/>
            </div>
          </div>
          <button type='submit' className='btn btn-success my-2'>Submit</button>
          
        </form>
        </div>
        <div className="table-responsive">
          <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>action</th>
                </tr>
              </thead>
              
              <TableRecord 
              fetch_data={this.state.fetch_data}
              handleUpdate={this.setUpdate} 
              handleDelete={this.delete}/>
              
          </table>
        </div>
      </div>
    );
  }
  
}

 
