import React from "react";
import { companyLogos } from "../../constants";

const CompanyLogo = ({ className }) => {
  return (
    <div className={`${className || ""} `}>
      <h6 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h6>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex justify-center items-center flex-1 h-[8.5rem]"
          >
            <img src={logo} width={134} height={28} alt="logo " />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogo;
