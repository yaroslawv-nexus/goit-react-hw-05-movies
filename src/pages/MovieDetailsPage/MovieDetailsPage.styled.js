import styled from "styled-components";
import {
  NavLink,

} from 'react-router-dom';

export const SubLink = styled(NavLink)`

 display: inline-block;
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    margin-right: 10px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    text-transform: uppercase; /* Великі літери */
`