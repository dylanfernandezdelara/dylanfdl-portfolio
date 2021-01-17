import React from "react";
import styled from "@emotion/styled"
import me from "./logo.png"

const HeaderImg = styled("img")`
    width: 300px;
`

const Logo = () => (
    <HeaderImg src={me} alt="Dylan Fernandez de Lara" />
);


export default Logo;
