import * as React from "react";
import Page from "./components/Page";
import { Col, Row } from "reactstrap";
import RootLayout from ".";
import { ArticleGroups } from "../models/ArticleGroups";

interface Props {
  children: React.ReactNode[];
}

export default function HomePageLayout(props: Props) {
  const left = props.children[0];
  const right = props.children[1];

  return (
    <Page>
      <Row>
        <Col md={8} xs={12}>
          {left}
        </Col>
        <Col md={4} xs={0}>
          {right}
        </Col>
      </Row>
    </Page>
  );
}
