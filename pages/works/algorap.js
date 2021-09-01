import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Algorap1 from '../../public/Algorap1.svg';
import Algorap2 from '../../public/Algorap2.png';
import Algorap3 from '../../public/Algorap3.png';
import Algorap4 from '../../public/Algorap4.png';
import Algorap5 from '../../public/Algorap5.svg';
import Algorap6_1 from '../../public/Algorap6_1.png';
import Algorap6_2 from '../../public/Algorap6_2.png';
import Algorap6_3 from '../../public/Algorap6_3.png';

const Title = ({section, color}) => <div class="mt-5 mb-7 text-center flex-grow-0"><h1 className={color}> {section} </h1></div>

export default function algorap() {
    return (
        <div className=''>
            <Head>
                <title>AlgoRap</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="min-h-full px-8 lg:mx-24 relative">
                <div className='px-8 justify-between flex relative'>

                    <div className='h-full flex-grow relative text-[#F8DCAD]'>
                        <Title section="AlgoRap" color="text-[#FE0000]" />

                        <div className="md:w-4/6 lg:w-1/2 md:ml-32 lg:ml-48 mt-10 lg:mt-16 left-2 ">

                            <p><em>
                                <h2>Aim: <br /> Computationally generate a rap album</h2>
                                #MachineLearning #NLP #Music
                            </em></p>
                            <br />

                            <p>
                                AlgoRap's songwriting process is divided into three major subtasks.
                                <ol className="p-2">
                                    <li className='list-disc ml-10'>assembling the lyrical training dataset</li>
                                    <li className='list-disc ml-10'>generating novel rap lyrics</li>
                                    <li className='list-disc ml-10'>generating the final audio</li>
                                </ol>
                                The final output is an asynchronized combination of these sub-components, which are original rap songs.
                            </p>
                            <br />
                            <Image src = {Algorap1} />
                            <br />
                            <p >
                                <h2>Generating Lyrics</h2>
                            </p>
                            <p>
                                To generate rap verses, AlgoRap finetunes OpenAI’s GPT-2, an unsupervised, general-purpose generative language model based on Transformer architecture. 
                                The approach is called the PPLM (Plug-and-Play Language Model), which combines a pretrained language model with an attribute model to fine-tunes the final output to the style of our choice - in this case, rap lyrics.
                            </p>
                            <br />
                            <Image src = {Algorap2} />
                            <br />
                            <p>
                                To fine-tune the GPT-2 for customized output, it requires a modest-sized (&lt;10MB) dataset of existing rap lyrics. 
                                To collect this amount of lyrical data, I used a combination of Spotify and Genius APIs to scrape the lyrics data from online databases. 
                                Spotify is a music streaming service with millions of songs on its catalogue, and Genius is a digital media company whose website essentially acts a lyrical database.
                                One of Spotify’s popular features are the genre-categorized playlists. 
                                Below is an example of some of Spotify’s featured hip hop playlists. 
                                Songs that are in at least one of these Spotify official hip hop playlists were chosen as the lyrical input data for AlgoRap.
                            </p>
                            <br />
                            <Image src = {Algorap3} className="rounded"/>
                            <br />
                            
                            <p> 
                                With an input of any unique Spotify playlist link, AlgoRap collects the metadata of all songs in that playlist, which is then parsed and passed onto a custom web crawler.
                                The crawler then iteratively searches through the Genius database for each song and retrieves their lyrics. 
                            </p>
                            <br />
                            <p>
                                The raw lyrical data from Genius database includes non-lyrical annotations such as the names of MCs who rap their respective verses, or indicators for instrumental segments of the song. 
                                These noises that are irrelevant to the actual lyrical content are stripped off from the dataset.
                            </p>
                            <br />
                            <p>
                                Then, once I have tokenized the cleaned lyrics dataset, I separated them the into a training set and a validation set. 
                                At this stage, the training data is ready to be fed into GPT-2. 
                                Using the set of optimal hyperparameters found in a preliminary hyperparameter search, I fed training set into the GPT-2 language model.
                            </p>
                            <br />
                            <Image src={Algorap4}/>
                            <br />
                            <p>
                            The model produces good outputs now and then, such as the following example with consistent end rhymes: 
                            <ul className="text-center p-2">
                                <li>My verses are criminal</li>
                                <li>Efforts are minimal</li>
                                <li>Attack is subliminal</li>
                                <li>We’ll put you in a critical</li>
                                <li>When we invisible</li>
                            </ul>
                            However, like any rapper, AlgoRap also flops. 
                            Sometimes, it gets stuck repeating the same verse or word over and over again. 
                            One such failure repeated the same five words 42 times:
                            <ul className="text-center p-2">
                                <li>What is a magic ring?</li>
                                <li>What is a magic ring?</li>
                                <li>What is a magic ring?</li>
                                <li>What is a magic ring?</li>
                                <li>What is a magic ring?</li>
                            </ul>
                            See <a href='https://drive.google.com/drive/folders/13w_n7UNzEaPrk6yLpNp_0GsYC9sB8-I7?usp=sharing'>here</a> for more examples of the generated lyrics. 
                            </p>
                            <br />
                            <p >
                                <h2>From words to songs</h2>
                            </p>
                            <p>
                                Music data is extremely high dimensional. At any given point of a song, which is of arbitrary finite length, 
                                there are 48 different pitches (and that is by limiting ourselves within a four octave range of the chromatic scale) that can be played by a single piano.
                                With rest and release, 50. Even if we assume tempos didn’t exist, and 1/16th is the shortest note one can play, mere two measures of this song would have 5032 possibilities.
                                Note that this is already limited within the western chromatic scale of expression. 
                                So attempting to construct a creative song entirely randomly is nowhere near as fruitful as looking for a speck of gold in the Sahara. 
                                The challenge, therefore, is to limit the search of this “musical space” from any possible combinations of notes, to sounds that are nice for us to hear.
                            </p>
                            <br />
                            <p> 
                                Latent space is the abstract, multi-dimensional vector space within which the vectors representing some data are found. 
                                We cannot directly interpret the feature values in this latent space, but these values encode meaningful representations of externally observed qualities.
                                As a result, it provides a spatial representation of the variation of data points, where points that have similar qualities are located nearby in the latent space. 
                                Mapping music data onto a latent space helps quantitatively exclude unrealistic musical instances.
                            </p>
                            <br />
                            <p>
                                While mapping unlabeled data onto an abstract space that conveniently captures the qualities which humans look for is not a trivial process, 
                                Roberts et. al (2018) discusses a modified Variational AutoEncoder (VAE) method, showing improved results in capturing the long-term structures of sequential data, which I use. 
                            </p>
                            <br />
                            <Image src={Algorap5}/>
                            <br />
                            <p>
                                The above illustration shows the three-step encoding process, compressing the audio data by 8x, 32x, and 128x. 
                                At each layer, more of the audio detail gets lost and sounds grainy; only retaining the most important qualities of the audio data. 
                                The final level models the long-term dependencies of the sequence, sampling the high-level semantics such as the melody structure; 
                                while the lower levels respectively model the local qualities such as timbre (which, to human ears, would appear as an improvement of audio quality). 
                            </p>
                            <br />
                            <p>
                                The encoding architecture used was Child et. al (2019)’s Sparse Transformers, pre-trained on 2 million parameters (Dhariwal et. al, 2020). 
                                The model was then conditioned to audio files of hip hop songs, with the aim to reduce the output entropy and generate audio that better expresses the qualities specific to hip-hop. 
                                The generated lyrics from earlier were provided to the model as a context prompt to generate the final latent representation.
                                Finally, during the decoding, it generates a novel compressed representation conditioned on the provided lyrics, which is upsampled back up to raw audio.
                            </p>
                            <p className="text-center p-3 text-[#60A5FA]">
                                <a href="https://drive.google.com/file/d/1rGHbY77GsPKjaz7iGXGG8GcbK6YgHfCs/view?usp=sharing">Top layer</a>(most coarse) &nbsp;&nbsp;&nbsp;
                                <a href="https://drive.google.com/file/d/1dYaSYmoiFRly4UHiXboThcEkR6AG794D/view?usp=sharing">Middle layer</a> &nbsp;&nbsp;&nbsp;
                                <a href="https://drive.google.com/file/d/1zCJPl7INAitD8bbsQG0vylZ3Vnw-Y5gY/view?usp=sharing">Bottom layer</a>(least coarse)
                            </p>
                            <p>
                                This is an example output, at each step of the upsampling process. 
                                This can also be visually confirmed in the chromagram below, as the audio pitches become more defined each layer.
                            </p>
                            <br />
                            <div className="w-4/6 mx-auto justify-center">
                                <Image src={Algorap6_1}/>
                                <Image src={Algorap6_2}/>
                                <Image src={Algorap6_3}/>
                            </div>
                            <br />
                            <p>
                                I curated a collection of eight songs generated by AlgoRap into an album. 
                                It can be accessed via this <b><a href="https://drive.google.com/drive/folders/14UNyi2h6KXJwaVIbGr9zz5nVQomnJtae?usp=sharing">ALBUM LINK</a></b>. 
                                Enjoy listening to one of the earliest prototypes of fully AI-composed and performed rap.
                            </p>

                        </div>
                        <Footer />

                    </div>

                </div>
            </div>

        </div>
    )
}
