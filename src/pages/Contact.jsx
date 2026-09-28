import { useState } from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { SITE } from "../data/site.js";

const EMPTY = { name: "", email: "", subject: "", message: "" };

function InfoItem({ icon, title, children, delay }) {
  return (
    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={delay}>
      <i className={`bi ${icon} flex-shrink-0`} />
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  usePageTitle("SaloniPortfolio - Contact");
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: SITE.web3formsKey, ...values }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "The message could not be sent.");
      setStatus({ state: "success", message: "Your message has been sent. Thank you!" });
      setValues(EMPTY);
    } catch (err) {
      setStatus({ state: "error", message: err.message || "The message could not be sent. Please try again." });
    }
  }

  return (
    <section id="contact" className="contact section">
      <SectionTitle title="Contact">
        Have a question or want to work together? Feel free to reach out—let’s create something amazing!
      </SectionTitle>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <InfoItem icon="bi-geo-alt" title="Address" delay={200}>
                {SITE.address}
              </InfoItem>
              <InfoItem icon="bi-telephone" title="Call Us" delay={300}>
                {SITE.phone}
              </InfoItem>
              <InfoItem icon="bi-envelope" title="Email Us" delay={400}>
                {SITE.email}
              </InfoItem>
              <iframe
                title="Map"
                src={SITE.mapEmbedUrl}
                width="100%"
                height="270px"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="col-lg-7">
            <form onSubmit={onSubmit} data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" className="form-control" required value={values.name} onChange={onChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input type="email" name="email" id="email-field" className="form-control" required value={values.email} onChange={onChange} />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input type="text" name="subject" id="subject-field" className="form-control" required value={values.subject} onChange={onChange} />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea name="message" id="message-field" className="form-control" rows={10} required value={values.message} onChange={onChange} />
                </div>
                <div className="col-md-12 text-center">
                  {status.state === "success" && <div className="alert alert-success" role="status">{status.message}</div>}
                  {status.state === "error" && <div className="alert alert-danger" role="alert">{status.message}</div>}
                  <button
                    type="submit"
                    disabled={status.state === "sending"}
                    style={{ backgroundColor: "#34b7a7", color: "#fff", borderStyle: "hidden", padding: 10, borderRadius: 50 }}
                  >
                    {status.state === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
