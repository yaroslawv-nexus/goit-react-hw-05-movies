import styled from "styled-components";


export const ReviewsList = styled.ul`
list-style: none;
    padding: 0;
    margin: 0;
`

export const ReviewItem = styled.li`
   margin-bottom: 30px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

export const ReviewAuthor = styled.h3`
  font-size: 18px;
    font-weight: bold;
    color: #007bff;
    margin-bottom: 5px;

`

export const ReviewContent = styled.p`

 font-size: 18px;
    line-height: 1.6;
    color: #555;
`