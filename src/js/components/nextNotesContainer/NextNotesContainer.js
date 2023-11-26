import React from 'react'
import delete_icon from '../../../../assets/images/delete.svg';
import './nextNotesContainer.css'

export default function NextNotesContainer(props) {    
    return(
        <div className="next-notes-container">
            <div className="next-notes-title">
                <p>{props.date}</p>
            </div>
            <div className="next-notes-card">
                <ul>
                    {/* <li>
                        <div className="next-notes-text">
                            <p>6:30 PM <span>Dentista</span></p>
                        </div>
                        <div className="next-notes-button">
                            <button>
                            <img src={delete_icon} alt="delete-icon" />
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="next-notes-text">
                            <p>10:00 PM <span>Reunión</span></p>
                        </div>
                        <div className="next-notes-button">
                            <button>
                            <img src={delete_icon} alt="delete-icon" />
                            </button>
                        </div>
                    </li> */}
                    {
                        props.notes.map((nota) => {
                            //formato de var fecha: 2023-11-25T16:00:00.000Z
                            //Sacar solo la hora
                            let time = nota.fecha.split("T");
                            time = time[1].split(".");
                            time = time[0];

                            // Fecha con formato: 00:00 AM/PM
                            time = time.split(":");
                            let hour = time[0];
                            let minutes = time[1];
                            
                            if (hour > 12) {
                                hour -= 12;
                                time = `${hour}:${minutes} PM`;
                            } else {
                                time = `${hour}:${minutes} AM`;
                            }

                            return (
                                <li key={nota.id_nota}>
                                    <div className="next-notes-text">
                                        <p>{time} <span>{nota.titulo}</span></p>
                                    </div>
                                    <div className="next-notes-button">
                                        <button>
                                        <img src={delete_icon} alt="delete-icon" />
                                        </button>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    )
}