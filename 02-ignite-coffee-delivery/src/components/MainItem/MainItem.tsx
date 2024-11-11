
interface PropsMainItem {
  src: string,
  alt?: string,
  title: string
}

export default function MainItem({ src, alt, title}: PropsMainItem) {
  return (
    <label>
      <img src={src} alt={alt} />
      {title}
    </label>
  );
}
