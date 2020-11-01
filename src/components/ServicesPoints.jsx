import React from "react";
import PropTypes from "prop-types";
import "./ServicesPoints.scss";

const ServicesPoints = ({ services }) =>
  services &&
  services.map((service) => (
    <h5 className="service-point" key={service}>
      {service}
    </h5>
  ));
export default ServicesPoints;

ServicesPoints.propTypes = {
  services: PropTypes.array.isRequired,
};
