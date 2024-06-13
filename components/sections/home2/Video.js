'use client'
import React, { useState } from 'react';
import Link from "next/link"
import ModalVideo from 'react-modal-video'
export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
    <section className="video-section p_relative centred">
      <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/video-bg.jpg)" }}></div>
      <div className="auto-container">
        <div className="video-btn">
        <a onClick={() => setOpen(true)}><i className="icon-36"></i></a>
        </div>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="nfP5N9Yc72A" onClose={() => setOpen(false)} />
        </>
    );
};
