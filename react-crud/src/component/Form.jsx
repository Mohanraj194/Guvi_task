const Form = ({name,username,email,phone}) => {
    return ( 
        <form className="w-100" onSubmit={()=>this.handleOnSubmit}>
          <div className="form-row my-2">
            <div className="col">
              <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" onChange={()=>this.handleOnchange} value={name}/>
            </div>
            <div className="col">
              <input type="text" className="form-control" id="username" placeholder="Enter UserName" name="username"  onChange={()=>this.handleOnchange} value={username}/>
            </div>
          </div>
          <div className="form-row my-2">
            <div className="col">
              <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email" onChange={()=>this.handleOnchange} value={email} />
            </div>
            <div className="col">
              <input type="text" className="form-control" id="phone" placeholder="Enter Phone No" name="phone" onChange={()=>this.handleOnchange} value={phone}/>
            </div>
          </div>
          <button type='submit' className='btn btn-success my-2'>Submit</button>
          
        </form>
     );
}
 
export default Form;