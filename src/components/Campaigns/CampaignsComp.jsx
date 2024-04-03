import React, { useCallback, useEffect, useState } from "react";
import EmailService from "../../service/EmailService";

function CampaignsComp() {
  const [selectedOption, setSelectedOption] = useState("2");
  const [emails, setEmails] = useState([]);

  const fetchData = useCallback(async() => {
      try {
        const data = await EmailService.getEmails(selectedOption);
        setEmails(data.filter((email) => email.emails.length> 1));
      } catch (error) {
        console.error('Error loading emails:', error);
      }
  }, [selectedOption]);

  useEffect(() => {
      fetchData();
      const intervalId = setInterval(fetchData, 1000);
      return () => clearInterval(intervalId);
  }, [fetchData, selectedOption]);

  console.log(emails);
  return (
    <div className="col-12 pt-5">
        <div className="table-responsive">
            <table className="table table-borderless">
                <thead>
                    <tr>
                      <th scope="col" className="text-uppercase">
                        Objet
                      </th>
                      <th scope="col" className="text-uppercase">
                        Destinataires
                      </th>
                      <th scope="col" className="text-uppercase">
                        Taux d'ouvertures
                      </th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map((email, index) => (
                        <tr key={index}>
                            <td className="align-items-center flex-column">
                                <p className="destinataire m-0 fw-bold">{email.subject}</p>
                                {email.sent_at && <p className="m-0">{new Date(email.sent_at).toLocaleString()}</p>}
                            </td>
                            <td className="">
                                <p>{email.emails.length}</p>
                            </td>
                            <td className='d-flex align-items-center justify-content-between'>
                              <div className="progress progress-bar-projet">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: `${email.open_rate}%`, backgroundColor:"#1ceca0" }}
                                  aria-valuenow={0}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                              <label className="statut-percentage fw-bold">
                                {email.open_rate}%
                              </label>
                              <label className="fw-bold">
                              {email.opened_count}/{email.emails.length}
                              </label>
                            </td>
                        </tr>   
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default CampaignsComp;
