import TrendingGifs from "../../components/trendingGifs/TrendingGifs";
import PostedGifs from "../../components/postedGifs/PostedGifs";
import MenuBar from "../../components/menuBar/MenuBar";
import Header from '../../components/header/Header';

export default function MainPage() {

  return (
    <>
    <div className="main-page">
      <div className="main-page-content">
        <Header />
        <PostedGifs />
        <TrendingGifs />
      </div>
    </div>
    <MenuBar />
    </>
  );
}
