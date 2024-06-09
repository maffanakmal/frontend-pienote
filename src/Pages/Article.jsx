import '../assets/Css/LandingPage.css';
import FooterUserComp from '../components/FooterUserComp';
import ProfileNavbarComp from '../components/ProfileNavbarComp';
import ArticleContent from '../Fragments/News-page/ArticleContent';
import ArticleCard from '../Fragments/News-page/ArticleCard';

const Article = () => {
    return (
        <>
            <ProfileNavbarComp/>
            <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <ArticleContent/>
            </div>
            <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <ArticleCard/>
            </div>
            <FooterUserComp />
        </>
    );
};

export default Article;
