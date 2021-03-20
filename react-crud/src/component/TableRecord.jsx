const TableRecords = (props) => {
    return ( 
        <tbody>
            {props.fetch_data.map(users=>(
            <tr key={users.id}>
              <td>{users.id}</td>
              <td>{users.name}</td>
              <td>{users.username}</td>
              <td>{users.email}</td>
              <td>{users.phone}</td>
              <td><button className="btn btn-success" id={users.id} onClick={()=>props.handleUpdate(users.id)}><i className="fa fa-pencil" aria-hidden="true"></i></button> <button className="btn btn-danger" id={users.id} onClick={()=>props.handleDelete(users.id)}><i className="fa fa-trash" aria-hidden="true"></i></button></td>
            </tr>
          ))}
        </tbody>
     );
}
 
export default TableRecords;