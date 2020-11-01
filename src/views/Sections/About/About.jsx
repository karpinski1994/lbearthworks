import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import { Row, Col } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./About.scss";

const About = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    subcontent,
    teamMember,
  } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {teamMember.map(({ header, ...tmProps }) => (
          <Col lg={3} key={shortid.generate()}>
            <TeamMember header={header} {...tmProps} />
          </Col>
        ))}
        <Col lg={9} className="description mx-auto text-center">
          <p className="details large text-muted">{rootContent}</p>
          <p className="sign large text-muted">{subcontent}</p>
        </Col>
      </Row>
    </PageSection>
  );
};

About.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

About.defaultProps = {
  className: null,
  frontmatter: null,
};

export default About;
