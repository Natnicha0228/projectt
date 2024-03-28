import React, { useState } from 'react';
import { NavLink , Link} from 'react-router-dom';
import '../layout/style.css';
import useAuth from '../hooks/useAuth';

function DressesUser() {
    
    const [foodType, setFoodType] = useState(null);
    const { logout } = useAuth();

    const handleLogoutClick = () => {
        logout();
    };
    
    const handleClick = (type) => {
        setFoodType(type); 
    }

    
    const activeColor = 'yellow';

    
    const handleColorChange = (category) => {
        
        const buttons = document.querySelectorAll('.menu button');
        buttons.forEach(button => button.style.color = '');

        
        const button = document.querySelector(`.menu button[data-category="${category}"]`);
        button.style.color = activeColor;
    }


    return (
        <div className="navbar1">
            <div className="flex-1">
                <img src="../photo/shark-removebg.png" alt="Logo" className='logo'/>
            </div>
            <div className="flex-1 flex justify-center gap-40 ">
                <NavLink exact to="/" className="mx-6 font-semibold " activeClassName="text-red-600 ">หน้าหลัก</NavLink>
                <NavLink to="/dresses" className="mx-6 font-semibold" style={{ color : '#ffff',}}>ประเภทสินค้า</NavLink> 
                <NavLink to="/reviews" className="mx-6 font-semibold" activeClassName="text-red-600 ">บทความ</NavLink>
                <NavLink to="/contact" className="mx-6 font-semibold" activeClassName="text-red-600 ">ติดต่อเรา</NavLink> 
            </div>
            <div className="flex-none">
                <ul className=" flex justify-end items-center " style={{top:'-60px'}}>
                    <li>
                        <Link to='/' onClick={handleLogoutClick}>ออกจากระบบ</Link>
              </li>
                </ul>
            </div>
            <div className='boy' style={{backgroundColor:'#ffff'}}>
                <h1 style={{ fontSize: '1.5rem', marginTop: '20px', textAlign: 'left', fontFamily: 'Arial, sans-serif' }}>หมวดหมู่ผลิตภัณฑ์</h1>
                <ul className="menu bg-base-200 w-56 rounded-box">
                    <li><button onClick={() => { handleClick('dry-food'); handleColorChange('dry-food'); }}>อาหารแห้ง</button></li>
                    <li><button onClick={() => { handleClick('fresh-food'); handleColorChange('fresh-food'); }}>อาหารสด</button></li>
                    <li><button onClick={() => { handleClick('frozen-food'); handleColorChange('frozen-food'); }}>อาหารแช่แข็ง</button></li>
                    <li><button onClick={() => { handleClick('processed-food'); handleColorChange('processed-food'); }}>อาหารแปรรูป</button></li>
                </ul>
        
                {foodType && (
                    <div>
                        {foodType === 'fresh-food' && (
                            <div>
                                <div className="card card-compact w-60 bg-base-100 shadow-xl  " style={{ marginLeft: '30%', marginTop: '-250px', }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/shrimp.jpg" alt="Shoes"  />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">กุ้งแม่น้ำ</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 1500 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '810px', marginTop: '-290px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/c.webp" alt="Shoes"  style={{ width: '100%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ปูหิมะ</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 2550 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '1150px', marginTop: '-290px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/AAA.jpg" alt="Shoes"  style={{ width: '90%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">กุ้งมังกร</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 1790 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60 bg-base-100 shadow-xl  " style={{ marginLeft: '30%', marginTop: '50px', }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/6fs4l4.jpg" alt="Shoes"  />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">หอยนางรม</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 230 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '810px', marginTop: '-360px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/Cockle.png" alt="Shoes"  style={{ width: '100%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">หอยแครง</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 140 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '1150px', marginTop: '-300px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/pb.png" alt="Shoes"  style={{ width: '100%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">อูนิ</h2>
                                        <p style={{ color: 'red' }}>กล่องละ 5590 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}
                        
                    <div>
                          {foodType === 'dry-food' && (
                            <div>
                               <div className="card card-compact w-60 bg-base-100 shadow-xl  " style={{ marginLeft: '30%', marginTop: '-280px', }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/AA.jpg" alt="Shoes"  />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ปลาหมึกแห้งกระตอย</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 400 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '810px', marginTop: '-350px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/AB.jpg" alt="Shoes"  style={{ width: '100%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ปลาริวกิวหวาน</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 480 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '1150px', marginTop: '-350px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/AC.jpg" alt="Shoes"  style={{ width: '90%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">กุ้งแห้งฝอยส้ม</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 250 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-compact w-60 bg-base-100 shadow-xl  " style={{ marginLeft: '30%', marginTop: '50px', }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/AD.jpg" alt="Shoes"  />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ปลาช่อนทะเลแห้ง</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 280 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '810px', marginTop: '-360px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/Cockle.png" alt="Shoes"  style={{ width: '100%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">หอยแครง</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 140 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '810px', marginTop: '-360px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/AE.jpg" alt="Shoes"  style={{ width: '80%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ปลากระเบนวง</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 260 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '1150px', marginTop: '-375px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/AF.jpg" alt="Shoes"  style={{ width: '100%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ปลาทูหวานแดง</h2>
                                        <p style={{ color: 'red' }}>กล่องละ 5590 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          )}
                     </div>
                    <div>
                          {foodType === 'frozen-food' && (
                            <div>
                                <div className="card card-compact w-60 bg-base-100 shadow-xl  " style={{ marginLeft: '30%', marginTop: '-280px', }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/crab.jpeg" alt="Shoes"  />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ปูม้า</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 850 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '810px', marginTop: '-315px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/shellfish.jpg" alt="Shoes"  style={{ width: '80%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">หอยหวาน</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 140 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '1150px', marginTop: '-324px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/BA.jpg" alt="Shoes"  style={{ width: '85%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">หอยเชลล์โฮตาเตะ</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 250 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60 bg-base-100 shadow-xl  " style={{ marginLeft: '30%', marginTop: '50px', }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/squid.jpg" alt="Shoes"  />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ปลาหมึกกระดอง</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 230 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '810px', marginTop: '-300px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/BB.png" alt="Shoes"  style={{ width: '100%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ปูจุด</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 105 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '1150px', marginTop: '-340px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/bc.png" alt="Shoes"  style={{ width: '100%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ปลาเก๋า แล่เนื้อหั่นชิ้น</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 850 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          )}
                     </div>
                     <div>
                          {foodType === 'processed-food' && (
                            <div>
                               <div className="card card-compact w-60 bg-base-100 shadow-xl  " style={{ marginLeft: '30%', marginTop: '-250px', }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/CA.jpg" alt="Shoes"  />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">เต้าหู้ปลา</h2>
                                        <p style={{ color: 'red' }}>200กรัม 100 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '810px', marginTop: '-335px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/cb.png" alt="Shoes"  style={{ width: '90%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ทอดมันปลากราย</h2>
                                        <p style={{ color: 'red' }}>1โล 140฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '1150px', marginTop: '-330px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/CC.jpg" alt="Shoes"  style={{ width: '90%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ปูอัด</h2>
                                        <p style={{ color: 'red' }}>500กรัม 80 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60 bg-base-100 shadow-xl  " style={{ marginLeft: '30%', marginTop: '50px', }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/CD.png" alt="Shoes"  />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">หมึกหยองเซอรี่</h2>
                                        <p style={{ color: 'red' }}>1กิโล 500 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '810px', marginTop: '-295px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/CE.jpg" alt="Shoes"  style={{ width: '100%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ปลาทาโร</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 320 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-compact w-60  bg-base-100 shadow-xl  " style={{ marginLeft: '1150px', marginTop: '-300px' }}>
                                    <figure className="px-10 pt-10">
                                        <img src="photo/CF.jpg" alt="Shoes"  style={{ width: '70%'}}/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ปลาหวาน</h2>
                                        <p style={{ color: 'red' }}>กิโลกรัมละ 155 ฿</p>
                                        <div className="card-actions">
                                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} style={{ position: 'relative', top: '-1px' }}>เพิ่มลงรถเข็น</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                     )}
                     </div>
                    </div>
                  
                )}
            </div>
        
        </div>
    );
}

export default DressesUser;