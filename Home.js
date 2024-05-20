import { click } from "@testing-library/user-event/dist/click";
import React, { useState, useEffect } from "react";


const Home = () => {
  // let name = "Rikky";

  const [name, setname] = useState("Rikky");
  const [inp, setinp] = useState("");
  const [inp2, setinp2] = useState("");
  const [alluser, setalluser] = useState(JSON.parse(localStorage.getItem("alluser")) || []);
  const [oneuser, setoneuser] = useState({});
  const [index, setindex] = useState("");
  
 

  useEffect(() => {
    localStorage.setItem("alluser", JSON.stringify(alluser))

  
  }, [alluser])
  

  const gender = "Female";
  const users = [
    { name: "Rikky", class: "react" },
    { name: "Rikky", class: "react" },
    { name: "Rikky", class: "react" },
  ];
  // To write a function
  const click = () => {
    // name = "Esther"
    // setname("Esther")
    // alert("Working")
    // console.log(name);
    // console.log(inp);

    let user = {
      username: inp,
      email: inp2,
    };
    // SPREAD OPERATOR
    setalluser([...alluser, user]);
    console.log(user);
  };

  const deletetodo = (i) =>{
    console.log(i);
    alluser.splice(i, 1);
    setalluser([...alluser])
  }
  const edittodo = (i, el) =>{
console.log(i, el);
setindex(i)
setoneuser({...el})
  }
  const Save = ()  =>{
    alluser[index] = oneuser
    console.log(alluser);
    setalluser([...alluser]);
  }
  // {conditional expression ? "true" : "false"}
  return (
    // Variable declaration
    <>
      <h1>{Math.random()}</h1>
      <h1 className={gender == "Female" ? "text-primary" : "text-danger"}>
        {gender == "Female" ? name : "man"}
      </h1>
      <button onClick={click}>Click</button>

      <input onChange={(e) => setinp(e.target.value)} type="text" />
      <input onChange={(e) => setinp2(e.target.value)} type="text" />
      <table>
        <tr>
          <th>Name</th>
          <th>Class</th>
        </tr>
        <tr>
          {users.map((el) => (
            <>
              <h1>{el.name}</h1>
              <h1>{el.class}</h1>
            </>
          ))}
        </tr>
      </table>

      {alluser.length == 0 ? "No User Available At The Moment" : alluser.map((el, i) => (
        <div key={i}>
          <h1>{i + 1}</h1>
          <h1>{el.username}</h1>
          <h1>{el.email}</h1>
          <button onClick={()=>deletetodo(i)}>Delete</button>
          <button  onClick={()=>edittodo(i, el)} data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
        </div>
      
      ))}

         {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            modal
         </button>
         */}
         {/* <!-- Modal --> */}
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog">
             <div class="modal-content">
               <div class="modal-header">
                 <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                 <input value={oneuser.username} onChange={(e)=> setoneuser({...oneuser, username:e.target.value})} className="form-control mt-3" type="text" />
                 <input value={oneuser.email} onChange={(e)=>setoneuser({...oneuser, email:e.target.value})} className="form-control mt-3" type="text" />
               </div>
               <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                 <button onClick={Save}   class="btn btn-primary">Save changes</button>
               </div>
             </div>
           </div>
         </div>
    </>
  );
};

export default Home;
