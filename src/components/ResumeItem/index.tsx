import { Container, Info, Title } from "./styles";

type Props = {
    title: string;
    value: number;
    color?: string
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Info color={color}>R$ {value}</Info>
        </Container>
    );
}