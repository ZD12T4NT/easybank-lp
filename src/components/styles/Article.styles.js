import styled from 'styled-components'

export const ArticleContainer = styled.div`
    display: flex;
    justify-content: center;
    height:85vh;

   .card{
    background-color:#fff;
    width:300px;
    height:480px;
    margin: 0 10px;
    margin-top:50px;
    border-radius:7px;

    h3{
    font-size:1.4rem;
    font-weight:500;
    color:hsl(233, 26%, 24%);
    cursor: pointer;

    &:hover{
    color:hsl(136, 65%, 51%);
    }
   
    }

    p{
        color:hsl(0, 0%, 28%);
    }


    span{
        color:hsl(0, 0%, 68%);
        font-size:13px;
    }

    .card-img{
        height:200px;
        margin-bottom:15px;
        border-radius:7px 7px 0 0;

        &:hover{
            transform: scale(0.98);
            cursor: pointer;
        }

    }

    .card-one{
        background:url('./images/image-currency.jpg');
        background-size:cover;
        background-position:center;
    }

    .card-two{
        background:url('./images/image-restaurant.jpg');
        background-size:cover;
        background-position:center;
    }

    .card-three{
        background:url('./images/image-plane.jpg');
        background-size:cover;
        background-position:center;
    }

    .card-four{
        background:url('./images/image-confetti.jpg');
        background-size:cover;
        background-position:center;
    }

    .card-text{
        padding:25px;
        overflow: hidden;
        text-overflow: ellipsis;
    }


   }
`

    export const ArticleSection = styled.div`
        height:100%;
        background-color:hsl(0, 0%, 98%);
        
        h1{
            margin:0;
            padding-top:4rem;
        }
    `


   