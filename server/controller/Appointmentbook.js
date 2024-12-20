const appointment = require("../model/Appointment")


exports.bookAppointments = async(req,res) =>{
    try {
        const {Name,Email,Phone_Number,Luxury,AppointmentDate,AppointmentSolot} = req.body

        console.log(Name,Email,Phone_Number,Luxury,AppointmentDate,AppointmentSolot)

        if(!Name || !Email || !Phone_Number || !Luxury || !AppointmentDate || !AppointmentSolot){
            return res.status(400).json({
                success:false,
                message:"All Filed are Required."
            })
        }

        const userappointment = await appointment.create({
            Name:Name,
            Email:Email,
            Phone_Numbers:{Phone_Number:Phone_Number},
            Luxury:Luxury,
            Text_messages:{textPhone_Number:Phone_Number},
            AppointmentDate:AppointmentDate,
            AppointmentSolot:AppointmentSolot
        })

        res.status(200).json({
            success:true,
            message:"Booked Appointment successfully. ",
            userappointment
        })


    } catch (error) {
        console.log("server Error",error)
        res.status(500).json({
            success:false,
            message:"oops! Something wan't to wrong"
        })
    }
}