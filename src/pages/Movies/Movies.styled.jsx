import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperMovies = styled.div`
padding: 10px 0`

export const Form = styled.form`
margin-bottom: 10px`

export const Input = styled.input`
margin-right: 5px`

export const Films = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 7px`

export const Film = styled(Link)`
text-decoration: none;
color: black
`