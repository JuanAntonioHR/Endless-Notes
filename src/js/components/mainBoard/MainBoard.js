import React, { useState, useEffect, useContext } from 'react';
import { NotesContext } from '../../App';
import axios from 'axios';
import './mainBoard.css'

import NotesContainer from '../notesContainer/NotesContainer';

export default function MainBoard() {
    const [notesDates, setNotesDates] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, notes, setNotes } = useContext(NotesContext);

    const fetchData = async () => {
        try {
            const url = `http://localhost:3000/notas/${user.id_usuario}`;
            const response = await axios.get(url);
            setNotes(response.data.message);
        } catch (error) {
            console.error('Error al obtener datos:', error);
            return null;
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        assignNotes();
    }, [notes]);

    const tempDates = [];
    const dates = [];

    for (let i = 0; i < 5; i++) {
        const tempDate = new Date();
        tempDate.setDate(tempDate.getDate() + i);
        tempDates.push(tempDate);

        const date = tempDate.toLocaleDateString('es-ES', {day: 'numeric', month: 'long'});
        dates.push(date);
    }

    function assignNotes() {
        try {
            // Assuming `response.data` is your notes array
            console.log('a')

            // Convert date strings to Date objects for comparison
            const noteDates = notes.map((note) => {
                const [datePart, timePart] = note.fecha.split('T');
                const [year, month, day] = datePart.split('-').map(Number);
                const [hour, minute, second] = timePart.slice(0, 8).split(':').map(Number);
                const date = new Date(year, month - 1, day, hour, minute, second);
                return date;
            });

            const updatedNotesDates = [];

            // Create arrays for each day
            for (let i = 0; i < 5; i++) {
                const sliceSize = i < 2 ? 2 : 3;
                let notesDate = [];
                if (i == 0) {
                    notesDate = notes.filter((note, j) => noteDates[j] > new Date() && noteDates[j].getDate() === tempDates[i].getDate() && noteDates[j].getMonth() === tempDates[i].getMonth() && noteDates[j].getFullYear() === tempDates[i].getFullYear()).slice(0, sliceSize);
                } else {
                    notesDate = notes.filter((note, j) => noteDates[j].getDate() === tempDates[i].getDate() && noteDates[j].getMonth() === tempDates[i].getMonth() && noteDates[j].getFullYear() === tempDates[i].getFullYear()).slice(0, sliceSize);
                }
                updatedNotesDates.push(notesDate);
            }

            // Set the state with the updated notesDates
            setNotesDates(updatedNotesDates);
            setLoading(false);

        } catch (error) {
            console.error('Error en los datos:', error);
        }
    }

    return (
        <div className="notes-section">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <NotesContainer notas={notesDates[0]} fecha={dates[0]} refFecha={tempDates[0]} color={'var(--orange)'}/>
                    <NotesContainer notas={notesDates[1]} fecha={dates[1]} refFecha={tempDates[1]} color={'var(--green)'}/>
                    <NotesContainer notas1={notesDates[2]} date1={dates[2]} notas2={notesDates[3]} date2={dates[3]} notas3={notesDates[4]} date3={dates[4]} color={'var(--yellow)'} next={true}/>
                </>
            )}
        </div>
    );
}