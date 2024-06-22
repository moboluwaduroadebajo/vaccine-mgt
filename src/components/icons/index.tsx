interface IconProps {
  name: string;
  height?: number;
  width?: number;
  fill?: string;
  className?: string;
}

// "#B2B1B1";

export const Icons = ({
  name,
  height = 24,
  width = 24,
  fill,
  className,
}: IconProps) => {
  if (name === "peace") {
    return (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="28" fill="#1F8E1F" fillOpacity="0.1" />
        <path
          d="M37.0077 35.9214C38.4939 34.2368 39.4776 32.1689 39.8468 29.9529C40.216 27.7369 39.9559 25.4618 39.0961 23.3863C38.2364 21.3108 36.8114 19.5182 34.9833 18.2124C33.1552 16.9067 30.9974 16.1401 28.7552 16V27.6705L37.0077 35.9214ZM35.9454 36.9837L28.7552 29.7906V39.9606C31.4172 39.7969 33.948 38.748 35.9454 36.9807V36.9837ZM27.2548 39.9621V29.7921L20.0646 36.9837C22.0622 38.7505 24.593 39.7988 27.2548 39.9621ZM19.0023 35.9214C17.5161 34.2368 16.5324 32.1689 16.1632 29.9529C15.794 27.7369 16.0541 25.4618 16.9139 23.3863C17.7736 21.3108 19.1986 19.5182 21.0267 18.2124C22.8548 16.9067 25.0126 16.1401 27.2548 16V27.6705L19.0023 35.9214Z"
          fill={fill}
        />
      </svg>
    );
  }

  if (name === "rythm") {
    return (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="28" fill="#DF2935" fillOpacity="0.1" />
        <path
          d="M38.24 27.33C38.0734 24.6721 36.8735 22.1848 34.897 20.4C32.9161 18.6113 30.3173 17.6632 27.65 17.756C24.9826 17.8469 22.4552 18.9724 20.603 20.894C18.7555 22.8109 17.7315 25.3747 17.75 28.037V28.267C17.761 28.751 17.808 29.234 17.89 29.711C18.3069 32.2015 19.6323 34.449 21.61 36.019C23.5912 37.5929 26.0832 38.3811 28.6091 38.2327C31.1351 38.0844 33.5176 37.01 35.301 35.215C37.0796 33.4238 38.1304 31.0364 38.25 28.515V28.047C38.25 27.887 38.25 27.559 38.24 27.33ZM36.71 28.924H33.568L30.866 33.428C30.7762 33.5752 30.6497 33.6966 30.499 33.7803C30.3483 33.8641 30.1784 33.9074 30.006 33.906H29.946C29.7626 33.896 29.5854 33.8359 29.4338 33.7323C29.2821 33.6286 29.1618 33.4853 29.086 33.318L25.874 26.104L23.874 29.442C23.7841 29.5894 23.6575 29.7109 23.5066 29.7949C23.3557 29.8788 23.1857 29.9223 23.013 29.921H19.47C19.3288 29.303 19.2583 28.6709 19.26 28.037V27.927H22.442L25.152 23.434C25.247 23.2776 25.3832 23.1503 25.5456 23.066C25.708 22.9817 25.8904 22.9437 26.073 22.956C26.2547 22.9676 26.4298 23.0285 26.5796 23.1321C26.7293 23.2357 26.848 23.378 26.923 23.544L30.145 30.758L32.146 27.42C32.2346 27.2708 32.3604 27.1473 32.5112 27.0616C32.662 26.9758 32.8325 26.9308 33.006 26.931H36.688C36.738 27.298 36.761 27.668 36.758 28.037C36.7613 28.3334 36.7446 28.6298 36.708 28.924"
          fill="#DF2935"
        />
      </svg>
    );
  }

  if (name === "loading-indicator") {
    return (
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white z-100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    );
  }

  if (name === "eye-open") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35865 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667V12.6667ZM7.99978 11C7.20413 11 6.44107 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44107 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82127 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82127 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
          fill="#626465"
        />
      </svg>
    );
  }

  if (name === "eye-close") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 3.5C11.8477 3.5 14.3789 5.08203 15.6094 7.61328C15.1875 8.52734 14.5547 9.33594 13.8164 9.96875L14.8711 11.0234C15.8906 10.1094 16.7344 8.94922 17.2617 7.61328C15.9609 4.34375 12.7617 1.98828 9 1.98828C8.05078 1.98828 7.13672 2.16406 6.25781 2.41016L7.52344 3.67578C7.98047 3.57031 8.47266 3.5 9 3.5ZM8.19141 4.34375L9.73828 5.89062C10.1602 6.10156 10.5117 6.45312 10.7227 6.875L12.2695 8.42188C12.3398 8.17578 12.375 7.89453 12.375 7.61328C12.375 5.75 10.8633 4.23828 9 4.23828C8.71875 4.23828 8.47266 4.27344 8.19141 4.34375ZM1.51172 1.91797L3.51562 3.92188C2.28516 4.87109 1.33594 6.13672 0.738281 7.61328C2.03906 10.918 5.23828 13.2383 9 13.2383C10.125 13.2383 11.25 13.0273 12.2344 12.6406L14.8008 15.207L15.8555 14.1523L2.56641 0.828125L1.51172 1.91797ZM7.13672 7.54297L9.10547 9.47656C9.07031 9.47656 9.03516 9.51172 9 9.51172C7.98047 9.51172 7.13672 8.66797 7.13672 7.61328C7.13672 7.57812 7.13672 7.57812 7.13672 7.54297ZM4.57031 4.97656L5.90625 6.27734C5.73047 6.69922 5.625 7.15625 5.625 7.61328C5.625 9.47656 7.13672 10.9883 9 10.9883C9.45703 10.9883 9.91406 10.918 10.3359 10.7422L11.0742 11.4805C10.4062 11.6562 9.70312 11.7617 9 11.7617C6.15234 11.7617 3.62109 10.1445 2.39062 7.61328C2.91797 6.55859 3.69141 5.67969 4.57031 4.97656Z"
          fill="#747A80"
        />
      </svg>
    );
  }

  if (name === "home") {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.38 7.95667L16.66 3.255C14.8283 1.97167 12.0167 2.04167 10.255 3.40667L4.40999 7.96833C3.24332 8.87833 2.32166 10.745 2.32166 12.215V20.265C2.32166 23.24 4.73665 25.6667 7.71166 25.6667H20.2883C23.2633 25.6667 25.6783 23.2517 25.6783 20.2767V12.3667C25.6783 10.7917 24.6633 8.855 23.38 7.95667ZM14.875 21C14.875 21.4783 14.4783 21.875 14 21.875C13.5217 21.875 13.125 21.4783 13.125 21V17.5C13.125 17.0217 13.5217 16.625 14 16.625C14.4783 16.625 14.875 17.0217 14.875 17.5V21Z"
          fill={fill}
          className={className}
        />
      </svg>
    );
  }

  if (name === "children") {
    return (
      <svg
        width="27"
        height="23"
        viewBox="0 0 27 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.99996 0C6.74256 0 7.45475 0.294999 7.97985 0.820101C8.50496 1.3452 8.79996 2.05739 8.79996 2.8C8.79996 3.54261 8.50496 4.2548 7.97985 4.7799C7.45475 5.305 6.74256 5.6 5.99996 5.6C5.25735 5.6 4.54516 5.305 4.02006 4.7799C3.49496 4.2548 3.19996 3.54261 3.19996 2.8C3.19996 2.05739 3.49496 1.3452 4.02006 0.820101C4.54516 0.294999 5.25735 0 5.99996 0ZM2.84996 21V17.5H2.07121C1.59433 17.5 1.25746 17.0319 1.40621 16.5769L2.76683 12.4906L1.51558 14.1444C1.04746 14.7612 0.168081 14.8794 -0.444419 14.4156C-1.05692 13.9519 -1.17942 13.0725 -0.715669 12.4556L1.86121 9.05625C2.84121 7.76125 4.37683 7 5.99996 7C7.62308 7 9.15871 7.76125 10.1387 9.05625L12.7156 12.4556C13.1837 13.0725 13.0612 13.9519 12.4443 14.4156C11.8275 14.8794 10.9481 14.7612 10.4843 14.1444L9.23308 12.4906L10.5937 16.5769C10.7468 17.0319 10.4056 17.5 9.92871 17.5H9.14996V21C9.14996 21.7744 8.52433 22.4 7.74996 22.4C6.97558 22.4 6.34996 21.7744 6.34996 21V17.5H5.64996V21C5.64996 21.7744 5.02433 22.4 4.24996 22.4C3.47558 22.4 2.84996 21.7744 2.84996 21ZM20 0C20.7426 0 21.4548 0.294999 21.9799 0.820101C22.505 1.3452 22.8 2.05739 22.8 2.8C22.8 3.54261 22.505 4.2548 21.9799 4.7799C21.4548 5.305 20.7426 5.6 20 5.6C19.2573 5.6 18.5452 5.305 18.0201 4.7799C17.495 4.2548 17.2 3.54261 17.2 2.8C17.2 2.05739 17.495 1.3452 18.0201 0.820101C18.5452 0.294999 19.2573 0 20 0ZM19.65 16.8V21C19.65 21.7744 19.0243 22.4 18.25 22.4C17.4756 22.4 16.85 21.7744 16.85 21V13.1469L16.2856 14.0437C15.8743 14.7 15.0081 14.8925 14.3562 14.4812C13.7043 14.07 13.5075 13.2037 13.9187 12.5519L16.1806 8.96C16.9506 7.73938 18.2937 6.99562 19.7331 6.99562H20.2712C21.715 6.99562 23.0581 7.735 23.8237 8.96L26.0856 12.5562C26.4968 13.2125 26.3 14.0744 25.6481 14.4856C24.9962 14.8969 24.13 14.7 23.7187 14.0481L23.15 13.1469V21C23.15 21.7744 22.5243 22.4 21.75 22.4C20.9756 22.4 20.35 21.7744 20.35 21V16.8H19.65Z"
          fill={fill}
          className={className}
        />
      </svg>
    );
  }

  if (name === "parents") {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 19 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.62007 7.64875C7.83475 8.23127 6.88359 8.54709 5.90582 8.55C4.88819 8.55 3.95457 8.20875 3.19069 7.64875C2.53444 8.19563 1.87994 8.97875 1.34444 9.94388C0.0993183 12.1865 -0.0380566 14.4869 1.03819 15.0836C1.51769 15.3566 2.02344 15.1519 2.54494 14.6496C2.44731 15.1907 2.39841 15.7395 2.39882 16.2894C2.39882 18.8601 3.39632 20.9374 4.62394 20.9374C5.36419 20.9374 5.73082 20.1805 5.90669 19.0229C6.08169 20.1726 6.44919 20.9374 7.18419 20.9374C8.40657 20.9374 9.41194 18.8593 9.41194 16.2894C9.41194 15.7119 9.35769 15.1606 9.26494 14.6505C9.78994 15.1536 10.2939 15.3619 10.7752 15.0854C11.8488 14.4886 11.7097 12.1891 10.4654 9.94563C9.93169 8.97963 9.27544 8.19738 8.61919 7.6505L8.62007 7.64875ZM5.90494 7.675C6.3968 7.67483 6.88381 7.57778 7.33816 7.3894C7.79251 7.20101 8.20531 6.92498 8.55298 6.57706C8.90066 6.22914 9.1764 5.81615 9.36447 5.36167C9.55253 4.90719 9.64924 4.42011 9.64907 3.92825C9.6489 3.4364 9.55185 2.94939 9.36346 2.49504C9.17508 2.04068 8.89904 1.62789 8.55113 1.28021C8.20321 0.932539 7.79022 0.656797 7.33574 0.46873C6.88125 0.280664 6.39418 0.183956 5.90232 0.184128C4.90873 0.184476 3.95598 0.57951 3.25366 1.28233C2.55134 1.98514 2.15697 2.93817 2.15732 3.93175C2.15767 4.92534 2.5527 5.87809 3.25552 6.58041C3.95833 7.28274 4.91136 7.6771 5.90494 7.67675V7.675ZM15.2386 12.4613C16.5581 12.4613 17.6291 11.3903 17.6291 10.069C17.6291 8.74775 16.5563 7.675 15.2377 7.675C14.6028 7.67523 13.994 7.92753 13.5451 8.37645C13.0962 8.82536 12.8439 9.43415 12.8437 10.069C12.8442 10.7039 13.0967 11.3126 13.5458 11.7613C13.9948 12.2101 14.6037 12.4613 15.2386 12.4613ZM18.1523 13.9111C17.8111 13.2943 17.3928 12.7938 16.9728 12.4438C16.4828 12.8025 15.8878 13.0213 15.2377 13.0213C14.5867 13.0213 13.9899 12.8025 13.5026 12.4438C13.0826 12.7938 12.6643 13.2943 12.3213 13.9111C11.5251 15.3444 11.4376 16.8144 12.1253 17.1959C12.4316 17.3709 12.7553 17.2396 13.0878 16.9194C13.027 17.2652 12.9965 17.6156 12.9968 17.9668C12.9968 19.6118 13.6338 20.9391 14.4187 20.9391C14.8912 20.9391 15.1274 20.4553 15.2394 19.7159C15.3514 20.4509 15.5859 20.9383 16.0567 20.9383C16.8381 20.9383 17.4803 19.61 17.4803 17.9668C17.4803 17.5993 17.4453 17.2458 17.3858 16.9203C17.7209 17.2414 18.0438 17.3753 18.3518 17.1976C19.0361 16.8179 18.9468 15.347 18.1523 13.9138V13.9111Z"
          fill={fill}
          className={className}
        />
      </svg>
    );
  }

  if (name === "injection") {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5383 3.68783C18.757 3.46947 19.0535 3.34683 19.3625 3.34683C19.6716 3.34683 19.9681 3.46947 20.1868 3.68783L23.4791 6.98017L23.4873 6.98717L23.4943 6.99533L24.311 7.812C24.5236 8.03188 24.6415 8.32651 24.639 8.63241C24.6366 8.93831 24.5141 9.23101 24.2979 9.44748C24.0818 9.66394 23.7892 9.78685 23.4833 9.78972C23.1774 9.79259 22.8827 9.6752 22.6625 9.46283L21.0116 11.1125L23.0743 13.1752C23.2868 13.3952 23.4044 13.6899 23.4018 13.9958C23.3991 14.3017 23.2764 14.5943 23.0601 14.8106C22.8438 15.0269 22.5512 15.1496 22.2453 15.1523C21.9394 15.1549 21.6447 15.0374 21.4246 14.8248L20.5998 14L14 20.5998C13.675 20.9249 13.2891 21.1828 12.8644 21.3587C12.4397 21.5346 11.9846 21.6252 11.5249 21.6252C11.0652 21.6252 10.61 21.5346 10.1854 21.3587C9.76068 21.1828 9.37481 20.9249 9.0498 20.5998L5.4098 24.241C5.19104 24.4599 4.89428 24.583 4.5848 24.5831C4.27531 24.5832 3.97846 24.4603 3.75955 24.2416C3.54064 24.0228 3.41759 23.7261 3.41748 23.4166C3.41737 23.1071 3.54021 22.8102 3.75897 22.5913L7.40013 18.949C6.74398 18.2927 6.37538 17.4026 6.37538 16.4745C6.37538 15.5464 6.74398 14.6563 7.40013 14L14 7.40017L13.1751 6.57533C12.9626 6.3553 12.845 6.06059 12.8477 5.7547C12.8503 5.4488 12.973 5.15619 13.1893 4.93988C13.4057 4.72357 13.6983 4.60087 14.0042 4.59821C14.3101 4.59556 14.6048 4.71315 14.8248 4.92567L16.8875 6.98717L18.5371 5.3375C18.3184 5.11872 18.1955 4.82203 18.1955 4.51267C18.1955 4.20331 18.3184 3.90662 18.5371 3.68783M21.0105 7.81317L19.362 9.46167L18.5371 8.63683L20.1868 6.98717L21.0105 7.81317ZM10.6995 15.6497L9.87463 14.8248L11.5243 13.1752L12.3491 14C12.5617 14.22 12.6792 14.5147 12.6766 14.8206C12.6739 15.1265 12.5512 15.4191 12.3349 15.6355C12.1186 15.8518 11.826 15.9745 11.5201 15.9771C11.2142 15.9798 10.9195 15.8622 10.6995 15.6497ZM13.1728 13.1752L12.3491 12.3503L14 10.7007L14.8248 11.5255C14.9362 11.6331 15.0251 11.7619 15.0863 11.9042C15.1474 12.0465 15.1796 12.1996 15.1809 12.3545C15.1823 12.5094 15.1528 12.6631 15.0941 12.8064C15.0354 12.9498 14.9488 13.0801 14.8393 13.1896C14.7297 13.2992 14.5995 13.3858 14.4561 13.4445C14.3127 13.5031 14.1591 13.5326 14.0042 13.5313C13.8493 13.5299 13.6962 13.4978 13.5538 13.4366C13.4115 13.3755 13.2828 13.2866 13.1751 13.1752"
          fill={fill}
          className={className}
        />
      </svg>
    );
  }

  if (name === "schedule") {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.6667 3.5C18.9761 3.5 19.2728 3.62292 19.4916 3.84171C19.7104 4.0605 19.8333 4.35725 19.8333 4.66667V5.83333H22.1667C22.7553 5.83315 23.3223 6.05547 23.754 6.45575C24.1856 6.85602 24.45 7.40465 24.4942 7.99167L24.5 8.16667V22.1667C24.5002 22.7553 24.2779 23.3223 23.8776 23.754C23.4773 24.1856 22.9287 24.45 22.3417 24.4942L22.1667 24.5H5.83333C5.24466 24.5002 4.67767 24.2779 4.24603 23.8776C3.81438 23.4773 3.54998 22.9287 3.50583 22.3417L3.5 22.1667V8.16667C3.49981 7.57799 3.72214 7.01101 4.12241 6.57936C4.52269 6.14772 5.07132 5.88332 5.65833 5.83917L5.83333 5.83333H8.16667V4.66667C8.16667 4.35725 8.28958 4.0605 8.50838 3.84171C8.72717 3.62292 9.02391 3.5 9.33333 3.5C9.64275 3.5 9.9395 3.62292 10.1583 3.84171C10.3771 4.0605 10.5 4.35725 10.5 4.66667V5.83333H17.5V4.66667C17.5 4.35725 17.6229 4.0605 17.8417 3.84171C18.0605 3.62292 18.3572 3.5 18.6667 3.5ZM17.2947 10.9422L12.3457 15.8912L10.6948 14.2415C10.4748 14.029 10.1801 13.9114 9.8742 13.914C9.5683 13.9167 9.27569 14.0394 9.05938 14.2557C8.84307 14.472 8.72037 14.7646 8.71771 15.0705C8.71505 15.3764 8.83265 15.6711 9.04517 15.8912L11.5115 18.3587C11.6209 18.4682 11.7509 18.5551 11.8939 18.6144C12.0369 18.6737 12.1903 18.7042 12.3451 18.7042C12.4999 18.7042 12.6532 18.6737 12.7963 18.6144C12.9393 18.5551 13.0692 18.4682 13.1787 18.3587L18.9443 12.5918C19.0558 12.4842 19.1446 12.3555 19.2058 12.2131C19.2669 12.0708 19.2991 11.9177 19.3005 11.7628C19.3018 11.6079 19.2723 11.4543 19.2136 11.3109C19.155 11.1675 19.0683 11.0372 18.9588 10.9277C18.8493 10.8182 18.719 10.7315 18.5756 10.6729C18.4322 10.6142 18.2786 10.5847 18.1237 10.586C17.9688 10.5874 17.8157 10.6196 17.6734 10.6807C17.531 10.7419 17.4023 10.8307 17.2947 10.9422Z"
          fill={fill}
          className={className}
        />
      </svg>
    );
  }

  if (name === "logout") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 0C2.70435 0 1.94129 0.316071 1.37868 0.87868C0.816071 1.44129 0.5 2.20435 0.5 3V17C0.5 17.7956 0.816071 18.5587 1.37868 19.1213C1.94129 19.6839 2.70435 20 3.5 20H9.5C10.2956 20 11.0587 19.6839 11.6213 19.1213C12.1839 18.5587 12.5 17.7956 12.5 17V3C12.5 2.20435 12.1839 1.44129 11.6213 0.87868C11.0587 0.316071 10.2956 0 9.5 0H3.5ZM13.793 5.293C13.9805 5.10553 14.2348 5.00021 14.5 5.00021C14.7652 5.00021 15.0195 5.10553 15.207 5.293L19.207 9.293C19.3945 9.48053 19.4998 9.73484 19.4998 10C19.4998 10.2652 19.3945 10.5195 19.207 10.707L15.207 14.707C15.0184 14.8892 14.7658 14.99 14.5036 14.9877C14.2414 14.9854 13.9906 14.8802 13.8052 14.6948C13.6198 14.5094 13.5146 14.2586 13.5123 13.9964C13.51 13.7342 13.6108 13.4816 13.793 13.293L16.086 11H7.5C7.23478 11 6.98043 10.8946 6.79289 10.7071C6.60536 10.5196 6.5 10.2652 6.5 10C6.5 9.73478 6.60536 9.48043 6.79289 9.29289C6.98043 9.10536 7.23478 9 7.5 9H16.086L13.793 6.707C13.6055 6.51947 13.5002 6.26516 13.5002 6C13.5002 5.73484 13.6055 5.48053 13.793 5.293Z"
          fill="white"
          className={className}
        />
      </svg>
    );
  }

  if (name === "search") {
    return (
      <svg
        width={width}
        height={width}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "bell") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.0196 2.91003C8.7096 2.91003 6.0196 5.60003 6.0196 8.91003V11.8C6.0196 12.41 5.7596 13.34 5.4496 13.86L4.2996 15.77C3.5896 16.95 4.0796 18.26 5.3796 18.7C9.6896 20.14 14.3396 20.14 18.6496 18.7C19.8596 18.3 20.3896 16.87 19.7296 15.77L18.5796 13.86C18.2796 13.34 18.0196 12.41 18.0196 11.8V8.91003C18.0196 5.61003 15.3196 2.91003 12.0196 2.91003Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
      </svg>
    );
  }
  return <div />;
};
