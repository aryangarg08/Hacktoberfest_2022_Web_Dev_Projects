import React from "react";
import "./home.css";
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';


import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

function Home() {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
   //console.log(data);
   if (isFetching) return 'Loading...';
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-light">Home page</h1>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row gutter={[32, 32]}>
              <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
              <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
              <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
              <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
              <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
