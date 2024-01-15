import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { Helmet } from "react-helmet-async";



const AllUser = () => {
//   const [axiosSecure] =useAxiosSecure()

    //  const {data: users= [], refetch } =useQuery({
    //     queryKey: ["users"], 
    //     queryFn: async () =>{
    //     const res = await fetch('http://localhost:5000/users')
    //     return res.json()
    //     }
    
    //  })
     const { refetch,data: users =[]} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/users')
            return res.data

        }
      })
      const handleDelete =() =>{

      }
      const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
          method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.modifiedCount){
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is admin now`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })

      }

    return (
        <div className="container  mx-auto pt-28">
            {/* <Helmet>
  <title>Tasty Traverse | All User</title>
</Helmet> */}
           <h3 className='text-4xl font-semibold pb-2 text-center'>Manage User</h3>

           <div className="overflow-x-auto font-semibold">
  <table className="table table-zebra">
    {/* head */}
    <thead className='bg-teal-600 text-slate-200  uppercase rounded justify-evenly'>
      <tr>
        <th>#</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>ROLE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user,index)=> 
                <tr key={user._id}>
        <th>{index + 1}.</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
            {
                user.role === "admin" ? 'admin':
           
        <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-teal-600 text-white"><MdAdminPanelSettings /></button>
            }
            </td>
        <td>
        <button className="btn btn-ghost btn-sm bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
        </td>
      </tr>)
        }
      {/* row 1 */}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;