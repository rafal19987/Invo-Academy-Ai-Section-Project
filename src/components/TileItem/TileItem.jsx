import React from 'react';
import PropTypes from 'prop-types';

const TileItem = ({ iconColor, icon, header, content }) => {
  return (
    <li className="TileItem__card">
      <div className={`TaileItem__icon ${iconColor}`}>{icon}</div>
      <div className="TaileItem__header">{header}</div>
      <div className="TaileItem__content">{content}</div>
    </li>
  );
};

TileItem.propTypes = {
  iconColor: PropTypes.string,
  icon: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default TileItem;
