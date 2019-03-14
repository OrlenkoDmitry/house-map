import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Card = ({img, address, price, area, type, templates}) => (
    <div className="card">
        <img className="img"
             src={img} alt=""
             style={{
                 order: templates[type].template.findIndex(element => element.component === 'IMAGE'),
                 position: templates[type].template
                     .find(element => element.children && element.children[0].component === 'IMAGE') ? 'absolute' : 'static'
             }}
        />
        <p className="address"
           style={{
               order: templates[type].template.findIndex(element => element.component === 'ADDRESS'),
               position: templates[type].template
                   .find(element => element.children && element.children[0].component === 'ADDRESS') ? 'absolute' : 'static'
           }}
        >
            {address}
        </p>
        <p className="price"
           style={{
               order: templates[type].template.findIndex(element => element.component === 'PRICE'),
               position: templates[type].template
                   .find(element => element.children && element.children[0].component === 'PRICE') ? 'absolute' : 'static'
           }}
        >${price}
        </p>
        <span className="area"
              style={{
                  order: templates[type].template.findIndex(element => element.component === 'AREA'),
                  position: templates[type].template
                      .find(element => element.children && element.children[0].component === 'AREA') ? 'absolute' : 'static'
              }}
        >
            {area ? `${area} sq. fr.` : ''}
        </span>
    </div>
);

Card.propTypes = {
    img: PropTypes.string,
    address: PropTypes.string,
    price: PropTypes.number,
    area: PropTypes.number,
    type: PropTypes.number,
    templates: PropTypes.array,
};

export default Card;