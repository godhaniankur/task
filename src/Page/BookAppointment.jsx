import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { book } from '../service/controller/appointmentbooks';
import { useNavigate } from 'react-router-dom';

const BookAppointment = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate()
    
      const [Phone,setPhone] = useState('')
      const [tPhone,settPhone] = useState('')

  
     const handleondata = async(data)=>{
        const forms = new FormData();
        forms.append("Name",data.Name)
        forms.append("Email",data.Email)
        forms.append("Phone_Number",Phone)
        forms.append("Luxury",data.Luxury)
        forms.append("AppointmentDate",data.AppointmentDate)
        forms.append("AppointmentSolot",data.AppointmentSolot)
        
        await book(forms,navigate)
     }

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className=''>
            <div className=' mt-32 w-11/12 flex mx-auto justify-center items-center'>
                <form onSubmit={handleSubmit(handleondata)} className=" flex flex-col gap-y-2 shadow-md p-5 border  ">
                      <label >
                            <p className='text-sm font-medium px-2 '>Name <sup className='text-red-500'>*</sup></p>
                            <input type="text" placeholder='Name(Required)*'{...register("Name",{required:true})} className='p-2 border w-full outline-none'/>
                            <span>
                                {
                                    errors.Name && <span className='text-xs text-[#8B2723] px-3'>This field is required.</span>
                                }
                            </span>
                      </label>
                      <label>
                            <p className='text-sm font-medium px-2 '>Email <sup  className='text-red-500'>*</sup></p>
                            <input type="email" {...register("Email",{required:true})} 
                            className='border p-2 w-full outline-none'
                            placeholder='Email(Required)*'
                            />
                             <span>
                                {
                                    errors.Email && <span className='text-xs text-[#8B2723] px-3'>This field is required.</span>
                                }
                            </span>
                      </label>
                      <label className='w-full'>
                            <p className='text-sm font-medium px-2 '>Your Phone Number <sup  className='text-red-500 '>*</sup></p>
                            <PhoneInput
                                country={'in'}
                                value={Phone}
                                onChange={(e)=>setPhone(e)}
                                
                                 inputStyle={{width:"100%",padding:"21px",paddingLeft:"50px"}}
                               
                                
                                />
                                 <span>
                                {
                                    errors.Name && <span className='text-xs text-[#8B2723] px-3'>This field is required.</span>
                                }
                            </span>
                      </label>
                      <label>
                            <p className='text-sm font-medium px-2 '>Luxury Studio Appointment<sup  className='text-red-500'>*</sup></p>
                            <select  {...register("Luxury",{required:true})} className='w-full p-2 border outline-none'>
                                 <option>select</option>
                                 <option value="Bridal Lehenga ( ₹80000 Above )">Bridal Lehenga ( ₹80000 Above )</option>
                                 <option value="Non-Bridal Lehenga ( ₹40000 Above )">Non-Bridal Lehenga ( ₹40000 Above )</option>
                                 <option value="Dresses and Gowns ( ₹35000 Above )">Dresses and Gowns ( ₹35000 Above )</option>
                                 <option value="Sarees ( ₹50000 Above )">Sarees ( ₹50000 Above )</option>
                            </select>
                            <span>
                                {
                                    errors.Name && <span className='text-xs text-[#8B2723] px-3'>This field is required.</span>
                                }
                            </span>
                      </label>
                      <label>
                            <p className='text-sm font-medium px-2 '>Send text messages to <sup  className='text-red-500'>*</sup></p>
                            <PhoneInput
                                country={'in'}
                                value={tPhone}
                                onChange={(e)=>settPhone(e)}
                                inputStyle={{width:"100%",padding:"21px",paddingLeft:"50px"}}
                                />
                                 <span>
                                {
                                    errors.Name && <span className='text-xs text-[#8B2723] px-3'>This field is required.</span>
                                }
                            </span>
                      </label>
                      <label>
                            <p className='text-sm font-medium px-2 '>AppointmentDate <sup  className='text-red-500'>*</sup></p>
                            <input type="date" {...register("AppointmentDate",{required:true})}  className='border p-2 w-full outline-none'/>
                            <span>
                                {
                                    errors.AppointmentDate && <span className='text-xs text-[#8B2723] px-3'>This field is required.</span>
                                }
                            </span>
                      </label>
                      <label>
                            <p className='text-sm font-medium px-2 '>AppointmentSolot <sup  className='text-red-500'>*</sup></p>
                            <input type="time" {...register("AppointmentSolot",{required:true})}  className='border p-2 w-full outline-none'/>
                            <span>
                                {
                                    errors.AppointmentSolot && <span className='text-xs text-[#8B2723] px-3'>This field is required.</span>
                                }
                            </span>
                      </label>
                      <span className='text-xs '>By proceeding, you confirm that you have read and agree to Calendly's <span className='text-blue-700'>Terms of Use</span> and <span className='text-blue-700'>Privacy Notice</span>.</span>
                      <button type='submit' className='w-fit mt-5 py-3 rounded-md px-8 text-white bg-[#8B2723]  font-semibold mx-auto'>
                          Sumbit
                      </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default BookAppointment