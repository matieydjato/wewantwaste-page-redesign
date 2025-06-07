type SvgIconProps = {
  name: string;
  className?: string;
};

export default function SvgIcon({ name, className = "" }: SvgIconProps) {
  const imagePath = `/icons/${name}.svg`;

  return (
    <img src={imagePath} className={className} alt={name} loading="lazy" />
  );
}
