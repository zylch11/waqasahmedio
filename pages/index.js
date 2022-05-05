import { Row, Col } from "react-bootstrap";
import AuthorIntro from "Components/AuthorIntro";
import PageLayout from "Components/PageLayout";
import CardListItem from "Components/CardListItem";
import CardItem from "Components/CardItem";

export default function Home() {
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
        <Row className="mb-5">
          <Col md="10">
            <CardListItem />
          </Col>
          <Col md="4">
            <CardItem />
          </Col>
        </Row>
    </PageLayout>
  );
}
