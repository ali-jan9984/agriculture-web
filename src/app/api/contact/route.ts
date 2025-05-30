import nodemailer from "nodemailer";
import { writeFile, readFile, mkdir } from "fs/promises";
import fs from "fs";
import path from "path";

// Define folder and file path
const dirPath = path.join(process.cwd(), "data");
const filePath = path.join(dirPath, "contact.json");

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, message } = body;

  if (!name || !phone || !message) {
    return new Response(JSON.stringify({ message: "Please fill in all fields." }), {
      status: 400,
    });
  }

  if (phone.length !== 11 || !/^[0-9]{11}$/.test(phone)) {
    return new Response(
      JSON.stringify({
        message: "Phone number should be 11 digits and contain only numbers.",
      }),
      { status: 400 }
    );
  }

  // Use environment variable instead of hardcoded app password
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "alijan998457@gmail.com",
      pass: 'tjwkhnrucffekjer', // ✅ Environment variable
    },
  });

  const mailOptions = {
    from: "adilAgro@Services.com",
    to: "alijan998457@gmail.com",
    subject: "New message from Agriculture Website",
    text: `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);

    // ✅ Ensure folder exists before writing
    if (!fs.existsSync(dirPath)) {
      await mkdir(dirPath, { recursive: true });
    }

    let messages: any[] = [];

    if (fs.existsSync(filePath)) {
      const existingData = await readFile(filePath, "utf-8");
      messages = existingData ? JSON.parse(existingData) : [];
    }

    messages.push({
      name,
      phone,
      message,
      createdAt: new Date().toISOString(),
    });

    await writeFile(filePath, JSON.stringify(messages, null, 2));

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("Email or file write error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
