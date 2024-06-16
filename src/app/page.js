import Image from "next/image";
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function Home() {
  return (
    <main>
      <section id="title-section">
        <Image className="title-background" src="/radio-tower-3.jpg" alt="Radio Waves" objectFit="cover" fill={true} style={{ float: "left" }}/>
        <h1 className="title-text" >Radio Waves</h1>
        <h2 className="title-subtitle">An Overview of Radio, Modulation, and Their Applications</h2>
        <p className="title-byline">By Conrad, Albert, Anurag, and Daniel</p>
      </section>
      <section id="introduction-section">
        <div>Every second, massive amounts of information are being transferred all over the world. Much of this is done using radio waves, which don’t just send music to your car, but are used in all areas of telecommunications. This includes WiFi, cell service, and television broadcasting. Ultimately, nearly all of the information sent and received by a phone or computer is at some point in the process transmitted using radio waves.</div>
      </section>
      <section id="history">
        <div className="container">
        <div className="portraits-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Heinrich_Rudolf_Hertz.jpg" className="portrait"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Guglielmo_Marconi.jpg" className="portrait"/>
        </div>
        <div className="text-section">Radio waves were proved by Heinrich Hertz in the late 1880’s.  Shortly after this discovery, another man, named Guglielmo Marconi began to create the first functioning radio, to wirelessly transmit telegraphs. In today’s world, radio waves, can be used to communicate from long distances, television broadcasts, ect.</div>
        </div>
      </section>
      <section id="em-spectrum">
        <div className="em-spectrum-image-container"></div>
        <div>In the EM spectrum, Radio waves have the longest wavelength. Radio waves frequencies range between 300 GHz and 3 kHz, and can have wavelengths from 1mm to 100km.  Different frequencies are used by FM and AM radios, communication, ect.</div>
      </section>
      <section id="how-they-work"><div className="container">
        <h2>How Radio Waves Work</h2>
        <div>Essentially, to create radio waves, transmitters create a magnetic field by running current through a coil, and then oscillate the current at different modulated frequencies/amplitudes. This creates an oscillating electromagnetic field (waves), which are picked up by an antenna on a radio and decoded.</div>
      </div></section>
      <section id="modulation"><div className="container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Amfm3-en-de.gif" className="modulation-image"/>
        <div>Amplitude modulation (AM) and frequency modulation (FM) are two different ways of sending what can be the same signal. The difference between them is in the carrier wave, the one actually sent and received.</div>
      </div></section>
      <section id="fm-intro">
        <div className="container">
          <h2>Frequency Modulation (FM)</h2>
          <div>When using FM, the frequency of a carrier wave is modulated back and forth, and corresponds to the frequency of a signal wave. While not as long-range as AM waves, FM waves are much less susceptible to interference, so they work well for communication and information transfer.</div>
        </div>
      </section>
      <section id="fm-visual">
        {/* <div id="fm-label-4">The carrier wave travels at a constant frequency and amplitude</div>
        <div id="fm-label-5">The signal wave travels at a far lower frequency than the carrier wave</div>
        <div id="fm-label-6">The modulated wave travels at a frequency that changes with the signal wave's amplitude</div> */}
        <div id="fm-label-1">Carrier Wave</div>
        <div id="fm-label-2">Signal Wave</div>
        <div id="fm-label-3">Modulated Wave</div>
        <img src="fm.svg" id="fm-visual-graph"/>
      </section>
      <section id="fm-math"><div className="container">
        <div>The math used to graph the equations above is relatively standard for frequency modulation. Here's the equation that wave used to graph the above equation:</div>
        <BlockMath math="y(t) = A \cos(2\pi f_c t + k_f \int_{0}^{t} x(\tau) d\tau)"/>
        <div className="above-math-line">Where:</div>
        <div className="math-line"><InlineMath math="y(t)"/> is the modulated wave</div>
        <div className="math-line"><InlineMath math="A"/> is the amplitude of the modulated wave</div>
        <div className="math-line"><InlineMath math="f_c"/> is the frequency of the carrier wave</div>
        <div className="math-line"><InlineMath math="t"/> is time</div>
        <div className="math-line"><InlineMath math="k_f"/> is the frequency deviation constant</div>
        <div className="math-line">and <InlineMath math="x(\tau)"/> is the signal wave</div>
        <div className="below-math-line">Essentially, it is tying the instantaneous frequency of the modulated wave to the phase of the signal wave, in the case above, using two sinusoidal equations.</div>
      </div></section>
      <section id="team"><div className="team-container">
        <h1>The Team</h1>
        <div className="team-portraits">
          <div className="name-portrait-pair">
            <img src="albert.jpg" className="team-portrait"/>
            <div className="team-name">Albert</div>
          </div>
          <div className="name-portrait-pair">
            <img src="anurag.jpg" className="team-portrait"/>
            <div className="team-name">Anurag</div>
          </div>
          <div className="name-portrait-pair">
            <img src="conrad.jpg" className="team-portrait"/>
            <div className="team-name">Conrad</div>
          </div>
          {/* <div className="name-portrait-pair">
            <img src="https://avatars.githubusercontent.com/u/81371702?v=4" className="portrait"/>
            <div>Daniel</div>
          </div> */}
        </div>
      </div></section>
    </main>
  );
}
