import React from 'react';
import Layout from '../components/layout/Layout';

function Organization() {
  return (
    <Layout>
      <section className="-mt-24 pt-40 pb-12 bg-slate-500">
        <div className="container">
          <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
            한인회 조직도
          </h1>
        </div>
      </section>
      <div className="container pt-12">
        <div className="flex justify-center">
          <img src="assets/imgs/placeholders/org_map_v1.svg" alt="org_map" />
        </div>
      </div>
    </Layout>
  );
}

export default Organization;
