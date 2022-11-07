import React from "react";

const IconGoogle = () => {

return(
	<span className="inline-svg" aria-hidden="true" data-button-icon="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      aria-hidden="true"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M15.68 8.182c0-.567-.05-1.113-.145-1.637H8V9.64h4.305a3.68 3.68 0 0 1-1.596 2.415v2.007h2.586c1.512-1.393 2.385-3.444 2.385-5.88Z"
          fill="#4285F4"
          fillRule="nonzero"
        />
        <path
          d="M8 16c2.16 0 3.97-.716 5.295-1.938l-2.586-2.007c-.716.48-1.633.763-2.709.763-2.084 0-3.847-1.407-4.476-3.298H.85v2.073A7.997 7.997 0 0 0 8 16Z"
          fill="#34A853"
          fillRule="nonzero"
        />
        <path
          d="M3.524 9.52c-.16-.48-.251-.993-.251-1.52s.09-1.04.25-1.52V4.407H.852A7.997 7.997 0 0 0 0 8c0 1.29.31 2.513.85 3.593L3.525 9.52Z"
          fill="#FBBC05"
          fillRule="nonzero"
        />
        <path
          d="M8 3.182c1.175 0 2.23.403 3.058 1.196l2.295-2.294C11.967.793 10.156 0 8 0A7.997 7.997 0 0 0 .85 4.407L3.525 6.48C4.153 4.59 5.916 3.182 8 3.182Z"
          fill="#EA4335"
          fillRule="nonzero"
        />
        <path d="M0 0h16v16H0z" />
      </g>
    </svg>
  </span>

);
};
export default IconGoogle;