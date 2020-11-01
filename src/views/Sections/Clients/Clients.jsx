import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import shortid from "shortid";
import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import Client from "components/Client";

const Clients = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, clients, header, subheader } = frontmatter;

  return (
    <PageSection className={clsx("py-5", className)} id={anchor}>
      <Row>
        <SectionHeader header={header} subheader={subheader} />
      </Row>
      <Row>
        {clients.map(({ href, imageFileName }) => (
          <Col md={3} sm={3} className="my-3" key={shortid.generate()}>
            <Client href={href} imageFileName={imageFileName} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Clients.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Clients.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Clients;
