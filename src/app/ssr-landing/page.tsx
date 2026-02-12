import HeaderLanding from '@/components/landing/HeaderLanding';
import PrincipalContent from '@/components/landing/PrincipalContent';
import SecondaryContent from '@/components/landing/SecondaryContent';
import TopBanner from '@/components/landing/TopBanner';

//principal:#03363e
//secundario: #17494c
//terciario: #e4f0d3

const LandingPage = () => {
    return (
        <div>
            <TopBanner />
            <HeaderLanding />
            <PrincipalContent />
            <SecondaryContent />
        </div>
    );
};

export default LandingPage;