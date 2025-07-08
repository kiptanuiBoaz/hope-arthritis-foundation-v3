import axios from 'axios';
import emailjs from 'emailjs-com';


export const sendEmailToClient = async (formData: any, paymentProcessed: boolean) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_FEEDBACK_TEMPLATE_ID;
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
        throw error;
    }
};

export const sendEmailToMailBox = async (formValues: any, paymentProcessed: boolean) => {
    const mandrillApiKey = import.meta.env.VITE_MANDRILL_API_KEY;


    const message = {
        html: `
            <p>New registration received for JIA Masterclass:</p>
            <ul>
                <li>Name: ${formValues.first_name} ${formValues.last_name}</li>
                <li>Email: ${formValues.email}</li>
                <li>Phone: ${formValues.phone_number}</li>
                <li>Amount: ${formValues.amount_view}</li>
            </ul>
            <p><b>Status</b>: ${!paymentProcessed ? "Not Paid!" : "Payment processed!"}</p>
            <p>Thank you,<br/>HopeArthritis Team</p>
        `,
        subject: 'New Registration for Masterclass',
        from_email: 'website-contact@hopearthritisfoundation.com',
        to: [{
            email: 'masterclass@hopearthritisfoundation.com',
            type: 'to',
        }],
        headers: {
            'Reply-To': 'masterclass@hopearthritisfoundation.com',
        },
        track_opens: true,
        track_clicks: true,
    };

    try {
        const response = await axios.post(
            'https://mandrillapp.com/api/1.0/messages/send.json',
            { key: mandrillApiKey, message: message }
        );
        console.log(`Email sent to 'masterclass@hopearthritisfoundation.com'}`);
    } catch (error) {
        console.error(`Error sending email to admin`, error);
        throw error;
    }
};
