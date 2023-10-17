import PropTypes from 'prop-types';

const TextInput = ({ text, setText, placeHolder, isBlank, type , validate}) => {



    const preventDefault = (e) => {
        const inputValue = e.target.value;
        setText(inputValue);

        if (validate) {
            validate(inputValue);
        }
    };


    return (
        <div>
            <input
                className="btn"
                type={type}
                placeholder={placeHolder}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            {/* {isBlank &&<div className="input-error">*Veuillez renseigner ce champs.</div>} */}
             
             {validate && validate(text) && <div className="input-error">{validate(text)}</div>}


        </div>
    );
};

// Set default props values
TextInput.defaultProp = {
    isBlank: false,
    placeHolder: 'Empty',
    type: 'text',
 
}

// Set props type
TextInput.propTypes = {
    text: PropTypes.string.isRequired,
    setText: PropTypes.func.isRequired,
    isBlank: PropTypes.bool,
    placeHolder: PropTypes.string,
    validate: PropTypes.func,
}




export default TextInput