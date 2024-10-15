import styles from './SearchBox.module.css'

const SearchBox = ({ search, setSearch }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type='text'
        value={search}
        className={styles.input}
        onChange={({ target }) => setSearch(target.value)}
      />
    </label>
  )
}

export default SearchBox
