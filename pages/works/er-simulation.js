import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LondonGeo from '/public/images/LondonGeo.png';
import LondonNetwork from '/public/images/LondonNetwork.png';
import LondonBridges from'/public/images/LondonBridges.png';
import Sim1 from '/public/images/Sim1.png';
import Sim2 from '/public/images/Sim2.png';
import Sim3 from '/public/images/Sim3.png';
import Sim4 from '/public/images/Sim4.png';
import Sim5 from '/public/images/Sim5.png';
import Sim6 from '/public/images/Sim6.png';

const Title = ({section, color}) => <div className="mt-5 mb-7 text-center flex-grow-0"><h1 className={color}> {section} </h1></div>

export default function ERsim() {
    return (
        <div className=''>
            <Head>
                <title>NHS - Sho Hihara</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="min-h-full px-8 lg:mx-24 relative bg-[#EDFF21] text-black z-0">
                <div className='px-8 justify-between flex relative'>
                    <div className='h-full w-1/12  bg-[#005EB8] absolute inset-y-0 -left-8 '></div>
                    <div className='h-full w-1/12  bg-[#00A499] absolute inset-y-0 -left-1 '></div>
                    <div className='h-full w-1/12 bg-[#005EB8] absolute inset-y-0 -right-8'></div>
                    <div className='h-full w-1/12 bg-[#00A499] absolute inset-y-0 -right-1'></div>

                    <div className='h-full flex-grow relative'>
                        <Title section="London: Emergency response simulation" />

                        <div className="md:w-4/6 lg:w-1/2 md:ml-32 lg:ml-48 mt-10 lg:mt-16 left-2 ">

                            <h3><em>
                                Aim: <br /> Optimizing emergency medical response time in central London area  <br /> 
                                #simulation #network #optimization
                            </em></h3>
                            <br />

                            <p>
                                Using dataset obtained from the <a href='https://movement.uber.com/' className="hover:text-[#00A499]" target="_blank">Uber Movement database</a>, I constructed a network representation of the central London area. Each node within the network represents a local region, and the edges contain the information of average travel time between each node as edge weights.
                            </p>

                            <br />
                            <div className='lg:flex lg:flex-row justify-start items-center'>

                                <div className="lg:w-4/6 2xl:w-1/2">
                                    <Image 
                                        className = "rounded-full object-cover h-full w-full" 
                                        src = {LondonGeo} 
                                        alt= "London regions, visualized" />
                                </div>
                                <div className="lg:w-4/6 2xl:w-1/2">
                                    <Image 
                                        className = "object-cover h-full w-full" 
                                        src = {LondonNetwork}
                                        alt= "Regions encoded as a network" />
                                </div>

                            </div>
                            <br />
                            
                            <p>
                                Medical emergency events were probabilistically generated across all nodes, with higher crime neighborhoods having a higher probability of such emergencies happening. 
                                The crime rate data was obtained from the <a href='https://www.met.police.uk/sd/stats-and-data/met/crime-data-dashboard/' className="hover:text-[#00A499]" target="_blank">London Metropolitan Police database</a>.
                                Reported crime is not necessarily a direct cause of medical emergencies, nor all medical emergencies arise from reported crime. 
                                However, it was assumed as an approximate indicator of the probability of ambulance request in each node, due to the difficulty of obtaining datasets directly logging ambulance requests. 
                            </p>
                            <br />
                            <p>
                                Using the travel time data from Q1/20, a simulation was run 300 times, each with 1000 total medical emergencies. 
                                The ambulance velocity was controlled at 20 km/h.(±2σ). This is the controlled set of simulations.
                            </p>

                            <br />
                            <Image src = {Sim1} />
                            <br />

                            <p>
                                I first compared the effect of changing average ambulance speed on response time.
                                Intuitively enough, the response time improves with higher average ambulance speed. 
                                This can be achieved in several ways; such as allowing the ambulance to excess local speed limits and/or skip red lights as appropriate.
                            </p>
                            
                            <br />
                            <Image src = {Sim2} />
                            <br />

                            <p>
                                I was interested in what other factors additionally influenced response times. 
                                I decided to also simulate the effect of 8 Thames bridges closing down separately. 
                                This was done by removing the corresponding edges in the network.
                            </p>

                            <br />
                            <Image src = {LondonBridges} 
                            alt= "The 7 London bridges" />
                            <br />

                            <p>Closing down Lambeth bridge had the most significant slowdown effect on ambulance response (±2σ).</p>
                            
                            <br />
                            <Image src={Sim3} />
                            <br />

                            <p>
                                At this point, I wanted to explore how to most optimally place additional hospitals within central London to improve the overall emergency response time in the area. 
                                I examined some of the worst-responded nodes in the default simulation to identify the particularly vulnerable and inaccessible neighborhoods. 
                                Once I had identified them, I ran new simulations with a hypothetical placement of one additional hospital in a node belonging to such a neighborhood.
                            </p>

                            <br />
                            <Image src={Sim4} />
                            <br />

                            <p>
                                For example, adding a hospital in node 922 yielded approximately 30 seconds of expected improvement per response overall; 
                                in a matter of life or death, this improvement can save or kill a life. 
                                The comparison below shows us that three strategic additional hospitals will significantly improves the pain regions in the northeast and southwest.  
                            </p>

                            <br />
                            <Image src={Sim5} 
                            alt= "Emergency response time, per region node."/>
                            <Image src={Sim6} 
                            alt= "Warmer colors indicate slower response, colder colors faster."/>
                            <br />

                        </div>
                        <Footer />
                    </div>

                </div>
            </div>
            
        </div>
    )
}
