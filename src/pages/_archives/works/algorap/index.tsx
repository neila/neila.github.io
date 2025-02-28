import Head from 'next/head';
import Image from 'next/image';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import Algorap1 from 'public/images/algorap/Algorap1.svg';
import Algorap2 from 'public/images/algorap/Algorap2.png';
import Algorap3 from 'public/images/algorap/Algorap3.png';
import Algorap4 from 'public/images/algorap/Algorap4.png';
import Algorap5 from 'public/images/algorap/Algorap5.svg';
import Algorap6_1 from 'public/images/algorap/Algorap6_1.png';
import Algorap6_2 from 'public/images/algorap/Algorap6_2.png';
import Algorap6_3 from 'public/images/algorap/Algorap6_3.png';

const Title = (params: { section: string; color: string }) => (
  <div className="mt-5 mb-7 flex-grow-0 text-center">
    <h1 className={params.color}> {params.section} </h1>
  </div>
);

export default function algorap() {
  return (
    <div className="">
      <Head>
        <title>AlgoRap - SHØ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="relative min-h-full px-8 desktop:mx-24">
        <div className="relative flex justify-between px-2">
          <div className="relative h-full flex-grow text-[#F8DCAD]">
            <Title section="AlgoRap" color="text-[#FE0000]" />

            <div className="left-2 mt-10 desktop:ml-32 desktop:w-4/6 bigmonitor:ml-48 bigmonitor:mt-16 bigmonitor:w-1/2">
              <h3>
                <em>
                  Aim: <br /> Computationally generate a rap album <br />
                  #MachineLearning #NLP #Music
                </em>
              </h3>
              <br />

              <p>
                AlgoRap&apos;s songwriting process is divided into three major
                subtasks.
              </p>
              <ol className="p-2">
                <li className="ml-10 list-disc">
                  assembling the lyrical training dataset
                </li>
                <li className="ml-10 list-disc">generating novel rap lyrics</li>
                <li className="ml-10 list-disc">generating the final audio</li>
              </ol>
              <p>
                The final output is an asynchronized combination of these
                sub-components, which are original rap songs.
              </p>
              <br />
              <Image
                src={Algorap1}
                alt=""
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <br />
              <h2>Generating Lyrics</h2>
              <p>
                To generate rap verses, AlgoRap finetunes OpenAI&apos;s GPT-2,
                an unsupervised, general-purpose generative language model based
                on Transformer architecture. The approach is called the PPLM
                (Plug-and-Play Language Model), which combines a pretrained
                language model with an attribute model to fine-tunes the final
                output to the style of our choice - in this case, rap lyrics.
              </p>
              <br />
              <Image
                src={Algorap2}
                alt=""
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <br />
              <p>
                To fine-tune the GPT-2 for customized output, it requires a
                modest-sized (&lt;10MB) dataset of existing rap lyrics. To
                collect this amount of lyrical data, I used a combination of
                Spotify and Genius APIs to scrape the lyrics data from online
                databases. Spotify is a music streaming service with millions of
                songs on its catalogue, and Genius is a digital media company
                whose website essentially acts a lyrical database. One of
                Spotify&apos;s popular features are the genre-categorized
                playlists. Below is an example of some of Spotify&apos;s
                featured hip hop playlists. Songs that are in at least one of
                these Spotify official hip hop playlists were chosen as the
                lyrical input data for AlgoRap.
              </p>
              <br />
              <Image
                src={Algorap3}
                className="rounded"
                alt=""
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <br />

              <p>
                With an input of any unique Spotify playlist link, AlgoRap
                collects the metadata of all songs in that playlist, which is
                then parsed and passed onto a custom web crawler. The crawler
                then iteratively searches through the Genius database for each
                song and retrieves their lyrics.
              </p>
              <br />
              <p>
                The raw lyrical data from Genius database includes non-lyrical
                annotations such as the names of MCs who rap their respective
                verses, or indicators for instrumental segments of the song.
                These noises that are irrelevant to the actual lyrical content
                are stripped off from the dataset.
              </p>
              <br />
              <p>
                Then, once I have tokenized the cleaned lyrics dataset, I
                separated them the into a training set and a validation set. At
                this stage, the training data is ready to be fed into GPT-2.
                Using the set of optimal hyperparameters found in a preliminary
                hyperparameter search, I fed training set into the GPT-2
                language model.
              </p>
              <br />
              <Image
                src={Algorap4}
                alt=""
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <br />
              <p>
                The model produces good outputs now and then, such as the
                following example with consistent end rhymes:
              </p>
              <ul className="p-2 text-center">
                <li>My verses are criminal</li>
                <li>Efforts are minimal</li>
                <li>Attack is subliminal</li>
                <li>We&apos;ll put you in a critical</li>
                <li>When we invisible</li>
              </ul>
              <p>
                However, like any rapper, AlgoRap also flops. Sometimes, it gets
                stuck repeating the same verse or word over and over again. One
                such failure repeated the same five words 42 times:
              </p>
              <ul className="p-2 text-center">
                <li>What is a magic ring?</li>
                <li>What is a magic ring?</li>
                <li>What is a magic ring?</li>
                <li>What is a magic ring?</li>
                <li>What is a magic ring?</li>
              </ul>
              <p>
                See{' '}
                <a
                  href="https://drive.google.com/drive/folders/13w_n7UNzEaPrk6yLpNp_0GsYC9sB8-I7?usp=sharing"
                  className="hover:text-[#FE0000]"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{' '}
                for more examples of the generated lyrics.
              </p>
              <br />
              <h2>From words to songs</h2>
              <p>
                Music data is extremely high dimensional. At any given point of
                a song, which is of arbitrary finite length, there are 48
                different pitches (and that is by limiting ourselves within a
                four octave range of the chromatic scale) that can be played by
                a single piano. With rest and release, 50. Even if we assume
                tempos didn&apos;t exist, and 1/16th is the shortest note one
                can play, mere two measures of this song would have 5032
                possibilities. Note that this is already limited within the
                western chromatic scale of expression. So attempting to
                construct a creative song entirely randomly is, at best, as
                fruitful as looking for a speck of gold in the Sahara. The
                challenge, therefore, is to limit the search of this “musical
                space” from any possible combinations of notes, to sounds that
                are nice for us to hear.
              </p>
              <br />
              <p>
                Latent space is the abstract, multi-dimensional vector space
                within which the vectors representing some data are found. We
                cannot directly interpret the feature values in this latent
                space, but these values encode meaningful representations of
                externally observed qualities. As a result, it provides a
                spatial representation of the variation of data points, where
                points that have similar qualities are located nearby in the
                latent space. Mapping music data onto a latent space helps
                quantitatively exclude unrealistic musical instances.
              </p>
              <br />
              <p>
                While mapping unlabeled data onto an abstract space that
                conveniently captures the qualities which humans look for is not
                a trivial process, Roberts et. al (2018) discusses a modified
                Variational AutoEncoder (VAE) method, showing improved results
                in capturing the long-term structures of sequential data, which
                I use.
              </p>
              <br />
              <Image
                src={Algorap5}
                alt=""
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <br />
              <p>
                The above illustration shows the three-step encoding process,
                compressing the audio data by 8x, 32x, and 128x. At each layer,
                more of the audio detail gets lost and sounds grainy; only
                retaining the most important qualities of the audio data. The
                final level models the long-term dependencies of the sequence,
                sampling the high-level semantics such as the melody structure;
                while the lower levels respectively model the local qualities
                such as timbre (which, to human ears, would appear as an
                improvement of audio quality).
              </p>
              <br />
              <p>
                The encoding architecture used was Child et. al (2019)&apos;s
                Sparse Transformers, pre-trained on 2 million parameters
                (Dhariwal et. al, 2020). The model was then conditioned to audio
                files of hip hop songs, with the aim to reduce the output
                entropy and generate audio that better expresses the qualities
                specific to hip-hop. The generated lyrics from earlier were
                provided to the model as a context prompt to generate the final
                latent representation. Finally, during the decoding, it
                generates a novel compressed representation conditioned on the
                provided lyrics, which is upsampled back up to raw audio.
              </p>
              <p className="p-3 text-center text-[#60A5FA]">
                <a
                  href="https://drive.google.com/file/d/1rGHbY77GsPKjaz7iGXGG8GcbK6YgHfCs/view?usp=sharing"
                  className="hover:text-[#FE0000]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Top layer (most coarse)
                </a>{' '}
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://drive.google.com/file/d/1dYaSYmoiFRly4UHiXboThcEkR6AG794D/view?usp=sharing"
                  className="hover:text-[#FE0000]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Middle layer
                </a>{' '}
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://drive.google.com/file/d/1zCJPl7INAitD8bbsQG0vylZ3Vnw-Y5gY/view?usp=sharing"
                  className="hover:text-[#FE0000]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bottom layer (least coarse)
                </a>
              </p>
              <p>
                This is an example output, at each step of the upsampling
                process. This can also be visually confirmed in the chromagram
                below, as the audio pitches become more defined each layer.
              </p>
              <br />
              <div className="mx-auto w-4/6 justify-center">
                <Image
                  src={Algorap6_1}
                  alt=""
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
                <Image
                  src={Algorap6_2}
                  alt=""
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
                <Image
                  src={Algorap6_3}
                  alt=""
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
              <br />
              <p>
                I curated a collection of eight songs generated by AlgoRap into
                an album. It can be accessed via this{' '}
                <b>
                  <a
                    href="https://drive.google.com/drive/folders/14UNyi2h6KXJwaVIbGr9zz5nVQomnJtae?usp=sharing"
                    className="text-[#FE0000]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ALBUM LINK
                  </a>
                </b>
                . Enjoy listening to one of the earliest prototypes of fully
                AI-composed and performed rap.
              </p>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
