import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Please make a post request",
    });
  }

  const contactData = JSON.parse(req.body);

  const { error } = await supabase.from("contact").insert([contactData]);

  if (error) {
    res.status(500).json({
      success: false,
      message: "Could not send ypur message. Please try again",
    });
  }

  //   success message
  res.status(200).json({
    success: true,
    message: "Thanks for your message! will be in touch soon :)",
  });
}
