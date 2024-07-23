import nodemailer from "nodemailer";

export const sendEmail = async function (appId, appName, appEmail, job) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ghatodep@gmail.com",
      pass: "wdozuefxmipmnypx",
    },
  });

  const mailContent = {
    from: "ghatodep@gmail.com",
    to: appEmail,
    subject: `Successfully Applied on easily - ${appId}`,
    text: `
Hi ${appName},

greetings from easily!

Your job application for the post of ${job.designation} at ${job.compName} has been successfully submitted.
Your application id is ${appId}.

Explore easily to find more such amazing job openings.

Thank You,
Team easily`,
  };

  try {
    const res = await transporter.sendMail(mailContent);
    console.log(`Email sent to - ${appEmail} - ${appId}`);
  } catch (error) {
    console.error(error);
    console.log(`Failed to send email to - ${appEmail} - ${appId}`);
  }
};
