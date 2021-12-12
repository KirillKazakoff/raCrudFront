import styled from 'styled-components';

import { textCompose } from './styledCompose';
import { HeadingProps } from './rebassTypes';

const Heading = styled.h2<HeadingProps>`
    ${textCompose()}
`;

export default Heading;
