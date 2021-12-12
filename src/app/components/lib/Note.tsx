import React from 'react';
import AbsoluteBox from '../primitives/AbsoluteBox';
import { Box } from '../primitives/Box';
import Button from '../primitives/Button';
import { BoxProps } from '../primitives/rebassTypes';
import { Text } from '../primitives/Text';

type NoteProps = BoxProps;

export default function Note({ children, ...props }: NoteProps) {
    return (
        <Box
            position='relative'
            minWidth={7}
            border='primary'
            p={3}
            textAlign='center'
            {...props}
        >
            <AbsoluteBox right={-10} top={-10}>
                <Button
                    variant='cancel' px='5px' fontSize='20px'
                    bg='white' id='remove'
                >
                    X
                </Button>
            </AbsoluteBox>
            <Text>{children}</Text>
        </Box>
    );
}
