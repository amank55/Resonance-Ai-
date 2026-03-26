"use client";

import { TextInputPanel } from "../components/text-input-paanel";

export function TextToSpeechView() {
  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-h-0 flex-1 flex-col">
       <TextInputPanel/>
        {/* <VoicePreviewPlaceholder /> */}
      </div>
      {/* <SettingsPanel /> */}
    </div>
  );
}