import styled from 'styled-components'

export const ImageSvg = styled.img`
    z-index: -3;
    top:0;
    right:0;
    position:absolute;
    transform:translateX(420px) translateY(-175px);
`

export const Container = styled.div`
    background-color:${({ theme }) => theme.colors.body};
`
