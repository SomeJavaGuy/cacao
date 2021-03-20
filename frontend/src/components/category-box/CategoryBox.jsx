import React from "react";
import { Card, CardBody, CardLink, CardText } from "reactstrap";
import "./CategoryBox.css";

export const CategoryBox = () => {
  return (
    <div className="pt-2" style={{ height: 400 }}>
      <Card>
        <CardBody>
          {/* <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle> */}
        </CardBody>
        <img width="100%" src="/assets/placeholder-1.png" alt="category 1" />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
      ;
    </div>
  );
};
