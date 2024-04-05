import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import ConfirmDelete from "./ConfirmDelete";
import EmailService from "../../service/EmailService";
import EmailSkeleton from "./EmailSkeleton";

function TrackMail() {
  const [emails, setEmails] = useState([]);
  const [selectedOption, setSelectedOption] = useState("2");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [emailIdToDelete, setEmailIdToDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(true);



  const fetchData = useCallback(async() => {
    try {
      const data = await EmailService.getEmails(selectedOption);
      setEmails(data);
    } catch (error) {
      console.error('Error loading emails:', error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedOption]);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, [fetchData, selectedOption]);
  // console.log(emails)

  
  const handleDeleteEmailData = async (emailId) => {
    setEmailIdToDelete(emailId);
    setShowDeleteModal(true);
  };

  const confirmDeleteEmail = async () => {
    try {
      await EmailService.deleteEmail(emailIdToDelete);
      fetchData();
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Error deleting email data:', error);
    }
  };

  const closeModal = () => {
    setShowDeleteModal(false);
  };

  const renderMenu = (emailId) => (
    <div>
      <button className="btn d-flex justify-content-between">
        <span className="mx-2">
          <i className="bi bi-download"></i>
        </span>
        <span className="mx-2">Télécharger les données de l'email</span>
      </button>
      <button className="btn d-flex justify-content-between" onClick={() => handleDeleteEmailData(emailId)}>
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
      {isLoading ? (
        <EmailSkeleton />
      ) : (
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
              {emails.map((email) => (
                email.emails.map((mail, index) => (
                  <tr key={index}>
                    <td className="d-flex justify-content-start align-items-center">
                      <p className="destinataire rounded-pill py-1 px-2 border">{mail.recipient_email}</p>
                    </td>
                    <td className="flex-column">
                      <p>{mail.subject}</p>
                      <p>Envoyé le {new Date(email.sent_at).toLocaleString()}</p>
                    </td>
                    <td className="flex-column">
                      <p>Ouverture</p>
                      {mail.opened_at && <p>Ouvert le {new Date(mail.opened_at).toLocaleString()}</p>}
                    </td>
                    <td className="d-flex justify-content-center">
                      <Tippy content={renderMenu(mail.id)} placement="left" arrow={true} interactive={true} trigger="click" className="actionsMenu">
                        <i className="bi bi-three-dots actions px-2 py-1 rounded border"></i>
                      </Tippy>
                    </td>
                  </tr>   
                ))
              ))}
            </tbody>
          </table>
        </div>)}
      </div>
      <ConfirmDelete 
        show={showDeleteModal}
        onClose={closeModal}
        onConfirm={confirmDeleteEmail} 
      />
    </div>
  );
}

export default TrackMail;
