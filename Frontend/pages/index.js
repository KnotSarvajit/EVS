import { useSession } from "next-auth/react";
import React from "react";
import ApiConnect from "../components/MainPage/ApiConnect";
import MainPage from "../components/MainPage/MainPage";

function index(props) {
  const { data: session } = useSession();
  // logged in
  if (session) {
    return (
      <>
        <ApiConnect BACKEND_API={props.BACKEND_API} />
      </>
    );
  } else {
    return <MainPage />;
  }
  // return <ApiConnect />;
}
export default index;
export async function getServerSideProps() {
  return {
    props: {
      hello: "Heelow",
      BACKEND_API: process.env.BACKEND_API,
    },
  };
}
