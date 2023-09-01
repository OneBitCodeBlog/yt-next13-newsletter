export const metadata = {
  title: "Sobre | Front-end Insights",
  description: "A Front-End Insights é uma newsletter semanal dedicada a fornecer conhecimentos valiosos sobre o mundo do desenvolvimento front-end.",
  openGraph: {
    title: "Sobre | Front-end Insights",
    description: "A Front-End Insights é uma newsletter semanal dedicada a fornecer conhecimentos valiosos sobre o mundo do desenvolvimento front-end.",
  }
}

export default function About() {
  const h1 = "mt-10 mb-6 text-2xl font-bold"
  const h2 = "mt-8 mb-4 text-xl font-bold"
  const p = "mt-4 mb-2"

  return (
    <main>
      <h1 className={h1}>Sobre a Newsletter "Front-End Insights"</h1>

      <h2 className={h2}>O que é a Front-End Insights?</h2>
      <p className={p}>A Front-End Insights é uma newsletter semanal dedicada a fornecer conhecimentos valiosos sobre o mundo do desenvolvimento front-end. Se você é um entusiasta, estudante, profissional ou simplesmente tem interesse nessa área, esta newsletter é perfeita para você! Nossa missão é trazer as últimas tendências, dicas e truques do front-end diretamente para a sua caixa de entrada, ajudando você a se manter atualizado e aprimorar suas habilidades.</p>

      <h2 className={h2}>Por que assinar a Front-End Insights?</h2>
      <ol className="list-decimal pl-4 [&>li]:mt-2">
        <li><strong>Conhecimento atualizado:</strong> Nossa equipe de especialistas está sempre atenta às últimas novidades e tendências no mundo do front-end. Ao assinar a Front-End Insights, você receberá informações atualizadas sobre frameworks, bibliotecas, práticas recomendadas e muito mais.</li>
        <li><strong>Dicas e truques exclusivos:</strong> Queremos ajudar você a se destacar como desenvolvedor front-end. Através da Front-End Insights, compartilhamos dicas e truques exclusivos que podem impulsionar suas habilidades e melhorar sua eficiência no trabalho.</li>
        <li><strong>Recursos selecionados:</strong> Navegar pela imensidão de recursos disponíveis para desenvolvedores front-end pode ser esmagador. Na Front-End Insights, selecionamos cuidadosamente os melhores recursos, como tutoriais, artigos, vídeos e ferramentas, para facilitar sua jornada de aprendizado.</li>
      </ol>

      <h2 className={h2}>Quem está por trás da Front-End Insights?</h2>
      <p className={p}>A Front-End Insights é criada e cuidadosamente curada por uma equipe de especialistas apaixonados por desenvolvimento front-end. Nossos colaboradores têm ampla experiência no setor e estão ansiosos para compartilhar seus conhecimentos e insights com você. Juntos, buscamos fornecer um conteúdo relevante e de qualidade para ajudar você a se destacar no mundo do front-end.</p>

      <p className={p}>Não perca a oportunidade de se juntar a uma comunidade de desenvolvedores front-end ávidos por aprender, crescer e se inspirar. Inscreva-se agora mesmo na Front-End Insights e mergulhe em um mundo repleto de descobertas front-end emocionantes!</p>
    </main>
  )
}