import React from 'react';
const Square = ({value,handleClick}) => {
    // const [value,setValue] = useState(0)
    return (
        <>
        <button className="h-12 w-12 border-2 border-gray-500" onClick={handleClick}>{value}</button>
        </>
    );
};

export default Square;