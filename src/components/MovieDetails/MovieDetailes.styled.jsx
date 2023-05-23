import styled from "styled-components";
import { NavLink, Link} from "react-router-dom";

export const ButtonBack = styled(Link)`
text-decoration:none;
padding: 5px 7px;
border-radius: 4px;
display:flex;
`
export const Section = styled.section`
margin: 10px 20px
`
export const Wrapper = styled.div`
display: flex;
gap: 20px;
margin-bottom: 15px`

export const Title = styled.h1`
margin-bottom: 10px`

export const SubTitle = styled.h2`
margin-bottom: 10px`

export const Text = styled.p`
margin-bottom: 15px`

export const Genres = styled.ul`
list-style: none;
display: flex;
gap: 10px
`
export const LinkWrapper = styled.div`
display: flex;
gap: 10px;
margin-bottom: 15px`

export const StyledLink = styled(NavLink)`
color: black;

&.active {
    color: orange;
}
`