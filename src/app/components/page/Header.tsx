import React from 'react';
import { BiRefresh } from '@react-icons/all-files/bi/BiRefresh';
import { Flex, FlexProps } from '../primitives/Flex';
import Heading from '../primitives/Heading';
import { Box } from '../primitives/Box';

type HeaderProps = FlexProps & { title: string };

export default function Header({ onClick, title, ...props }: HeaderProps) {
    const size = '45px';
    return (
        <Flex fontSize={size} gap='25px' {...props}>
            <Heading as='h1'>{title}</Heading>
            <Box alignSelf='flex-end' variant='rounded' onClick={onClick}>
                <BiRefresh color='green' size={size} />
            </Box>
        </Flex>
    );
}
