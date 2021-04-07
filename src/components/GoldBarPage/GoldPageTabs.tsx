import React from "react";
import { BccTypography, BccTabs, BccTab } from "../BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "46px 48px 64px",
        boxSizing: "border-box",
      },
      tabs: {
        marginTop: 40,
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#00A755",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "46px 48px 64px",
        boxSizing: "border-box",
      },
      tabs: {
        marginTop: 40,
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#00A755",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      innerContainer: {
        padding: 20,
      },
    },
    tabDoc: {
        display: 'flex',
        alignItems: 'center',
        width: 'max-content',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: '#F3F3F3',
        borderRadius: 8,
        padding: '14px 60px',
        '&:hover': {
            backgroundColor: '#e2e2e2'
        },
        '& > img': {
            display: 'inline-block',
            marginRight: 24
        }
    },
    tabsTable: {
        '& > div': {
            padding: '24px 0',
            borderBottom: '1px solid #F3F3F3'
        },
        '& > div:nth-child(2n + 1)': {
            width: '20%',
            paddingRight: 24,
        },
        '& > div:nth-child(2n)': {
            width: '80%',
        }
    },
    tabsDoc: {
        '& > div': {
            borderBottom: 'none'
        },
    },
  })
);

const GoldPageTabs = (props: {infoRef: any}) => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);

  const openFile = () => {
    window.open(process.env.PUBLIC_URL + '/dogovor.docx', "_blank")
  }

  return (
    <div
      className={classes.container}
      style={{ backgroundColor: "white" }}
      ref={props.infoRef}
    >
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block mb="30px">
            Дополнительно
        </BccTypography>
        <BccTabs
            value={index}
            onChange={(e: any, i: number) => {
                console.log(e)
                setIndex(i);
            }}
            className={classes.tab}
        >
            <BccTab key="0" label="Детали продукта" />
            <BccTab key="1" label="Часто задаваемые вопросы" />
            <BccTab key="2" label="Документы"/>
        </BccTabs>
        <div className={classes.tabs}>
        {
            index === 0 ? (
                <Grid container className={classes.tabsTable}>
                    <Grid item><BccTypography type="p2" color="#80868C">Детали</BccTypography></Grid>
                    <Grid item><BccTypography type="p2l">Упаковка, как и сами слитки, содержит защитные элементы и представляет собой сертификат качества актива. Целостность упаковки является залогом сохранения стоимости слитков. Рекомендуется бережное хранение. Упаковку не вскрывать!</BccTypography></Grid>
                    <Grid item><BccTypography type="p2" color="#80868C">Хранение  слитков</BccTypography></Grid>
                    <Grid item><BccTypography type="p2l">Дополнительная услуга для Клиентов - хранение слитков. Услуга по хранению слитков будет предоставляться в рамках оказания сейфовых услуг.</BccTypography></Grid>
                    <Grid item><BccTypography type="p2" color="#80868C">Приобретение слитков</BccTypography></Grid>
                    <Grid item><BccTypography type="p2l">Приобрести золотые слитки клиенты могут во всех отделениях Банка</BccTypography></Grid>
                    <Grid item><BccTypography type="p2" color="#80868C">Курс покупки и продажи</BccTypography></Grid>
                    <Grid item><BccTypography type="p2l">Курс продажи и покупки золотых слитков устанавливаются Банком каждый день.</BccTypography></Grid>
                    <Grid item><BccTypography type="p2" color="#80868C">Обратный выкуп</BccTypography></Grid>
                    <Grid item><BccTypography type="p2l">В Центральных отделениях</BccTypography></Grid>
                </Grid>
            ) : index === 1 ? (
                <Grid container className={classes.tabsTable}>
                    <Grid item><BccTypography type="p2" color="#80868C">Кто может оформить золотые слитки?</BccTypography></Grid>
                    <Grid item><BccTypography type="p2l">Документ, удостоверяющий личность содержащий ИИН</BccTypography></Grid>
                    <Grid item><BccTypography type="p2" color="#80868C">Зачем приобретать Золотые слитки?</BccTypography></Grid>
                    <Grid item><BccTypography type="p2l">ПОДАРОК - солидный и оригинальный подарок на день рождения, свадьбу и другие праздничные и семейные торжества.<br/>
                        ИНВЕСТИЦИИ - надежное инвестиционное решение.  Цена на золото в 2020 году обновила свой исторический максимум и достигла $2061,50 за тройскую унцию 7 августа 2020 года, продемонстрировав рост на 36% с начала года.<br/>
                        СБЕРЕЖЕНИЯ - приходит время когда нужно задуматься не только о своем будущем, но и о будущем своей семьи. Золотые слитки от Национального Банка - это надежные сбережения для вашего будущего и будущего вашей семьи.<br/>
                        ИЗДЕЛИЕ - Золотые слитки НБРК изготовлены из чистого золота 999,9 пробы, что дает возможность переплавить слитки в нужное  изделия для себя или ваших близких, обратившись к услугам ювелира.</BccTypography></Grid>
                    <Grid item><BccTypography type="p2" color="#80868C">В каких отделениях Банка клиент может купить Золотые слитки?</BccTypography></Grid>
                    <Grid item><BccTypography type="p2l">Во всех отделениях Банка</BccTypography></Grid>
                    <Grid item><BccTypography type="p2" color="#80868C">В каких отделениях Банка клиент может продать Золотые слитки на обратный выкуп?</BccTypography></Grid>
                    <Grid item><BccTypography type="p2l">В Центральных отделениях Банка</BccTypography></Grid>
                    <Grid item><BccTypography type="p2" color="#80868C">Где Клиент может узнать цены покупки и продажи Золотых слитков?</BccTypography></Grid>
                    <Grid item><BccTypography type="p2l">На внешнем сайте в разделе курсы валют.<br/>
                        На LED дисплеях , в отделениях Банка.<br/>
                        В колл центре по номеру 505.<br/>
                        BCC.KZ</BccTypography></Grid>
                    <Grid item><BccTypography type="p2" color="#80868C">Возникает ли у клиента налог от реализации золотых слитков?</BccTypography></Grid>
                    <Grid item><BccTypography type="p2l">В случае если клиент-физическое лицо реализует золотые слитки с приростом, то в таком случае, у физического лица возникает налогооблагаемый доход.<br/>
                        Прирост это - положительная разница между стоимостью реализации и стоимостью его приобретения.<br/>
                        По такому доходу физическое лицо самостоятельно оплачивает налоги согласно налогового Кодекса РК.</BccTypography></Grid>
                    <Grid item><BccTypography type="p2" color="#80868C">Может ли клиент вывезти за рубеж Золотые слитки?</BccTypography></Grid>
                    <Grid item><BccTypography type="p2l">Может.<br/>
                        Юридические и Физические лица в обязательном порядке производят таможенное декларирование #золотых слитков независимо от размера и стоимости золотого слитка, за исключением вывоза золотых слитков в страны ЕАЭС.<br/>
                        Вывоз из Республики Казахстан с территории, которая не является составной частью таможенного территории Таможенного союза, аффинированного золота в слитках осуществляется с таможенным законодательством Таможенного союза и (или) республики Казахстан.<br/>
                        В разных странах свои правила ввоза. Данную информацию желательно знать заблаговременно для исключения проблем с законодательством иностранного государства.
                        </BccTypography>
                    </Grid>
                </Grid>
            ) : (
                <>
                    <Grid container className={`${classes.tabsTable} ${classes.tabsDoc}`}>
                        <Grid item><BccTypography type="p2" color="#80868C">Необходимые документы</BccTypography></Grid>
                        <Grid item><BccTypography type="p2l">Документ, удостоверяющий личность содержащий ИИН</BccTypography></Grid>
                    </Grid>
                    <div className={classes.tabDoc} onClick={() => openFile()}><img src={process.env.PUBLIC_URL + "/img/pdf-white.svg"} alt="pdf"/>Договор купли-продажи слитков</div>
                </>
            )
        }
        </div>
      </div>
    </div>
  );
};

export default GoldPageTabs;
