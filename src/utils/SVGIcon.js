import React from "react";
import "./SVGIcon.scss";
import PropTypes from "prop-types";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const getViewBox = (name) => {
  switch (name) {
    case "Dashboard":
      return "0 0 18 18";
    case "Pinned Posts":
      return "0 0 21 20";
    case "Wikis":
      return "0 0 297.001 297.001";
    case "Organization":
      return "0 0 20 20";
    case "Account":
      return "0 0 18 18";
    case "Settings":
      return "0 0 20 20";
    case "Events":
      return "0 0 18 20";
    case "Project":
      return "0 0 18 20";
    case "Github":
      return "0 0 438.549 438.549";
    case "Google":
      return "0 0 512 512";
    case "Projects":
      return "0 0 18 18";
    case "Org settings":
      return "0 0 21 21";
    case "Logout":
      return "0 0 18 19";
    case "JitsiMeet":
      return "0 0 17 29";
    case "Tickets":
      return "0 0 1024 1024";
    default:
      return "0 0 32 32";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "Dashboard":
      return (
        <path
          d="M16 2V4H12V2H16ZM6 2V8H2V2H6ZM16 10V16H12V10H16ZM6 14V16H2V14H6ZM18 0H10V6H18V0ZM8 0H0V10H8V0ZM18 8H10V18H18V8ZM8 12H0V18H8V12Z"
          fill={props.fill}
          fillOpacity="0.6"
          className="path-name"
        />
      );
    case "Pinned Posts":
      return (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.8043 2.15521C16.2894 -0.592583 11.974 -0.725094 9.18483 1.82775C7.01728 3.81162 6.38726 6.85162 7.38933 9.39879L0.51388 16.6358L0.512961 16.6368C-0.117421 17.2947 -0.192773 18.2877 0.432155 18.9705C1.05658 19.6528 2.05245 19.6667 2.76255 19.0979L2.76367 19.097L10.5848 12.8875C13.0327 14.1087 16.1146 13.7488 18.2809 11.766C21.0701 9.2132 21.3195 4.90328 18.8043 2.15521ZM7.42991 7.18208C7.35949 5.37255 8.06656 3.5292 9.52241 2.19672C12.1156 -0.176716 16.1139 -0.0435814 18.4355 2.49291C19.2794 3.415 19.7875 4.52965 19.9677 5.68903C19.7875 4.52961 19.2795 3.41491 18.4355 2.49279C16.1139 -0.0437087 12.1156 -0.176843 9.52241 2.19659C8.06652 3.52911 7.35946 5.37251 7.42991 7.18208ZM0.501346 17.816C0.514476 17.5229 0.639746 17.227 0.874681 16.9821L7.97743 9.50584C7.97741 9.50581 7.9774 9.50578 7.97739 9.50575L0.874675 16.982C0.639707 17.2269 0.514446 17.5229 0.501346 17.816ZM1.3888 18.0951C1.55829 18.2802 1.80082 18.2289 1.96635 18.0964L9.84292 11.8427C9.791 11.8031 9.74144 11.7605 9.69188 11.7179C9.66833 11.6976 9.64478 11.6774 9.62098 11.6574C9.60059 11.6403 9.57995 11.6236 9.55931 11.6068C9.52355 11.5778 9.48777 11.5488 9.4532 11.5178C9.3222 11.3994 9.1965 11.2751 9.07586 11.1456C9.06899 11.1384 9.06178 11.1317 9.05458 11.125C9.04631 11.1173 9.03805 11.1096 9.03031 11.1012C9.02259 11.0927 9.01559 11.0837 9.00855 11.0747C9.00146 11.0656 8.99433 11.0565 8.9864 11.0479C8.86967 10.9174 8.75826 10.7832 8.65321 10.6437C8.62465 10.6055 8.59826 10.5664 8.57184 10.5273C8.55857 10.5077 8.5453 10.4881 8.53173 10.4685C8.51389 10.443 8.49568 10.4176 8.47749 10.3923C8.43899 10.3387 8.40052 10.2851 8.36551 10.2296L1.44021 17.5186C1.29214 17.6731 1.21959 17.9102 1.3888 18.0951Z"
          fill={props.fill}
          fillOpacity="0.5"
          className="path-name"
        />
      );
    case "Wikis":
      return (
        <path
          d="M287.034,60.873l-20.819-0.001V39.321c0-4.934-3.61-9.126-8.49-9.856c-0.852-0.128-21.134-3.074-45.557,1.37 c-27.227,4.954-48.941,17.171-63.668,35.64c-14.728-18.469-36.442-30.686-63.668-35.64c-24.424-4.443-44.706-1.498-45.557-1.37 c-4.88,0.731-8.49,4.923-8.49,9.856v21.551H9.966C4.463,60.872,0,65.335,0,70.839v187.805c0,3.227,1.562,6.254,4.193,8.124 s6.004,2.35,9.051,1.288c0.748-0.259,75.431-25.747,131.12-0.345c2.628,1.199,5.645,1.199,8.273,0 c55.533-25.33,130.376,0.088,131.12,0.345c1.068,0.372,2.174,0.555,3.276,0.555c2.043,0,4.065-0.628,5.775-1.842 c2.631-1.87,4.193-4.897,4.193-8.124V70.84C297,65.336,292.538,60.873,287.034,60.873z M19.933,245.309V80.805h10.852v132.726 c0,2.896,1.267,5.646,3.458,7.539c2.191,1.893,5.105,2.742,7.969,2.319c0.55-0.08,43.846-6.024,75.478,15.679 C78.725,232.405,39.727,240.112,19.933,245.309z M138.534,230.08c-13.932-12.588-32.079-21.1-53.702-25.034 c-10.406-1.894-20.06-2.446-27.78-2.446c-2.292,0-4.414,0.049-6.333,0.126V48.473h-0.001c19.155-0.864,65.752,1.184,87.816,38.587 V230.08z M158.466,87.061c21.985-37.243,68.655-39.384,87.816-38.563v154.228c-8.383-0.338-20.62-0.136-34.114,2.32 c-21.623,3.934-39.77,12.445-53.702,25.034V87.061z M179.277,239.074c31.636-21.716,74.955-15.766,75.495-15.686 c2.871,0.431,5.783-0.413,7.981-2.305c2.198-1.894,3.462-4.65,3.462-7.552V80.806h10.852v164.503 C257.267,240.11,218.253,232.4,179.277,239.074z"
          fill={props.fill}
          fillOpacity="0.5"
          className="path-name"
        />
      );
    case "Organization":
      return (
        <path
          d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM2 10C2 9.101 2.156 8.238 2.431 7.431L4 9L6 11V13L8 15L9 16V17.931C5.061 17.436 2 14.072 2 10ZM16.33 14.873C15.677 14.347 14.687 14 14 14V13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11H8V8C8.53043 8 9.03914 7.78929 9.41421 7.41421C9.78929 7.03914 10 6.53043 10 6V5H11C11.5304 5 12.0391 4.78929 12.4142 4.41421C12.7893 4.03914 13 3.53043 13 3V2.589C15.928 3.778 18 6.65 18 10C17.9998 11.7647 17.4123 13.4791 16.33 14.873Z"
          fill="black"
          fillOpacity="0.6"
          className="path-name"
        />
      );
    case "Account":
      return (
        <path
          d="M8 1.9C8.27578 1.9 8.54885 1.95432 8.80364 2.05985C9.05842 2.16539 9.28992 2.32007 9.48492 2.51508C9.67993 2.71008 9.83461 2.94158 9.94015 3.19636C10.0457 3.45115 10.1 3.72422 10.1 4C10.1 4.27578 10.0457 4.54885 9.94015 4.80364C9.83461 5.05842 9.67993 5.28992 9.48492 5.48492C9.28992 5.67993 9.05842 5.83461 8.80364 5.94015C8.54885 6.04568 8.27578 6.1 8 6.1C7.44305 6.1 6.9089 5.87875 6.51508 5.48492C6.12125 5.0911 5.9 4.55695 5.9 4C5.9 3.44305 6.12125 2.9089 6.51508 2.51508C6.9089 2.12125 7.44305 1.9 8 1.9ZM8 10.9C10.97 10.9 14.1 12.36 14.1 13V14.1H1.9V13C1.9 12.36 5.03 10.9 8 10.9ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z"
          fill={props.fill}
          fillOpacity="0.6"
          className="path-name"
        />
      );
    case "Settings":
      return (
        <path
          d="M17.4298 10.98C17.4698 10.66 17.4998 10.34 17.4998 10C17.4998 9.66005 17.4698 9.34005 17.4298 9.02005L19.5398 7.37005C19.7298 7.22005 19.7798 6.95005 19.6598 6.73005L17.6598 3.27005C17.6009 3.16687 17.5071 3.08807 17.3953 3.04775C17.2836 3.00744 17.1611 3.00825 17.0498 3.05005L14.5598 4.05005C14.0398 3.65005 13.4798 3.32005 12.8698 3.07005L12.4898 0.420047C12.4733 0.302388 12.4144 0.194807 12.3242 0.117483C12.234 0.0401581 12.1186 -0.00159773 11.9998 4.67889e-05H7.99984C7.74984 4.67889e-05 7.53984 0.180047 7.50984 0.420047L7.12984 3.07005C6.51984 3.32005 5.95984 3.66005 5.43984 4.05005L2.94984 3.05005C2.89186 3.03038 2.83107 3.02025 2.76984 3.02005C2.59984 3.02005 2.42984 3.11005 2.33984 3.27005L0.339839 6.73005C0.209839 6.95005 0.26984 7.22005 0.45984 7.37005L2.56984 9.02005C2.52984 9.34005 2.49984 9.67005 2.49984 10C2.49984 10.33 2.52984 10.66 2.56984 10.98L0.45984 12.63C0.26984 12.78 0.219839 13.05 0.339839 13.27L2.33984 16.73C2.39879 16.8332 2.49256 16.912 2.60434 16.9523C2.71612 16.9927 2.8386 16.9918 2.94984 16.95L5.43984 15.95C5.95984 16.35 6.51984 16.68 7.12984 16.93L7.50984 19.58C7.53984 19.82 7.74984 20 7.99984 20H11.9998C12.2498 20 12.4598 19.82 12.4898 19.58L12.8698 16.93C13.4798 16.68 14.0398 16.34 14.5598 15.95L17.0498 16.95C17.1098 16.97 17.1698 16.98 17.2298 16.98C17.3998 16.98 17.5698 16.89 17.6598 16.73L19.6598 13.27C19.7798 13.05 19.7298 12.78 19.5398 12.63L17.4298 10.98ZM15.4498 9.27005C15.4898 9.58005 15.4998 9.79005 15.4998 10C15.4998 10.21 15.4798 10.43 15.4498 10.73L15.3098 11.86L16.1998 12.56L17.2798 13.4L16.5798 14.61L15.3098 14.1L14.2698 13.68L13.3698 14.36C12.9398 14.68 12.5298 14.92 12.1198 15.09L11.0598 15.52L10.8998 16.65L10.6998 18H9.29984L9.10984 16.65L8.94984 15.52L7.88984 15.09C7.45984 14.91 7.05984 14.68 6.65984 14.38L5.74984 13.68L4.68984 14.11L3.41984 14.62L2.71984 13.41L3.79984 12.57L4.68984 11.87L4.54984 10.74C4.51984 10.43 4.49984 10.2 4.49984 10C4.49984 9.80005 4.51984 9.57005 4.54984 9.27005L4.68984 8.14005L3.79984 7.44005L2.71984 6.60005L3.41984 5.39005L4.68984 5.90005L5.72984 6.32005L6.62984 5.64005C7.05984 5.32005 7.46984 5.08005 7.87984 4.91005L8.93984 4.48005L9.09984 3.35005L9.29984 2.00005H10.6898L10.8798 3.35005L11.0398 4.48005L12.0998 4.91005C12.5298 5.09005 12.9298 5.32005 13.3298 5.62005L14.2398 6.32005L15.2998 5.89005L16.5698 5.38005L17.2698 6.59005L16.1998 7.44005L15.3098 8.14005L15.4498 9.27005ZM9.99984 6.00005C7.78984 6.00005 5.99984 7.79005 5.99984 10C5.99984 12.21 7.78984 14 9.99984 14C12.2098 14 13.9998 12.21 13.9998 10C13.9998 7.79005 12.2098 6.00005 9.99984 6.00005ZM9.99984 12C8.89984 12 7.99984 11.1 7.99984 10C7.99984 8.90005 8.89984 8.00005 9.99984 8.00005C11.0998 8.00005 11.9998 8.90005 11.9998 10C11.9998 11.1 11.0998 12 9.99984 12Z"
          fill={props.fill}
          fillOpacity="0.6"
          className="path-name"
        />
      );
    case "Events":
      return (
        <path
          d="M16 2H15V0H13V2H5V0H3V2H2C1.46957 2 0.960859 2.21071 0.585786 2.58579C0.210714 2.96086 0 3.46957 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2ZM16 18H2V8H16V18ZM16 6H2V4H16V6ZM9 11H14V16H9V11Z"
          fill={props.fill}
          fillOpacity="0.6"
          className="path-name"
        />
      );
    case "Project":
      return (
        <path
          d="M16 2H15V0H13V2H5V0H3V2H2C1.73786 2.00013 1.47833 2.05202 1.2363 2.1527C0.994268 2.25338 0.7745 2.40086 0.589606 2.58668C0.404713 2.77251 0.258334 2.99301 0.15887 3.23554C0.0594061 3.47808 0.00881501 3.73787 0.00999999 4L0 18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5299 19.9984 17.0377 19.7872 17.4125 19.4125C17.7872 19.0377 17.9984 18.5299 18 18V4C17.9984 3.47005 17.7872 2.96227 17.4125 2.58753C17.0377 2.2128 16.5299 2.00158 16 2ZM16 18H2V8H16V18ZM16 6H2V4H16V6ZM9 11H14V16H9V11Z"
          fill={props.fill}
        />
      );
    case "Projects":
      return (
        <path
          d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C1.46957 2 0.960859 2.21071 0.585786 2.58579C0.210714 2.96086 0 3.46957 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2ZM9 2C9.26522 2 9.51957 2.10536 9.70711 2.29289C9.89464 2.48043 10 2.73478 10 3C10 3.26522 9.89464 3.51957 9.70711 3.70711C9.51957 3.89464 9.26522 4 9 4C8.73478 4 8.48043 3.89464 8.29289 3.70711C8.10536 3.51957 8 3.26522 8 3C8 2.73478 8.10536 2.48043 8.29289 2.29289C8.48043 2.10536 8.73478 2 9 2ZM4 6H14V4H16V18H2V4H4V6Z"
          fill={props.fill}
          fillOpacity="0.6"
          className="path-name"
        />
      );
    case "Github":
      return (
        <g>
          <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 0 1-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
        </g>
      );
    case "JitsiMeet":
      return (
        <path
          d="M12.5066 5.17416e-05C12.4696 0.000376431 12.432 0.00216308 12.3937 0.00553067C11.9211 0.0471429 11.5126 0.349587 11.2892 0.823299C11.2039 1.00423 11.182 1.16514 11.1523 1.82916C11.113 2.70424 11.0815 2.96221 10.9896 3.16272C10.8449 3.47808 10.2959 3.85285 9.50698 4.17455C8.95695 4.39883 8.57334 4.66459 8.18121 5.09309C7.62817 5.69743 7.40731 6.2529 7.20342 7.55171C7.1537 7.86844 7.11276 8.29107 7.1126 8.491C7.11237 8.72139 7.09102 8.87242 7.05418 8.90337C7.02221 8.93022 6.84965 8.99426 6.67063 9.0458C5.61079 9.35096 4.73539 9.92484 4.15335 10.6959C3.85869 11.0863 3.51773 11.8109 3.41396 12.2674C3.25014 12.988 3.2539 13.9306 3.42379 14.7572C3.52288 15.2393 3.5499 15.496 3.50205 15.5003C3.48018 15.5022 3.26352 15.5098 3.02057 15.5171C2.32958 15.5376 1.86205 15.7957 1.26327 16.4871C0.619 17.231 0.219588 18.2079 0.0483022 19.459C-0.0246702 19.992 -0.0130496 21.4831 0.0702492 22.2795C0.158627 23.1245 0.325239 23.9629 0.540224 24.645C0.647486 24.9853 1.0202 25.8171 1.63517 27.0882C2.14797 28.1481 2.57382 29.0083 2.58147 28.9999C2.58912 28.9916 2.79527 27.9961 3.03964 26.7877C3.59793 24.0271 3.71299 23.6076 4.07737 23.005C4.33016 22.5869 4.34654 22.5847 4.93059 22.8889C5.52951 23.2009 6.14659 23.3826 6.8786 23.4627C7.33471 23.5125 7.51027 23.5081 8.05725 23.4329C9.67066 23.2112 11.0588 22.487 12.1408 21.3024C12.5636 20.8395 12.6072 20.806 12.8622 20.7479C13.8511 20.5227 14.9918 19.4419 15.7102 18.0494C16.4428 16.6293 16.8269 15.0137 16.9745 12.7307C17.1347 10.2527 16.5404 8.61414 15.1729 7.76403C15.0296 7.67497 14.7704 7.55302 14.5968 7.49294C14.4232 7.43285 14.2619 7.35598 14.2384 7.32211C14.1952 7.26006 13.9923 6.44304 13.9935 6.33601C13.9938 6.30435 14.0641 6.1509 14.1497 5.99503C14.5023 5.35273 14.6769 4.42526 14.5953 3.62722C14.5387 3.0737 14.1242 1.6916 13.8229 1.05156C13.4849 0.3337 13.0624 -0.00481606 12.5066 5.17416e-05ZM12.4947 1.16628C12.7466 1.16628 12.9948 1.68177 13.391 3.02759C13.6679 3.96793 13.5889 4.80942 13.1539 5.55427C13.0481 5.73542 12.9081 5.94605 12.8427 6.02242L12.7237 6.1612L12.8687 6.50684C12.9485 6.69694 13.0492 7.00167 13.0923 7.18399C13.1718 7.52055 13.1977 8.14139 13.1402 8.33677C13.11 8.4396 13.1275 8.44532 13.563 8.4734C14.7512 8.55 15.4873 9.23048 15.8149 10.5553C15.9095 10.9379 15.9204 11.0944 15.9179 12.0288C15.9138 13.4871 15.7696 14.6145 15.4338 15.8117C14.959 17.5047 14.1313 18.7869 13.1068 19.417C12.7964 19.6079 12.5583 19.6244 12.3586 19.4684C12.2824 19.4089 12.2043 19.3802 12.1852 19.4047C12.166 19.4292 12.0479 19.6098 11.9228 19.8061C10.7127 21.7054 8.15104 22.7366 6.11256 22.145C5.73485 22.0354 4.95994 21.6184 4.65345 21.36L4.4031 21.1488L4.08267 21.389C3.2393 22.021 2.71906 23.0427 2.36957 24.7531C2.31225 25.0336 2.24613 25.3031 2.22275 25.3522C2.17302 25.4566 2.07507 25.4683 2.00857 25.3778C1.89376 25.2214 1.62455 24.5581 1.4938 24.1094C1.19524 23.0851 1.06424 22.0563 1.06136 20.7129C1.05933 19.7676 1.10381 19.373 1.28265 18.747C1.46654 18.1033 1.69852 17.6609 2.07018 17.2456C2.56817 16.6891 2.86439 16.5829 3.45225 16.75C3.82109 16.8548 4.06867 16.9958 4.83115 17.5354C5.81135 18.2291 5.8512 18.2449 5.96544 17.9808C6.06334 17.7546 6.14112 17.3618 6.09183 17.3428C5.93965 17.2843 5.52021 16.8981 5.33215 16.6434C5.04684 16.2571 4.68291 15.4497 4.53402 14.8731C4.31513 14.0254 4.29415 12.9798 4.48423 12.3889C4.77185 11.4948 5.39517 10.8239 6.3219 10.4107C6.77413 10.2091 7.05853 10.1236 7.73999 9.98492C8.04688 9.92246 8.30297 9.86754 8.30896 9.86291C8.31495 9.85827 8.28682 9.68391 8.24645 9.47544C8.15508 9.0036 8.17987 7.94831 8.29549 7.38802C8.55559 6.12761 8.88996 5.69288 9.94865 5.23918C10.2172 5.1241 10.5416 4.97219 10.6694 4.90151C11.2402 4.58607 11.7468 4.09778 11.9445 3.67287C12.0842 3.37249 12.1804 2.77401 12.2119 2.00762C12.2415 1.29101 12.2834 1.16628 12.4947 1.16628ZM11.7126 5.21428C11.6985 5.20919 11.6373 5.24205 11.5646 5.29496C11.4815 5.35542 11.0158 5.61997 10.5299 5.8828C9.44627 6.46895 9.30074 6.59552 9.16793 7.06646C9.11409 7.25738 9.05653 7.49748 9.04003 7.60002L9.01006 7.78645L9.60718 7.50921C10.5921 7.05218 10.6598 7.01368 10.8486 6.80151C11.0994 6.51977 11.3723 6.06766 11.5587 5.62532C11.645 5.42038 11.7156 5.23754 11.7156 5.21893C11.7156 5.2166 11.7146 5.21501 11.7126 5.21428H11.7126ZM12.2012 6.97997C12.167 6.97997 12.0019 7.12387 11.8343 7.2997C11.5519 7.59602 11.5296 7.63538 11.5296 7.83774C11.5296 8.08838 11.6226 8.31545 11.7722 8.4304C12.0914 8.67562 12.4131 8.30759 12.4131 7.69713C12.4131 7.36234 12.3001 6.97997 12.2012 6.97997ZM10.6251 7.94897C10.4063 7.94897 9.15066 8.57623 8.99795 8.76176C8.91578 8.86159 8.91245 8.89772 8.96147 9.15404C9.07202 9.73208 9.35668 10.2196 9.78139 10.5583C9.89294 10.6473 10.0213 10.7029 10.115 10.7029C10.2923 10.7029 10.7924 10.4296 11.1368 10.1445C11.3657 9.95491 11.6692 9.5305 11.6692 9.3999C11.6692 9.36604 11.6056 9.3094 11.5278 9.27407C11.12 9.08883 10.8667 8.73332 10.7381 8.16578C10.7101 8.04191 10.6616 7.94897 10.6251 7.94897ZM14.0525 9.43858C14.0394 9.43947 14.027 9.44223 14.0156 9.44705C13.9405 9.47866 13.808 9.9403 13.808 10.1704C13.808 10.2599 13.9254 10.7089 14.0688 11.1682C14.4795 12.4837 14.7163 13.298 14.8076 13.709C14.9103 14.171 14.9407 14.1145 15.0129 13.3284C15.1323 12.0264 15.0566 10.9327 14.8037 10.3055C14.6171 9.84271 14.2488 9.42538 14.0525 9.43858V9.43858ZM13.0007 9.70337C12.9957 9.70223 12.9903 9.7032 12.9843 9.70569C12.8444 9.76457 12.3607 10.161 11.9248 10.5741C11.0966 11.359 10.448 11.7744 10.0528 11.7734C9.81743 11.7727 9.46545 11.5433 9.06682 11.1309L8.74351 10.7964L8.40447 10.854C7.89206 10.9409 7.11015 11.1467 6.73042 11.2947C6.03191 11.567 5.60762 11.9232 5.38164 12.4266C5.23057 12.7632 5.22907 12.773 5.22922 13.5068C5.2293 14.1786 5.24168 14.2899 5.36151 14.7063C5.58326 15.4767 5.92331 16.0961 6.24849 16.3224C6.37055 16.4073 6.44649 16.418 6.76357 16.3943C6.96816 16.3789 7.38664 16.3085 7.69353 16.2377C8.33368 16.0901 10.1811 15.5395 10.1811 15.4963C10.1811 15.4459 9.5963 15.0434 9.36106 14.9319C8.55628 14.5503 7.80356 14.5333 6.52865 14.868C6.21999 14.949 5.9658 14.9894 5.89233 14.9692C5.7565 14.9318 5.69464 14.7869 5.73643 14.6043C5.77477 14.4368 6.39325 13.9387 6.95216 13.625C8.30866 12.8638 9.71948 12.7399 11.1343 13.258C11.9752 13.5659 12.5464 13.9193 13.9243 14.9842C14.1033 15.1225 14.2665 15.2177 14.2869 15.1955C14.3792 15.0954 14.0022 13.5109 13.5518 12.1054C13.0627 10.5793 13.0563 10.5532 13.0509 10.1021C13.0475 9.81524 13.0356 9.71135 13.0007 9.70337V9.70337ZM9.17746 13.8204C8.62858 13.814 8.57542 13.8592 8.99704 13.9627C9.72404 14.1411 10.3867 14.5795 11.0415 15.315C11.5163 15.8484 11.6331 15.9455 11.8783 16.0104C12.1982 16.0951 13.0449 16.0271 13.3455 15.8926L13.4955 15.8255L12.8729 15.3125C12.1288 14.6995 11.8185 14.4879 11.3094 14.2466C10.6447 13.9315 10.2935 13.8524 9.4431 13.8264C9.34439 13.8234 9.25588 13.8214 9.17746 13.8204V13.8204ZM10.7331 16.1853L9.44583 16.6644C8.07982 17.1728 7.11578 17.5643 7.04797 17.6382C7.02536 17.6628 6.94727 17.8454 6.87451 18.0441C6.55086 18.9276 5.98018 19.5971 5.08967 20.1378C4.93623 20.231 4.8018 20.3153 4.79088 20.3251C4.73338 20.3763 5.44156 20.8772 5.75717 21.0085C5.90156 21.0686 6.19745 21.161 6.41483 21.2139C6.93937 21.3416 7.93012 21.3168 8.4977 21.1616C10.3062 20.6671 11.7903 18.9703 11.9743 17.1868L12.0061 16.8788L11.8724 16.8461C11.4286 16.7378 11.1077 16.5747 10.8872 16.3455L10.7331 16.1853ZM14.25 16.4834C14.2117 16.4821 14.0839 16.5179 13.9414 16.5711C13.7786 16.6318 13.4675 16.7215 13.2503 16.7703L12.8554 16.8589L12.8045 17.3414C12.7766 17.6066 12.7159 17.9765 12.6698 18.1634C12.6016 18.4396 12.5969 18.5178 12.6447 18.581C12.677 18.6237 12.7225 18.6586 12.7458 18.6586C12.8236 18.6586 13.5102 17.8722 13.7252 17.5367C13.977 17.144 14.2938 16.5225 14.2608 16.4862C14.2592 16.4845 14.2555 16.4836 14.25 16.4834ZM2.94913 17.7917C2.84403 17.7917 2.48484 18.2904 2.30902 18.6804C1.94944 19.478 1.80889 20.463 1.90065 21.5416C1.9316 21.9054 1.96894 22.3006 1.9836 22.4198C1.99826 22.539 2.01749 22.6366 2.02643 22.6366C2.03538 22.6366 2.10346 22.5045 2.17779 22.3433C2.42102 21.8155 2.83097 21.2634 3.29665 20.8362L3.50311 20.6468L3.35992 20.4814C3.07567 20.1529 3.05673 20.0616 3.06371 19.0556C3.07052 18.0728 3.045 17.7917 2.94913 17.7917ZM4.11294 18.2702C4.10686 18.2698 4.10253 18.2708 4.10022 18.2733C4.02236 18.3586 3.9166 19.6246 3.98141 19.6957C3.99846 19.7144 4.03051 19.7296 4.05255 19.7296C4.14023 19.7296 4.64123 19.4213 4.9212 19.195L5.21772 18.9553L4.96767 18.8016C4.83015 18.717 4.58625 18.5554 4.42565 18.4423C4.28513 18.3434 4.15551 18.2728 4.11294 18.2702V18.2702Z"
          fill={props.fill}
          fillOpacity="0.6"
          className="path-name"
        />
      );
    case "Logout":
      return (
        <path
          d="M7.09 13.2223L8.5 14.6323L13.5 9.63232L8.5 4.63232L7.09 6.04232L9.67 8.63232H0V10.6323H9.67L7.09 13.2223ZM16 0.632324H2C0.89 0.632324 0 1.53232 0 2.63232V6.63232H2V2.63232H16V16.6323H2V12.6323H0V16.6323C0 17.7323 0.89 18.6323 2 18.6323H16C17.1 18.6323 18 17.7323 18 16.6323V2.63232C18 1.53232 17.1 0.632324 16 0.632324Z"
          fill={props.fill}
          fillOpacity="0.6"
          className="path-name"
        />
      );
    case "Google":
      return (
        <g fill="none" fillRule="evenodd">
          <path
            d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z"
            fill="#4285f4"
          />
          <path
            d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15C83.93 439.12 163.74 492 256 492z"
            fill="#34a853"
          />
          <path
            d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84v-61.15H45.1C29.12 181.87 20 217.92 20 256s9.12 74.13 25.1 105.99l78.85-61.15z"
            fill="#fbbc05"
          />
          <path
            d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20 163.75 20 83.93 72.89 45.1 150.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z"
            fill="#ea4335"
          />
          <path d="M20 20h472v472H20V20z" />
        </g>
      );
    case "Org settings":
      return (
        <>
          <path
            d="M9.69997 18H9.29997L8.89997 15.4C7.69997 15.2 6.69997 14.5 5.89997 13.6L3.49997 14.6L2.69997 13.3L4.79997 11.7C4.39997 10.5 4.39997 9.3 4.79997 8.1L2.69997 6.7L3.49997 5.4L5.89997 6.4C6.69997 5.5 7.69997 4.9 8.89997 4.6L9.19997 2H10.7L11.1 4.6C12.3 4.8 13.4 5.5 14.1 6.4L16.5 5.4L17.3 6.7L15.2 8.2C15.4 8.8 15.5 9.4 15.5 10H16C16.5 10 17 10.1 17.5 10.2V10L17.4 9L19.5 7.4C19.7 7.2 19.7 7 19.6 6.8L17.6 3.3C17.5 3 17.3 3 17 3L14.5 4C14 3.6 13.4 3.3 12.8 3L12.4 0.3C12.5 0.2 12.2 0 12 0H7.99997C7.79997 0 7.49997 0.2 7.49997 0.4L7.09997 3.1C6.49997 3.3 5.99997 3.7 5.39997 4L2.99997 3C2.69997 3 2.49997 3 2.29997 3.3L0.299973 6.8C0.199973 7 0.299973 7.2 0.499973 7.4L2.59997 9L2.49997 10L2.59997 11L0.499973 12.7C0.299973 12.9 0.299973 13.1 0.399973 13.3L2.39997 16.8C2.49997 17 2.69997 17 2.99997 17L5.49997 16C5.99997 16.4 6.59997 16.7 7.19997 17L7.59997 19.7C7.59997 19.9 7.79997 20.1 8.09997 20.1H10.6C10.1 19.4 9.89997 18.7 9.69997 18ZM14 10.3V10C14 7.8 12.2 6 9.99997 6C7.79997 6 5.99997 7.8 5.99997 10C5.99997 12.2 7.79997 14 9.99997 14C10.7 12.3 12.2 10.9 14 10.3ZM7.99997 10C7.99997 8.9 8.89997 8 9.99997 8C11.1 8 12 8.9 12 10C12 11.1 11.1 12 9.99997 12C8.89997 12 7.99997 11.1 7.99997 10Z"
            fill={props.fill}
            fillOpacity="0.6"
            className="path-name"
          />
          <path
            d="M16 12C13.243 12 11 14.243 11 17C11 19.757 13.243 22 16 22C18.757 22 21 19.757 21 17C21 14.243 18.757 12 16 12ZM12 17C12 16.5505 12.078 16.119 12.2155 15.7155L13 16.5L14 17.5V18.5L15 19.5L15.5 20V20.9655C13.5305 20.718 12 19.036 12 17ZM19.165 19.4365C18.8385 19.1735 18.3435 19 18 19V18.5C18 18.2348 17.8946 17.9804 17.7071 17.7929C17.5196 17.6054 17.2652 17.5 17 17.5H15V16C15.2652 16 15.5196 15.8946 15.7071 15.7071C15.8946 15.5196 16 15.2652 16 15V14.5H16.5C16.7652 14.5 17.0196 14.3946 17.2071 14.2071C17.3946 14.0196 17.5 13.7652 17.5 13.5V13.2945C18.964 13.889 20 15.325 20 17C19.9999 17.8823 19.7061 18.7396 19.165 19.4365Z"
            fill={props.fill}
            fillOpacity="0.6"
            className="path-name"
          />
        </>
      );
    case "Tickets":
      return (
        <path
          d="M832 1024H192c-35.392 0-64-28.608-64-64V64c0-35.392 28.608-64 64-64h448l256 256v704c0 35.392-28.608 64-64 64zM576 320V128H256v768h512V320h-192z"
          fill="black"
          fillOpacity="0.6"
          className="path-name"
        />
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "black",
  viewBox = "",
  width = "38",
  height = "38",
  xmlns = "http://www.w3.org/2000/svg",
  isMobile = false,
}) => {
  function renderTooltip(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        {name}
      </Tooltip>
    );
  }

  return (
    <React.Fragment>
      {isMobile ? (
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <svg
            width={width}
            style={style}
            height={height}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox || getViewBox(name)}
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            {getPath(name, { fill })}
          </svg>
        </OverlayTrigger>
      ) : (
        <svg
          width={width}
          style={style}
          height={height}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox || getViewBox(name)}
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {getPath(name, { fill })}
        </svg>
      )}
    </React.Fragment>
  );
};

SVGIcon.prototype = {
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
  style: PropTypes.object,
};

export default SVGIcon;
