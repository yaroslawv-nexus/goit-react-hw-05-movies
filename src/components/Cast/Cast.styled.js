import styled from "styled-components";



export const CastList = styled.ul`
display: flex;
    flex-wrap: wrap; /* Автоматичний перенос елементів на новий рядок */
    justify-content: space-between; /* Рівномірний розподіл між елементами */
    list-style: none;
    padding: 0;
    margin: 0;
`

export const CastItem = styled.li`
 background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const CastImg = styled.img`
 width: 60px; /* Збільшуємо розмір фото актора */
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 15px; /* Більший відступ від фото до імені */

`

export const CastName = styled.ul`
font-size: 20px;
    font-weight: bold;
    margin: 0;

`