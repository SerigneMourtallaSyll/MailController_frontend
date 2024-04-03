import React, { useCallback, useEffect, useState } from 'react'
import EmailService from '../../service/EmailService';

function ClickReportTable() {
    const [selectedOption, setSelectedOption] = useState("2");
    const [emails, setEmails] = useState([]);

    const fetchData = useCallback(async() => {
        try {
          const data = await EmailService.getEmails(selectedOption);
          setEmails(data.filter((email) => email.emails.find((mail) => mail.url)));
        } catch (error) {
          console.error('Error loading emails:', error);
        }
    }, [selectedOption]);

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 1000);
        return () => clearInterval(intervalId);
    }, [fetchData, selectedOption]);

    // console.log(emails);

  return (
    <div className="col-12 pt-5">
        <div className="table-responsive">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col" className="text-uppercase">
                            Destinataires
                        </th>
                        <th scope="col" className="text-uppercase">
                            URL
                        </th>
                        <th scope="col" className="text-uppercase">
                            Dernier clic
                        </th>
                        <th scope="col" className="text-uppercase text-center">
                            Total de clics
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map((email) => (
                        email.emails.map((mail, index) => (
                            <tr key={index}>
                                <td className="d-flex justify-content-start align-items-center">
                                    <p className="destinataire py-1 px-2">{mail.recipient_email}</p>
                                </td>
                                <td className="">
                                    <p>{mail.url}</p>
                                </td>
                                <td className="">
                                    {mail.opened_at_link? <p>{new Date(mail.opened_at_link).toLocaleString()}</p>: <p>Non défini</p>}
                                </td>
                                <td className='d-flex justify-content-center'>
                                    {mail.click_count? <p>Cliqué {mail.click_count} fois</p> : <p>Aucun clic</p>}
                                </td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ClickReportTable