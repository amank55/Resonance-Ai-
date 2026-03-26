import { TextToSpeechLayout } 
from "@/features/text-to-speech/views/text-to-speech-layout";
import { TextToSpeechView } from "@/features/text-to-speech/views/text-to-speech-view";

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <TextToSpeechLayout>
    <TextToSpeechView/>
      {children}
    </TextToSpeechLayout>
  );
}