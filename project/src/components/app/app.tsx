import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  promoTitle: string;
  promoGenre: string;
  promoYear: number;
}

function App({promoTitle, promoGenre, promoYear}: AppProps): JSX.Element {
  return (
    <MainPage
      promoTitle = {promoTitle}
      promoGenre = {promoGenre}
      promoYear = {promoYear}
    />);
}

export default App;
