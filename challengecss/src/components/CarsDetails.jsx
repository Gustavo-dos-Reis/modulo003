import PropTypes from "prop-types"

import styles from './CarsDetails.module.css'

const CarsDetails = ({brand, color, km}) => {
  return (
    <>
    <div>
      <main className ={styles.my_main}>
        <ul>
            <li className={styles.my_li}>Marca: {brand}</li>
            <li className={styles.my_li}>Cor: {color}</li>
            <li className={styles.my_li}>KM: {km}</li>
        </ul>
      </main>  
    </div>
    </>
  )
}

CarsDetails.propTypes = {
  brand: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  km: PropTypes.number.isRequired
}

export default CarsDetails