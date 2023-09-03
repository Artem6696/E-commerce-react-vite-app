import React from 'react'
import './cooperation.scss'
export const Cooperation = () => {
  return (
    <div className="cooperation">
      <h1 className="header">Сотрудничество с нами</h1>
      <p className="description">
        Наша компания постоянно растёт и расширяет рынок, поэтому мы
        заинтересованы в новых партнёрах и рассматриваем новые проекты, которые
        могут быть привлекательны и интересны с коммерческой точки зрения.{" "}
      </p>

      <div className="box-content-top">
        <div className="about">
          <p className="about-title">Становитесь партнёром</p>
          <p className="about-description">
            Регистрируйтесь и переходите в свой кабинет
          </p>
        </div>
        <div className="about">
          <p className="about-title">Рекламируйте товары</p>
          <p className="about-description">
            Рекламируйте наши товары на форумах, сайтах, в социальных сетях
          </p>
        </div>
        <div className="about">
          <p className="about-title">Приводите покупателей</p>
          <p className="about-description">
            Приводите покупателей на наш сайт по уникальной ссылке{" "}
          </p>
        </div>
        <div className="about">
          <p className="about-title">Получайте бонусы</p>
          <p className="about-description">
            Копите бонусы от каждого оплаченного заказа{" "}
          </p>
        </div>
      </div>
      <h2 className="benefit">Это выгодно. Какие преимущества?</h2>

      <div className="box-content-bottom">
        <div className="content">
          <div className="image">
            <img className="img" src="/src/assets/Image/clarity1.svg" alt="" />
          </div>
          <p className="content-description">Автоматизация процессов</p>
        </div>
        <div className="content">
          <div className="image">
            <img className="img" src="/src/assets/Image/clarity2.svg" alt="" />
          </div>
          <p className="content-description">Пополнение ассортимента</p>
        </div>
        <div className="content">
          <div className="image">
            <img className="img" src="/src/assets/Image/clarity3.svg" alt="" />
          </div>
          <p className="content-description">Поддержка и обучение</p>
        </div>
        <div className="content">
          <div className="image">
            <img className="img" src="/src/assets/Image/clarity4.svg" alt="" />
          </div>
          <p className="content-description">Бонусы за новых клиентов</p>
        </div>
      </div>
    </div>
  );
}
