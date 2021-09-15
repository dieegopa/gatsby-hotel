import * as React from "react"
import ContenidoInicio from "../components/ContenidoInicio"
import ImagenHotel from "../components/ImagenHotel"
import Layout from "../components/Layout"
import useHabitaciones from "../hooks/useHabitaciones"
import { css } from "@emotion/react"
import HabitacionPreview from "../components/HabitacionPreview"
import styled from "@emotion/styled"

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {
  const habitaciones = useHabitaciones()

  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestras Habitaciones
      </h2>

      <ListadoHabitaciones>
        {habitaciones.map(item => (
          <HabitacionPreview habitacion={item} key={item.id} />
        ))}
      </ListadoHabitaciones>
    </Layout>
  )
}

export default IndexPage
