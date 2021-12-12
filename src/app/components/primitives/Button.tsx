import styled from 'styled-components';
import { variant } from 'styled-system';
import { boxVariants } from './Box';
import { BoxProps } from './rebassTypes';
import { boxCompose } from './styledCompose';

type ButtonProps = BoxProps;
const buttonVariants = {
    ...boxVariants,
    cancel: {
        color: 'red',
        bg: 'white',
        border: '2px solid red',
        borderRadius: '100px',
        px: '5px',
    },
};
const Button = styled('button')<ButtonProps>(
    variant({ variants: buttonVariants }),
    // variant({ scale: 'buttonSizes' }),
    boxCompose(),
);

export default Button;
