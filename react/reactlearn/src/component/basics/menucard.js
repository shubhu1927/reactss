import React from 'react';

const Menucardss = ({Menuds}) => {
    return (
    <>
    <section className="main-card--cointainer">
       {Menuds.map((curElm)=>{
        const {id,category,name,description,price,images} = curElm;
    return(
        <>
            <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <span className="price-d">{price}</span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={images} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
    </>
)
})};
    </section>
 
    </>
    );
}

export default Menucardss;