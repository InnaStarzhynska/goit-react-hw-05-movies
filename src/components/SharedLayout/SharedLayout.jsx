import { Outlet } from "react-router-dom";
import { Container, Header, HeaderLink, Navigation } from './SharedLayout.styled';
import { Suspense } from "react";

export default function SharedLayout() {
  return (
    <Container>
      <Header>
      <Navigation>
        <HeaderLink to='/'>Home</HeaderLink>
        <HeaderLink to='/movies'>Movies</HeaderLink>
      </Navigation>
    </Header>
   <Suspense fallback={<div>Loading...</div>}><Outlet /></Suspense>
    </Container>
  )
}
