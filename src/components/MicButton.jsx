import React from 'react';
import { Mic, Square } from 'lucide-react';

export default function MicButton({ isRecording, onClick, className = '', style = {} }) {
  return (
    <button
      type="button"
      className={`push-btn pb-mic ${isRecording ? 'pb-mic-recording' : ''} ${className}`}
      onClick={onClick}
      style={style}
    >
      <span className="push-btn-shadow"></span>
      <span className="push-btn-edge"></span>
      <span className="push-btn-front">
        {isRecording ? <Square size={32} color="white" fill="white" /> : <Mic size={36} color="white" />}
      </span>
    </button>
  );
}
