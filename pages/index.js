import { Row, Col } from "react-bootstrap";
import AuthorIntro from "Components/AuthorIntro";
import PageLayout from "Components/PageLayout";
import CardListItem from "Components/CardListItem";
import CardItem from "Components/CardItem";

import { getAllBlogs } from "lib/api";

export default function Home({ blogs }) {
  // debugger
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      {/* {JSON.stringify(blogs)} */}
      <Row className="mb-5">
        {/* <Col md="10">
            <CardListItem />
          </Col> */}
        {blogs.map((blog) => (
          <Col key={blog.slug} md="4">
            <CardItem
              author={blog.author}
              title={blog.title}
              subtitle={blog.subtitle} 
              date={blog.date}
              coverImage={blog.coverImage}
            />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
