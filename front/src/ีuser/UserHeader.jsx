import React, { useState } from 'react';
import { NavLink ,Link} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function UserHeader() {
  const [showModal, setShowModal] = useState(false);
  const { logout } = useAuth();

  const handleLogoutClick = () => {
    logout();
  };


  const openModal = () => {
    setShowModal(true);
  };
  

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="navbar1">
      <div className= "flex-1">
        <img src="../photo/shark-removebg.png" alt="Logo" className='logo'/>
      </div>
      <div className="flex-1 flex justify-center gap-40 ">
        <NavLink exact to="/header" className="mx-6 font-semibold "style={{ color : '#ffff',}}>หน้าหลัก</NavLink>
        <NavLink to="/dresses" className="mx-6 font-semibold" activeClassName="text-red-600 ">ประเภทสินค้า</NavLink> 
        <NavLink to="/reviews" className="mx-6 font-semibold" activeClassName="text-red-600 ">บทความ</NavLink>
        <NavLink to="/contact" className="mx-6 font-semibold" activeClassName="text-red-600 ">ติดต่อเรา</NavLink> 
      </div>
      <div className="flex-none">
        <ul className="  flex justify-end items-center p-1" style={{top:'-60px'}}>
        <li>
                        <Link to='/' onClick={handleLogoutClick}>ออกจากระบบ</Link>
              </li>
        </ul>
      </div>
      <div className='boy' style={{backgroundColor:'#ffff'}}>
        <h1 style={{ fontSize: '2rem', marginTop: '20px',color: 'blue' }}>สินค้าแนะนำ</h1> 
        {/* ส่วนของการแสดงรายการสินค้าและปุ่มเพิ่มสินค้า */}
        <div className="card card-compact w-80 bg-base-100 shadow-xl mt-40 ml-60" style={{ marginLeft: '40px' }}>
               <figure className="px-10 pt-10">
               <img src="../photo/crab.jpeg" alt="Shoes"  />
               </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">ปูม้า</h2>
                <p style={{ color: 'red' }}>กิโลกรัมละ 850 ฿</p>
              <div className="card-actions">
              <button className="btn btn-primary">เพิ่มลงรถเข็น</button>
              </div>
              </div>
              </div>

              <div className="card card-compact w-80 bg-base-100 shadow-xl  " style={{ marginLeft: '420px', marginTop: '-325px', }}>
               <figure className="px-10 pt-10">
               <img src="photo/shrimp.jpg" alt="Shoes"  />
               </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">กุ้งแม่น้ำ</h2>
                <p style={{ color: 'red' }}>กิโลกรัมละ 1500 ฿</p>
              <div className="card-actions">
              <button className="btn btn-primary">เพิ่มลงรถเข็น</button>
              </div>
              </div>
              </div>

              <div className="card card-compact w-80  bg-base-100 shadow-xl  " style={{ marginLeft: '810px', marginTop: '-355px' }}>
               <figure className="px-10 pt-10">
               <img src="photo/fish.png" alt="Shoes"  style={{ width: '70%'}}/>
               </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">ปลากระพง</h2>
                <p style={{ color: 'red' }}>กิโลกรัมละ 248 ฿</p>
              <div className="card-actions">
              <button className="btn btn-primary">เพิ่มลงรถเข็น</button>
              </div>
              </div>
              </div>

              <div className="card card-compact w-80  bg-base-100 shadow-xl  " style={{ marginLeft: '1200px', marginTop: '-365px' }}>
               <figure className="px-10 pt-10">
               <img src="photo/Cockle.png" alt="Shoes"  style={{ width: '70%'}}/>
               </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">หอยแครง</h2>
                <p style={{ color: 'red' }}>กิโลกรัมละ 140 ฿</p>
              <div className="card-actions">
              <button className="btn btn-primary">เพิ่มลงรถเข็น</button>
              </div>
              </div>
              </div>

          
              <div className="card card-compact w-80  bg-base-100 shadow-xl  " style={{ marginLeft: '1200px', marginTop: '90px' }}>
               <figure className="px-10 pt-10">
               <img src="photo/Mussels.webp" alt="Shoes"  style={{ width: '70%'}}/>
               </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">หอยแมลงภู่</h2>
                <p style={{ color: 'red' }}>กิโลกรัมละ 25 ฿</p>
              <div className="card-actions">
              <button className="btn btn-primary">เพิ่มลงรถเข็น</button>
              </div>
              </div>
              </div>

              <div className="card card-compact w-80  bg-base-100 shadow-xl  " style={{ marginLeft: '810px', marginTop: '-350px' }}>
               <figure className="px-10 pt-10">
               <img src="photo/squid.jpg" alt="Shoes"  style={{ width: '70%'}}/>
               </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">หมึกกระดอง</h2>
                <p style={{ color: 'red' }}>กิโลกรัมละ 230 ฿</p>
              <div className="card-actions">
              <button className="btn btn-primary">เพิ่มลงรถเข็น</button>
              </div>
              </div>
              </div>

              <div className="card card-compact w-80 bg-base-100 shadow-xl  " style={{ marginLeft: '420px', marginTop: '-390px' }}>
               <figure className="px-10 pt-10">
               <img src="photo/shellfish.jpg" alt="Shoes"  style={{ width: '83%'}}/>
               </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">หอยหวาน</h2>
                <p style={{ color: 'red' }}>กิโลกรัมละ 140 ฿</p>
              <div className="card-actions">
              <button className="btn btn-primary">เพิ่มลงรถเข็น</button>
              </div>
              </div>
              </div>

              <div className="card card-compact w-80  bg-base-100 shadow-xl  " style={{ marginLeft: '40px', marginTop: '-355px',}}>
               <figure className="px-10 pt-10 ">
               <img src="photo/crayfish.png" alt="Shoes" style={{ width: '100%',}} />
               </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">กั้งแก้ว</h2>
                <p style={{ color: 'red' }}>กิโลกรัมละ 390 ฿</p>
              <div className="card-actions">
              <button className="btn btn-primary">เพิ่มลงรถเข็น</button>
              </div>
              </div>
              </div>
              
         </div>
         <div className="card-actions justify-end">
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                          <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
                          </form>
                          <h3 className="font-bold text-lg">กรุณาเข้าสู่ระบบค่ะ</h3>
                          <p className="py-4">กรุณาเข้าสู่ระบบเพื่อทำการสั่งซื้อ</p>
                        </div>
                      </dialog>
                    </div>
</div>
  );
}


export default UserHeader;
