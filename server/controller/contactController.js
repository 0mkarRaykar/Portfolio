import { Contact } from "../models/contactModel.js";

// Controller for handling contact form submissions
const contactMe = async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  // Check if any field is missing or empty
  if ([fullName, email, subject, message].some((field) => !field?.trim())) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Create a new contact document
    const newContact = new Contact({
      fullName,
      email,
      subject,
      message,
    });

    // Save to MongoDB
    await newContact.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};

export { contactMe };
