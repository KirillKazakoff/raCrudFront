import '../css/defaultStyle.css';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './components/primitives/Box';
import Header from './components/page/Header';
import Main from './components/page/Main';
import Footer from './components/page/Footer';
import api from './request/api';
import notesList from './logic/ContentList';

export default function App() {
    const [notes, setNotes] = useState([{ note: 'Hello', id: '1' }]);
    const getData = async () => {
        const data = await api.notes.getNotes();
        notesList.refresh(data);
        setNotes(data);
    };

    const useCustom = () => {
        useEffect(() => {
            getData();
        }, []);
    };
    useCustom();

    const onUlClick = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLElement;

        if (target.id === 'remove') {
            const id = target.closest('.note')?.id;

            if (typeof id === 'string') {
                notesList.remove(id);
                api.notes.deleteNote(id);
                setNotes(notesList.getData());
            }
        }
    };

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const currentTarget = e.currentTarget as typeof e.currentTarget & {
            textarea: { value: string };
        };

        const { value } = currentTarget.textarea;
        if (!value) return false;

        const noteObj = {
            note: value,
            id: nanoid(),
        };

        notesList.add(noteObj);
        setNotes(notesList.getData());
        api.notes.addNote(noteObj);

        return true;
    };

    return (
        <Box variant='layout'>
            <Header title='Notes' mb={5} onClick={getData} />
            <Main mb={5} contentData={notes} onClick={onUlClick} />
            <Footer onSubmit={onSubmit} />
        </Box>
    );
}
