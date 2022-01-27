import Head from "next/head";
import Coursel from "../components/Coursel";
import Header from "../components/Header";
import Nav from "../components/Nav";
import axios from "axios";
import Request from "../Utills/Request";

const API_KEY = process.env.API_KEY;

export default function Home({ data }) {
  // console.log(data);
  return (
    <div>
      <Head>
        <title>Hotstar clone</title>
      </Head>
      <Header />
      <div
        className="mx-auto rounded-md"
        style={{ width: "95%", height: "400px", overflow: "hidden" }}
      >
        <Coursel />
      </div>
      <Nav data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  // const result = await Object.entries(Request).map(async ([key, { url }]) => {
  // try {
  // const resp = await axios.get(`https://api.themoviedb.org/3${url}`);
  // console.log(resp.data.results);
  // return await (resp.data.results);
  // } catch (error) {
  // console.log(error);
  // return { props: { data: "error" } };
  // }
  // });
  // console.log(result);
  const resp = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=076844091cd5f3e02b8a502038c52ffe`
  );
  // const data = await result[0];
  const res = resp.data.results;
  // console.log(data);
  return { props: { data: res } };
}
