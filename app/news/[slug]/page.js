
export default function NewsItem({ params }) {
  const itemName = params.slug;
  return (
    <h3>{itemName}</h3>
  )
}