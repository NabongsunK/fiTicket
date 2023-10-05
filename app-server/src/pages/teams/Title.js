import { ReactComponent as Logo } from "./team_logo.svg";
import { ReactComponent as Name } from "./team_name.svg";

const TeamTitle = function () {
  return (
    <>
      <div className="cities-town">
        <div className="container">
          <div className="row">
            <div className="slider-content">
              <div className="row">
                <div className="col-lg-12">
                  <h2>
                    Loca!T’s <em>Story &amp; Information</em>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="weekly-offers">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading text-center">
                <h2>Loca!T와 함께 다양한 축제를 즐기세요</h2>
                <p>축제를 더욱 더 알차게 즐길 수 있도록 힘쓰겠습니다</p>
                <div className="localt_rotate">
                  <Logo id="team_logo" />
                  <Name id="team_name" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamTitle;
