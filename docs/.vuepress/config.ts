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
          '/manual/': [
            {
              text: 'Конструктор таблиц',
              collapsible: true,
              children: [
                '/manual/tables/field_type/'
              ]
            },
            {
              text: 'Изучение программы',
              collapsible: true,
              children: [
                '/manual/first_steps/start/'
              ]
            },
            {
              text: 'Пользователю',
              collapsible: true,
              children: [
                '/manual/user/desktop/',
                '/manual/user/LK/',
              ],
            
            },
            {
              text: 'Другое',
              collapsible: true,
              children: [
                '/manual/other/disable_copyright/',
                '/manual/other/footer_tuning/',
              ],
            },
            {
              text: 'Тест',
              collapsible: true,
              children: [
                '/manual/testmanual',
                '/manual/testmanual',
              ],
            },
          ],
        },
      }),
    plugins: [
        searchPlugin({
          maxSuggestions: 10
        }),
    ],
}
