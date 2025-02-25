import React from "react";
import { useTranslation } from "react-i18next";

const videos = [
  {
    title: "English Grammar - Lesson 1: Present Continuous Part 1",
    description:
      "In this video, you will learn everything you need to understand and use the Present Continuous tense in English.",
    thumbnail:
      "https://img.youtube.com/vi/KrLRJ4lXPjw/maxresdefault.jpg", 
    link: "https://youtu.be/KrLRJ4lXPjw",
  },
  {
    title: "English Grammar - Lesson 1: Present Continuous | قواعد الإنجليزية - الدرس 1: المضارع المستمرّ",
    description:
      "في هذا الفيديو، ستتعلم كل ما تحتاجه لفهم واستخدام زمن المضارع المستمر في اللغة الإنجليزية.",
    thumbnail:
      "https://img.youtube.com/vi/3JIvKcPO4kc/maxresdefault.jpg", 
    link: "https://youtu.be/3JIvKcPO4kc",
  },
  {
    title: "Grammaire anglaise - Leçon 1: Present Continuous | Partie 1",
    description:
      "Dans cette vidéo, vous apprendrez tout ce dont vous avez besoin pour comprendre et utiliser le temps Present Continuous en anglais.",
    thumbnail:
      "https://img.youtube.com/vi/8_YgBsAzBSU/maxresdefault.jpg", 
    link: "https://youtu.be/8_YgBsAzBSU",
  },
  {
    title: "English Grammar - Lesson 1: Present Continuous Part 2",
    description:
      "In this video, you will learn everything you need to understand and use the Present Continuous tense in English.",
    thumbnail:
      "https://img.youtube.com/vi/LMI45vJexAI/maxresdefault.jpg", 
    link: "https://youtu.be/LMI45vJexAI",
  },
  {
    title: "English Grammar - Present Continuous Part 2 | قواعد الإنجليزية - الجزء 2: المضارع المستمرّ",
    description:
      "ي هذا الفيديو، وهو الجزء 2 عن زمن المضارع المستمر، سنتحدث عن المواقف الأخرى التي نستخدم فيها هذا الزمن، مثل الأفعال أو الحالات المؤقتة، وكذلك الأفعال التي بدأت ولكن لم تنتهِ بعد.",
    thumbnail:
      "https://img.youtube.com/vi/lSu-uRPs0x0/maxresdefault.jpg", 
    link: "https://youtu.be/lSu-uRPs0x0",
  },
  {
    title: "Grammaire anglaise - Leçon 1: Present Continuous | Partie 2",
    description:
      "Dans cette vidéo, qui est la partie 2 sur le Present Continuous, nous parlerons des autres situations où nous utilisons ce temps, comme les actions ou situations temporaires, ainsi que les actions que vous avez commencées mais pas encore terminées.",
    thumbnail:
      "https://img.youtube.com/vi/xsWc6cKkSUQ/maxresdefault.jpg", 
    link: "https://youtu.be/xsWc6cKkSUQ",
  },
];

const Videos = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">{t("my_youtube_videos")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">{video.title}</h2>
              <p className="mt-2 text-gray-300">{video.description}</p>
              <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Watch Video
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
