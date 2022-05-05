import { Row, Col } from "react-bootstrap";
import AuthorIntro from "Components/AuthorIntro";
import PageLayout from "Components/PageLayout";
import CardListItem from "Components/CardListItem";
import CardItem from "Components/CardItem";

import { getAllBlogs } from 'lib/api';

export default function Home({blogs}) {
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      {/* {JSON.stringify(blogs)} */}
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

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  }
}