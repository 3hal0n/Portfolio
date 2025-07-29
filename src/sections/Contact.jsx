import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import AnimatedInterstellarShip from "../components/AnimatedInterstellarShip";
import { Canvas } from "@react-three/fiber";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Shalon",
          from_email: formData.email,
          to_email: "shalonfernando52@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );
      setFormData({ name: "", email: "", message: "" }); // Clear form
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      console.error("EmailJS error:", error);
      showAlertMessage("danger", "Something went wrong! Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing" id="contact">
      <Particles className="absolute inset-0 -z-50" quantity={100} ease={80} color={"#ffffff"} refresh />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 z-10">
        <div className="flex flex-col items-center justify-center max-w-md p-5 border border-white/10 rounded-2xl bg-primary w-full md:w-1/2">
          <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="text-heading">Let's Talk</h2>
            <p className="font-normal text-neutral-400">
              Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
            </p>
          </div>
          <form className="w-full" onSubmit={handleSubmit} noValidate>
            <div className="mb-5">
              <label htmlFor="name" className="feild-label">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="feild-label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="john.doe@email.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="feild-label">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="field-input field-input-focus"
                placeholder="Share your thoughts..."
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {!isLoading ? "Send" : "Sending..."}
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2 h-[400px] md:h-[500px]">
          <Canvas camera={{ position: [0, 0, 10] }} style={{ width: "100%", height: "100%" }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <pointLight position={[-5, 5, 5]} intensity={0.7} />
            <AnimatedInterstellarShip scale={0.015} position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;
