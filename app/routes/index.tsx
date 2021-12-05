import { useLoaderData, json, Link } from "remix";

export default function Index() {
  return (
    <>
      <h1>Transition test</h1>
      <Link to="demo">Click here to go to the transition test</Link>
    </>
  );
}
