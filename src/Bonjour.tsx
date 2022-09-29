type BonjourProps = {
    name: string
}

export default function Bonjour(props: BonjourProps)
{
    return <h2>Bonjour {props.name}</h2>
}