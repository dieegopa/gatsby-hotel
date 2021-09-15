import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackgorund = styled(BackgroundImage)`
  height: 700px;
`

const TextoImagen = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.75),
    rgba(34, 49, 63, 0.75)
  );
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
    margin: 0;
    text-align: center;

    @media(min-width:992px){
        font-size:5.8rem;
    }
  }
  p {
    font-size: 2rem;
    text-align: center;
    @media(min-width:992px){
        font-size:2.6rem;
    }
  }
`

const ImagenHotel = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ImageBackgorund fadeIn="soft" tag="section" fluid={image.sharp.fluid}>
      <TextoImagen>
        <h1>Bienvenido a Hotel Gatsby</h1>
        <p>El mejor hotel para tus vacaciones</p>
      </TextoImagen>
    </ImageBackgorund>
  )
}

export default ImagenHotel
