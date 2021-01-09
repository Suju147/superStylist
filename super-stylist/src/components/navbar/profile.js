import React from 'react'

const Profile = () => {
    return (
        <div>
           <div className="profile" style={{width:'400px',height:"450px",backgroundColor:'white'}}>
               <div style={{color:"crimson",fontWeight:'bold',}}>Profile</div>
               <div>Change Password</div>
               <div>Wishlisted Items</div>
               <button>LogOut</button>
               </div>     
        </div>
    )
}

export default Profile
