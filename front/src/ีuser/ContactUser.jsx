import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import'../layout/style.css';
import useAuth from '../hooks/useAuth';

function ContactUser() {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
});

const hdlChange = (e) => {
    setInput(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
    }));
}

const hdlSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
}

const { logout } = useAuth();

    const handleLogoutClick = () => {
        logout();
    };

    return (
      <div className="navbar1">
        <div className= "flex-1">
        <img src="../photo/shark-removebg.png" alt="Logo" className='logo'/>
        </div>
          <div className="flex-1 flex justify-center gap-40 ">
            <NavLink exact to="/" className="mx-6 font-semibold " activeClassName="text-red-600 ">หน้าหลัก</NavLink>
            <NavLink to="/dresses" className="mx-6 font-semibold" activeClassName="text-red-600 ">ประเภทสินค้า</NavLink> 
            <NavLink to="/reviews" className="mx-6 font-semibold" activeClassName="text-red-600 ">บทความ</NavLink>
            <NavLink to="/contact" className="mx-6 font-semibold" style={{ color : '#ffff',}}>ติดต่อเรา</NavLink> 
           </div>
           <div className="flex-none">
              <ul className=" flex justify-end items-center p-1" style={{top:'-60px'}}>
              <li>
                <Link to='/' onClick={handleLogoutClick}>ออกจากระบบ</Link>
              </li>
             </ul>
           </div>
           <div className='boy' style={{backgroundColor:'#ffff'}}>
           <h1 style={{ fontSize: '1.5rem', marginTop: '20px', textAlign: 'left',fontFamily: 'Arial, sans-serif' }}>
                    <span style={{ color: 'black' }}>ติดต่อเรา</span> 
                    <span style={{ color: 'blue' }}> Contact</span> 
            </h1>
            <h2 style={{ fontSize: '1.5rem',  textAlign: 'left',fontFamily: 'Arial, sans-serif' }}>
              Tel 0611410228
            </h2>
            <h3 className='nc'>ID Natni098721</h3>
            <img src="../photo/line.jpg" alt="Logo" className='logoline'/>
            <h4 className='nc'>
                
                    <span style={{color: '#0000FF'}}>เบอร์โทรศัพท์</span> 
                    <p style={{ color :'#0000FF'}}>Tel 06111410228</p>
                    
            </h4>
                    <img src="../photo/tel.png" alt="Logo" className='logotel'/>
           <h5 className='nc'>
                    <span style={{color: '#FF0000'}}>อีเมล์</span> 
                    <p style={{ color :'#FF0000',marginRight: '-100px' }}>Natnicha@0228gmail.com</p>
           </h5> 
                    <img src="../photo/email.png" alt="Logo" className='logoemail'/>
            <h6 className='nc'>
                    <span style={{color: '#FFFF00'}}>เวลาทำการ</span> 
                    <p style={{ color :'#FFFF00',marginRight: '-30px' }}>ทุกวัน 24 ชั่วโมง</p>
            </h6>
                    <img src="../photo/time.png" alt="Logo" className='logoemail'/>
            <div className="mt-16 p-4 border rounded-lg w-1/3 min-w-[300px] mx-auto bg-gray-100 shadow-md flex items-center justify-center"style={{ marginLeft: '900px',marginTop: '-500px',   }}>
            <div className="background-containerC relative flex flex-col justify-center p-4">
                <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">ข้อความถึงเรา</h1>
                <form className="mx-auto max-w-lg mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                name="firstName"
                                placeholder="ชื่อ"
                                value={input.firstName}
                                onChange={handleLogoutClick}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                name="lastName"
                                placeholder="นามสกุล"
                                value={input.lastName}
                                onChange={handleLogoutClick}
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                            type="email"
                            className="input input-bordered w-full"
                            name="email"
                            placeholder="อีเมล์"
                            value={input.email}
                            onChange={handleLogoutClick}
                        />
                    </div>
                    <div className="mt-2">
                        <textarea
                            id="message"
                            className="textarea textarea-bordered w-full"
                            name="message"
                            rows="4"
                            placeholder="กรอกข้อความที่ต้องการส่ง"
                            value={input.message}
                            onChange={handleLogoutClick}
                        ></textarea>
                    </div>
                    <div className="mt-2 flex justify-end">
                        <button type="submit" className="btn btn-red px-4 py-2 text-black bg-blue-500">ส่งข้อความ</button>
                    </div>
                </form>
            </div>
        </div>
          </div>   
  </div>
  
  
    );
  }

  export default ContactUser ;