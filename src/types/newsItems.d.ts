declare module '../data/newsItems.json' {
  interface INewsItem {
    day: string
    title: string
    message: string
    link: string
  }

  const data: INewsItem

  export default data
}
