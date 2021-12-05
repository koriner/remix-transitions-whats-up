import { useEffect } from "react";
import type { LoaderFunction, ActionFunction } from "remix";
import { useLoaderData, useActionData, useTransition, Form } from "remix";

const sleep = (ms: number): Promise<void> =>
  new Promise<void>((res) => setTimeout(res, ms));

export let loader: LoaderFunction = async ({ request }) => {
  return {
    loaderRes: "This is my loader data",
  };
};

export let action: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  // Set random delay to wait before returning
  const rand = Math.floor(Math.random() * 2000) + 1000;
  console.log("called action, rand MS: ", rand);
  await sleep(rand);
  console.log("returning from action...");
  return {
    actionRes: `You submitted ${form.get(
      "value"
    )}, and I returned in ${rand}ms`,
  };
};

export default function TransitionDemoTest() {
  const { loaderRes } = useLoaderData();
  const actionData = useActionData();
  const transition = useTransition();

  useEffect(() => {
    // never being triggered?
    console.log("transition state change: ", transition);
  }, [transition]);

  return (
    <div>
      <h1>Testing submit transition state changes</h1>
      <p>Loader res: {loaderRes}</p>
      <h2>Submit something</h2>

      {transition.state === "submitting" && (
        <div>
          My cool loading state isn't showing up. What have I done wrong!?
        </div>
      )}

      <Form method="post">
        <input type="text" name="value" placeholder="Type something"></input>
        <button type="submit">Submit me</button>
      </Form>
      <p>Action res: {actionData?.actionRes || ""}</p>
    </div>
  );
}
