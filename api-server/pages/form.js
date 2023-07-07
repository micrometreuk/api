import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/FormLayout";
import { siteData } from "../data/form-data";

export default function PageWithJSbasedForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      firstName: event.target.first.value,
      lastName: event.target.last.value,
      domain: event.target.domain.value,
      company: event.target.company.value,
      logo: event.target.logo.value,
      phone: event.target.phone.value,
      mobile: event.target.mobile.value,
      email: event.target.email.value,
      twitter: event.target.twitter.value,
      facebook: event.target.facebook.value,
      instagram: event.target.instagram.value,
      google: event.target.google.value,
      youtube: event.target.youtube.value,
    };
    const JSONdata = JSON.stringify(data);
    const response = await fetch("/api/form", {
      body: JSONdata,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await response.json();
    alert(`Data for domain: ${result.data}`);
  };
  return (
    <Layout>
      <div
        style={{
          marginTop: "5rem",
          padding: "1em",
        }}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="first"> First Name</label>
          <input type="text" id="first" name="first" required />
          <label htmlFor="last">Last Name</label>
          <input type="text" id="last" name="last" required />
          <label htmlFor="domain">Domain Name</label>
          <input type="text" id="domain" name="domain" required />
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" required />
          <label htmlFor="logo">Company/Brand Logo</label>
          <input type="text" id="logo" name="logo" required />
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" required />
          <label htmlFor="mobile">Mobile Phone Number</label>
          <input type="text" id="Mobile" name="mobile" required />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" name="twitter" required />
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebok" name="facebook" required />
          <label htmlFor="instagram">Instagram</label>
          <input type="text" id="instagram" name="instagram" required />
          <label htmlFor="google">Google: reviews & map </label>
          <input type="text" id="google" name="google" required />
          <label htmlFor="youtube">Youtube </label>
          <input type="text" id="youtube" name="youtube" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
}
