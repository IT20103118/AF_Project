import axios from "axios";
import React,{Component} from 'react' ;
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import StudentNavBar from '../Home_Component/StudentNavBar';
 
 
export default class Display_researchtopics extends Component{
   constructor(props){
       super(props);
       this.state = {
        studentgroups:[]
       };
   }
   onReadirect(id){
       window.location.href = `/regtopic/research/${id}`
   }

    //search 
    filterData(studentgroups,searchKey){
        const result = studentgroups.filter((studentgroups)=>
        studentgroups.group_name.toLowerCase().includes(searchKey)
        )
        this.setState({studentgroups:result})
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        axios.get("http://localhost:8070/regtopic/displaysupervisors").then(res=>{
        if(res.data.success){
            this.filterData(res.data.existingstdgroups,searchKey)
            }
        });
        }

   componentDidMount(){
      this.retrieveResearchTopics();
  }
   retrieveResearchTopics(){
       axios.get("http://localhost:8070/regtopic/displayresearchtopic").then(res=>{
           console.log (res.data)
           if(res.data.success){
               this.setState({
                studentgroups:res.data.existingstdgroups
               });
               console.log(this.state.studentgroups)
           }
       })
   }
 

 
   render(){
       return(   
           <div>
              <StudentNavBar/>  <br/><br/> <br/>
               <h3 align="center" style={{fontSize:'35px',fontFamily:"Times New Roman"}}><b><u>Add Research Topic and Field </u></b></h3><br/><br/>
                 <div className='container'> 
                 <div className="col-md-3" >
                       <input type="text" className="form-control" style={{marginBottom:'2px'}} placeholder="Search by Group Name " onChange={this.handleSearchArea}/>
                          <br/> 
                            </div> 
                   <table class="table">
                      <thead>
                    <tr bgcolor="#79BAEC">
                <th scope='col'>No</th>
            <th scope='col'>Group Name</th>
        <th scope='col'>Research Topic</th>
      <th scope='col'>Research Field</th>
      <th scope='col'>Status</th>
    <th scope='col'>Actions</th>
        </tr>
           </thead>
               <tbody>
                  {this.state.studentgroups.map((studentgroups,index) =>(
                      <tr>
                         <th scope='row'>{index + 1}</th>
                            <td>{studentgroups.group_name}</td>
                          <td>{studentgroups.researchTopic}</td>
                          <td>{studentgroups.researchField}</td>
                          <td>{studentgroups.topicstatus}</td>
                       <td>                      
                            <IconButton aria-label='btn btn-success' size="small"
                               style={{background: "#FBB917"}}
                                  onClick={()=>this.onReadirect(studentgroups._id)} >
                                     <AddCircleOutlineIcon  fontSize="small" style={{color: "black"}}/>
                                        </IconButton>
                                         
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                            </table>
                                </div>    
                                    </div> 
                        )}
}