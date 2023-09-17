import styled from "styled-components";



export const MovieSearch = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 15px;


    &:hover {
    border-color: #007bff;
}


    &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

`
export const MovieSearchButton = styled.button`

 background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;


&:hover {
     background-color: #0056b3;
}
`
