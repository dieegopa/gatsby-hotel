import { graphql, useStaticQuery } from "gatsby"

const useHabitaciones = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          titulo
          id
          slug
          contenido
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  return data.allDatoCmsHabitacion.nodes.map(item => ({
    titulo: item.titulo,
    id: item.id,
    contenido: item.contenido,
    slug: item.slug,
    imagen: item.imagen,
  }))
}

export default useHabitaciones
