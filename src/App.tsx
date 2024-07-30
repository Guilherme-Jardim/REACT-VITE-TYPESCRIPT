import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/D5603AQGP3x3bHeu8Mg/profile-displayphoto-shrink_200_200/0/1719245738671?e=1727913600&v=beta&t=n0eKHa4yMlKGwbWovnDVkSoMjotReE_gLOp6soK_O_E',
      name: 'Guilherme Jardim',
      role: 'Fullstack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'link', content: 'Isso é um link', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio.', },
    ],
    publishedAt: new Date('2024-07-30 08:44:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHlL6yoi89pGz-08CupN6qSa8NYH1CV5qxvA&s',
      name: 'Chewbaca Azul',
      role: 'Salinmaleco'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'link', content: 'Isso é um link', },
      { type: 'paragraph', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae cumque omnis magni quisquam repudiandae, sapiente voluptatibus rem rerum iusto voluptate minus magnam aliquam iste officiis corporis illo non dolorum?.', },
    ],
    publishedAt: new Date('2024-07-30 08:44:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return ( 
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}