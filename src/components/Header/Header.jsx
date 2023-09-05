import React, { useEffect, useState } from "react";
import "/src/components/Header/header.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  backUpNavigation,
  toggleContentVisible,
} from "../../redux/slice/appSlice";

import { DropDown } from "../DropDown/DropDown";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const visible = useSelector((state) => state.app.visible);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = window.location.href;
  const isAuth = useSelector((state) => state.userStatus.user);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible);
  };
  useEffect(() => {
    dispatch(backUpNavigation(location));
  }, [location]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      navigate("/searchProducts/" + value);
    }
  };
  return (
    <div className="header">
      <div className="left-side">
        <svg
          onClick={() => dispatch(toggleContentVisible())}
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M32 29H4C3.73478 29 3.48043 28.8946 3.29289 28.7071C3.10536 28.5196 3 28.2652 3 28C3 27.7348 3.10536 27.4804 3.29289 27.2929C3.48043 27.1054 3.73478 27 4 27H32C32.2652 27 32.5196 27.1054 32.7071 27.2929C32.8946 27.4804 33 27.7348 33 28C33 28.2652 32.8946 28.5196 32.7071 28.7071C32.5196 28.8946 32.2652 29 32 29Z"
            fill="#121212"
          />
          <path
            d="M32 19H4C3.73478 19 3.48043 18.8946 3.29289 18.7071C3.10536 18.5196 3 18.2652 3 18C3 17.7348 3.10536 17.4804 3.29289 17.2929C3.48043 17.1054 3.73478 17 4 17H32C32.2652 17 32.5196 17.1054 32.7071 17.2929C32.8946 17.4804 33 17.7348 33 18C33 18.2652 32.8946 18.5196 32.7071 18.7071C32.5196 18.8946 32.2652 19 32 19Z"
            fill="#121212"
          />
          <path
            d="M32 9H4C3.73478 9 3.48043 8.89464 3.29289 8.70711C3.10536 8.51957 3 8.26522 3 8C3 7.73478 3.10536 7.48043 3.29289 7.29289C3.48043 7.10536 3.73478 7 4 7H32C32.2652 7 32.5196 7.10536 32.7071 7.29289C32.8946 7.48043 33 7.73478 33 8C33 8.26522 32.8946 8.51957 32.7071 8.70711C32.5196 8.89464 32.2652 9 32 9Z"
            fill="#121212"
          />
        </svg>
      </div>

      <div className="right-side">
        <div className="search">
          <Link to={"/searchProducts/" + value}>
            <svg
              className="search-img"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.07184 2.80539C10.2752 2.80429 11.4519 3.16014 12.4531 3.82792C13.4542 4.49569 14.2348 5.4454 14.6961 6.55688C15.1573 7.66837 15.2786 8.8917 15.0445 10.0721C14.8104 11.2525 14.2315 12.337 13.3809 13.1883C12.5304 14.0396 11.4464 14.6196 10.2662 14.8548C9.08603 15.0899 7.86259 14.9698 6.75068 14.5095C5.63878 14.0493 4.68836 13.2695 4.01967 12.269C3.35098 11.2685 2.99406 10.0921 2.99406 8.88873C3.00135 7.27853 3.64385 5.73629 4.78192 4.59718C5.91999 3.45807 7.46165 2.81416 9.07184 2.80539ZM9.07184 1.6665C7.64341 1.6665 6.24707 2.09008 5.05938 2.88367C3.87169 3.67726 2.946 4.80521 2.39937 6.1249C1.85274 7.44459 1.70971 8.89674 1.98839 10.2977C2.26706 11.6987 2.95491 12.9856 3.96495 13.9956C4.975 15.0057 6.26188 15.6935 7.66285 15.9722C9.06382 16.2508 10.516 16.1078 11.8357 15.5612C13.1553 15.0146 14.2833 14.0889 15.0769 12.9012C15.8705 11.7135 16.2941 10.3171 16.2941 8.88873C16.2941 6.97327 15.5331 5.13627 14.1787 3.78184C12.8243 2.42741 10.9873 1.6665 9.07184 1.6665Z"
                fill="#121212"
              />
              <path
                d="M19.4449 18.4943L15.3504 14.3721L14.5615 15.1554L18.656 19.2776C18.7074 19.3294 18.7685 19.3706 18.8359 19.3988C18.9032 19.4269 18.9755 19.4416 19.0484 19.4418C19.1214 19.4421 19.1938 19.428 19.2613 19.4003C19.3289 19.3726 19.3903 19.3318 19.4421 19.2804C19.4939 19.229 19.535 19.1678 19.5632 19.1005C19.5914 19.0331 19.606 18.9609 19.6063 18.8879C19.6065 18.8149 19.5924 18.7426 19.5647 18.6751C19.537 18.6075 19.4963 18.5461 19.4449 18.4943Z"
                fill="#121212"
              />
            </svg>
          </Link>
        </div>

        <input
          value={value}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          className="input"
          type="text"
          placeholder="поиск"
        />
        <div
          className={`avatar ${dropdownVisible ? "dropdown-visible" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            handleDropdownClick();
          }}
        >
          <svg
            className="avatar-img"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.0002 9.44428C10.7694 9.44428 11.5212 9.2162 12.1608 8.78889C12.8003 8.36157 13.2987 7.75421 13.5931 7.04361C13.8874 6.33301 13.9644 5.55108 13.8144 4.79671C13.6643 4.04234 13.2939 3.34941 12.7501 2.80553C12.2062 2.26166 11.5133 1.89128 10.7589 1.74123C10.0045 1.59118 9.22261 1.66819 8.512 1.96253C7.8014 2.25687 7.19404 2.75532 6.76672 3.39484C6.33941 4.03437 6.11133 4.78624 6.11133 5.55539C6.11133 6.58679 6.52105 7.57595 7.25036 8.30525C7.97967 9.03456 8.96882 9.44428 10.0002 9.44428ZM10.0002 2.77762C10.5496 2.77762 11.0867 2.94053 11.5435 3.24576C12.0003 3.55098 12.3563 3.98481 12.5665 4.49239C12.7768 4.99996 12.8318 5.55848 12.7246 6.09731C12.6174 6.63615 12.3529 7.1311 11.9644 7.51958C11.5759 7.90806 11.081 8.17262 10.5421 8.2798C10.0033 8.38698 9.44478 8.33197 8.93721 8.12173C8.42963 7.91148 7.99581 7.55545 7.69058 7.09865C7.38535 6.64184 7.22244 6.10479 7.22244 5.55539C7.22244 4.81868 7.5151 4.11214 8.03603 3.59121C8.55697 3.07027 9.2635 2.77762 10.0002 2.77762Z"
              fill="#121212"
            />
            <path
              d="M16.9273 13.5389C16.0364 12.5973 14.9628 11.8472 13.7721 11.3346C12.5814 10.822 11.2987 10.5576 10.0023 10.5576C8.70601 10.5576 7.42328 10.822 6.2326 11.3346C5.04192 11.8472 3.96829 12.5973 3.07735 13.5389C2.88419 13.7453 2.77691 14.0174 2.77735 14.3001V17.2223C2.77735 17.517 2.89441 17.7996 3.10278 18.008C3.31116 18.2163 3.59377 18.3334 3.88846 18.3334H16.1107C16.4054 18.3334 16.688 18.2163 16.8964 18.008C17.1047 17.7996 17.2218 17.517 17.2218 17.2223V14.3001C17.2237 14.0182 17.1185 13.7461 16.9273 13.5389ZM16.1107 17.2223H3.88846V14.2945C4.6758 13.4654 5.62362 12.8052 6.67421 12.3541C7.7248 11.903 8.85621 11.6703 9.99957 11.6703C11.1429 11.6703 12.2743 11.903 13.3249 12.3541C14.3755 12.8052 15.3233 13.4654 16.1107 14.2945V17.2223Z"
              fill="#121212"
            />
          </svg>
          <div
            className={`dropdown-menu ${
              dropdownVisible ? "dropdown-visible" : ""
            }`}
          >
            {/* 239 */}
            {dropdownVisible && (
              <div className="drop-down-box">
                <DropDown />
              </div>
            )}
          </div>
        </div>
        <div className="favorite">
          <svg
            className="favorite-img"
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
        </div>
        <div className="busket" onClick={() => navigate("/basket")}>
          <svg
            className="busket-img"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M13.8893 6.66645V5.02756C13.8893 4.51686 13.7887 4.01117 13.5933 3.53935C13.3979 3.06753 13.1114 2.63882 12.7503 2.2777C12.3892 1.91658 11.9605 1.63013 11.4886 1.4347C11.0168 1.23926 10.5111 1.13867 10.0004 1.13867C9.48974 1.13867 8.98404 1.23926 8.51222 1.4347C8.0404 1.63013 7.61169 1.91658 7.25057 2.2777C6.88946 2.63882 6.603 3.06753 6.40757 3.53935C6.21213 4.01117 6.11154 4.51686 6.11154 5.02756V8.91645C6.11154 9.06379 6.17008 9.2051 6.27426 9.30929C6.37845 9.41347 6.51976 9.472 6.6671 9.472C6.81444 9.472 6.95575 9.41347 7.05994 9.30929C7.16412 9.2051 7.22266 9.06379 7.22266 8.91645V7.77756H11.6671V6.66645H7.22266V5.02756C7.22266 4.29085 7.51531 3.58431 8.03625 3.06338C8.55718 2.54244 9.26372 2.24978 10.0004 2.24978C10.7371 2.24978 11.4437 2.54244 11.9646 3.06338C12.4856 3.58431 12.7782 4.29085 12.7782 5.02756V8.88867C12.7782 9.03601 12.8367 9.17732 12.9409 9.28151C13.0451 9.3857 13.1864 9.44423 13.3338 9.44423C13.4811 9.44423 13.6224 9.3857 13.7266 9.28151C13.8308 9.17732 13.8893 9.03601 13.8893 8.88867V7.77756H16.6671V17.7776H3.33377V7.77756H5.00043V6.66645H2.22266V17.8276C2.22266 18.109 2.33445 18.3789 2.53345 18.5779C2.73245 18.7769 3.00234 18.8887 3.28377 18.8887H16.7171C16.9985 18.8887 17.2684 18.7769 17.4674 18.5779C17.6664 18.3789 17.7782 18.109 17.7782 17.8276V6.66645H13.8893Z"
              fill="#121212"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};