export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `Tu es Rosaire Kakpo, un développeur full-stack passionné par l'IA et les technologies modernes.

À propos de toi:
- Développeur full-stack (React, Next.js, TypeScript, Node.js)
- Spécialiste en IA et machine learning
- Créateur de solutions innovantes
- Basé à Cotonou, Bénin
- Passionné par l'open source et l'apprentissage continu

Tes compétences principales:
- Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion
- Backend: Node.js, Python, PostgreSQL, MongoDB
- IA/ML: Groq, LangChain, Embeddings, Fine-tuning
- DevOps: Docker, Vercel, AWS
- IoT: Arduino, Raspberry Pi

Tes projets notables:
- Portfolio interactif avec IA intégrée
- Applications web modernes et performantes
- Solutions IoT innovantes
- Outils IA pour productivité

Quand on te pose des questions:
1. Sois amical et professionnel
2. Fournis des réponses détaillées mais concises
3. Propose des solutions pratiques
4. Mentionne tes projets pertinents
5. Offre toujours de l'aide supplémentaire

Domaines d'expertise:
- Développement web full-stack
- Intelligence artificielle et machine learning
- Architecture logicielle
- Performance et optimisation
- Mentorat et enseignement`;

let groqClient: any = null;

function getGroqClient() {
  if (!groqClient) {
    try {
      const Groq = require('groq-sdk').default;
      groqClient = new Groq({
        apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
      });
    } catch (error) {
      console.error('Failed to initialize Groq client:', error);
      throw new Error('Groq SDK not properly configured');
    }
  }
  return groqClient;
}

export async function askRosaire(
  messages: Message[],
  userMessage: string
): Promise<string> {
  try {
    if (!process.env.NEXT_PUBLIC_GROQ_API_KEY) {
      throw new Error('NEXT_PUBLIC_GROQ_API_KEY is not configured');
    }

    const groq = getGroqClient();
    const conversationMessages: Message[] = [
      ...messages,
      { role: 'user', content: userMessage },
    ];

    const response = await groq.chat.completions.create({
      model: 'mixtral-8x7b-32768',
      messages: conversationMessages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
      system: SYSTEM_PROMPT,
      temperature: 0.7,
      max_tokens: 1024,
    });

    const assistantMessage =
      response.choices[0]?.message?.content || 'Je n\'ai pas pu générer une réponse.';

    return assistantMessage;
  } catch (error) {
    console.error('Erreur Groq:', error);
    throw new Error('Impossible de contacter Rosaire AI en ce moment.');
  }
}

export async function generateSuggestions(context: string): Promise<string[]> {
  try {
    if (!process.env.NEXT_PUBLIC_GROQ_API_KEY) {
      return [
        'Quels sont tes projets récents?',
        'Quelles technologies maîtrises-tu?',
        'Comment puis-je te contacter?',
      ];
    }

    const groq = getGroqClient();
    const response = await groq.chat.completions.create({
      model: 'mixtral-8x7b-32768',
      messages: [
        {
          role: 'user',
          content: `Basé sur ce contexte: "${context}", génère 3 questions pertinentes que je pourrais poser à Rosaire. Retourne UNIQUEMENT les 3 questions, une par ligne, sans numérotation.`,
        },
      ],
      temperature: 0.7,
      max_tokens: 256,
    });

    const suggestions =
      response.choices[0]?.message?.content
        ?.split('\n')
        .filter((s: string) => s.trim().length > 0)
        .slice(0, 3) || [];

    return suggestions;
  } catch (error) {
    console.error('Erreur génération suggestions:', error);
    return [
      'Quels sont tes projets récents?',
      'Quelles technologies maîtrises-tu?',
      'Comment puis-je te contacter?',
    ];
  }
}
