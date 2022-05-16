import React,{useState} from "react";
import axios from "axios";
import image from "../AA_Components/reg.jpg";

export default function Signup(){

    const [name, setname] = useState("");
    const [nic, setnic] = useState("");
    const [faculty, setfaculty] = useState("");
    const [student_id, setstudent_id] = useState("");
    const [batch, setbatch] = useState("");
    const [specialization, setspecialization] = useState("");
    const [phone, setphone] = useState("");
    const [DOB, setDOB] = useState("");
    const [email, setEmail] = useState("");
    const [pwd1, setPassowrd1] = useState("");
    const [pwd2, setPassowrd2] = useState("");


    const sendData = async (e) => {
        e.preventDefault();
        
        let new_student = {
            name: name,
            nic: nic,
            faculty: faculty,
            student_id: student_id,
            batch: batch,
            specialization: specialization,
            phone: phone,
            DOB: DOB,
            email: email,
            pwd: pwd1
        }

        if (pwd1 === pwd2) { 
        axios.post("http://localhost:8070/student/signup",new_student)
        .then(()=>{
            alert("Registration Success");
            //window.location = "/login"
        }).catch((err)=>{
            alert(err)
        })
        }else{
            alert("Password dismatch")
        }

        setname("");
        setnic("");
        setfaculty("");
        setstudent_id("");
        setbatch("");
        setspecialization("");
        setphone("");
        setDOB("");
        setEmail("");
        setPassowrd1("");
        setPassowrd2("");  
      
    }


    return(
        
            <form action="" method="post" name="form" onSubmit={sendData}> 
              <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col">
                    <div class="card card-registration my-4">
                      <div class="row g-0">
                        <div class="col-xl-6 d-none d-xl-block">
                        <img
                        src={image}
                        width="650"
                        height="1300"
                        className="d-inline-block align-top"
                        // style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;"
                        alt=""/>
                        </div>

                        <div class="col-xl-6">
                          <div class="card-body p-md-5 text-black">
                            <h3 class="mb-5 text-uppercase">Student registration form</h3>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example8">Full name</label>
                            <input type="text"  id="form3Example8" class="form-control form-control-lg" onChange={(e) => setname(e.target.value)} required/>
                            </div>
                              
                            <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example8">Email Address</label>
                            <input type="email" id="form3Example8" class="form-control form-control-lg"
                              pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                              inputMode="email"
                              onChange={(e) => setEmail(e.target.value)} required/>
                            </div>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example9">Phone Number</label>
                              <input type="text" id="form3Example9" class="form-control form-control-lg" onChange={(e) => setphone(e.target.value)} pattern="[0-9]{10}" required />
                            </div>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example99">Date of Birth</label>
                            <input type="date" id="form3Example99" class="form-control form-control-lg" placeholder="Date Of Birth" onChange={(e) => setDOB(e.target.value)}/>
                            </div>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">NIC number</label>
                            <input type="text" id="form3Example97" class="form-control form-control-lg" onChange={(e) => setnic(e.target.value)} required/>
                            </div>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">Faculty</label>
                            <input type="text"  id="form3Example97" class="form-control form-control-lg" onChange={(e) => setfaculty(e.target.value)} required/>
                            </div>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">Student ID</label>
                            <input type="text"  id="form3Example97" class="form-control form-control-lg" onChange={(e) => setstudent_id(e.target.value)} required/>
                            </div>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">Batch</label>
                            <input type="text"  id="form3Example97" class="form-control form-control-lg" onChange={(e) => setbatch(e.target.value)} required/>
                            </div>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">Specialization</label>
                            <input type="text"  id="form3Example97" class="form-control form-control-lg" onChange={(e) => setspecialization(e.target.value)} required/>
                            </div>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">Password</label>
                            <input type="password"  id="form3Example97" class="form-control form-control-lg" data-toggle="tooltip" data-placement="center" title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
                            onChange={(e) => setPassowrd1(e.target.value)} required/>
                            </div>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">Repeat Password</label>
                            <input type="password"  id="form3Example97" class="form-control form-control-lg"  title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
                            onChange={(e) => setPassowrd2(e.target.value)}/>
                            </div>

                            <div class="d-flex justify-content-end pt-3">
                              <button type="submit" class="btn btn-warning btn-lg ms-2">Submit</button>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <center><label class="label">Already Registered?</label> </center>
                            <center><li class="signin-active"><a href="/login" class="btn">Sign In</a></li></center>
              </div>
            </form>


    )

}
