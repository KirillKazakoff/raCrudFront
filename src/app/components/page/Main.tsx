import { nanoid } from 'nanoid';
import React from 'react';
import { ContentType } from '../../data/initContent';
import Note from '../lib/Note';
import { Flex } from '../primitives/Flex';
import { BoxProps } from '../primitives/rebassTypes';

type MainProps = BoxProps & { contentData: ContentType[] };

export default function Main({ contentData, onClick }: MainProps) {
    const contentList = contentData.map((item) => (
        <Note key={nanoid()} id={item.id} className='note'>
            {item.note}
        </Note>
    ));
    return (
        <Flex
            flexWrap='wrap' onClick={onClick} gap='40px'
            mb='40px'
        >
            {contentList}
        </Flex>
    );
}
