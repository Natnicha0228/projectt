import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import'../layout/style.css';

function Reviews() {
    return (
      <div className="navbar1">
        <div className= "flex-1">
        <img src="../photo/shark-removebg.png" alt="Logo" className='logo'/>
        </div>
          <div className="flex-1 flex justify-center gap-40 ">
            <NavLink exact to="/" className="mx-6 font-semibold " activeClassName="text-red-600 ">หน้าหลัก</NavLink>
            <NavLink to="/dresses" className="mx-6 font-semibold" activeClassName="text-red-600 ">ประเภทสินค้า</NavLink> 
            <NavLink to="/reviews" className="mx-6 font-semibold" style={{ color : '#ffff',}}>บทความ</NavLink>
            <NavLink to="/contact" className="mx-6 font-semibold" activeClassName="text-red-600 ">ติดต่อเรา</NavLink> 
           </div>
           <div className="flex-none">
              <ul className=" flex justify-end items-center p-1" style={{top:'-60px'}}>
              <li>
                <NavLink to="/login" className="mx-3 text-sm border border-red-500 rounded-md px-2 py-1" style={{ color: '#ffff',backgroundColor:"red" }}>เข้าสู่ระบบ</NavLink>
              </li>
              <li>
                <NavLink to="/register" className="mx-5 text-sm border border-green-500 rounded-md px-2 py-1" style={{ color: '#ffff',backgroundColor:'green' }}>สมัครสมาชิก</NavLink>
              </li>
             </ul>
           </div>
           <div className='boy1'>
              <h1 style={{ fontSize: '1.5rem', marginTop: '20px', textAlign: 'left',fontFamily: 'Arial, sans-serif' }}>
                  <span style={{ color: 'blue' }}>บทความ</span> การเลือกซื้อ
              </h1>
                 <p style={{ fontSize: '1.5rem',  textAlign: 'left',fontFamily: 'Arial, sans-serif' }}>การเลือกซื้ออาหารทะเลถ้าอยากได้ของสดใหม่ บางครั้งคงต้องพิถีพิถันในการเลือก</p>
            <div className='boy2'>
                 <h1 style={{textAlign: 'left',fontSize: '1.2rem',fontFamily: 'Arial, sans-serif'}}>การเลือกซื้ออาหารทะล</h1>
                 <p style={{textAlign: 'left',}}>เป็นขั้นตอนที่สำคัญที่สุดของขบวนการปรุงอาหารทะเล การเลือกซื้ออาหารทะเลขึ้นอยู่กับอาหารทะเลแต่ละชนิด ดังนี้</p>
              
                     <ul>
                        <li>
                            <p className='lead1'>
                               1. ปลา มีเหงือกสีแดงสด ไม่เขียวคล้ำครีบปิดสนิท ตาใส หากปลามีเกล็ดให้สังเกตที่เกล็ดถ้าหากเป็นปลาสดเกล็ดจะติดแน่นไปกับลำตัว เกล็ดใสชุ่มชื้น สีสวย ถ้าเป็นปลาไม่มีเกล็ดให้ดูที่สีของผิวจะเป็นประกาย ผิวใส เนื้อแน่น
                            </p>
                       </li>
                       <li>
                            <p className='lead2'>
                              2. กุ้ง หางต้องมีสีสดใส หัวกับตัวยังติดกันแน่น ตากุ้งใส ไม่มีกลิ่นคาวกันมากเกินไป
                           </p>
                       </li>
                       <li>
                           <p className='lead3'>
                           3. หอยแครงสด นั้นต้องมีชีวิตอยู่เท่านั้น เพราะหอยชนิดนี้ถ้าตายจะส่งกลิ่นเหม็นทันที สังเกตได้โดยหอยอ้า และไม่มีการขยับเขยื้อนเลยซักตัว หอยแมลงภู่สด ฝาหอยจะต้องปิดสนิท ตัวหอยจะต้องสะอาด ไม่มีเศษขยะหรือหยากไย่เกาะจนมากเกินไป หอยลายสด ฝาจะต้องไม่อ้าจนเห็นตัวหอยข้างใน ตัวหอยไม่มีการเคลื่อนไหวแต่บางตัวถ้ายังไม่ตายจะติ่งเนื้อโผล่ออกมาและเคลื่อนไหวได้ หอยนางรม ตัวหอยต้องมีสีครีมตามธรรมชาติ และมีน้ำใสๆเคลือบอยู่
                           </p>
                      </li>
                      <li>
                           <p className='lead3'>
                           4. ปูทะเล ให้พลิกหงายปู ดูที่ท้อง ถ้ามีสีเหลืองอ่อนหรือมีคราบอยู่ตามร่องระหว่างปล้อง แสดงว่าเป็นเปลือกเก่า ปูผ่านการรอกคราบมานานแล้วและได้สะสมอาหารไว้มาก ลักษณะนี้บ่งบอกว่าเป็นปูเนื้อแน่น แต่ถ้าใช้นิ้วกดบริเวณส่วนท้อง (จับปิ้ง) ถ้านิ่มหรือยุบตัวแสดงว่าเพิ่งผ่านการลอกคราบมาไม่นาน จึงยังไม่ได้สะสมอาหารไว้ เป็นปูโพรกมีเนื้อน้อย
                           </p>
                      </li>
                      <li>
                           <p className='lead3'>
                           5. ปลาหมึก ลำตัวต้องสะอาดสดใสดูเต่งตึง หนังไม่หลุดร่อน ตาใส ส่วนหนวดต้องไม่หลุดออกจากลำตัว
                           </p>
                      </li>
                      <li>
                           <p className='lead3'>
                           5. ปลาหมึก ลำตัวต้องสะอาดสดใสดูเต่งตึง หนังไม่หลุดร่อน ตาใส ส่วนหนวดต้องไม่หลุดออกจากลำตัว
                           </p>
                      </li>
                    </ul>



            </div>
          </div>
          
          
  </div>
  
  
    );
  }

  export default Reviews ;