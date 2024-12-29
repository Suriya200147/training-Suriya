import React from 'react';
import Layout from '../Template/Layout';

const Contact = () => {
  return (
    <Layout>
      <h1 className="text-5xl font-bold">ติดต่อ</h1>
      <hr />
      <div className="mt-4 space-y-2">
        <p>Nvc Training Center</p>
        <p>Address: 90 Tesa Rd., Mueang, Nakhon Pathom</p>
        <p>Tel: 034-252790</p>
        <p>E-mail: admin@nvctrainingcenter.com</p>
      </div>
      <div className="mt-20"></div>
    </Layout>
  );
};

export default Contact;
