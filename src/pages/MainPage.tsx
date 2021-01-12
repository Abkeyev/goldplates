import React from "react";
import {
  Slider,
  Tabs,
  HowTo,
  Card,
  HowToGet,
  MobileApp,
  CallUs,
  Footer,
} from "../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { animateScroll } from "react-scroll";

const useStyles = makeStyles((theme: Theme) => createStyles({}));
const MainPage = () => {
  const mobileRef: any = React.useRef(null);
  const scrollToMobileRef = () => {
    animateScroll.scrollTo(mobileRef.current.offsetTop);
  };
  return (
    <div className="main-page">
      <div className="container">
        <Slider
          steps={{
            title: "Социальная карта",
            desc: "Получайте пособия и иные выплаты из бюджета без проблем",
            img: "/img/bg.png",
            btnText: "Открыть карту",
          }}
        />
        <Tabs scrollToMobile={scrollToMobileRef} />
        <HowTo />
        <HowToGet />
        <Card />
        <MobileApp refProp={mobileRef} />
        <CallUs />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
