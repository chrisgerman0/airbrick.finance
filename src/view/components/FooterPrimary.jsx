import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSinglePrismicDocument } from "@prismicio/react";
import { FaAirbnb } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const FooterPrimary = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [footer] = useSinglePrismicDocument("footer");

  useEffect(() => {
    if (footer) {
      setIsLoading(false);
    }
  }, [footer]);

  return (
    <footer className="bg-secondary py-4">
      <div className="container">
        <div className="row">
          <div className="col-11 col-md-5 col-xl-3">
            <Link to="/" className="d-block logo">
              <img src="/assets/logo.png" alt="..." />
            </Link>
            {!isLoading && footer && (
              <div className="ms-2">{footer.data.footer_text[0].text}</div>
            )}
          </div>
          <div className="col-11 col-md-4 col-xl-3 mt-4 mt-md-0 ms-md-auto">
            <div className="d-flex gap-4 filter-invert justify-content-md-end mt-md-4 ms-2">
              <a
                href="https://t.me/airbrickfinance"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  height={20}
                  viewBox="0 0 21 20"
                  width={21}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.69336 12.386L8.39009 16.574C8.82399 16.574 9.01191 16.391 9.23726 16.1712L11.2715 14.2625L15.4868 17.2932C16.2599 17.7162 16.8045 17.4935 17.0131 16.595L19.7799 3.86605L19.7807 3.8653C20.0259 2.7433 19.3674 2.30456 18.6142 2.5798L2.35064 8.69302C1.24068 9.11602 1.25749 9.72352 2.16195 9.99877L6.3199 11.2685L15.978 5.33529C16.4325 5.03979 16.8458 5.20329 16.5058 5.49879L8.69336 12.386Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://www.airbnb.co.uk/p/airbrick"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaAirbnb color="white" size="1.2em" />
              </a>
              <a
                href="https://www.instagram.com/airbrickfinance/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillInstagram color="white" size="1.2em" />
              </a>
              <a
                href="https://twitter.com/NileRiver_Labs"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  height={20}
                  viewBox="0 0 21 20"
                  width={21}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.329 5.57324C18.076 5.12665 18.635 4.42344 18.9015 3.59491C18.1996 4.01141 17.4315 4.30481 16.6307 4.46241C15.5203 3.28785 13.7611 3.00201 12.336 3.76462C10.9109 4.52723 10.1728 6.14948 10.534 7.72491C7.65869 7.58055 4.97982 6.22234 3.16402 3.98824C2.21638 5.62276 2.70064 7.71223 4.27068 8.76324C3.70294 8.74499 3.14779 8.59127 2.65152 8.31491C2.65152 8.32991 2.65152 8.34491 2.65152 8.35991C2.65185 10.0625 3.85183 11.5291 5.52068 11.8666C4.99407 12.0098 4.44169 12.0309 3.90568 11.9282C4.37502 13.3843 5.71698 14.3818 7.24652 14.4116C5.97971 15.4059 4.41525 15.945 2.80485 15.9424C2.51941 15.9428 2.23419 15.9264 1.95068 15.8932C3.58601 16.9441 5.48932 17.5019 7.43318 17.4999C10.1376 17.5185 12.7365 16.4523 14.6488 14.5399C16.561 12.6275 17.627 10.0284 17.6082 7.32408C17.6082 7.16908 17.6046 7.01491 17.5973 6.86158C18.2977 6.35541 18.9022 5.72837 19.3823 5.00991C18.7299 5.29913 18.0377 5.48901 17.329 5.57324Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a
                href="https://medium.com/@nileriver"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  height={20}
                  viewBox="0 0 21 20"
                  width={21}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6703 4.90003L19.0002 3.61441V3.33301H14.3932L11.1099 11.5913L7.37447 3.33301H2.54391V3.61441L4.09739 5.50424C4.24877 5.64388 4.32794 5.8481 4.3078 6.05371V13.4804C4.35572 13.7477 4.26961 14.0228 4.0835 14.2172L2.3335 16.3604V16.6383H7.2953V16.3569L5.5453 14.2172C5.35572 14.0221 5.26614 13.752 5.30433 13.4804V7.05652L9.65989 16.6418H10.1661L13.9113 7.05652V14.6923C13.9113 14.8937 13.9113 14.9351 13.7807 15.067L12.4335 16.3842V16.6663H18.9696V16.3849L17.671 15.1C17.5571 15.013 17.4981 14.867 17.5224 14.7253V5.27476C17.4981 5.13231 17.5564 4.98634 17.6703 4.90003Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/nileriver-finance"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  height={20}
                  viewBox="0 0 21 20"
                  width={21}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6661 1.25C6.37506 1.24948 2.71717 4.21341 2.03015 8.24757C1.34312 12.2817 3.82983 16.1949 7.90102 17.4862C8.3395 17.5614 8.49647 17.305 8.49647 17.0844C8.49647 16.8865 8.48946 16.362 8.48683 15.6645C6.05327 16.1657 5.53938 14.547 5.53938 14.547C5.37917 14.0433 5.03476 13.611 4.56858 13.3284C3.77932 12.8114 4.62909 12.8231 4.62909 12.8231C5.19094 12.8964 5.68543 13.2135 5.96821 13.6817C6.20756 14.0962 6.61081 14.4025 7.08835 14.5325C7.56589 14.6625 8.07818 14.6055 8.51138 14.3741C8.55209 13.9515 8.74951 13.5565 9.06825 13.2599C7.12667 13.0502 5.08511 12.3353 5.08511 9.14217C5.07434 8.31628 5.39634 7.51788 5.98487 6.91125C5.71858 6.19236 5.74994 5.40385 6.07257 4.70622C6.07257 4.70622 6.80658 4.48154 8.47718 5.55899C9.90999 5.18481 11.4221 5.18481 12.8549 5.55899C14.5264 4.4807 15.2596 4.70622 15.2596 4.70622C15.5837 5.40352 15.6151 6.19258 15.3473 6.91125C15.9379 7.51782 16.2597 8.31832 16.2453 9.14551C16.2453 12.347 14.202 13.0502 12.2534 13.2566C12.6737 13.6659 12.8893 14.2274 12.8453 14.7984C12.8453 15.9126 12.8348 16.8113 12.8348 17.0844C12.8348 17.3075 12.9909 17.5664 13.4372 17.4845C17.5067 16.191 19.9908 12.2776 19.3023 8.24455C18.6139 4.21146 14.9562 1.24907 10.6661 1.25Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPrimary;
