import emailjs from "@emailjs/browser";

// inside handleSubmit()
if (Object.keys(newErrors).length === 0) {
  // send email via emailjs
  emailjs
    .send(
      "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
      "YOUR_TEMPLATE_ID", // Replace with your Template ID
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        address: form.address,
        date: form.date,
      },
      "YOUR_PUBLIC_KEY" // Replace with your Public Key from EmailJS
    )
    .then(() => {
      alert("Message sent successfully!");
      setForm({ name: "", phone: "", email: "", address: "", date: "" }); // reset
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Failed to send message.");
    });
}
