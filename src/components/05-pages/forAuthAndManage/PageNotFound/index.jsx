import TitlePage from "../../../01-atoms/forAuthAndManage/texts/titles/TitlePage";

import "./styles.css";

export default function PageNotFound() {
  return (
    <div className="page not-found d-flex-col">
      <TitlePage content="Page Not Found" />
      <p id="not-found-code">404</p>
      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
    </div>
  );
}
