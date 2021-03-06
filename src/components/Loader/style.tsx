import styled, { keyframes } from 'styled-components';
import { mainColor } from '../../style';

const load = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

const StyledLoader = styled.div`
    font-size: 10px;
    margin: 150px auto;
    text-indent: -9999em;
    width: 5em;
    height: 5em;
    border-radius: 50%;
    background: ${mainColor};
    background: -moz-linear-gradient(left, ${mainColor} 10%, rgba(181, 234, 255, 0.5) 42%);
    background: -webkit-linear-gradient(left, ${mainColor} 10%, rgba(181, 234, 255, 0.5) 42%);
    background: -o-linear-gradient(left, ${mainColor} 10%, rgba(181, 234, 255, 0.5) 42%);
    background: -ms-linear-gradient(left, ${mainColor} 10%, rgba(181, 234, 255, 0.5) 42%);
    background: linear-gradient(to right, ${mainColor} 10%, rgba(181, 234, 255, 0.5) 42%);
    position: relative;
    -webkit-animation: ${load} 1.4s infinite linear;
    animation: ${load} 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    overflow: hidden;
    &:after {
        background: #FFF;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: '';
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    &:before {
        background: ${mainColor};
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
    }
`;


export { StyledLoader };