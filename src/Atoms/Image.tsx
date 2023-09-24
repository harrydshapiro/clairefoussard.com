export function Image ({ src }: { src: string }) {
    return <img loading="lazy" src={src} alt={src.split('/').pop()}></img>
}