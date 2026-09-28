import { SITE } from "../data/site.js";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer() {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">{SITE.name}</strong>{" "}
            <span>
              All Rights Reserved
              <br />
            </span>
          </p>
        </div>
        <SocialLinks className="social-links d-flex justify-content-center" />
      </div>
    </footer>
  );
}
