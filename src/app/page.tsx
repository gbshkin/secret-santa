import  HomePage  from '@/app/components/home';
import { type Metadata } from 'next';
import { Container } from '@/app/components/shared/Container';

export const metadata: Metadata = {
  title: 'Главная | Secret Santa',
  description: 'Добро пожаловать в Secret Santa',
};

export default function Home() {
  return (
    <>
      <Container>
        <HomePage />
      </Container>
    </>
  );
}
