import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import { stepOne } from "./index.js";
import { useForm } from "react-hook-form";
import privacy from "../../../assets/pdf/polityka_prywatnosci_findao.pdf";
import regulations from "../../../assets/pdf/regulamin_findao.pdf";

const Form = () => {
  const border =
    "relative border-2 border-cream rounded-2xl px-[18px] py-[13.5px] focus outline-none w-full focus:border-blue focus:ring-2 focus:ring-sky";
  const label =
    "absolute bg-white px-[7px] left-[15px] -translate-y-1/2 rounded-xl";
  const questionMark =
    "bg-cream rounded-full h-[20px] w-[20px] hidden sm:block absolute right-[28px] translate-x-1/2 bottom-[50%] translate-y-1/2";
  const speechBuble =
    "absolute w-[204px] text-[12px] text-white text-center bg-grey rounded-md pt-[4px] pb-[8px] px-[8px] right-[28px] translate-x-1/2 bottom-[45px]";
  const icon =
    "absolute bottom-[33.3px] right-[28px] translate-x-1/2 text-grey";
  const gap = "flex gap-[9px]";
  const input = "border-[2px] border-cream rounded-md h-[18px] w-[18px]";
  const href = "text-blue hover:text-grayish duration-300";

  const [isHovered, setHovered] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectAll = watch("selectAll");
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="w-full sm:w-[600px] mx-auto">
      <div>
        <div className="shadow-xl rounded-xl mt-[36px] mb-[40px] sm:mb-[54px] py-[54px] px-[6%]">
          <div className="flex flex-col text-[18px] gap-[18px]">
            {stepOne.map((stepOne) => (
              <div key={stepOne.id} className="relative z-0">
                <div className={`${label} z-10`}>
                  <label className="text-grayish text-[14px]">
                    {stepOne.text}
                  </label>
                </div>
                <input
                  type="tel"
                  placeholder={stepOne.placeholder}
                  className={`${border}`}
                  {...register("data", { required: true })}
                  style={
                    errors.data && {
                      border: "1px solid red",
                      boxShadow: "none",
                    }
                  }
                />
                {errors.data && (
                  <span className="text-red text-[12px]">
                    {stepOne.message}
                  </span>
                )}
                <div
                  className={`${questionMark}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={
                    errors.data && {
                      bottom: "65%",
                    }
                  }
                >
                  <p className="text-[12px] text-grayish grid place-content-center">
                    ?
                  </p>
                </div>
                {isHovered && (
                  <div>
                    <div className={`${speechBuble}`}>{stepOne.speech}</div>
                    <AiFillCaretDown className={`${icon}`} />
                  </div>
                )}
              </div>
            ))}
            {/* checkbox  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-[4.5px] text-[13px] text-grayish">
                <div className={`${gap}`}>
                  <input
                    type="checkbox"
                    value="all"
                    className={`${input}`}
                    {...register("selectAll")}
                  />
                  <label className="font-bold">
                    Akceptuję wszystkie zgody i oświadczenia
                  </label>
                </div>
                <div className={`${gap}`}>
                  <input
                    type="checkbox"
                    value="privacy"
                    className={`${input}`}
                    checked={selectAll}
                    {...register("accepts", {
                      required: { value: true, message: "Nie wyrażono zgody" },
                    })}
                  />

                  <label>
                    {errors.accepts && (
                      <span className="text-red mr-[5px]">
                        {errors.accepts.message}
                      </span>
                    )}
                    Potwierdzam, że zapoznałem się{" "}
                    <a
                      href={regulations}
                      className={`${href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Regulaminem{" "}
                    </a>{" "}
                    oraz{" "}
                    <a
                      href={privacy}
                      className={`${href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Polityką prywatności{" "}
                    </a>
                    YOUMONEY oraz akceptuję ich treść.
                  </label>
                </div>
                <div className={`${gap}`}>
                  <input
                    type="checkbox"
                    value="information"
                    className={`${input}`}
                    checked={selectAll}
                    {...register("accepts", {
                      required: { value: true, message: "Nie wyrażono zgody" },
                    })}
                  />

                  <label>
                    {errors.accepts && (
                      <span className="text-red mr-[5px]">
                        {errors.accepts.message}
                      </span>
                    )}
                    Chcę dostawać od Youmoney.pl i partnerów najnowsze i
                    dopasowane do moich potrzeb informacje o produktach i
                    usługach.{" "}
                    {toggle === false ? (
                      <span onClick={handleToggle} className="cursor-pointer">
                        [ROZWIŃ]
                      </span>
                    ) : (
                      <div onClick={handleToggle} className="grid gap-[4px]">
                        <span className="cursor-pointer">[ZWIŃ]</span>
                        <div className="grid gap-[4px]">
                          <p>
                            Wyrażam zgodę na przesyłanie przez Findao sp. z o.o.
                            informacji handlowych dotyczących produktów lub
                            usług własnych w formie:
                          </p>
                          <div>
                            <input type="checkbox" className={`${input}`} />{" "}
                            <label>zaznacz wszystkie</label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${input}`}
                              {...register("accepts", {
                                required: {
                                  value: true,
                                  message: "Nie wyrażono zgody",
                                },
                              })}
                            />

                            <label>
                              {errors.accepts && (
                                <span className="text-red mr-[5px]">
                                  {errors.accepts.message}
                                </span>
                              )}
                              wiadomości na mój adres email wskazany w
                              formularzu kontaktowym
                            </label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${input}`}
                              {...register("accepts", {
                                required: {
                                  value: true,
                                  message: "Nie wyrażono zgody",
                                },
                              })}
                            />

                            <label>
                              {errors.accepts && (
                                <span className="text-red mr-[5px]">
                                  {errors.accepts.message}
                                </span>
                              )}
                              wiadomości SMS na mój numer telefonu wskazany w
                              formularzu kontaktowym
                            </label>
                          </div>
                        </div>
                        <div className="grid gap-[4px]">
                          <p>
                            Wyrażam zgodę na przesyłanie przez Findao sp. z o.o.
                            informacji handlowych dotyczących produktów lub
                            usług banków i firm pożyczkowych wskazanych pod TYM
                            adresem w formie:
                          </p>
                          <div>
                            <input type="checkbox" className={`${input}`} />{" "}
                            <label>zaznacz wszystkie</label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${input}`}
                              {...register("accepts", {
                                required: {
                                  value: true,
                                  message: "Nie wyrażono zgody",
                                },
                              })}
                            />

                            <label>
                              {errors.accepts && (
                                <span className="text-red mr-[5px]">
                                  {errors.accepts.message}
                                </span>
                              )}
                              wiadomości na mój adres email wskazany w
                              formularzu kontaktowym
                            </label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${input}`}
                              {...register("accepts", {
                                required: {
                                  value: true,
                                  message: "Nie wyrażono zgody",
                                },
                              })}
                            />

                            <label>
                              {errors.accepts && (
                                <span className="text-red mr-[5px]">
                                  {errors.accepts.message}
                                </span>
                              )}
                              wiadomości głosowych na mój numer telefonu
                              wskazany w formularzu kontaktowym.
                            </label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${input}`}
                              {...register("accepts", {
                                required: {
                                  value: true,
                                  message: "Nie wyrażono zgody",
                                },
                              })}
                            />

                            <label>
                              {errors.accepts && (
                                <span className="text-red mr-[5px]">
                                  {errors.accepts.message}
                                </span>
                              )}
                              wiadomości SMS na mój numer telefonu wskazany w
                              formularzu kontaktowym
                            </label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${input}`}
                              {...register("accepts", {
                                required: {
                                  value: true,
                                  message: "Nie wyrażono zgody",
                                },
                              })}
                            />

                            <label>
                              {errors.accepts && (
                                <span className="text-red mr-[5px]">
                                  {errors.accepts.message}
                                </span>
                              )}
                              połączeń telefonicznych na mój numer telefonu
                              wskazany w formularzu kontaktowym.
                            </label>
                          </div>
                        </div>
                        <div>
                          <p className="text-[12px] mt-[10px]">
                            W każdej chwili przysługuje Ci prawo cofnięcia
                            każdej zgody wyrażonej dobrowolnie. <br />{" "}
                            Administratorem Twoich danych osobowych jest Findao
                            sp. z o.o. Kontakt z administratorem możliwy jest
                            drogą mailową na adres iod@findao.pl. Twoje dane
                            osobowe będą przetwarzane celu świadczenia usług
                            drogą elektroniczną w ramach konta użytkownika w
                            serwisie Youmoney.pl oraz w granicach udzielonych
                            zgód, do celów marketingu bezpośredniego.
                          </p>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
              </div>
              <div className=" ">
                <a href="/step2">
                  <button
                    type="submit"
                    value="submit"
                    className="text-white text-[18px] font-bold py-[13.5px] bg-blue w-full mt-[20px] rounded-2xl hover:bg-darkGrey duration-300"
                  >
                    Dalej
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
