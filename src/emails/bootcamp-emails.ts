import axios from 'axios';
import emailjs from 'emailjs-com';


export const sendEmailJSToClient = async (formData: any, paymentProcessed: boolean, setFailureOpen: Function, setSnackbarText: Function) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_PAYMENT_SUCCESS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    const newFormdata = {
        status: `${!paymentProcessed ? "Not Paid!" : "Payment processed!"} `,
        ...formData
    }
    try {
        const response = await emailjs.send(serviceId, templateId, newFormdata, userId);
        console.log('Email sent successfully:', response.status, response.text);
    } catch (error) {
        console.error('Error sending email:', error);
        setFailureOpen(true);
        setSnackbarText("Something went wrong, please try again");
        throw error;
    }
};



export const sendMandrillEmailToMailbox = async (formData: any, setSuccessOpen: Function, setSnackbarText: Function) => {
    const mandrillApiKey = import.meta.env.VITE_MANDRILL_API_KEY;
    const message = {
        subject: 'New Registration - ABCD-PR Bootcamp',
        from_email: 'website-contact@hopearthritisfoundation.com',
        to: [{ email: 'masterclass@hopearthritisfoundation.com', type: 'to' }],
        html: `
            <p>New registration received:</p>
            <ul>
                <li>Name: ${formData.first_name} ${formData.last_name}</li>
                <li>Email: ${formData.email}</li>
                <li>Phone: ${formData.phone_number}</li>
                <li>Country: ${formData.country}</li>
                <li>Cadre: ${formData.cadre}</li>
                <li>Level of Experience: ${formData.experience}</li>
                <li>Institution: ${formData.institution}</li>
                <li>Amount: ${formData.amount_view}</li>
            </ul>
            <p><b>Status</b>: Not paid</p>
            <p>Thank you,<br/>HopeArthritis Team</p>
        `,
    };

    try {
        const response = await axios.post(
            'https://mandrillapp.com/api/1.0/messages/send.json',
            { key: mandrillApiKey, message: message }
        );
        console.log('Email sent successfully:', response.data);
        setSuccessOpen(true);
        setSnackbarText("Payment request initiated successfully");
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};


export const sendSuccessEmailToMailbox = async (formData: any, setFailureOpen: Function, setSnackbarText: Function) => {
    const mandrillApiKey = import.meta.env.VITE_MANDRILL_API_KEY;
    const message = {
        subject: 'Payment Received - ABCD-PR Bootcamp',
        from_email: 'website-contact@hopearthritisfoundation.com',
        to: [{ email: 'masterclass@hopearthritisfoundation.com', type: 'to' }],
        html: `
            <p>Payment received for the following registration:</p>
            <ul>
                <li>Name: ${formData.first_name} ${formData.last_name}</li>
                <li>Email: ${formData.email}</li>
                <li>Phone: ${formData.phone_number}</li>
                <li>Country: ${formData.country}</li>
                <li>Cadre: ${formData.cadre}</li>
                <li>Level of Experience: ${formData.experience}</li>
                <li>Institution: ${formData.institution}</li>
                <li>Amount: ${formData.amount_view}</li>
            </ul>
            <p><b>Status</b>: Payment processed</p>
            <p>Thank you,<br/>HopeArthritis Team</p>
        `,
    };

    try {
        const response = await axios.post(
            'https://mandrillapp.com/api/1.0/messages/send.json',
            { key: mandrillApiKey, message: message }
        );
        console.log('Payment notification email sent to inbox:', response.data);
    } catch (error) {
        console.error('Error sending payment notification email:', error);
        setFailureOpen(true);
        setSnackbarText("Something went wrong, please try again");
        throw error;
    }
};
