import { useSelector, useDispatch } from 'react-redux'
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice'
import styles from './SearchBox.module.css'

const SearchBox = () => {
  const search = useSelector(selectNameFilter)
  const dispatch = useDispatch()

  const handleOnChange = ({ target }) => {
    dispatch(changeFilter(target.value))
  }

  return (
    <label className={styles.label}>
      Find contacts by name
      <input type='text' value={search} className={styles.input} onChange={handleOnChange} />
    </label>
  )
}

export default SearchBox
