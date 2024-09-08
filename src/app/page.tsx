import { Form } from '@/app/form';

export default function Home() {
  return (
    <div className="flex justify-center px-5 py-3">
      <main className="mt-28 flex max-w-3xl flex-col items-center gap-12 md:mt-48 md:flex-row md:gap-28">
        <div className="space-y-3">
          <h1 className="text-xl font-medium">
            Melhore o seu perfil do{' '}
            <span className="text-blue-600">Bluesky</span> com a análise do
            Themis
          </h1>
          <p>
            Gere uma avaliação do seu perfil e descubra como deixa-lo mais
            atrativo.
          </p>
        </div>

        <Form />
      </main>
    </div>
  );
}
