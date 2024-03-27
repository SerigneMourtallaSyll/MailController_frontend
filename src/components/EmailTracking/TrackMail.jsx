import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Tippy from "@tippyjs/react";

function TrackMail() {
  const [emails, setEmails] = useState([]);
  const [selectedOption, setSelectedOption] = useState("2");
  const [filter, setFilter] = useState("");
  const [openEmail, setOpenEmail] = useState("");

  const fetchData = useCallback(() => {
    try {
      const unsubscribeEmails = async () => {
        let url = "https://api-django-email.onrender.com/get-email-tracking-data/";
        if (selectedOption !== "2") {
          url += `?opened=${selectedOption === "1" ? "1" : "0"}`;
        }
        const response = await axios.get(url);
        setEmails(response.data);
      };

      unsubscribeEmails();
    } catch (error) {
      console.error("Error loading emails:", error);
    }
  }, [selectedOption]);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, [fetchData, selectedOption]);

  const renderMenu = () => (
    <div>
      <button className="btn d-flex justify-content-between">
        <span className="mx-2">
          <i className="bi bi-download"></i>
        </span>
        <span className="mx-2">Télécharger les données de l'email</span>
      </button>
      <button className="btn d-flex justify-content-between">
        <span className="mx-2">
          <i className="bi bi-trash"></i>
        </span>
        <span className="mx-2">Supprimer les données de l'email</span>
      </button>
    </div>
  );

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="">
      <div className="selectChoice col-4 pt-4">
        <select className="form-select" aria-label="Default select example" value={selectedOption} onChange={handleChange}>
          <option value="1">Last opened emails</option>
          <option value="2">All emails</option>
          <option value="3">Unopened emails</option>
        </select>
      </div>
      <div className="col-12 pt-5">
        <div className="table-responsive">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col" className="text-uppercase">
                  Destinataires
                </th>
                <th scope="col" className="text-uppercase">
                  Email
                </th>
                <th scope="col" className="text-uppercase">
                  Activité
                </th>
                <th scope="col" className="text-uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {emails.map((email, index) => (
                <tr key={index}>
                  <td className="d-flex justify-content-start align-items-center">
                    <p className="destinataire rounded-pill py-1 px-2 border">{email.recipient_email}</p>
                  </td>
                  <td className="flex-column">
                    <p>{email.subject}</p>
                    <p>Envoyé le {new Date(email.sent_at).toLocaleString()}</p>
                  </td>
                  <td className="flex-column">
                    <p>Ouverture</p>
                    {email.opened_at && <p>Ouvert le {new Date(email.opened_at).toLocaleString()}</p>}
                  </td>
                  <td className="d-flex justify-content-center">
                    <Tippy content={renderMenu()} placement="left" arrow={true} interactive={true} trigger="click" className="actionsMenu">
                      <i className="bi bi-three-dots actions px-2 py-1 rounded border"></i>
                    </Tippy>
                  </td>
                </tr>   
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TrackMail;
