/* eslint-disable no-unused-vars */
import { useState } from 'react';
import api from '../../service/api/api.js';
import ListCoins from '../../components/ListCoins/ListCoins.jsx';
import BannerHome from '../../components/BannerHome/BannerHome.jsx';
import Highlights from '../../components/Highlights/Highlights.jsx';
import CardsCoin from '../../components/CardsCoin/CardsCoin.jsx';
import './style.css';
import TableCoins from '../../components/TableCoins/TableCoins.jsx';
import NewsList from '../../components/NewsList/NewsList.jsx';
import TitleComponent from '../../components/TitleComponent/TitleComponent.jsx';

function HomePages() {
  return (
    <div className='containerHome'>
      <BannerHome />
      <Highlights />
      
      <section className='coinPopular'>
        <div className='containerPopular'>
          <TitleComponent titleText="As mais populares"/>
          <div className="containerDividerPopular">
            <div className='dividerSection'></div>
          </div>
        </div>
        <div className='containerCoin'>
          <CardsCoin />
          <CardsCoin />
          <CardsCoin />
        </div>
      </section>

      <section className='coinAboutUs'>
          <div className="containerBackground"></div>
        <div className="containerAboutTitle">
          <TitleComponent titleText="Sobre nos" />
          <div className="containerDividerAbout">
            <div className='dividerSection'></div>
          </div>
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
            <div className="aboutBallsCoinTwo"></div>
            <CardsCoin />
          </div>
        </div>
      </section>

      <section className='CoinsList'>
          <div className="containerCoinsTitle">
            <TitleComponent titleText="Todas as Moedas" />
            <div className="containerDividerCoins">
              <div className='dividerSection'></div>
            </div>
          </div>
        <div className="containerCoinsList">
          <TableCoins />
        </div>
      </section>

      <section className="news">
        <div className="newContainerApresentation">
          <div className="newImageBackgroundRight"></div>
          <TitleComponent titleText="Atualizaçãos mais recentes apenas para você" />
          <p>Leia as últimas Atualizaçãos, novidade e todas as noticias sobre criptomoedas!</p>
          <div className="newImageBackgroundLeft"></div>
        </div>
        <div className="newContainerInformationSlide">
          <NewsList />
          <NewsList />
          <NewsList />
        </div>
      </section>
    </div>
  )
}

export default HomePages
//<ListCoins />