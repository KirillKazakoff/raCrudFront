import styled from 'styled-components';
import { variant } from 'styled-system';
import { BoxProps } from './rebassTypes';
import { boxCompose } from './styledCompose';

export const boxVariants = {
    layout: {
        p: '20px',
        width: '95%',
    },
    primary: {
        px: '10px',
        py: '5px',
        borderRadius: '5px',
        border: 'primary',
    },
    rounded: {
        border: 'primary',
        borderRadius: '100px',
        p: '5px',
    },
    secondary: {
        color: 'blue',
    },
};

export const Box = styled.div<BoxProps>(boxCompose(), variant({ variants: boxVariants }));

// import styled from 'styled-components';
// import { variant } from 'styled-system';
// import { BoxProps } from './rebassTypes';
// import { boxCompose } from './styledCompose';

// export const boxVariants = {
//     layout: {
//         p: '20px',
//     },
//     primary: {
//         px: '10px',
//         py: '5px',
//         borderRadius: '5px',
//         border: 'primary',
//     },
//     rounded: {
//         border: 'primary',
//         borderRadius: '100px',
//     },
//     secondary: {
//         color: 'blue',
//     },
// };

// const boxVariant = () => variant({ scale: 'boxSizes' });
// export const Box = styled.div<BoxProps>(boxCompose(), boxVariant());
