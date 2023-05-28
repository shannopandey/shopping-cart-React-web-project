import React from 'react';

const Title = ({name}) =>{
  return(
    <div className="row">
      <div className="col-10 mx-auto my-3 text-center text-title">
          <h1 className="text-Salmon">{name}</h1>
      </div>
    </div>
  );
}

export default Title;