import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
padding: 10px 0`

export const Films = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 7px`

export const Film = styled(Link)`
text-decoration: none;
color: black
`