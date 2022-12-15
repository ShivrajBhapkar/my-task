import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import
export default function Home() {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.Container}>
        <div className={styles.header}>
          <div className={styles.header_content}>
            <svg
              height="30"
              viewBox="0 0 1311 242"
              width="162"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <g fill="#24272a" transform="translate(361 61)">
                  <path d="m796.7 60.9c-6.8-4.5-14.3-7.7-21.4-11.7-4.6-2.6-9.5-4.9-13.5-8.2-6.8-5.6-5.4-16.6 1.7-21.4 10.2-6.8 27.1-3 28.9 10.9 0 .3.3.5.6.5h15.4c.4 0 .7-.3.6-.7-.8-9.6-4.5-17.6-11.3-22.7-6.5-4.9-13.9-7.5-21.8-7.5-40.7 0-44.4 43.1-22.5 56.7 2.5 1.6 24 12.4 31.6 17.1s10 13.3 6.7 20.1c-3 6.2-10.8 10.5-18.6 10-8.5-.5-15.1-5.1-17.4-12.3-.4-1.3-.6-3.8-.6-4.9 0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6 0 12.1 3 18.8 11.2 24.9 7.7 5.8 16.1 8.2 24.8 8.2 22.8 0 34.6-12.9 37-26.3 2.1-13.1-1.8-24.9-13.5-32.7z"></path>
                  <path d="m71.6 2.3h-7.4-8.1c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-8.1-7.4-10c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z"></path>
                  <path d="m541 2.3c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-25.4c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z"></path>
                  <path d="m325.6 2.3h-31.1-16.7-31.1c-.3 0-.6.3-.6.6v14.4c0 .3.3.6.6.6h30.5v100.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-100.4h30.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.2-.6-.6-.6z"></path>
                  <path d="m424.1 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.4.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z"></path>
                  <path d="m683.3 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.3.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z"></path>
                  <path d="m149.8 101.8v-35.8c0-.3.3-.6.6-.6h44.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-44.5c-.3 0-.6-.3-.6-.6v-30.6c0-.3.3-.6.6-.6h50.6c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-51.2-17.3c-.3 0-.6.3-.6.6v15 31.9 15.6 37 15.8c0 .3.3.6.6.6h17.3 53.3c.3 0 .6-.3.6-.6v-15.2c0-.3-.3-.6-.6-.6h-52.8c-.3-.1-.5-.3-.5-.7z"></path>
                  <path d="m949.3 117.9-57.8-59.7c-.2-.2-.2-.6 0-.8l52-54c.4-.4.1-1-.4-1h-21.3c-.2 0-.3.1-.4.2l-44.1 45.8c-.4.4-1 .1-1-.4v-45c0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-50.8c0-.5.7-.8 1-.4l50 51.6c.1.1.3.2.4.2h21.3c.4-.1.7-.8.3-1.1z"></path>
                </g>
                <g
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  transform="translate(1 1)"
                >
                  <path
                    d="m246.1.2-101.1 75 18.8-44.2z"
                    fill="#e17726"
                    stroke="#e17726"
                  ></path>
                  <g fill="#e27625" stroke="#e27625" transform="translate(2)">
                    <path d="m10.9.2 100.2 75.7-17.9-44.9z"></path>
                    <path d="m207.7 174.1-26.9 41.2 57.6 15.9 16.5-56.2z"></path>
                    <path d="m.2 175 16.4 56.2 57.5-15.9-26.8-41.2z"></path>
                    <path d="m71 104.5-16 24.2 57 2.6-1.9-61.5z"></path>
                    <path d="m184 104.5-39.7-35.4-1.3 62.2 57-2.6z"></path>
                    <path d="m74.1 215.3 34.5-16.7-29.7-23.2z"></path>
                    <path d="m146.4 198.6 34.4 16.7-4.7-39.9z"></path>
                  </g>
                  <g
                    fill="#d5bfb2"
                    stroke="#d5bfb2"
                    transform="translate(76 198)"
                  >
                    <path d="m106.8 17.3-34.4-16.7 2.8 22.4-.3 9.5z"></path>
                    <path d="m.1 17.3 32 15.2-.2-9.5 2.7-22.4z"></path>
                  </g>
                  <path
                    d="m108.7 160.6-28.6-8.4 20.2-9.3z"
                    fill="#233447"
                    stroke="#233447"
                  ></path>
                  <path
                    d="m150.3 160.6 8.4-17.7 20.3 9.3z"
                    fill="#233447"
                    stroke="#233447"
                  ></path>
                  <g
                    fill="#cc6228"
                    stroke="#cc6228"
                    transform="translate(49 128)"
                  >
                    <path d="m27.1 87.3 5-41.2-31.8.9z"></path>
                    <path d="m128.9 46.1 4.9 41.2 26.9-40.3z"></path>
                    <path d="m153 .7-57 2.6 5.3 29.3 8.4-17.7 20.3 9.3z"></path>
                    <path d="m31.1 24.2 20.2-9.3 8.4 17.7 5.3-29.3-57-2.6z"></path>
                  </g>
                  <g
                    fill="#e27525"
                    stroke="#e27525"
                    transform="translate(57 128)"
                  >
                    <path d="m0 .7 23.9 46.7-.8-23.2z"></path>
                    <path d="m122 24.2-.9 23.2 23.9-46.7z"></path>
                    <path d="m57 3.3-5.3 29.3 6.7 34.6 1.5-45.6z"></path>
                    <path d="m88 3.3-2.8 18.2 1.4 45.7 6.7-34.6z"></path>
                  </g>
                  <path
                    d="m150.3 160.6-6.7 34.6 4.8 3.4 29.7-23.2.9-23.2z"
                    fill="#f5841f"
                    stroke="#f5841f"
                  ></path>
                  <path
                    d="m80.1 152.2.8 23.2 29.7 23.2 4.8-3.4-6.7-34.6z"
                    fill="#f5841f"
                    stroke="#f5841f"
                  ></path>
                  <path
                    d="m150.9 230.5.3-9.5-2.6-2.2h-38.2l-2.5 2.2.2 9.5-32-15.2 11.2 9.2 22.7 15.7h38.9l22.8-15.7 11.1-9.2z"
                    fill="#c0ac9d"
                    stroke="#c0ac9d"
                  ></path>
                  <path
                    d="m148.4 198.6-4.8-3.4h-28.2l-4.8 3.4-2.7 22.4 2.5-2.2h38.2l2.6 2.2z"
                    fill="#161616"
                    stroke="#161616"
                  ></path>
                  <g fill="#763e1a" stroke="#763e1a">
                    <path d="m250.4 80.1 8.5-41.4-12.8-38.5-97.7 72.5 37.6 31.8 53.1 15.5 11.7-13.7-5.1-3.7 8.1-7.4-6.2-4.8 8.1-6.2z"></path>
                    <path d="m.1 38.7 8.6 41.4-5.5 4.1 8.2 6.2-6.2 4.8 8.1 7.4-5.1 3.7 11.7 13.7 53.1-15.5 37.6-31.8-97.7-72.5z"></path>
                  </g>
                  <g fill="#f5841f" stroke="#f5841f">
                    <path d="m239.1 120-53.1-15.5 16 24.2-23.9 46.7 31.6-.4h47.2z"></path>
                    <path d="m73 104.5-53.1 15.5-17.7 55h47.1l31.6.4-23.9-46.7z"></path>
                    <path d="m145 131.3 3.4-58.6 15.4-41.7h-68.6l15.4 41.7 3.4 58.6 1.3 18.4.1 45.5h28.2l.1-45.5z"></path>
                  </g>
                </g>
              </g>
            </svg>
            <div className={styles.app_header__container}>
              <div className={styles.app_header__component_wrapper}>
                <div className={styles.chip_with_right_icon}>
                  <div className={styles.chip__left_icon}>
                    <div className={styles.color_indicator}>
                      <span
                        className={styles.color_indicator__inner_circle}
                      ></span>
                    </div>
                  </div>
                  <span className={styles.box}>Ethereum Mainnet</span>
                  <div className={styles.chip__right_icon}>
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={styles.network_display__icon}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="m399 177c-8-8-22-8-30 0l-113 113-113-113c-8-8-22-8-30 0-8 8-8 22 0 30l128 128c8 8 22 8 30 0l128-128c8-8 8-22 0-30z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.account_menu__icon}>
              <div className={styles.identicon__address_wrapper}>
                <div className={styles.identicon}>
                  <div className={styles.identicon_inner}>
                    <svg x="0" y="0" width="32" height="32">
                      <rect
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                        transform="translate(-3.8773108091191566 4.1005568381104744) rotate(240.8 16 16)"
                        fill="#238CE1"
                      ></rect>
                      <rect
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                        transform="translate(-12.263779287205747 4.596357072650825) rotate(165.3 16 16)"
                        fill="#018E77"
                      ></rect>
                      <rect
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                        transform="translate(10.7193656279296 -23.451099850798762) rotate(352.7 16 16)"
                        fill="#035E59"
                      ></rect>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className={styles.container_wrapper}>
          <div className={styles.main_container}>
            <div className={styles.inside_container}>
              <div className={styles.inside_container_header}>
                <div className={styles.inside_container_header_menu}>
                  <div className={styles.account}>Account1</div>
                  <div className={styles.code}>0x27B...EeE2</div>
                </div>
              </div>
              <div className={styles.option_container}>
                <div className={styles.option_container_wrapper}>
                  <div className={styles.options}></div>
                  <div className={styles.options}></div>
                  <div className={styles.options}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.home_balance_container}>
          <div className={styles.wallet_overview}>
            <div className={styles.wallet_overview_balance}>
              <Image
                className={styles.wallet_icon}
                src="/eth_logo.jpg"
                alt=""
                width={32}
                height={32}
              />
              <div className={styles.balance_container}>
                <div className={styles.balance}>
                  <span className={styles.curreny_number}>0</span>
                  <span className={styles.currency}>ETH</span>
                </div>
                <div className={styles.balance_usd}>$0.00 USD</div>
              </div>
            </div>
            <div className={styles.wallet_overview_buttons}>
              <button className={styles.icon_button}>
                <div className={styles.icon_button__circle}>
                  <svg
                    width="17"
                    height="21"
                    viewBox="0 0 17 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.62829 14.3216C8.65369 14.2947 8.67756 14.2664 8.69978 14.2368L12.8311 10.1286C13.0886 9.87975 13.1913 9.51233 13.1 9.16703C13.0087 8.82174 12.7375 8.55207 12.3903 8.46129C12.0431 8.37051 11.6736 8.47268 11.4233 8.72869L8.89913 11.2387L8.89913 1.3293C8.90647 0.970874 8.71837 0.636511 8.40739 0.455161C8.0964 0.273811 7.71112 0.27381 7.40014 0.45516C7.08915 0.636511 6.90105 0.970873 6.90839 1.3293L6.90839 11.2387L4.38422 8.72869C4.13396 8.47268 3.76446 8.37051 3.41722 8.46129C3.06998 8.55207 2.79879 8.82174 2.7075 9.16703C2.61621 9.51233 2.71896 9.87975 2.97641 10.1286L7.11049 14.2395C7.28724 14.4717 7.55784 14.6148 7.85026 14.6306C8.14268 14.6464 8.42727 14.5333 8.62829 14.3216Z"
                      fill="white"
                    ></path>
                    <rect
                      x="0.260986"
                      y="15.75"
                      width="15.8387"
                      height="2.25"
                      rx="1"
                      fill="white"
                    ></rect>
                  </svg>
                </div>
                <span>Buy</span>
              </button>
              <button className={styles.icon_button}>
                <div className={styles.icon_button__circle}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6827 0.889329C13.6458 0.890495 13.609 0.893722 13.5725 0.898996H7.76263C7.40564 0.893947 7.07358 1.08151 6.89361 1.38986C6.71364 1.69821 6.71364 2.07958 6.89361 2.38793C7.07358 2.69628 7.40564 2.88384 7.76263 2.87879H11.3124L1.12335 13.0678C0.864749 13.3161 0.760577 13.6848 0.851011 14.0315C0.941446 14.3786 1.21235 14.6495 1.55926 14.7399C1.90616 14.8303 2.27485 14.7262 2.52313 14.4676L12.7121 4.27857V7.82829C12.7071 8.18528 12.8946 8.51734 13.203 8.69731C13.5113 8.87728 13.8927 8.87728 14.2011 8.69731C14.5094 8.51734 14.697 8.18528 14.6919 7.82829V2.01457C14.7318 1.7261 14.6427 1.43469 14.4483 1.2179C14.2538 1.00111 13.9738 0.880924 13.6827 0.889329Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <span>Send</span>
              </button>
              <button className={styles.icon_button}>
                <div className={styles.icon_button__circle}>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1714 9.66035V12.3786H4.68253C4.51685 12.3786 4.38253 12.2443 4.38253 12.0786V10.5478C4.38253 10.1888 3.94605 10.0116 3.69574 10.269L0.978328 13.0641C0.827392 13.2193 0.827392 13.4665 0.978328 13.6217L3.69573 16.4168C3.94604 16.6742 4.38253 16.497 4.38253 16.1379V14.6072C4.38253 14.4415 4.51685 14.3072 4.68253 14.3072H14.9992H15.0492V14.2572V9.66035C15.0492 9.14182 14.6288 8.72146 14.1103 8.72146C13.5918 8.72146 13.1714 9.14182 13.1714 9.66035ZM2.55476 2.55003H2.50476V2.60003V7.19686C2.50476 7.71539 2.92511 8.13575 3.44364 8.13575C3.96218 8.13575 4.38253 7.71539 4.38253 7.19686V4.70619C4.38253 4.5805 4.48443 4.47861 4.61012 4.47861H12.8714C13.0371 4.47861 13.1714 4.61292 13.1714 4.77861V6.30937C13.1714 6.66845 13.6079 6.84566 13.8582 6.5882L16.5756 3.79315C16.7266 3.6379 16.7266 3.39074 16.5756 3.23549L13.8582 0.440443C13.6079 0.182981 13.1714 0.360188 13.1714 0.719273V2.25004C13.1714 2.41572 13.0371 2.55003 12.8714 2.55003H2.55476Z"
                      fill="white"
                      stroke="white"
                      stroke-width="0.1"
                    ></path>
                  </svg>
                </div>
                <span>Swap</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.tabs}>
          <ul className={styles.tabs_list}>
            <li className={`${styles.tab} ${styles.active}`}>
              <button className={styles.assets}>Assets</button>
            </li>
            <li className={styles.tab}>
              <button>Activity</button>
            </li>
          </ul>
          <div className={styles.portfolio_container}>
            <div className={styles.home_link}>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 12 12"
                fill="#037dd6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 9.375C1.5 9.58125 1.66781 9.75 1.875 9.75H11.25C11.6648 9.75 12 10.0852 12 10.5C12 10.9148 11.6648 11.25 11.25 11.25H1.875C0.839531 11.25 0 10.4109 0 9.375V1.5C0 1.08586 0.335859 0.75 0.75 0.75C1.16414 0.75 1.5 1.08586 1.5 1.5V9.375ZM8.02969 6.52969C7.73672 6.82266 7.26328 6.82266 6.97031 6.52969L5.625 5.18672L3.52969 7.27969C3.23672 7.57266 2.76328 7.57266 2.47031 7.27969C2.17688 6.98672 2.17688 6.51328 2.47031 6.22031L5.09531 3.59531C5.38828 3.30234 5.86172 3.30234 6.15469 3.59531L7.5 4.93828L9.97031 2.47031C10.2633 2.17687 10.7367 2.17687 11.0297 2.47031C11.3227 2.76328 11.3227 3.23672 11.0297 3.52969L8.02969 6.52969Z"
                  fill="var(--color-primary-default)"
                ></path>
              </svg>
              <div className={styles.home__subheader_link_text}>
                Portfolio site
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tabs_content}>
          <div className={styles.current_balance_container}>
            <div className={styles.symbol}>
              <Image
                className={styles.symbol_wallet_icon}
                src="/eth_logo.jpg"
                alt=""
                width={32}
                height={32}
              />
            </div>
            <div className={styles.list_item__heading}>
              <div>
                <span className={styles.amount}>0</span>
                <span className={styles.amount_currency}>ETH</span>
              </div>
              <div>
                <span className={styles.current_amount}>$0.00 USD</span>
              </div>
            </div>
            <div className={styles.list_item_right_content}>
              <Image
                className={styles.symbol_wallet_icon}
                src="/righticon.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={styles.bottom_container}>
            <div className={styles.upper_bottom_container}>
              <h6>Don't see your token?</h6>
            </div>
            <div className={styles.lower_bottom_container}>
              <span className={styles.links}>Refresh list </span>
              or
              <span className={styles.links}> import tokens</span>
            </div>
          </div>
          <div className={styles.help}>
            <span>
              Need help? Contact{" "}
              <span className={styles.help_link}>MetaMask support</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
