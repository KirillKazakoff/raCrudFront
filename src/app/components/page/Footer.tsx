import React from 'react';
import NoteForm from '../lib/NoteForm';
import { Box } from '../primitives/Box';
import Heading from '../primitives/Heading';
import { BoxProps } from '../primitives/rebassTypes';

type FooterProps = BoxProps;

export default function Footer({ onSubmit, ...props }: FooterProps) {
    return (
        <Box {...props}>
            <Heading mb={3} fontSize='20px'>
                New Note
            </Heading>
            <NoteForm onSubmit={onSubmit} />
        </Box>
    );
}
