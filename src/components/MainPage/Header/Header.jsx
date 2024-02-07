import woman from "../../../assets/MainPage/bg/bg1.png";
import Application from "./Application";

const Header = () => {
  return (
    <section
      id="header"
      className="sm:pt-[50px] pb-[150px] sm:pb-[150px] relative px-[30px] w-full xs:w-[90%] xss:w-[80%] xsm:w-[70%] sm:w-full mx-auto sm:px-0"
    >
      <div className="sm:flex sm:justify-between">
        <div className="uppercase bold w-1/2 z-10 relative mt-[18px]">
          <p className="text-[32px] sm:text-[57.6px] text-grey">
            szybka <br /> pożyczka <br /> online
          </p>
          <p className="text-[27px] sm:text-[49px] underline text-blue -rotate-[7deg] absolute top-[130px] sm:top-[235px] left-[10px] sm:left-[15px] w-[200px] sm:w-[300px]">
            w 15 minut
          </p>
        </div>

        {/* application  */}
        <div className="sm:w-1/2 mt-[50px] z-10">
          <Application />
        </div>
      </div>
      <div className="z-0">
        <img
          className="absolute -top-[50px] sm:top-[70px] right-0 xs:right-[50px] sm:left-[5%] xmd:left-[10%] lg:left-[180px] h-[250px] sm:h-[663px]"
          src={woman}
          alt="Woman"
        />
      </div>
    </section>
  );
};

export default Header;
