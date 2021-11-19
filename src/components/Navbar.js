import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const LogoWrapper = styled.div`
    flex:1;
    display: flex;
    align-content: center;
    width: fit-content;
`

const Logo = styled.h1`
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`

const LogoSmall = styled.h3`
    font-weight: lighter;
    align-items: center;
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 25px;
`

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <LogoWrapper>
                       <Logo>CINEMA</Logo><LogoSmall>APP</LogoSmall> 
                    </LogoWrapper>
                    <Right>
                        <MenuItem>Seanse</MenuItem>
                        <MenuItem>Filmy</MenuItem>
                        <MenuItem>Bilety</MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Navbar
