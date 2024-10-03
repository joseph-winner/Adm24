import React, { useEffect, useState } from 'react';
import SingleHeader from '../../components/SingleHeader/SingleHeader';
import Layout from '../../constants/Layout';
import Footer from '../../components/Footer/Footer';
import SingleNewsComponent from '../../components/NewsComponent/SingleNewsComponent';
import "./SingleNews.css"

export default function SingleNews() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='single-sect-container'>
      {isMobile ? (
        <>
          <SingleHeader title='Qatar urges global action on Sudan crisis' />
          <SingleNewsComponent />
          <Footer />
        </>
      ) : (
        <Layout>
            <SingleNewsComponent />
        </Layout>
      )}
    </div>
  );
}
