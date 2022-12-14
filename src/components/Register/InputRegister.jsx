
const InputRegister = ( props ) => {

    //desestructuramos el objeto props
    const { title, type, name, value, handle } = props

  return (
    <>
      <div className="cuerpore">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            { title }
          </label>
          <input
            type= { type }
            className="form-control"
            placeholder= { title }
            name={ name }
            value={ value }
            onChange={ handle }
            required
        />
      </div>
    </div>
    </>
  );
};

export default InputRegister;
