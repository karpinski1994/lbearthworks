import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import ServiceItem from "components/ServiceItem";
import ServicesPoints from "components/ServicesPoints";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Services.scss";

const Services = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, services } = frontmatter;
  const areaProps = {
    iconName: "MapSignsIcon",
    header: "Obszar działania",
    content: "Nasze usługi świadczyliśmy głównie na terenie dolnego śląska.",
  };
  return (
    <PageSection className="backgroung-bg" id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} headerClassName=" mb-5" />
      </Row>
      <Row className="text-center">
        {services.map((service) => (
          <Col className=" mb-3" lg={4} key={service.header}>
            <div className="service-tile">
              <ServiceItem {...service} />
              <ServicesPoints {...service} />
            </div>
          </Col>
        ))}
        <Col lg={4}>
          <div className="service-tile">
            <ServiceItem {...areaProps} />
          </div>
        </Col>
      </Row>
    </PageSection>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Services.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Services;
