import React, { useState } from 'react';
import navStyles from '../../styles/Nav.module.scss';
import style from '../../styles/Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
	return (
		<>
			{/* <div className={style.wraper}>
        <svg
          className={style.logo}
          width="104"
          height="37"
          viewBox="0 0 104 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.1255 8.38824L42.8647 16.1226L45.5893 8.38824H48.4751V19.0523H46.2705V16.1373L46.4902 11.1055L43.6118 19.0523H42.103L39.2319 11.1129L39.4516 16.1373V19.0523H37.2544V8.38824H40.1255ZM52.7304 19.0523H50.5332V8.38824H52.7304V19.0523ZM62.5815 10.168H59.3149V19.0523H57.1176V10.168H53.895V8.38824H62.5815V10.168ZM70.2573 14.4307H66.0385V17.2872H70.9897V19.0523H63.8413V8.38824H70.9751V10.168H66.0385V12.7095H70.2573V14.4307ZM80.7163 17.7047C80.3208 18.1783 79.7617 18.5469 79.039 18.8106C78.3164 19.0694 77.5156 19.1988 76.6367 19.1988C75.7138 19.1988 74.9033 18.9986 74.205 18.5982C73.5117 18.1929 72.9746 17.607 72.5937 16.8404C72.2177 16.0738 72.0249 15.1729 72.0151 14.1378V13.4127C72.0151 12.3482 72.1933 11.4278 72.5498 10.6514C72.9111 9.87018 73.4287 9.27448 74.1025 8.86432C74.7812 8.44928 75.5747 8.24176 76.4829 8.24176C77.7475 8.24176 78.7363 8.54449 79.4492 9.14996C80.1621 9.75055 80.5844 10.627 80.7163 11.7794H78.5776C78.4799 11.169 78.2627 10.7222 77.9257 10.439C77.5937 10.1558 77.1347 10.0142 76.5488 10.0142C75.8017 10.0142 75.2329 10.295 74.8422 10.8565C74.4516 11.418 74.2539 12.253 74.249 13.3614V14.0425C74.249 15.1607 74.4614 16.0054 74.8862 16.5767C75.311 17.148 75.9336 17.4337 76.7539 17.4337C77.5791 17.4337 78.1674 17.2579 78.519 16.9063V15.0679H76.5195V13.4493H80.7163V17.7047ZM86.4511 15.1485H84.7006V19.0523H82.5034V8.38824H86.4658C87.7255 8.38824 88.6972 8.66901 89.3808 9.23053C90.0644 9.79205 90.4062 10.5855 90.4062 11.6109C90.4062 12.3384 90.2475 12.9464 89.9301 13.4346C89.6176 13.918 89.1416 14.3038 88.5019 14.5919L90.809 18.9498V19.0523H88.4506L86.4511 15.1485ZM84.7006 13.3687H86.4731C87.0249 13.3687 87.4521 13.2296 87.7548 12.9512C88.0576 12.668 88.2089 12.2798 88.2089 11.7867C88.2089 11.2838 88.0649 10.8882 87.7768 10.6002C87.4936 10.3121 87.0566 10.168 86.4658 10.168H84.7006V13.3687ZM98.104 16.855H94.2514L93.519 19.0523H91.1826L95.1523 8.38824H97.1884L101.18 19.0523H98.8437L98.104 16.855ZM94.8447 15.0753H97.5107L96.1704 11.0836L94.8447 15.0753Z"
            fill="#0067FF"
          />
          <path
            d="M38.6305 26.8759H37.3238V30.4296H36.4449V26.8759H35.1559V26.164H38.6305V26.8759ZM41.7008 28.581H40.0133V29.7236H41.9938V30.4296H39.1344V26.164H41.9879V26.8759H40.0133V27.8925H41.7008V28.581ZM45.858 29.0087C45.8248 29.4677 45.6549 29.829 45.3483 30.0927C45.0436 30.3564 44.6412 30.4882 44.1412 30.4882C43.5944 30.4882 43.1637 30.3046 42.8492 29.9374C42.5367 29.5683 42.3805 29.0624 42.3805 28.4199V28.1591C42.3805 27.749 42.4528 27.3876 42.5973 27.0751C42.7418 26.7626 42.9479 26.5234 43.2154 26.3574C43.485 26.1894 43.7975 26.1054 44.1529 26.1054C44.6451 26.1054 45.0416 26.2372 45.3424 26.5009C45.6432 26.7646 45.817 27.1347 45.8639 27.6113H44.985C44.9635 27.3359 44.8863 27.1367 44.7535 27.0136C44.6227 26.8886 44.4225 26.8261 44.1529 26.8261C43.86 26.8261 43.6403 26.9316 43.4938 27.1425C43.3492 27.3515 43.275 27.6767 43.2711 28.1181V28.4404C43.2711 28.9013 43.3404 29.2382 43.4791 29.4511C43.6197 29.664 43.8404 29.7704 44.1412 29.7704C44.4127 29.7704 44.6149 29.7089 44.7477 29.5859C44.8824 29.4609 44.9596 29.2685 44.9791 29.0087H45.858ZM49.9069 30.4296H49.0279V28.6015H47.3141V30.4296H46.4352V26.164H47.3141V27.8925H49.0279V26.164H49.9069V30.4296ZM54.1461 30.4296H53.2672L51.5563 27.623V30.4296H50.6774V26.164H51.5563L53.2701 28.9765V26.164H54.1461V30.4296ZM58.4176 28.3935C58.4176 28.8134 58.3434 29.1816 58.1949 29.498C58.0465 29.8144 57.8336 30.0585 57.5563 30.2304C57.2809 30.4023 56.9645 30.4882 56.607 30.4882C56.2535 30.4882 55.9381 30.4033 55.6608 30.2333C55.3834 30.0634 55.1686 29.8212 55.0162 29.5068C54.8639 29.1904 54.7867 28.8271 54.7848 28.4169V28.206C54.7848 27.7861 54.86 27.4169 55.0104 27.0986C55.1627 26.7783 55.3766 26.5331 55.652 26.3632C55.9293 26.1913 56.2457 26.1054 56.6012 26.1054C56.9567 26.1054 57.2721 26.1913 57.5475 26.3632C57.8248 26.5331 58.0387 26.7783 58.1891 27.0986C58.3414 27.4169 58.4176 27.7851 58.4176 28.2031V28.3935ZM57.527 28.2001C57.527 27.7529 57.4469 27.413 57.2867 27.1806C57.1266 26.9482 56.8981 26.832 56.6012 26.832C56.3063 26.832 56.0787 26.9472 55.9186 27.1777C55.7584 27.4062 55.6774 27.7421 55.6754 28.1855V28.3935C55.6754 28.829 55.7555 29.1669 55.9156 29.4072C56.0758 29.6474 56.3063 29.7675 56.607 29.7675C56.902 29.7675 57.1285 29.6523 57.2867 29.4218C57.4449 29.1894 57.525 28.8515 57.527 28.4081V28.2001ZM59.9352 29.7236H61.8014V30.4296H59.0563V26.164H59.9352V29.7236ZM65.6246 28.3935C65.6246 28.8134 65.5504 29.1816 65.402 29.498C65.2535 29.8144 65.0406 30.0585 64.7633 30.2304C64.4879 30.4023 64.1715 30.4882 63.8141 30.4882C63.4606 30.4882 63.1451 30.4033 62.8678 30.2333C62.5904 30.0634 62.3756 29.8212 62.2233 29.5068C62.0709 29.1904 61.9938 28.8271 61.9918 28.4169V28.206C61.9918 27.7861 62.067 27.4169 62.2174 27.0986C62.3697 26.7783 62.5836 26.5331 62.859 26.3632C63.1363 26.1913 63.4528 26.1054 63.8082 26.1054C64.1637 26.1054 64.4791 26.1913 64.7545 26.3632C65.0319 26.5331 65.2457 26.7783 65.3961 27.0986C65.5485 27.4169 65.6246 27.7851 65.6246 28.2031V28.3935ZM64.734 28.2001C64.734 27.7529 64.6539 27.413 64.4938 27.1806C64.3336 26.9482 64.1051 26.832 63.8082 26.832C63.5133 26.832 63.2858 26.9472 63.1256 27.1777C62.9654 27.4062 62.8844 27.7421 62.8824 28.1855V28.3935C62.8824 28.829 62.9625 29.1669 63.1227 29.4072C63.2828 29.6474 63.5133 29.7675 63.8141 29.7675C64.109 29.7675 64.3356 29.6523 64.4938 29.4218C64.652 29.1894 64.732 28.8515 64.734 28.4081V28.2001ZM69.6383 29.8906C69.4801 30.08 69.2565 30.2275 68.9674 30.3329C68.6783 30.4365 68.358 30.4882 68.0065 30.4882C67.6373 30.4882 67.3131 30.4081 67.0338 30.248C66.7565 30.0859 66.5416 29.8515 66.3893 29.5449C66.2389 29.2382 66.1617 28.8779 66.1578 28.4638V28.1738C66.1578 27.748 66.2291 27.3798 66.3717 27.0693C66.5162 26.7568 66.7233 26.5185 66.9928 26.3544C67.2643 26.1884 67.5817 26.1054 67.9449 26.1054C68.4508 26.1054 68.8463 26.2265 69.1315 26.4687C69.4166 26.7089 69.5856 27.0595 69.6383 27.5204H68.7828C68.7438 27.2763 68.6569 27.0976 68.5221 26.9843C68.3893 26.871 68.2057 26.8144 67.9713 26.8144C67.6725 26.8144 67.4449 26.9267 67.2887 27.1513C67.1324 27.3759 67.0533 27.7099 67.0514 28.1533V28.4257C67.0514 28.873 67.1363 29.2109 67.3063 29.4394C67.4762 29.6679 67.7252 29.7822 68.0533 29.7822C68.3834 29.7822 68.6188 29.7119 68.7594 29.5712V28.8359H67.9596V28.1884H69.6383V29.8906ZM71.8238 28.0859L72.7115 26.164H73.6725L72.2721 28.8828V30.4296H71.3785V28.8828L69.9781 26.164H70.942L71.8238 28.0859ZM77.7682 29.3105C77.7682 29.1445 77.7096 29.0175 77.5924 28.9296C77.4752 28.8398 77.2643 28.746 76.9596 28.6484C76.6549 28.5488 76.4137 28.4511 76.236 28.3554C75.7516 28.0937 75.5094 27.7411 75.5094 27.2978C75.5094 27.0673 75.5738 26.8622 75.7028 26.6826C75.8336 26.5009 76.0201 26.3593 76.2623 26.2578C76.5065 26.1562 76.7799 26.1054 77.0826 26.1054C77.3873 26.1054 77.6588 26.1611 77.8971 26.2724C78.1354 26.3818 78.3199 26.537 78.4508 26.7382C78.5836 26.9394 78.65 27.1679 78.65 27.4238H77.7711C77.7711 27.2285 77.7096 27.0771 77.5865 26.9697C77.4635 26.8603 77.2906 26.8056 77.068 26.8056C76.8531 26.8056 76.6861 26.8515 76.567 26.9433C76.4479 27.0331 76.3883 27.1523 76.3883 27.3007C76.3883 27.4394 76.4576 27.5556 76.5963 27.6494C76.7369 27.7431 76.943 27.831 77.2145 27.913C77.7145 28.0634 78.0787 28.2499 78.3072 28.4726C78.5358 28.6953 78.65 28.9726 78.65 29.3046C78.65 29.6738 78.5104 29.9638 78.2311 30.1747C77.9518 30.3837 77.5758 30.4882 77.1031 30.4882C76.775 30.4882 76.4762 30.4286 76.2067 30.3095C75.9371 30.1884 75.7311 30.0234 75.5885 29.8144C75.4479 29.6054 75.3776 29.3632 75.3776 29.0878H76.2594C76.2594 29.5585 76.5406 29.7939 77.1031 29.7939C77.3121 29.7939 77.4752 29.7519 77.5924 29.6679C77.7096 29.582 77.7682 29.4628 77.7682 29.3105ZM80.7184 28.0859L81.6061 26.164H82.567L81.1666 28.8828V30.4296H80.2731V28.8828L78.8727 26.164H79.8365L80.7184 28.0859ZM85.1217 29.3105C85.1217 29.1445 85.0631 29.0175 84.9459 28.9296C84.8287 28.8398 84.6178 28.746 84.3131 28.6484C84.0084 28.5488 83.7672 28.4511 83.5895 28.3554C83.1051 28.0937 82.8629 27.7411 82.8629 27.2978C82.8629 27.0673 82.9274 26.8622 83.0563 26.6826C83.1871 26.5009 83.3736 26.3593 83.6158 26.2578C83.86 26.1562 84.1334 26.1054 84.4361 26.1054C84.7408 26.1054 85.0123 26.1611 85.2506 26.2724C85.4889 26.3818 85.6735 26.537 85.8043 26.7382C85.9371 26.9394 86.0035 27.1679 86.0035 27.4238H85.1246C85.1246 27.2285 85.0631 27.0771 84.9401 26.9697C84.817 26.8603 84.6442 26.8056 84.4215 26.8056C84.2067 26.8056 84.0397 26.8515 83.9205 26.9433C83.8014 27.0331 83.7418 27.1523 83.7418 27.3007C83.7418 27.4394 83.8111 27.5556 83.9498 27.6494C84.0904 27.7431 84.2965 27.831 84.568 27.913C85.068 28.0634 85.4322 28.2499 85.6608 28.4726C85.8893 28.6953 86.0035 28.9726 86.0035 29.3046C86.0035 29.6738 85.8639 29.9638 85.5846 30.1747C85.3053 30.3837 84.9293 30.4882 84.4567 30.4882C84.1285 30.4882 83.8297 30.4286 83.5602 30.3095C83.2906 30.1884 83.0846 30.0234 82.942 29.8144C82.8014 29.6054 82.7311 29.3632 82.7311 29.0878H83.6129C83.6129 29.5585 83.8942 29.7939 84.4567 29.7939C84.6656 29.7939 84.8287 29.7519 84.9459 29.6679C85.0631 29.582 85.1217 29.4628 85.1217 29.3105ZM89.8121 26.8759H88.5055V30.4296H87.6266V26.8759H86.3375V26.164H89.8121V26.8759ZM92.8824 28.581H91.1949V29.7236H93.1754V30.4296H90.316V26.164H93.1695V26.8759H91.1949V27.8925H92.8824V28.581ZM94.8395 26.164L95.9352 29.2578L97.025 26.164H98.1793V30.4296H97.2975V29.2636L97.3854 27.2509L96.234 30.4296H95.6305L94.482 27.2538L94.5699 29.2636V30.4296H93.691V26.164H94.8395Z"
            fill="#358B06"
          />
          <path
            d="M21.6276 0.0784588C20.4306 0.199987 17.8276 0.842352 16.7256 1.29374C13.8186 2.45695 10.8546 4.81807 9.25854 7.266C7.45353 10.0264 6.97853 11.4501 6.86453 14.5577C6.71253 18.0994 7.37753 20.5126 9.25854 23.3772C11.9186 27.3876 17.2196 30.3564 22.1026 30.53C23.3756 30.5821 23.3376 30.6342 23.3376 29.1585V27.8217L21.4376 27.5092C18.2076 27.0231 15.5856 25.7383 13.5146 23.6723C11.4436 21.6064 10.4176 19.5404 10.0185 16.6758C9.48654 12.891 10.8736 9.40143 14.0086 6.55419C15.3576 5.32154 15.9656 4.92224 17.4476 4.26251C19.1766 3.48126 21.4376 2.90834 22.7676 2.90834H23.3566L23.2996 1.46736C23.2426 -0.112514 23.2616 -0.0951519 21.6276 0.0784588Z"
            fill="#0067FF"
          />
          <path
            d="M20.8866 6.48467C16.3646 7.59579 13.2485 11.5194 13.5145 15.7556C13.7995 20.2347 17.4286 23.7938 22.2736 24.3494L23.3376 24.4709L23.3756 19.9049L23.4326 15.3215L28.4486 15.2694L33.4647 15.2347L33.3507 14.141C32.9707 10.5993 29.9116 7.42217 25.9786 6.46731C24.6866 6.13744 22.2166 6.1548 20.8866 6.48467Z"
            fill="#0067FF"
          />
          <path
            d="M0.0624582 15.5819C-0.127543 15.877 0.138459 18.2729 0.556462 20.009C2.05747 26.1375 6.5225 31.4153 12.6785 34.3667C15.3576 35.6341 19.9176 36.7626 22.4256 36.7626H23.3566L23.2996 35.3216L23.2426 33.898L21.7226 33.7764C16.7256 33.3598 12.3745 31.45 8.93552 28.1861C6.6745 26.0333 5.34449 24.0715 4.29949 21.3979C3.82448 20.2 3.23548 17.5611 3.15948 16.1895L3.10248 15.4951L1.63947 15.443C0.746463 15.4083 0.138459 15.4604 0.0624582 15.5819Z"
            fill="#0067FF"
          />
        </svg>
        <h1 className={style.h1}>
          {" "}
          our expert team provides the <br /> professional maintenance and{" "}
          <br /> installation support that you and <br /> your property require.
          We are <br /> plumbing, heating, and drainage <br /> experts.
        </h1>
        <div className={style.socialMedia}>
          <Link href="https://www.facebook.com/mitegra.mk/">
            <a>
              <svg
                width="42"
                height="41"
                viewBox="0 0 42 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42 20.6255C42 9.2341 32.5984 0 21.0026 0C9.40157 0.00256218 0 9.2341 0 20.6281C0 30.9204 7.67979 39.4524 17.7165 41V26.5877H12.3884V20.6281H17.7218V16.0802C17.7218 10.9123 20.8583 8.05806 25.6535 8.05806C27.9528 8.05806 30.3543 8.46032 30.3543 8.46032V13.5334H27.706C25.0997 13.5334 24.2861 15.1245 24.2861 16.7567V20.6255H30.1076L29.1785 26.5852H24.2835V40.9974C34.3202 39.4499 42 30.9178 42 20.6255Z"
                  fill="white"
                />
              </svg>
            </a>
          </Link>
          <Link href="https://twitter.com/mitegra1">
            <a>
              <svg
                width="46"
                height="38"
                viewBox="0 0 46 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4498 38C31.809 38 41.3051 23.3766 41.3051 10.7175C41.3051 10.3082 41.3051 9.89319 41.2879 9.48398C43.1367 8.12332 44.7323 6.43874 46 4.50917C44.273 5.28331 42.4429 5.79352 40.5691 6.02324C42.5429 4.82379 44.0212 2.93655 44.7292 0.712296C42.8748 1.82921 40.8452 2.61329 38.7291 3.03017C37.3065 1.48986 35.424 0.469453 33.3732 0.127003C31.3225 -0.215447 29.2178 0.139174 27.3853 1.13594C25.5529 2.1327 24.0948 3.71597 23.237 5.64052C22.3793 7.56506 22.1696 9.72346 22.6406 11.7814C18.888 11.5901 15.2168 10.599 11.8652 8.87234C8.51365 7.1457 5.55647 4.72209 3.1855 1.7587C1.98185 3.87222 1.61452 6.37224 2.15811 8.75111C2.70169 11.13 4.11543 13.2093 6.11225 14.5669C4.61593 14.5153 3.1525 14.1068 1.84 13.3744V13.5059C1.84258 15.72 2.59701 17.8652 3.97576 19.579C5.35452 21.2929 7.27302 22.4701 9.407 22.9119C8.59701 23.1387 7.76028 23.2518 6.92013 23.248C6.32783 23.2498 5.73672 23.1941 5.15487 23.0814C5.75801 24.9873 6.93241 26.6537 8.51358 27.8472C10.0948 29.0406 12.0035 29.7014 13.9725 29.7369C10.6276 32.4079 6.49578 33.8565 2.2425 33.8495C1.49305 33.8527 0.744116 33.8087 0 33.7179C4.31686 36.5159 9.33023 38.0016 14.4498 38V38Z"
                  fill="white"
                />
              </svg>
            </a>
          </Link>
          <Link href="https://www.instagram.com/mitegra.mk/">
            <a>
              <svg
                width="43"
                height="41"
                viewBox="0 0 43 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 0C15.6654 0 14.9318 0.025625 12.6393 0.123C10.3469 0.2255 8.78544 0.568875 7.4175 1.07625C5.98263 1.59085 4.68295 2.39805 3.60931 3.44144C2.5157 4.46566 1.66923 5.70474 1.12875 7.0725C0.596625 8.37425 0.233813 9.86562 0.129 12.0437C0.026875 14.2347 0 14.9317 0 20.5026C0 26.0683 0.026875 26.7653 0.129 28.9511C0.2365 31.1344 0.596625 32.6232 1.12875 33.9275C1.67969 35.2754 2.41338 36.4182 3.60931 37.5586C4.80256 38.6989 6.00119 39.401 7.41481 39.9237C8.78544 40.4311 10.3442 40.7771 12.6339 40.877C14.9291 40.9744 15.6601 41 21.5 41C27.3399 41 28.0683 40.9744 30.3634 40.877C32.6504 40.7745 34.2173 40.4311 35.5852 39.9237C37.0191 39.4089 38.3179 38.6017 39.3907 37.5586C40.5866 36.4182 41.3203 35.2754 41.8712 33.9275C42.4007 32.6232 42.7635 31.1344 42.871 28.9511C42.9731 26.7653 43 26.0683 43 20.5C43 14.9317 42.9731 14.2347 42.871 12.0463C42.7635 9.86563 42.4007 8.37425 41.8712 7.0725C41.3309 5.7047 40.4844 4.46561 39.3907 3.44144C38.3174 2.39767 37.0176 1.5904 35.5825 1.07625C34.2119 0.568875 32.6477 0.222938 30.3607 0.123C28.0656 0.025625 27.3373 0 21.4946 0H21.5027H21.5ZM19.5731 3.69513H21.5027C27.2432 3.69513 27.9231 3.71306 30.1887 3.813C32.2849 3.90269 33.4244 4.23838 34.1823 4.51769C35.1847 4.88925 35.9023 5.33512 36.6548 6.05262C37.4073 6.77012 37.8723 7.45175 38.2619 8.41013C38.5576 9.13019 38.9069 10.2167 39.001 12.2154C39.1058 14.3756 39.1273 15.0239 39.1273 20.4949C39.1273 25.9658 39.1058 26.6167 39.001 28.7769C38.9069 30.7756 38.5549 31.8596 38.2619 32.5822C37.9172 33.4723 37.3671 34.2771 36.6521 34.9371C35.8996 35.6546 35.1848 36.0979 34.1796 36.4695C33.4271 36.7514 32.2876 37.0845 30.1887 37.1768C27.9231 37.2741 27.2432 37.2972 21.5027 37.2972C15.7622 37.2972 15.0796 37.2741 12.814 37.1768C10.7178 37.0845 9.58094 36.7514 8.82306 36.4695C7.88915 36.1413 7.04428 35.6177 6.35056 34.9371C5.63502 34.2761 5.08401 33.4705 4.73806 32.5796C4.44513 31.8596 4.09306 30.7731 3.999 28.7743C3.89688 26.6141 3.87538 25.9658 3.87538 20.4897C3.87538 15.0162 3.89688 14.3705 3.999 12.2103C4.09575 10.2116 4.44513 9.12506 4.74075 8.40244C5.13044 7.44663 5.59806 6.76244 6.35056 6.04494C7.10306 5.32744 7.81794 4.88413 8.82306 4.51256C9.58094 4.23069 10.7178 3.89756 12.814 3.80531C14.7974 3.71819 15.566 3.69256 19.5731 3.69V3.69513V3.69513ZM32.9783 7.09812C32.6395 7.09812 32.304 7.16176 31.991 7.28538C31.678 7.40901 31.3936 7.59021 31.154 7.81864C30.9144 8.04707 30.7244 8.31826 30.5947 8.61672C30.465 8.91518 30.3983 9.23507 30.3983 9.55813C30.3983 9.88118 30.465 10.2011 30.5947 10.4995C30.7244 10.798 30.9144 11.0692 31.154 11.2976C31.3936 11.526 31.678 11.7072 31.991 11.8309C32.304 11.9545 32.6395 12.0181 32.9783 12.0181C33.6626 12.0181 34.3188 11.7589 34.8026 11.2976C35.2865 10.8363 35.5583 10.2106 35.5583 9.55813C35.5583 8.90569 35.2865 8.27998 34.8026 7.81864C34.3188 7.3573 33.6626 7.09812 32.9783 7.09812V7.09812ZM21.5027 9.97325C20.0382 9.95146 18.5838 10.2077 17.2241 10.727C15.8645 11.2463 14.6268 12.0183 13.583 12.9981C12.5393 13.9779 11.7104 15.1458 11.1446 16.434C10.5789 17.7221 10.2875 19.1047 10.2875 20.5013C10.2875 21.8978 10.5789 23.2804 11.1446 24.5686C11.7104 25.8567 12.5393 27.0247 13.583 28.0045C14.6268 28.9843 15.8645 29.7563 17.2241 30.2756C18.5838 30.7949 20.0382 31.0511 21.5027 31.0293C24.4013 30.9862 27.1658 29.858 29.1996 27.8883C31.2334 25.9186 32.3734 23.2654 32.3734 20.5013C32.3734 17.7372 31.2334 15.0839 29.1996 13.1142C27.1658 11.1445 24.4013 10.0164 21.5027 9.97325V9.97325ZM21.5027 13.6658C23.4036 13.6658 25.2267 14.3858 26.5709 15.6675C27.9151 16.9492 28.6703 18.6875 28.6703 20.5C28.6703 22.3125 27.9151 24.0508 26.5709 25.3325C25.2267 26.6142 23.4036 27.3342 21.5027 27.3342C19.6017 27.3342 17.7786 26.6142 16.4345 25.3325C15.0903 24.0508 14.3351 22.3125 14.3351 20.5C14.3351 18.6875 15.0903 16.9492 16.4345 15.6675C17.7786 14.3858 19.6017 13.6658 21.5027 13.6658V13.6658Z"
                  fill="white"
                />
              </svg>
            </a>
          </Link>
        </div>
        <h1 className={style.adr}>CONTACT</h1>
        <div className={style.ph}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
              fill="#0067FF"
            />
          </svg>
          <h1 className={style.hp}>+38946791241</h1>
        </div>
        <div className={style.email}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 4H4C2.9 4 2.01 4.95625 2.01 6.125L2 18.875C2 20.0438 2.9 21 4 21H20C21.1 21 22 20.0438 22 18.875V6.125C22 4.95625 21.1 4 20 4ZM20 8.25L12 13.5625L4 8.25V6.125L12 11.4375L20 6.125V8.25Z"
              fill="#0067FF"
            />
          </svg>
          <h1 className={style.hm}>info@mitegra.mk</h1>
        </div>
        <div className={style.location}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPpath="url(#clip0_117_28)">
              <path
                d="M12 1C8.13 1 5 4.13 5 8C5 13.25 12 21 12 21C12 21 19 13.25 19 8C19 4.13 15.87 1 12 1ZM12 10.5C10.62 10.5 9.5 9.38 9.5 8C9.5 6.62 10.62 5.5 12 5.5C13.38 5.5 14.5 6.62 14.5 8C14.5 9.38 13.38 10.5 12 10.5Z"
                fill="#0067FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_117_28">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 className={style.adress}>UL. AMDI LESHI No. 2 Debar</h1>
        </div>
        <h1 className={style.hours}>OPEN HOURS</h1>
        <h1 className={style.hour}>We’re open 24/7</h1>

        <div className={style.links}>
          <h1 className={style.hl}>USEFUL LINKS</h1>

          <Link href="/best-Plumber-in-North-macedonia-plumbing">
            <h2>Plumbing</h2>
          </Link>
          <Link href="/best-central-heating-north-macedonia-heating">
            <h2>Heating</h2>
          </Link>
          <Link href="/best-air-condition-north-macedonia-debar">
            <h2>Bathrooms</h2>
          </Link>
          <Link href="//">
            <h2>Contact</h2>
          </Link>
        </div>
        <div className={style.fText}>
          <span className={style.copyright}> Copyright© 2021 - </span>{" "}
          <span className={style.mit}> Mitegra technology system, </span>{" "}
          <span className={style.al}> all rights reserved |</span>{" "}
          <span className={style.mit}> Website made by- </span>
          <Link href="https:nehardev.com">
            <span className={style.mit1}> nehardev.com</span>
          </Link>
        </div>
      </div> */}
		</>
	);
};
export default Footer;
