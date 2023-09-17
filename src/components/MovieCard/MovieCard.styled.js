import styled from "styled-components";


// export const MovieContStyled = styled.div`
// border: 1px solid #ddd;
//     padding: 20px;
//     margin: 20px;
//     border-radius: 5px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     background-color: #fff;
//     text-align: center;

// `

// export const MovieTitleStyled = styled.h2`
// font-size: 24px;
//     font-weight: bold;
//     margin: 10px 0;
// `

// export const MovieImageStyled = styled.img`
//   max-width: 100%;
//     height: auto;
//     margin: 10px 0;
// `

// export const MovieScoreStyled = styled.p`
// font-size: 16px;
//     color: #f39c12;
//     margin: 10px 0;
// `

// export const MovieOverviewStyled = styled.p`
// font-size: 16px;
//     margin: 10px 0;
// `

// export const MovieGenresStyled = styled.p`
//  font-size: 16px;
//     margin: 10px 0;
// `


export const MovieContStyled = styled.div`
 border: 1px solid #007bff; /* Синій колір рамки */
    padding: 20px;
    margin: 20px;
    border-radius: 10px; /* Округлені кути */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Тінь */
    background-color: #fff;
    text-align: center;
    transition: transform 0.2s; /* Плавний ефект при наведенні */


&:hover {
    transform: scale(1.02); /* Збільшуємо розмір контейнера при наведенні */
}
`

export const MovieTitleStyled = styled.h2`
font-size: 28px; /* Збільшуємо розмір шрифту */
    font-weight: bold;
    margin: 10px 0;
    color: #333;
`

export const MovieImageStyled = styled.img`
 max-width: 100%;
    height: auto;
    margin: 20px 0;
    border-radius: 10px; /* Округлені кути */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Тінь */
`

export const MovieScoreStyled = styled.p`
 font-size: 18px;
    color: #f39c12; /* Оранжевий колір */
    margin: 10px 0;
`

export const MovieOverviewStyled = styled.p`
 font-size: 16px;
    margin: 10px 0;
    color: #555; /* Сірий колір для тексту огляду */
`

export const MovieGenresStyled = styled.p`
 font-size: 16px;
    margin: 10px 0;
`