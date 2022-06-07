import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Layout/footer';
import AdminNavBar from '../Layout/AdminNavBar';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';


export default class Usersremove extends Component {
    constructor(props){
        super(props);
        this.state = {
          usersremove:[]
        };
    }  
//retrive all panel members 
componentDidMount(){
    this.retrievepanelmemberDetails();
} 

retrievepanelmemberDetails(){
    axios.get("http://localhost:8070/usersremove/getpanelmember").then(res=>{
        if(res.data.status){
            this.setState({
              usersremove:res.data.panelmember
     });
    }
  })
 }

 filterData(studentsremove, searchKey) {
  const result = studentsremove.filter((stud) =>
    stud.name.toLowerCase().includes(searchKey) ||
    stud.student_id.toLowerCase().includes(searchKey) 
    
  )
  this.setState({studentsremove: result })
}

handleSearchArea = (e) => {
  const searchKey = e.currentTarget.value;
  axios.get("http://localhost:8070/usersremove/getstudent").then(res => {
    if (res.data.success) {
      this.filterData(res.data.existingstudent,searchKey)
    }
  });
}


//delete panelmember
onDelete = (panelmemberID) => {


  if (window.confirm('Are you sure you wish to delete this details?')) {
    axios.delete(`http://localhost:8070/usersremove/panelmemberdelete/${panelmemberID}`).then((res) => {
      alert('Details Deleted Successfully');

      //alert("Delete Successfully")
      this.retrievepanelmemberDetails();

    })
  }
}


render() {
    return ( 
                            <div>
                          <AdminNavBar/>
                     <br/><br/>
                  <h3 align="center" style={{fontSize:'30px',fontFamily:"Times New Roman"}}>
              <b><u>All Panel Member Details </u></b></h3><br/>
                <div className="col-lg-2 mt-2 mb-2">
                   <input className="form-control" type="search" style={{marginLeft:"75px"}}
                      placeholder="Serach" name="searchQuery" startIcon={< SearchSharpIcon />} onChange={this.handleSearchArea} >
                 </input></div>
           <div className='container'>  
       <table className = "table table-hover">
          <thead>
             <tr bgcolor="#79BAEC">
                <th scope='col'>No</th>
                   <th scope='col'>Staff Member Name</th>
                       <th scope='col'>Faculty</th>
                         <th scope='col'>Feild</th>
                           <th scope='col'>Staff ID</th>
                         <th scope='col'>Role</th>
                     <th scope='col'>Email</th>
                     <th scope='col'>Action</th>
                 </tr>
             </thead>
               <tbody>
                   {this.state.usersremove.map((usersremove,index)=>(
                      <tr key={index}>    
                         <th scope='row'>{index + 1}</th>
                            <td>{usersremove.name}</td>
                               <td>{usersremove.faculty}</td>
                                 <td>{usersremove.feild}</td>
                            <td>{usersremove.staff_id}</td>
                        <td>{usersremove.role}</td>
                   <td>{usersremove.email}</td>
                   <td>
                     <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(usersremove._id)}>
              <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>   
                     </td>              
                </tr>
                  )
                    )}
                      </tbody>     
                         </table>
                            </div>
                            <br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>   
                            <Footer/>
                              </div>
    )
  }
}










































