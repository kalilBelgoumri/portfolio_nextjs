import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(message);


useEffect(() => {
      // APPEL API //
      axios.post(`http://localhost:3000/api/contactRequests`).then((res) => {
        alert("Merci, vous serez recontacté d’ici peu");
      });
    }, [input])
  }


  return (
    <Layout name="Contact">
      <h1 className="text-2xl text-center">Contact</h1>
      <form className="p-4 m-2 flex flex-col justify-center items-center">
        <div className="flex">
          <label> Votre mail : </label>
          <input
            type="text"
            className="border-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="py-5">
          <label> Votre message : </label>
          <input
            type="textarea"
            className="border-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </div>

        <button className="border-4 p-2" onClick={handleSubmit}>
          Let's Go
        </button>
      </form>
    </Layout>
  );
};

export default Contact;
