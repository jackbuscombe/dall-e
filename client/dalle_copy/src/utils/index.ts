import { surpriseMePrompts } from "../constants";
import FileSaver from "file-saver";

type GetRandomPromptProps = {
  prompt: string;
};

export function getRandomPrompt(prompt: string): string {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) {
    return getRandomPrompt(prompt);
  }

  return randomPrompt;
}

type DownloadImageProps = {
  _id: string | number;
  photo: any;
};

export async function downloadImage(_id: any, photo: any) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
