import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
    lang: 'ru-RU',
    //base: '/testdoc/',
    title: 'CRM КБ. Документация пользователя',
    description: 'Сайт документации Clientbase',
    theme: defaultTheme({
        navbar: [
          {
            text: 'Начало работы',
            link: '/guide/',
          },
          {
            text: 'Руководство',
            link: '/manual/',
          },
          {
            text: 'Сайт КБ',
            link: 'https://clientbase.ru/',
          },
          {
            text: 'Заявка в ТП',
            link: 'https://clientbase.ru/support/form.html',
          },
        ],
        sidebar: {
          '/manual/': 'auto'
        },
      }),
    plugins: [
        searchPlugin({
          maxSuggestions: 10
        }),
    ],
}
