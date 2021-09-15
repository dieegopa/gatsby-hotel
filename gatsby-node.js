exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `)

  //console.log(resultado.data.allDatoCmsHabitacion.nodes)

  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.errors)
  }

  const habitaciones = resultado.data.allDatoCmsHabitacion.nodes

  habitaciones.forEach(item => {
    actions.createPage({
      path: item.slug,
      component: require.resolve("./src/components/Habitacion.jsx"),
      context: {
        slug: item.slug,
      },
    })
  })
}
