
import Banner from "../../Components/Home/Banner/Banner"
import Featured_Premium from "../../Components/Home/Featured_Premium/Featured_Premium"
import Recently_Join_Members from "../../Components/Home/Recently_Join_Members/Recently_Join_Members"
import Safety_and_Privacy from "../../Components/Home/Safety_and_Privacy/Safety_and_Privacy"
import Success_Story from "../../Components/Home/Success_Story/Success_Story"
import Testimonials from "../../Components/Home/Testimonials/Testimonials"
import Why_it_Works from "../../Components/Home/Why_it_Works/Why_it_Works"
import FAQ from "../../Components/Home/FAQ/FAQ"
import Navbar from "../../shared/Navbar"

// Background 
import BgFeatures from "../../assets/BG/Bg-Featured.png"


// const fetchJoinMembers = async ()=>{
//     const res = await fetch("")
// }

const Home = () => {
    return (
        <section id="home">
            {/* title means browser heading replace helmet because react 19 not using helmet using "Just title"  */}
            <title>Home - Our Matrimony </title>
            <div>
                {/* Navbar  */}
                <Navbar></Navbar>

                {/* Banner  */}
                <Banner></Banner>

                <div className="max-w-6xl mx-auto">
                    <section className="bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${BgFeatures})` }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div id="Features_Members">
                            {/* Featured Premium Profiles  */}
                            <Featured_Premium></Featured_Premium>

                            {/* Recently_Join_Members  */}
                            <Recently_Join_Members></Recently_Join_Members>
                        </div>
                    </section>

                    {/* Why it Works  */}
                    <Why_it_Works></Why_it_Works>

                    {/* Safety and Privacy  */}
                    <Safety_and_Privacy></Safety_and_Privacy>

                    {/* Success-Story  */}
                    <Success_Story></Success_Story>

                    {/* Testimonials  */}
                    <Testimonials></Testimonials>

                    {/* FAQ means: Frequently Asked Questions  */}
                    <FAQ></FAQ>
                </div>
            </div>
        </section>
    );
};

export default Home;