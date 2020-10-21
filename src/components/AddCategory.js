import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState( "" );

    const handleEventChange = (e) =>{
         setinputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories( cats => [ inputValue,...cats]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={inputValue}
            onChange={handleEventChange}
            required
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}