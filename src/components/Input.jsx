

const Input = (type, id, label, placeholder, value, onChange) => {
  return (
    <div>
        <label>{label}</label>
        <input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}

export default Input