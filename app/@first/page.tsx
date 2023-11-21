import { GetServerSideProps, InferGetServerSidePropsType } from "next";

async function getData() {
  return { isServer: true };
}
export default async function FirstRoute() {
  const { isServer } = await getData();
  return (
    <p>
      This is the content inside the first route! Is it SSR:{" "}
      {JSON.stringify(isServer)}
    </p>
  );
}
