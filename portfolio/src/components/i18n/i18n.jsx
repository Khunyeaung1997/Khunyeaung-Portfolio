import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: 'Hello , i\'m',
            part2: 'Khun Ye Aung',
            part3: 'i\'m ',
            part4: 'My name is Khun Ye Aung and i\'m junior web developer. I\'m studying Mechatronic Engineering Major @ Technological University.',
            part5: 'i\'m trying to build more projects !',
          }
        }
      },
      de: {
        translation: {
          description: {
            part1: 'こんにちは私は',
            part2: 'クン・イェ・アウン',
            part3: 'わたし',
            part4: '私の名前は Khun Ye Aung です。ジュニア Web 開発者です。私は工科大学でメカトロニクス工学専攻を勉強しています。',
            part5: 'より多くのプロジェクトを構築しようとしています!',
          
          }
        }
      }
    }
  });

export default i18n;