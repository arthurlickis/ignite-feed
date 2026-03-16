import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import type { PostType } from "./components/Post";

import styles from "./App.module.css";

// author: { avatar_url: "", name "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2026-02-13 12:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/random1.png",
      name: "Mariana Silva",
      role: "UI Designer",
    },
    content: [
      { type: "paragraph", content: "Oi pessoal ✨" },
      {
        type: "paragraph",
        content:
          "Finalizei hoje o redesign de um app de finanças pessoais. Foquei bastante em acessibilidade e experiência do usuário 📱",
      },
      { type: "link", content: "👉 dribbble.com/marianasilva" },
    ],
    publishedAt: new Date("2026-02-13 13:30:00"),
  },

  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/random2.png",
      name: "Carlos Eduardo",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Salve devs 🚀" },
      {
        type: "paragraph",
        content:
          "Comecei a estudar testes automatizados com Jest e Testing Library. Tô curtindo bastante a experiência!",
      },
      { type: "link", content: "👉 github.com/carloseduardo/tests-study" },
    ] as const,
    publishedAt: new Date("2026-02-13 10:00:00"),
  },

  {
    id: 4,
    author: {
      avatarUrl: "https://github.com/random3.png",
      name: "Fernanda Rocha",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Boa tarde pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Subi um boilerplate de API com Node + Prisma + Docker pra acelerar meus próximos projetos 🔥",
      },
      { type: "link", content: "👉 github.com/fernandarocha/api-boilerplate" },
    ] as const,
    publishedAt: new Date("2026-02-13 12:45:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </>
  );
}
