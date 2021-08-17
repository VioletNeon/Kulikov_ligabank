import React from 'react';
import Header from '../header/header';
import PublicPart from '../public-part/public-part';
import ConverterForm from '../converter-form/converter-form';
import ConverterHistory from '../converter-history/converter-history';
import Footer from '../footer/footer';

function MainScreen() {

  return (
    <>
      <Header/>
      <main className="page-form">
        <h1 className="visually-hidden">Лига банк</h1>
        <PublicPart/>
        <ConverterForm/>
        <ConverterHistory/>
      </main>
      <Footer/>
    </>
  );
}

export default MainScreen;
