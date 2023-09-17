import styled from "styled-components";
import { Link } from 'react-router-dom';

export const MovieItem = styled.li`
text-decoration: none;
font-size: 18px;
     font-size: 24px; /* Збільшення розміру шрифту */
    font-weight: bold;
    margin-bottom: 15px; /* Збільшення відстані між назвами фільмів */
    color: inherit; /* Колір тексту */
    text-decoration: none; /* Видаляємо підкреслення посилань */
    transition: color 0.3s ease; /* Плавна зміна кольору при наведенні */
    display: block; /* Дозволяємо весь блок назви фільму бути посиланням */
    padding: 10px; /* Додаємо відступи для кнопки */
    border-radius: 5px; /* Додаємо закруглені кути */
    background-color: #f8f8f8; /* Фоновий колір */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Тінь для виділення */

    &:hover,:focus{
  color: #007bff; /* Колір тексту при наведенні */
    background-color: #fff; /* Зміна фонового кольору при наведенні */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Збільшена тінь при наведенні */
    }

`

export const MovieItemLink = styled(Link)`
text-decoration: none;
color: inherit;
`