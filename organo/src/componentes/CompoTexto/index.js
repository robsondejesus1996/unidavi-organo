import './CampoTexto.css'

const CaompoTexto = (props) =>{

    const placeholderModificada = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModificada}/>
        </div>
    )
}

export default CaompoTexto