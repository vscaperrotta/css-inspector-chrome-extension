import PropTypes from "prop-types";
import { nullSafe } from '@utils/globalMethods';

function Properties({ properties = [] }) {

  return (
    <div className="css-properties__container">
      {nullSafe(() => properties, []).map((property) => (
        <p key={property.label} className='css-property__value'>
          <span className='css-property__key'>
            {property.label}
          </span>
          <span className='css-property__value'>
            {property.value}
          </span>
        </p>
      ))}
    </div>
  );
}

Properties.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
};

export default Properties;