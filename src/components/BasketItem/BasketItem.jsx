/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import "./basketItem.scss";
import {
  decrementQuanntity,
  incremenQuantity,
  removeItem,
} from "../../redux/slice/basketSlice";

export const BasketItem = ({
  _id,
  name,
  photosURL,
  colors,
  price,
  sizes,
  quantity = 0,
}) => {


  const dispatch = useDispatch();
  return (
    <div className="basket-item">
      <div className="basket-item_img">
        <img className="img" src={photosURL} alt="" />
      </div>
      <div className="box-info">
        <p className="name">
          {name} <span className="id">Арт.{_id}</span>
        </p>
        <div className="color-size-box">
          <p className="color">Цвет:</p>
          <div
            className="circle specific-circle"
            style={{
              background: colors,
              width: "15px",
              height: "15px",
              borderRadius: "50%",
            }}
          ></div>
          <p className="size">Размер: {sizes && sizes[0]}</p>
        </div>
        <div className="product-control-box">
          <div
            className="decrement"
            onClick={() => dispatch(decrementQuanntity(_id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.4444 9.44434H5.55556C5.40821 9.44434 5.26691 9.50287 5.16272 9.60705C5.05853 9.71124 5 9.85255 5 9.99989C5 10.1472 5.05853 10.2885 5.16272 10.3927C5.26691 10.4969 5.40821 10.5554 5.55556 10.5554H14.4444C14.5918 10.5554 14.7331 10.4969 14.8373 10.3927C14.9415 10.2885 15 10.1472 15 9.99989C15 9.85255 14.9415 9.71124 14.8373 9.60705C14.7331 9.50287 14.5918 9.44434 14.4444 9.44434Z"
                fill="#514A7E"
              />
            </svg>
          </div>
          <div className="quantity">{quantity}</div>
          <div
            className="increment"
            onClick={() => dispatch(incremenQuantity(_id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.6666 9.4445H10.5555V3.33339C10.5555 3.18605 10.497 3.04474 10.3928 2.94055C10.2886 2.83636 10.1473 2.77783 9.99993 2.77783C9.85259 2.77783 9.71128 2.83636 9.60709 2.94055C9.50291 3.04474 9.44437 3.18605 9.44437 3.33339V9.4445H3.33326C3.18592 9.4445 3.04461 9.50303 2.94043 9.60722C2.83624 9.7114 2.77771 9.85271 2.77771 10.0001C2.77497 10.0723 2.78773 10.1442 2.81515 10.2111C2.84257 10.2779 2.88399 10.3381 2.93664 10.3876C2.98929 10.4371 3.05193 10.4747 3.12035 10.4979C3.18877 10.5212 3.26137 10.5295 3.33326 10.5223H9.44437V16.6667C9.44437 16.8141 9.50291 16.9554 9.60709 17.0596C9.71128 17.1637 9.85259 17.2223 9.99993 17.2223C10.1473 17.2223 10.2886 17.1637 10.3928 17.0596C10.497 16.9554 10.5555 16.8141 10.5555 16.6667V10.5556H16.6666C16.8139 10.5556 16.9552 10.4971 17.0594 10.3929C17.1636 10.2887 17.2222 10.1474 17.2222 10.0001C17.2222 9.85271 17.1636 9.7114 17.0594 9.60722C16.9552 9.50303 16.8139 9.4445 16.6666 9.4445Z"
                fill="#514A7E"
              />
            </svg>
          </div>
        </div>
        <div className="box-favorite-remove">
          <div className="favorite-box">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99977 18.0166C9.87702 18.0162 9.75785 17.9752 9.66088 17.8999C6.57199 15.4999 4.44421 13.4333 2.95532 11.3944C1.05532 8.78883 0.621986 6.38328 1.66643 4.24439C2.41087 2.71661 4.54976 1.46661 7.04976 2.19439C8.24173 2.53869 9.2817 3.27705 9.99977 4.28883C10.7178 3.27705 11.7578 2.53869 12.9498 2.19439C15.4442 1.47772 17.5887 2.71661 18.3331 4.24439C19.3775 6.38328 18.9442 8.78883 17.0442 11.3944C15.5553 13.4333 13.4275 15.4999 10.3387 17.8999C10.2417 17.9752 10.1225 18.0162 9.99977 18.0166ZM5.62754 3.09994C5.03268 3.07679 4.44275 3.21608 3.92107 3.50286C3.39938 3.78964 2.96565 4.21308 2.66643 4.72772C1.80532 6.49439 2.19421 8.46105 3.85532 10.7333C5.62064 13.0103 7.68777 15.0363 9.99977 16.7555C12.3114 15.038 14.3785 13.0139 16.1442 10.7388C17.8109 8.46105 18.1942 6.49439 17.3331 4.73328C16.7775 3.62217 15.1109 2.73883 13.2553 3.26105C12.6603 3.43689 12.1088 3.73534 11.6361 4.13721C11.1634 4.53907 10.7801 5.03545 10.5109 5.59439C10.469 5.69628 10.3978 5.78343 10.3063 5.84477C10.2148 5.9061 10.1071 5.93885 9.99699 5.93885C9.88683 5.93885 9.77916 5.9061 9.68766 5.84477C9.59616 5.78343 9.52495 5.69628 9.4831 5.59439C9.21586 5.03405 8.83322 4.53652 8.36026 4.1344C7.88729 3.73228 7.33468 3.43467 6.73865 3.26105C6.37753 3.15617 6.00359 3.10195 5.62754 3.09994Z"
                fill="#121212"
              />
            </svg>
            <p className="favorite">В избранное</p>
          </div>
          <div className="remove-box" onClick={() => dispatch(removeItem(_id))}>
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.0779 18.8888H4.92237C4.70859 18.8837 4.4979 18.8366 4.30233 18.7501C4.10677 18.6636 3.93016 18.5394 3.78261 18.3846C3.63506 18.2299 3.51945 18.0475 3.44238 17.8481C3.36532 17.6486 3.32831 17.4359 3.33348 17.2221V6.23877H4.44459V17.2221C4.43929 17.29 4.44746 17.3583 4.46863 17.423C4.4898 17.4877 4.52356 17.5476 4.56796 17.5992C4.61236 17.6509 4.66653 17.6932 4.72736 17.7238C4.78818 17.7544 4.85445 17.7727 4.92237 17.7777H15.0779C15.1458 17.7727 15.2121 17.7544 15.2729 17.7238C15.3338 17.6932 15.3879 17.6509 15.4323 17.5992C15.4767 17.5476 15.5105 17.4877 15.5317 17.423C15.5528 17.3583 15.561 17.29 15.5557 17.2221V6.23877H16.6668V17.2221C16.672 17.4359 16.635 17.6486 16.5579 17.8481C16.4809 18.0475 16.3652 18.2299 16.2177 18.3846C16.0701 18.5394 15.8935 18.6636 15.698 18.7501C15.5024 18.8366 15.2917 18.8837 15.0779 18.8888Z"
                fill="#121212"
              />
              <path
                d="M17.1004 4.99978H2.77821C2.63087 4.99978 2.48956 4.94125 2.38537 4.83706C2.28119 4.73288 2.22266 4.59157 2.22266 4.44423C2.22266 4.29688 2.28119 4.15558 2.38537 4.05139C2.48956 3.9472 2.63087 3.88867 2.77821 3.88867H17.1004C17.2478 3.88867 17.3891 3.9472 17.4933 4.05139C17.5975 4.15558 17.656 4.29688 17.656 4.44423C17.656 4.59157 17.5975 4.73288 17.4933 4.83706C17.3891 4.94125 17.2478 4.99978 17.1004 4.99978Z"
                fill="#121212"
              />
              <path
                d="M11.667 7.22217H12.7781V15.5555H11.667V7.22217Z"
                fill="#121212"
              />
              <path
                d="M7.22266 7.22217H8.33377V15.5555H7.22266V7.22217Z"
                fill="#121212"
              />
              <path
                d="M12.7782 3.25577H11.7227V2.22244H8.27821V3.25577H7.22266V2.22244C7.2223 1.93713 7.33171 1.66262 7.52821 1.45577C7.72472 1.24892 7.99326 1.12559 8.27821 1.11133H11.7227C12.0076 1.12559 12.2762 1.24892 12.4727 1.45577C12.6692 1.66262 12.7786 1.93713 12.7782 2.22244V3.25577Z"
                fill="#121212"
              />
            </svg>
            <p className="remove">Удалить</p>
          </div>
        </div>
      </div>
      <div className="price-info">
        <h3 className="title">Стоимость</h3>
        <h3 className="price">
          <span className="valute">KZT</span> {price}
        </h3>
        <div className="ship-info">
          <p className="info">Информация о доставке</p>
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464467C7.97631 0.269205 7.65973 0.269205 7.46447 0.464467C7.2692 0.659729 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM-4.37114e-08 4.5L11 4.5L11 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
              fill="#514A7E"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};