import { useRouter } from "next/router";

// some-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  //send a request to backend API
  //to fetch news item with newsId

  return <h1>The Detail Page</h1>;
}
export default DetailPage;
