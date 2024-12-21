import toast from 'react-hot-toast';
import { appointment_Endpoint } from '../api';
import { ApiConneter } from '../apiConnter';

export async function book(data1, navigate) {
    const toastID = toast.loading("wait...")
    try {
        // console.log("Data being sent to API:", data1);

        const response = await ApiConneter(
            "POST",
            appointment_Endpoint.APPOINTMENT_API_URL_USER,
            data1
        );

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        // console.log("API Response:", response);
        toast.success("apointment is final.")
        navigate("/");
    } catch (error) {
        // console.error("Error occurred:",error);
        toast.error("oops! somting wan't to wrong")
    }
    toast.dismiss(toastID)
}
