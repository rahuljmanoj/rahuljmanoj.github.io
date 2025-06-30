---
layout: post
title: Understanding AVR Fuse Bits
date: 2021-12-28 21:01:00
description: A practical, clear guide to AVR fuse bits, their purpose, and how to configure them safely with AVRDUDE.
tags: electronics
---
<h2>What are Fuse Bits in AVR?</h2>

<p>Fuse bits configure critical low-level behaviors in AVR microcontrollers, such as clock source, brown-out detection, and bootloader settings.</p>

<p><strong>Important:</strong> In AVR fuse settings:</p>
<ul>
  <li><code>0</code> = Programmed</li>
  <li><code>1</code> = Unprogrammed</li>
</ul>

---

<h2>HFUSE Breakdown</h2>

<p>HFUSE controls advanced settings in the AVR:</p>

<ul>
  <li><strong>RSTDISBL (Bit 7)</strong>: Disable reset pin if programmed (0). Keep as <code>1</code>.</li>
  <li><strong>WDTON (Bit 6)</strong>: Watchdog timer always on if <code>0</code>.</li>
  <li><strong>SPIEN (Bit 5)</strong>: Enable SPI programming if <code>0</code> (should remain <code>0</code> for ISP).</li>
  <li><strong>CKOPT (Bit 4)</strong>: Clock option, typically <code>1</code> for crystal oscillator.</li>
  <li><strong>EESAVE (Bit 3)</strong>: Preserve EEPROM on chip erase if <code>0</code>.</li>
  <li><strong>BOOTSZ1:0 (Bits 2:1)</strong>: Bootloader size configuration.</li>
  <li><strong>BOOTRST (Bit 0)</strong>: Start at bootloader if <code>0</code>.</li>
</ul>

Typical HFUSE for Atmega8:

<pre><code>HFUSE = 0xDF (11011111)</code></pre>

<h3>Writing HFUSE using AVRDUDE:</h3>

<pre><code>avrdude -p m8 -c usbasp -u -U hfuse:w:0xDF:m</code></pre>

---

<h2>LFUSE Breakdown</h2>

<p>LFUSE typically configures clock source and startup times:</p>

<ul>
  <li><strong>BODLEVEL (Bit 7)</strong>: Brown-out voltage level.</li>
  <li><strong>BODEN (Bit 6)</strong>: Enable BOD if <code>0</code>.</li>
  <li><strong>SUT1:0 (Bits 5:4)</strong>: Startup time configuration.</li>
  <li><strong>CKSEL3:0 (Bits 3:0)</strong>: Clock source selection.</li>
</ul>

Typical LFUSE for Atmega8 with a 16MHz crystal:

<pre><code>LFUSE = 0xEF (11101111)</code></pre>

<h3>Writing LFUSE using AVRDUDE:</h3>

<pre><code>avrdude -p m8 -c usbasp -u -U lfuse:w:0xEF:m</code></pre>

---

<h2>Setting HFUSE and LFUSE Together</h2>

<pre><code>avrdude -p m8 -c usbasp -u -U hfuse:w:0xDF:m -U lfuse:w:0xEF:m</code></pre>

---

<h2>Key Takeaways</h2>

<ul>
  <li>Fuse bits define how your microcontroller behaves on a low level.</li>
  <li>Incorrect fuse settings can disable SPI or the reset pin, requiring a high-voltage programmer to recover.</li>
  <li>Always refer to the Atmega8 datasheet when setting fuse bits.</li>
</ul>

<p>Understanding and configuring fuse bits will help you develop more reliable embedded systems while utilizing your AVR microcontroller’s full potential.</p>

<p> Happy Tinkering!</p>