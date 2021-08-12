import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Nav from '../components/Nav'
import profilePic from '../public/profilePic.png'

const Title = ({section, color}) => <div class="mt-5 mb-7 text-center flex-grow-0"><h1 className={color}> {section} </h1></div>

export default function about() {
    return (
        <div>
            <Head>
                <title>ABXUT</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Title section="about" color="text-[#01CDFF]"/>

            {/* profile pic */}
            <div className="max-h-32 lg:max-h-72 flex justify-center">
                <div className="w-32 lg:w-72 mx-auto overflow-hidden">
                    <Image 
                        src = {profilePic}
                        className="lg:h-full shadow rounded align-middle border-none"
                    />
                </div>
            </div>

            {/*-- content - */}
            <div className="min-h-full p-8">
                <div className="max-w-4xl mx-auto space-y-32">

                    {/* intro */}
                    <section className="lg:flex items-start">
                            <div className="lg:w-4/5 mx-auto leading-snug space-y-5">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                            </div>
                    </section>
                    
                    {/* skills */}
                    <section className="lg:flex space-x-0 lg:space-x-10 items-start">
                        <div className="w-0 transform lg:rotate-270 lg:translate-y-10 lg:sticky top-72">
                            <h2>
                            Skills
                            </h2>
                        </div>
                        <div className="lg:w-full mx-auto leading-snug space-y-5">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                        </div>
                    </section>

                    {/* tools */}
                    <section className="lg:flex space-x-0 lg:space-x-10 items-start">
                        <div className="w-0 transform lg:rotate-270 lg:translate-y-10 lg:sticky top-72">
                            <h2>
                            Tools
                            </h2>
                        </div>
                        <div className="lg:w-full mx-auto leading-snug space-y-5">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                        </div>
                    </section>
                    
                    {/* education */}
                    <section className="lg:flex space-x-0 lg:space-x-10 items-start">
                        <div className="w-0 transform lg:rotate-270 lg:translate-y-24 lg:sticky top-72">
                            <h2>
                            Education
                            </h2>
                        </div>
                        <div className="lg:w-full mx-auto leading-snug space-y-5">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                        </div>
                    </section>
                    
                    {/* awards */}
                    <section className="lg:flex space-x-0 lg:space-x-10 items-start">
                        <div className="w-0 transform lg:rotate-270  lg:translate-y-16 lg:sticky top-72">
                            <h2>
                            Awards
                            </h2>
                        </div>
                        <div className="lg:w-full mx-auto leading-snug space-y-5">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                        </div>
                    </section>

                </div>
            </div> 

            {/* Lower menu + copyright */}
            <Footer />
        </div>
    )
}
