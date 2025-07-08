import axios from "axios";

/**
 * Subscribes a user to the Mailchimp audience using the specified API endpo.
 *  email: formData.email,
        firstName: formData.first_name,
        lastName: formData.last_name,
        phone: formData.phone_number,
        tags: "bootcamp25",
        cadre: formData.cadre,
        country: formData.country,
        experience: formData.experience,
        institution: formData.institution,
 */
export const subscribeToMailchimp = async ({
    email,
    firstName = "",
    lastName = "",
    phone = "",
    tags = "",
    cadre = "",
    country = "",
    experience = "",
    institution = "",
    // Add any other fields you want to include in the payload

}: any) => {


    const url = "https://app.hopearthritisfoundation.com/hope/v1/mailchimp-subscribe";

    const payload = {
        email,
        firstName,
        lastName,
        phone,
        tags,
        cadre,
        country,
        experience,
        institution,
    };

    try {
        const response = await axios.post(url, payload, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data; // Success response from API
    } catch (error: any) {
        if (error.response) {
            // API returned an error response
            throw new Error(error.response.data.message || "Subscription failed");
        } else {
            // Other errors
            throw new Error(error.message || "An error occurred");
        }
    }
};

