import React from 'react'
import PropTypes from 'prop-types'

export const PropTypesComponent = ({ name, loading, age, productsArray }) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{loading ? "Verdadero" : "Falso"}</li>
        <li>{age}</li>
      </ul>
    </div>
  )
}

PropTypesComponent.propTypes = {
  name: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  age: PropTypes.number,
  productsArray: PropTypes.arrayOf(PropTypes.object),
}

