"use client";

import { Textarea } from "@/components/ui/textarea";
import { TEXT_MAX_LENGTH } from "../data/constant";
import { useState } from "react";

export function TextInputPanel() {
    const [text, setText] = useState("")
  return (
    <div className="flex h-full min-h-0 flex-col flex-1">
      <div className="relative min-h-0 flex-1">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="absolute inset-0 resize-none border-0 bg-transparent 
          p-4 pb-6 lg:p-6 lg:pb-8 text-base! leading-relaxed 
          tracking-tight shadow-none wrap-break-word 
          focus-visible:ring-0"
          maxLength={TEXT_MAX_LENGTH}
        />
      </div>
    </div>
  );
}