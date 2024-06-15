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

    </main>
  );
}
