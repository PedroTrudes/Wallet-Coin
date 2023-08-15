/* eslint-disable no-unused-vars */
import { useState } from 'react';
import api from '../../service/api/api.js';
import ListCoins from '../../components/ListCoins/ListCoins.jsx';
import BannerHome from '../../components/BannerHome/BannerHome.jsx';
import Highlights from '../../components/Highlights/Highlights.jsx';
import CardsCoin from '../../components/CardsCoin/CardsCoin.jsx';
import './style.css';

function HomePages() {
  return (
    <div className='containerHome'>
      <BannerHome />
      <Highlights />
      <section className='coinPopular'>
        <div className='containerPopular'>
          <h2>As mais populares</h2>
          <div className='dividerSection'></div>
        </div>
        <div className='containerCoin'>
          <CardsCoin />
          <CardsCoin />
          <CardsCoin />
        </div>
      </section>
      <section className='coinAboutUs'>
        <div className="containerAboutTitle">
          <h2>Sobre nos</h2>
        </div>
        <div className="containerAbout">
          <div className="containerAboutText">
            <span>Analise Rapida e Facil</span>
            <p>Viemos para facilitar a sua analise de mercado
              das criptomoedas de forma simples e rapida
            </p>
          </div>
          <div className="containerAboutCard">
            <div className="aboutBallsCoinOne"></div>
            <CardsCoin />
            <div className="aboutBallsCoinTwo"></div>
          </div>
          <div className="aboutEffectShadow"></div> 
        </div>
      </section>
    </div>
  )
}

export default HomePages
//<ListCoins />