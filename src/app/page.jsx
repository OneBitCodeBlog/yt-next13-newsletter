import SubscribeForm from "@/components/SubscribeForm"

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="text-4xl">
        Mergulhe no mundo do Front-End: Receba as últimas tendências, dicas e truques toda semana!
      </h1>
      <p className="mt-8 text-lg">
        Inscreva-se em nossa newsletter semanal para se manter atualizado sobre os avanços mais recentes no desenvolvimento front-end, descubra novas ferramentas, aprimore suas habilidades e aprofunde seu conhecimento nesta área dinâmica!
      </p>
      <SubscribeForm />
    </main>
  )
}
