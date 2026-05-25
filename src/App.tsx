/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-zinc-800 selection:text-zinc-100 pb-24 border-zinc-800/50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
      </main>
    </div>
  );
}
