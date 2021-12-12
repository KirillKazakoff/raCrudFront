import React from 'react';
import { BiSend } from '@react-icons/all-files/bi/BiSend';
import { Box } from '../primitives/Box';
import { Flex } from '../primitives/Flex';
import Form from '../primitives/Form';
import Textarea from '../primitives/Textarea';
import { BoxProps } from '../primitives/rebassTypes';
import Button from '../primitives/Button';

type NoteFormProps = BoxProps;

export default function NoteForm({ onSubmit, ...props }: NoteFormProps) {
    return (
        <Form
            border='primary' {...props} width='400px'
            onSubmit={onSubmit}
        >
            <Flex minHeight='200px' p='10px'>
                <Textarea
                    display='block' width='85%' fontSize='20px'
                    name='textarea'
                />
                <Button
                    alignSelf='flex-end' variant='rounded' p='5px'
                    type='submit'
                >
                    <BiSend color='green' size='35px' />
                </Button>
            </Flex>
        </Form>
    );
}
