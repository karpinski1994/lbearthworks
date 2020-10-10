import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card } from "react-bootstrap";
import Image from "components/Image";
import "./ImageCard.scss";

const ImageCard = ({
  className,
  imageFileName,
  bannerFileName,
  imageAlt,
  header,
  subheader,
  extraInfo,
}) => {
  return (
    <Card className={clsx("image-card mb-5 bg-dark text-white text-center", className)}>
      {/* <Image className="image" fileName={imageFileName} alt={imageAlt || header || subheader} /> */}
      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            <div className="text-uppercase">
              <Image
                className="banner"
                fileName={bannerFileName}
                alt={imageAlt || header || subheader}
              />
              <h1 className="intro-lead-in">{subheader}</h1>
            </div>
            {extraInfo}
          </div>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  imageFileName: PropTypes.string,
  bannerFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  imageFileName: null,
  bannerFileName: null,
  imageAlt: null,
  header: "",
  subheader: "",
  extraInfo: null,
};

export default ImageCard;
