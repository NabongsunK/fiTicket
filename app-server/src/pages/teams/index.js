import GoToMap from "../../components/common/GoToMap";
import TeamsPageHeading from "./TeamsPageHeading";
import FAQ from "./FAQ";
import Contact from "./Contact";
import TeamTitle from "./Title";

const Teams = function () {
  return (
    <>
      <TeamsPageHeading />

      <TeamTitle />

      <FAQ />

      {/* 문의하기 */}
      <Contact />

      <GoToMap />
    </>
  );
};

export default Teams;
