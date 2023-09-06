import React from "react";
import "./dropDown.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slice/userSlice";
export const DropDown = () => {
  const navigate = useNavigate();
  const favorite = useSelector((state) => state.favorite.favoriteUser);
  const userStatus = useSelector((state) => state.userStatus.user);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basketUser);
  const getAmountInBasket = () => {
    let amountProduct = 0;
    basket.forEach((item) => {
      amountProduct += item.quantity;
    });
    return amountProduct;
  };

  return (
    <div className="auth-container">
      <div className="auth">
        <div className="img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 39 39"
            fill="none"
          >
            {/* "#C4C4C4" */}
            <circle
              cx="19.5"
              cy="19.5"
              r="19.5"
              fill={userStatus ? "#252850" : "#C4C4C4"}
            />
          </svg>
        </div>
        {!userStatus && (
          <div className="sign-in">
            <p className="text" onClick={() => navigate("/login")}>
              войти{" "}
            </p>
          </div>
        )}
        {userStatus && (
          <div className="name">
            <p>{userStatus[0].login}</p>
          </div>
        )}
        <div className="basket-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M13.8893 6.66666V5.02777C13.8893 4.51708 13.7887 4.01138 13.5933 3.53956C13.3979 3.06774 13.1114 2.63903 12.7503 2.27791C12.3892 1.9168 11.9605 1.63034 11.4886 1.43491C11.0168 1.23947 10.5111 1.13889 10.0004 1.13889C9.48974 1.13889 8.98404 1.23947 8.51222 1.43491C8.0404 1.63034 7.61169 1.9168 7.25057 2.27791C6.88946 2.63903 6.603 3.06774 6.40757 3.53956C6.21213 4.01138 6.11154 4.51708 6.11154 5.02777V8.91666C6.11154 9.064 6.17008 9.20531 6.27426 9.3095C6.37845 9.41369 6.51976 9.47222 6.6671 9.47222C6.81444 9.47222 6.95575 9.41369 7.05994 9.3095C7.16412 9.20531 7.22266 9.064 7.22266 8.91666V7.77777H11.6671V6.66666H7.22266V5.02777C7.22266 4.29106 7.51531 3.58452 8.03625 3.06359C8.55718 2.54265 9.26372 2.25 10.0004 2.25C10.7371 2.25 11.4437 2.54265 11.9646 3.06359C12.4856 3.58452 12.7782 4.29106 12.7782 5.02777V8.88889C12.7782 9.03623 12.8367 9.17754 12.9409 9.28172C13.0451 9.38591 13.1864 9.44444 13.3338 9.44444C13.4811 9.44444 13.6224 9.38591 13.7266 9.28172C13.8308 9.17754 13.8893 9.03623 13.8893 8.88889V7.77777H16.6671V17.7778H3.33377V7.77777H5.00043V6.66666H2.22266V17.8278C2.22266 18.1092 2.33445 18.3791 2.53345 18.5781C2.73245 18.7771 3.00234 18.8889 3.28377 18.8889H16.7171C16.9985 18.8889 17.2684 18.7771 17.4674 18.5781C17.6664 18.3791 17.7782 18.1092 17.7782 17.8278V6.66666H13.8893Z"
              fill="#121212"
            />
          </svg>
          <p className="basket" onClick={() => navigate("/basket")}>
            Корзина
          </p>
          {getAmountInBasket() > 0 && (
            <div className="basket-amount">
              <p className="amount"> {getAmountInBasket()}</p>
            </div>
          )}
        </div>
        <div className="line"></div>
        <div className="favorite-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.99977 18.0167C9.87702 18.0163 9.75785 17.9753 9.66088 17.9C6.57199 15.5 4.44421 13.4333 2.95532 11.3944C1.05532 8.78889 0.621986 6.38334 1.66643 4.24445C2.41087 2.71667 4.54976 1.46667 7.04976 2.19445C8.24173 2.53875 9.2817 3.27711 9.99977 4.28889C10.7178 3.27711 11.7578 2.53875 12.9498 2.19445C15.4442 1.47778 17.5887 2.71667 18.3331 4.24445C19.3775 6.38334 18.9442 8.78889 17.0442 11.3944C15.5553 13.4333 13.4275 15.5 10.3387 17.9C10.2417 17.9753 10.1225 18.0163 9.99977 18.0167ZM5.62754 3.1C5.03268 3.07685 4.44275 3.21614 3.92107 3.50292C3.39938 3.7897 2.96565 4.21314 2.66643 4.72778C1.80532 6.49445 2.19421 8.46111 3.85532 10.7333C5.62064 13.0103 7.68777 15.0363 9.99977 16.7556C12.3114 15.038 14.3785 13.0139 16.1442 10.7389C17.8109 8.46112 18.1942 6.49445 17.3331 4.73334C16.7775 3.62223 15.1109 2.73889 13.2553 3.26112C12.6603 3.43695 12.1088 3.7354 11.6361 4.13727C11.1634 4.53913 10.7801 5.03551 10.5109 5.59445C10.469 5.69634 10.3978 5.7835 10.3063 5.84483C10.2148 5.90616 10.1071 5.93891 9.99699 5.93891C9.88683 5.93891 9.77916 5.90616 9.68766 5.84483C9.59616 5.7835 9.52495 5.69634 9.4831 5.59445C9.21586 5.03411 8.83322 4.53658 8.36026 4.13446C7.88729 3.73234 7.33468 3.43473 6.73865 3.26112C6.37753 3.15623 6.00359 3.10201 5.62754 3.1Z"
              fill="#121212"
            />
          </svg>
          <p className="favorite">Избранное</p>
          {favorite.length > 0 && (
            <div className="favorite-amount">
              <p className="amount"> {favorite.length}</p>
            </div>
          )}
        </div>
        {userStatus && (
          <div className="exit-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 12 16"
              fill="none"
            >
              <path
                d="M1.44434 0.222229H10.3332C10.6279 0.222229 10.9105 0.339292 11.1189 0.547666C11.3273 0.75604 11.4443 1.03866 11.4443 1.33334H1.44434V14.6667H10.3332V9.22223H11.4443V14.6667C11.4443 14.9614 11.3273 15.244 11.1189 15.4523C10.9105 15.6607 10.6279 15.7778 10.3332 15.7778H1.44434C1.14965 15.7778 0.867036 15.6607 0.658663 15.4523C0.450289 15.244 0.333225 14.9614 0.333225 14.6667V1.33334C0.333225 1.03866 0.450289 0.75604 0.658663 0.547666C0.867036 0.339292 1.14965 0.222229 1.44434 0.222229Z"
                fill="#7D7D7D"
              />
            </svg>

            <p
              onClick={() => {
                dispatch(setUser(null));
              }}
              className="exit"
            >
              Выйти
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
