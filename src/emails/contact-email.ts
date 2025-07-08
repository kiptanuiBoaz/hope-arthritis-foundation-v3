export const generateEmailTemplate = (formData: { name: string; email: string; message: string; }) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Feedback Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
            h2 { color: #333; }
            p { color: #555; margin-bottom: 15px; }
            .label { font-weight: bold; color: #333; }
            .value { margin-left: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Feedback Submission</h2>
            <p><span class="label">Name:</span> <span class="value">${formData.name}</span></p>
            <p><span class="label">Email:</span> <span class="value">${formData.email}</span></p>
            <p><span class="label">Message:</span> <span class="value">${formData.message}</span></p>
          </div>
        </body>
        </html>
    `;
};
