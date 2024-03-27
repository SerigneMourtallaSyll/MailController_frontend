import axios from 'axios';
import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import Tippy from "@tippyjs/react";
import { parse } from 'papaparse';

function Modals(props) {
    const [objet, setObjet] = useState("");
    const [message, setMessage] = useState("");
    const [document, setDocument] = useState([]);
    const [image, setImage] = useState([]);
    const [email, setEmail] = useState("");
    const [selectedImg, setSelectedImg] = useState("");
    const fileInputRef = useRef(null);
    const fileOutputRef = useRef(null);
    const imageInputRef = useRef(null);
    const [fileName, setFileName] = useState([]);
    const [isBold, setIsBold] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [textSize, setTextSize] = useState('normal');
    const [csvFileName, setCsvFileName] = useState("");
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains("modal")) {
            props.onHide();
        }
    };

    const formatEmails = (emails) => {
        if (typeof emails === 'string') {
            if (emails.includes(',')) {
                return emails.split(',').map(email => email.trim());
            } else {
                return emails.trim();
            }
        } else {
            return emails;
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const formData = new FormData();
            const formattedEmails = formatEmails(email);
            formData.append('email', formattedEmails);
            formData.append('message', message);
            formData.append('objet', objet);
            document.forEach(file => formData.append('document', file));
            image.forEach(file => formData.append('image', file));
            
            const res = await axios.post("https://api-django-email.onrender.com/send/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(res);
            toast.success('Email sent successfully!');
            props.onHide();
        } catch (err) {
            console.log(err);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files;
        const fileArray = Array.from(selectedFile);
        // setFileName(selectedFile);
        if (selectedFile) {
            setDocument([...document, ...fileArray]);
            // console.log([...document, ...fileArray])
        }
    };

    const handleImageChange = (e) => {
        const selectedFile = e.target.files;
        const imageArray = Array.from(selectedFile);
        if(selectedFile){
            setImage([...image, ...imageArray])
            const imgTable = [...image, ...imageArray]
            setSelectedImg(imgTable.map((file) => URL.createObjectURL(file)))
        }
    }

    const handleCsvFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setCsvFileName(selectedFile);
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = async (event) => {
                const file = event.target.result;
                const emailsArray = await parseFile(file);
                setEmail(emailsArray);
            };
            reader.readAsText(selectedFile);
        }
    };

    const parseFile = (file) => {
        return new Promise((resolve, reject) => {
            parse(file, {
                complete: (result) => {
                    if (result.errors.length > 0) {
                        reject(result.errors);
                    } else {
                        const data = result.data;
                        const emailsArray = data.flatMap((row) => row.filter((cell) => isValidEmail(cell.trim())));
                        resolve(emailsArray);
                    }
                },
            });
        });
    };
    
    const isValidEmail = (email) => {
        // Validation d'e-mail simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleImportCSV = () => {
        fileOutputRef.current.click();
    };

    const handleFileClick = () => {
        fileInputRef.current.click();
    };
    const handleImgClick = () => {
        imageInputRef.current.click();
    };

    const deleteFile = (index) => {
        const updatedFiles = [...document];
        updatedFiles.splice(index, 1);
        setDocument(updatedFiles);
    };    

    const deleteImage = (index) => {
        const updatedImages = [...selectedImg];
        updatedImages.splice(index, 1);
        setSelectedImg(updatedImages);
    };

    const renderMenu = () => (
        <div>
            <input
                type="file"
                className="form-control visually-hidden"
                id="file"
                ref={fileOutputRef}
                onChange={handleCsvFileChange}
                name="file"
            />
            <button className="btn d-flex justify-content-between align-items-center" type='button' onClick={handleImportCSV}>
                <span className="mx-1">
                    <i className="bi bi-upload"></i>
                </span>
                <span className="mx-1">Importer une liste</span>
            </button>
        </div>
    );
    
    const size = () => (
        <ul className='list-unstyled'>
            <li onClick={() => setTextSize('small')} className=''>Petite</li>
            <li onClick={() => setTextSize('normal')} className='fs-6'>Normal</li>
            <li onClick={() => setTextSize('large')} className='fs-5'>Grande</li>
            <li onClick={() => setTextSize('xlarge')} className='fs-4'>Très grande</li>
        </ul>    
    )

    const optionsForm = () => (
        <div className='d-flex justify-content-around align-items-center gap-1' id='formText'>
            <span>
                <Tippy content={"Gras"} placement="bottom" arrow={false} interactive={true}>
                    <i className={`bi bi-type-bold ${isBold ? 'active' : ''}`} onClick={() => setIsBold(!isBold)}></i>
                </Tippy>
            </span>
            <span>
                <Tippy content={"Souligner"} placement="bottom" arrow={false} interactive={true}>
                    <i className={`bi bi-type-underline ${isUnderline ? 'active' : ''}`} onClick={() => setIsUnderline(!isUnderline)}></i>
                </Tippy>
            </span>
            <span>
                <Tippy content={"Italique"} placement="bottom" arrow={false} interactive={true}>
                    <i className={`bi bi-type-italic ${isItalic ? 'active' : ''}`} onClick={() => setIsItalic(!isItalic)}></i>
                </Tippy>
            </span>
            <Tippy content={"Taille"} placement="bottom" arrow={false} interactive={true}>
                <Tippy content={size()} placement="bottom" arrow={false} interactive={true} trigger='click'>
                    <i className="bi bi-p-square-fill"></i>
                </Tippy>
            </Tippy>
        </div>    
    )

    return (
        <div 
            className={`modal fade ${props.show ? "show" : ""}`}
            tabIndex="-1"
            style={{ display: props.show ? "block" : "none" }}
            role="dialog"
            aria-labelledby="contained-modal-title-vcenter"
            onClick={handleOutsideClick}
        >
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content px-3 border-none p-0">
                    <div className="modal-header border-0 d-flex justify-content-between">
                        <div>Nouveau message</div>
                            <button type="button" className="btn-close" onClick={props.onHide} aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row p-0">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className='col d-flex border-bottom justify-content-between emails'>
                                    <input type="text" className="border-bottom" placeholder="Destinataires (séparés par des virgules)" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <Tippy content={renderMenu()} placement="bottom" arrow={true} interactive={true} trigger="click" className="actionsMenu">
                                        <button className='btn d-flex justify-content-around align-items-center gap-2' type='button'>
                                            <span>
                                                <i className="bi bi-plus-circle-dotted"></i>
                                            </span>
                                            <span>Campagne</span>
                                        </button>
                                    </Tippy>
                                </div>
                                <div className='col py-2'>
                                    <input type="text" className="border-bottom object py-1" placeholder="Objet" value={objet} onChange={(e) => setObjet(e.target.value)} />
                                </div>
                                
                                <input type="file"
                                    className="form-control visually-hidden"
                                    id="file"
                                    ref={imageInputRef}
                                    onChange={handleImageChange}
                                    name="file"
                                />
                                {selectedImg.length>0 && selectedImg.map((img, index) => (
                                        <div className='col-6 py-2 d-flex' key={index}>
                                            <img src={img} alt='img'/>
                                            <button type="button"
                                                className="btn-close"
                                                onClick={() => deleteImage(index)}
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                    ))
                                }
                                
                                <div className='col py-2'>
                                    <textarea rows={5} className='border-none w-100' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' 
                                    onMouseUp={(e) => console.log(e.target.value.substring(e.target.selectionStart, e.target.selectionEnd))}
                                    style={{
                                        fontWeight: isBold ? 'bold' : 'normal',
                                        textDecoration: isUnderline ? 'underline' : 'none',
                                        fontStyle: isItalic ? 'italic' : 'normal',
                                        fontSize: textSize === 'small' ? '0.8em' : textSize === 'normal' ? '1em' : textSize === 'large' ? '1.2em' : '1.5em',
                                    }}>
                                    </textarea>
                                </div>
                                <div className='col py-2'>
                                    <input type="file"
                                        className="form-control visually-hidden"
                                        id="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        name="file"
                                    />
                                    {document.length>0 && document.map((file, index) => (
                                            <div className='d-flex justify-content-between col-6 files px-1 py-2' key={index}>
                                                <p>{file.name}</p>
                                                <button type="button"
                                                    className="btn-close"
                                                    onClick={() => deleteFile(index)}
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='col-4 d-flex justify-content-between'>
                                    <button className='btn rounded-pill' type='submit'>Envoyer</button>
                                    <div className='col-8 d-flex justify-content-around align-items-center'>
                                        <Tippy content={"Insérer un document"} placement="top" arrow={false} interactive={true}>
                                            <i className="bi bi-paperclip" onClick={handleFileClick}></i>
                                        </Tippy>
                                        <Tippy content={"Insérer une image"} placement="top" arrow={false} interactive={true}>
                                            <i className="bi bi-image" onClick={handleImgClick}></i>
                                        </Tippy>
                                        <Tippy content={"Insérer un lien"} placement="top" arrow={false} interactive={true}>
                                            <i className="bi bi-link-45deg"></i>
                                        </Tippy>
                                        <Tippy content={"Options de mise en forme"} placement="top" arrow={false} interactive={true}>
                                            <Tippy content={optionsForm()} placement="top" arrow={false} interactive={true} trigger='click'>
                                                <i className="bi bi-type"></i>
                                            </Tippy>
                                        </Tippy>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modals;
