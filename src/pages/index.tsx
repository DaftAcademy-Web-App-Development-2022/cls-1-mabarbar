import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

import { NextPageWithLayout } from "~/types/common.types";
import playlistData from "~/data/playlistData.json";

import Layout from "~/components/Layout/Layout.component";
import Main from "~/views/Main/Main.view";
import Container from "~/components/Container/Container.component";

const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>DaftAcademy - Webapp 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Main items={playlistData}></Main>
      </Container>
    </Fragment>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
