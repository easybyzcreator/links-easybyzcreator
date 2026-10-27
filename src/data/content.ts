import { SimulationApp, FeaturedLink, Partner } from '../types';

export const BRAND_INFO = {
  name: 'EASY BYZ CREATOR',
  tagline: 'Automatize e saia do manual.',
  shortBio: 'Sistemas e aplicativos personalizados sob medida para organizar sua rotina, modernizar seu atendimento e valorizar sua marca.',
  logoUrl: '/images/branding/logo.png',
  footerLogoUrl: '/images/branding/logo.png',
  websiteUrl: 'https://easybyzcreator.com/',
  patriciaPortfolioUrl: 'https://patriciaguimaraes.vercel.app/',
  patriciaPhotoUrl: '/images/sections/about-patricia.png',
  whatsappNumber: '+1 803 888 9018',
  whatsappRaw: '18038889018',
  whatsappUrl: 'https://wa.me/18038889018?text=Ol%C3%A1%20Pati%2C%20vim%20do%20link%20da%20bio%20do%20instagram%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20aplicativos%20da%20Easy%20Byz%20Creator.',
  instagramUrl: 'https://www.instagram.com/apps.easybyzcreator/',
  facebookUrl: 'https://www.facebook.com/apps.easybyzcreator',
  instagramHandle: '@apps.easybyzcreator',
  ebookUrl: 'https://ebook-oitemhorario.vercel.app/',
  consultancyUrl: 'https://consultoriagratuitaeasybyzcreator-p.vercel.app/',
};

export const ABOUT_EASYBYZ = {
  title: 'Quem é a Easy Byz Creator?',
  lead: 'Fundada por Patricia Guimarães, especialista que une a ciência do comportamento humano e a inovação tecnológica.',
  description:
    'A Easy Byz Creator é uma agência de soluções digitais dedicada a criar sistemas e aplicativos exclusivos para empreendedores que buscam eficiência e valorizam a própria marca. Entendemos que por trás de toda automação de sucesso existe uma estratégia de comunicação clara. Desenvolvemos ferramentas intuitivas que resolvem dores reais: fim do atendimento manual repetitivo, agendamento 24/7 e controle absoluto do seu negócio sem comissões.',
  pillars: [
    {
      title: 'Inovação & Autonomia',
      desc: 'Engenharia de ponta para automatizar rotinas no piloto automático.',
      icon: 'Zap',
    },
    {
      title: 'Presença Digital Exclusiva',
      desc: 'Aplicativo próprio com sua marca, suas cores e sem concorrentes disputando seu cliente.',
      icon: 'Sparkles',
    },
    {
      title: 'Mensalidade Fixa Justa',
      desc: 'Todo o lucro do seu trabalho vai direto para seu bolso, sem taxas por agendamento.',
      icon: 'ShieldCheck',
    },
  ],
};

export const SIMULATION_APPS: SimulationApp[] = [
  {
    id: 'easy-beauty',
    name: 'Easy Beauty',
    category: 'beauty',
    categoryLabel: 'Beleza & Estética',
    fullTitle: 'Sistemas para Clínicas de Estética & Salões de Beleza',
    idealFor: 'Salões de beleza, clínicas de estética, spas e afins',
    shortDesc: 'Organize sua equipe, combine múltiplos serviços em um só fluxo e elimine os erros de agendamento cruzado com um painel totalmente automatizado.',
    features: [
      'Agendamento inteligente multitela',
      'Controle de pacotes de tratamento e sessões',
      'Confirmação por WhatsApp em 1 clique',
      'Histórico individualizado de serviços por especialista.'
    ],
    highlightBadge: {
      title: 'Disponibilidade em Tempo Real',
      desc: 'SEM VAIVÉM DE MENSAGENS. O CLIENTE VÊ, ESCOLHE E AGENDA DE FORMA 100% AUTÔNOMA.'
    },
    realWorldExamples: [
      {
        title: 'Múltiplos Serviços no Mesmo Fluxo',
        desc: 'Seu cliente pode agendar com profissionais diferentes para serviços distintos em uma única sessão. O sistema cruza os horários automaticamente, organizando o dia da sua equipe sem conflito de horários.'
      },
      {
        title: 'Controle de Janelas e Encaixes',
        desc: 'Autonomia para o seu time aproveitar cada minuto. Se um procedimento longo tem um tempo de pausa, o próprio profissional pode liberar esse intervalo específico no sistema para que outro cliente faça um agendamento rápido.'
      },
      {
        title: 'Customização Absoluta',
        desc: 'Regras de horários, pacotes de sessões e tratamentos adaptados exatamente à dinâmica da sua equipe.'
      }
    ],
    url: 'https://easybeauty.vercel.app/',
    accentColor: '#00f0ff',
    tag: 'Salões & Estética',
    icon: 'Sparkles',
  },
  {
    id: 'easy-nails',
    name: 'Easy Nails',
    category: 'beauty',
    categoryLabel: 'Nails & Manicure',
    fullTitle: 'Gestão Descomplicada para Nail Designers',
    idealFor: 'Manicures, pedicures e nail designers',
    shortDesc: 'Desenvolvido especificamente para a rotina de Nail Designers. Centralize o controle dos seus atendimentos, otimize seu tempo e ofereça uma experiência de agendamento rápida e moderna para suas clientes.',
    features: [
      'Menu digital de técnicas e procedimentos personalizados',
      'Ficha de anamnese digital integrada ao perfil da cliente',
      'Controle inteligente de prazos para manutenção',
      'Histórico completo de atendimentos por cliente'
    ],
    highlightBadge: {
      title: 'Sua Agenda Organizada',
      desc: 'MENOS TEMPO TROCANDO MENSAGENS, MAIS TEMPO FOCADA NOS SEUS ATENDIMENTOS.'
    },
    realWorldExamples: [
      {
        title: 'Filtro de Clientes para Retorno',
        desc: 'Monitore o tempo desde a última aplicação. Configure o período recomendado para a manutenção e localize rapidamente quem já precisa agendar a próxima sessão, facilitando o seu pós-atendimento.'
      },
      {
        title: 'Comunicação Direta em 1 Clique',
        desc: 'Sem taxas abusivas de disparo automatizado. Você tem um canal direto dentro do app para acionar o WhatsApp/SMS e enviar os alertas de horários ou manutenções, mantendo seus custos 100% fixos.'
      },
      {
        title: 'Tabela de Serviços Personalizada',
        desc: 'Apresente seus serviços de forma profissional. Suas clientes visualizam o menu de opções disponíveis, entendem os valores e selecionam o procedimento correto no momento do agendamento.'
      }
    ],
    url: 'https://easynails.vercel.app/',
    accentColor: '#f43f5e',
    tag: 'Nail Designers',
    icon: 'HeartHandshake',
  },
  {
    id: 'easy-barber',
    name: 'Easy Barber',
    category: 'beauty',
    categoryLabel: 'Barbearias',
    fullTitle: 'Gestão Descomplicada para Barbearias',
    idealFor: 'Barbearias e barbeiros independentes',
    shortDesc: 'Centralize a agenda da sua barbearia e otimize o tempo dos profissionais. Seus clientes agendam em segundos e seu time acompanha tudo em tempo real, sem complicação.',
    features: [
      'Painel de fila dinâmica ou agendamento convencional',
      'Escolha de barbeiro preferido pelo cliente',
      'Menu digital de serviços, cortes e barbas personalizados',
      'Controle individual de horários por profissional'
    ],
    highlightBadge: {
      title: 'Disponibilidade 24/7',
      desc: 'SEU CLIENTE ESCOLHE O DIA, O HORÁRIO E O BARBEIRO DE FORMA 100% AUTÔNOMA, MESMO FORA DO HORÁRIO COMERCIAL.'
    },
    realWorldExamples: [
      {
        title: 'Fim dos Gargalos de Finais de Semana',
        desc: 'Seus clientes agendam o horário com antecedência e escolhem o barbeiro preferido direto no app. Acabe com as filas de espera físicas e a perda de clientes por demora no atendimento.'
      },
      {
        title: 'Gestão de Profissionais Independente',
        desc: 'Cada barbeiro da sua equipe pode ter seu próprio painel de controle e horários conciliados, permitindo que a barbearia rode de forma organizada sem que você precise gerenciar mensagens manualmente.'
      },
      {
        title: 'Controle de Retornos Facilitado',
        desc: 'Monitore o ciclo médio de corte de cabelo e barba dos seus clientes e utilize os filtros para lembrar quem já está na hora de retornar, otimizando a organização da sua barbearia.'
      }
    ],
    url: 'https://easybarber-phi.vercel.app/',
    accentColor: '#00ddff',
    tag: 'Barbearias',
    icon: 'Scissors',
  },
  {
    id: 'easy-waxing',
    name: 'Easy Waxing',
    category: 'beauty',
    categoryLabel: 'Depilação',
    fullTitle: 'Agendamento Eficiente para Depilação & Bem-Estar',
    idealFor: 'Profissionais e clínicas de depilação a laser e cera',
    shortDesc: 'Desenvolvido sob medida para clínicas e estúdios de depilação organizarem o fluxo de atendimentos diários, dando total autonomia para os clientes agendarem seus próprios horários e pacotes.',
    features: [
      'Controle inteligente de salas e macas de depilação',
      'Filtro de retorno e acompanhamento de crescimento do pelo',
      'Ficha de anamnese digital com histórico de sensibilidade',
      'Menu digital de áreas, pacotes e métodos de depilação'
    ],
    highlightBadge: {
      title: 'Gestão de Salas & Cabines',
      desc: 'EVITE SALAS OCIOSAS E GARANTA FLUXO SEM ATRASOS COM CONTROLE DINÂMICO.'
    },
    realWorldExamples: [
      {
        title: 'Otimização de Salas e Macas',
        desc: 'Monitore a ocupação dos seus espaços de atendimento em tempo real. Evite salas ociosas, gerencie os horários da sua equipe e garanta um fluxo dinâmico sem atrasos para as clientes.'
      },
      {
        title: 'Histórico & Ficha de Atendimento',
        desc: 'Espaço centralizado para registrar as especificidades de cada cliente (como sensibilidade na pele ou tipo de cera utilizado), garantindo um atendimento seguro e padronizado.'
      },
      {
        title: 'Filtro de Próxima Sessão',
        desc: 'Localize facilmente no painel quais clientes estão no período ideal de crescimento do pelo para a próxima depilação. Com um clique, você acessa o contato delas para sugerir o agendamento e manter a agenda sempre cheia.'
      }
    ],
    url: 'https://easywaxing.vercel.app/',
    accentColor: '#a855f7',
    tag: 'Depilação',
    icon: 'Feather',
  },
  {
    id: 'easy-plate-menu',
    name: 'Easy Plate Menu',
    category: 'gastronomy',
    categoryLabel: 'Alimentação & Marmitas',
    fullTitle: 'Cardápio Inteligente para Marmitarias & Meal Preps',
    idealFor: 'Quem trabalha com marmitas, refeições diárias e entregas',
    shortDesc: 'A solução ideal para negócios de alimentação saudável, marmitas e refeições planejadas organizarem o recebimento de pedidos de forma limpa, profissional e sem comissões por vendas.',
    features: [
      'Organização de cardápios para marmitas e refeições',
      'Escolha simples de tamanhos, opções e acompanhamentos',
      'Agendamento e controle de entregas programadas'
    ],
    highlightBadge: {
      title: 'Foco em Marmitarias',
      desc: 'RECEBIMENTO LIMPO DE PEDIDOS SEM TAXAS ABUSIVAS E SEM COMPLICAÇÕES.'
    },
    realWorldExamples: [
      {
        title: 'Foco em Marmitarias e Refeições',
        desc: 'A estrutura ideal para quem vende marmitas diárias, congelados ou planos semanais de alimentação.'
      },
      {
        title: 'Montagem Livre de Pratos',
        desc: 'Seu cliente monta a marmita escolhendo os acompanhamentos e porções ideais sem complicação e sem margem para erros.'
      },
      {
        title: 'Logística de Encomendas',
        desc: 'Organize a produção e as entregas da semana sabendo exatamente o que foi agendado, direto pelo painel.'
      }
    ],
    url: 'https://easyplatemenu-diy.vercel.app/?slug=easy-plate-menu',
    accentColor: '#f97316',
    tag: 'Marmitas & Refeições',
    icon: 'Utensils',
  },
  {
    id: 'easy-cake-menu',
    name: 'Easy Cake Menu',
    category: 'gastronomy',
    categoryLabel: 'Confeitaria & Eventos',
    fullTitle: 'Cardápio Exclusivo para Confeitarias & Doces Sob Medida',
    idealFor: 'Confeiteiras, docerias, salgados e eventos personalizados',
    shortDesc: 'Modernize as encomendas da sua confeitaria. Um cardápio inteligente para receber pedidos complexos e personalizados de forma limpa e organizada.',
    features: [
      'Montagem guiada de bolos de festa passo a passo',
      'Organização de encomendas por datas de entrega',
      'Vitrine fotográfica premium para bolos e kits'
    ],
    highlightBadge: {
      title: 'Encomendas Guiadas',
      desc: 'ESCOLHA DE MASSAS, RECHEIOS E COBERTURAS PASSO A PASSO COM CÁLCULO DIRETO.'
    },
    realWorldExamples: [
      {
        title: 'Organização de Encomendas Customizadas',
        desc: 'Perfeito para confeitarias e doceiras que trabalham com produtos personalizados. Seu cliente escolhe o tamanho, recheio e cobertura de forma guiada e sem erros.'
      },
      {
        title: 'Planejamento de Produção & Datas Festivas',
        desc: 'Centralize as ordens de pedidos por datas de entrega. Saiba exatamente o que precisa ser produzido para o final de semana ou feriados importantes com total antecedência.'
      },
      {
        title: 'Vitrine Fotográfica Premium',
        desc: 'Exiba seus bolos de festa, doces finos e kits de forma altamente visual, valorizando o seu trabalho artesanal e facilitando a escolha do cliente.'
      }
    ],
    url: 'https://easycakemenu.vercel.app/?slug=easy-cake-menu',
    accentColor: '#ec4899',
    tag: 'Bolos & Doces',
    icon: 'Cake',
  },
  {
    id: 'easy-booking',
    name: 'Easy Booking',
    category: 'realestate_travel',
    categoryLabel: 'Locação & Temporada',
    fullTitle: 'Sistema Exclusivo de Reservas para Imóveis de Lazer & Temporada',
    idealFor: 'Donos de chácaras, sítios, casas de praia e locação de temporada',
    shortDesc: 'Transforme a gestão das suas reservas em um processo automático, profissional e 100% lucrativo. Ofereça uma experiência de alto padrão para o seu hóspede — da simulação da estadia ao check-in — sem pagar comissões para plataformas.',
    features: [
      'Simulador de diárias e datas em tempo real para o hóspede',
      'Taxa ZERO de comissão por reserva (100% do lucro é seu)',
      'Central de mensagens prontas para check-in e regras da casa'
    ],
    highlightBadge: {
      title: 'Taxa Zero de Comissão',
      desc: '100% DO VALOR DA DIÁRIA VAI DIRETO PARA VOCÊ, SEM INTERMEDIÁRIOS.'
    },
    realWorldExamples: [
      {
        title: 'Simulação de Estadia & Preços Dinâmicos',
        desc: 'Seu hóspede escolhe as datas e calcula o valor exato da estadia na hora. O sistema aplica regras automáticas para dias de semana, finais de semana, feriados e taxa de limpeza.'
      },
      {
        title: 'Gestão de Calendário, Bloqueios & Tarifas',
        desc: 'Altere valores sazonais e bloqueie datas para uso próprio ou manutenção com um clique. Mantenha controle total da disponibilidade do seu imóvel sem depender de intermediários.'
      },
      {
        title: 'Check-in Inteligente & Autonomia Total',
        desc: 'Agilize o atendimento enviando instruções pré-configuradas de check-in, senhas de fechadura eletrônica e regras da casa, entregando uma experiência de alto padrão sem perder horas no WhatsApp.'
      }
    ],
    url: 'https://easy-booking-easybyz.vercel.app/',
    accentColor: '#34d399',
    tag: 'Chácaras & Casas',
    icon: 'Home',
  },
  {
    id: 'easy-travel-guide',
    name: 'Easy Travel Guide',
    category: 'realestate_travel',
    categoryLabel: 'Turismo & Viagens',
    fullTitle: 'Aplicativo Exclusivo para Agências de Viagem e Grupos',
    idealFor: 'Agências de viagem, guias turísticos e consultores',
    shortDesc: 'Substitua o manual impresso e os PDFs estáticos por um aplicativo moderno e interativo. Centralize roteiros, checklists, passagens e orientações cruciais na palma da mão do seu passageiro, com funcionamento 100% offline.',
    features: [
      'Roteiro dinâmico e cronológico dia a dia',
      'Carteira digital de bilhetes e QR Codes',
      'Checklists inteligentes de documentos e bagagem',
      'Personalização White Label com a sua marca'
    ],
    highlightBadge: {
      title: 'Experiência 100% Offline',
      desc: 'SEM PERGUNTAS REPETITIVAS NO WHATSAPP. O PASSAGEIRO ACESSA TUDO COM UM TOQUE, MESMO SEM SINAL DE INTERNET OU EM VOOS.'
    },
    realWorldExamples: [
      {
        title: 'Roteiro Completo Dia a Dia e Redução de Dúvidas',
        desc: 'Roteiro detalhado de cada dia, horários de encontro, dress code, recomendações e franquia de bagagem organizados 24/7. O passageiro acompanha o passo a passo da viagem sem precisar perguntar tudo no seu WhatsApp.'
      },
      {
        title: 'Central de Embarque e Carteira Digital',
        desc: 'Espaço exclusivo para anexar e organizar passagens aéreas, seguros e vouchers de passeios. Seu cliente encontra qualquer documento de forma instantânea na hora do check-in.'
      },
      {
        title: 'Marca Própria e Percepção Premium',
        desc: 'Entregue o app como uma cortesia de alto valor percebido. O aplicativo carrega o ícone, o nome e a identidade da sua agência, transmitindo autoridade e inovação antes e durante a viagem.'
      }
    ],
    url: 'https://easytravelguide-byeasybyzcreator.vercel.app/',
    accentColor: '#00f0ff',
    tag: 'Agências de Viagem',
    icon: 'Compass',
  },
];

export const FEATURED_RESOURCES: FeaturedLink[] = [
  {
    id: 'ebook',
    title: 'E-BOOK GRATUITO',
    subtitle: 'O fim do "Oi, tem horário?" — O método definitivo de automação',
    badge: 'Download Grátis',
    url: 'https://ebook-oitemhorario.vercel.app/',
    icon: 'BookOpen',
    isPrimary: true,
    buttonText: 'Acessar E-book Grátis',
    type: 'ebook',
  },
  {
    id: 'consultancy',
    title: 'CONSULTORIA & DIAGNÓSTICO',
    subtitle: 'Descubra a solução exata para automatizar sua rotina',
    badge: '100% Gratuito',
    url: 'https://consultoriagratuitaeasybyzcreator-p.vercel.app/',
    icon: 'CheckCircle2',
    isPrimary: false,
    buttonText: 'Solicitar Diagnóstico',
    type: 'consultancy',
  },
  {
    id: 'official-site',
    title: 'SITE OFICIAL EASY BYZ CREATOR',
    subtitle: 'Conheça nossos sistemas, metodologia e portfólio completo',
    url: 'https://easybyzcreator.com/',
    icon: 'Globe',
    buttonText: 'Visitar Site Oficial',
    type: 'site',
  },
  {
    id: 'patricia',
    title: 'PATRICIA GUIMARÃES',
    subtitle: 'Fundadora & Especialista em Comportamento Humano e Tecnologia',
    badge: 'CEO & Founder',
    url: 'https://patriciaguimaraes.vercel.app/',
    icon: 'UserCheck',
    buttonText: 'Conhecer Trajetória',
    type: 'founder',
  },
];

export const PARTNERS: Partner[] = [
  {
    id: 'geeprint',
    name: 'GEEPRINT',
    category: 'Especialista em soluções gráficas',
    logoUrl: '/images/partners/geeprint.png',
    url: 'https://www.geeprint.com',
    tagline: 'Impressão gráfica de alta qualidade e soluções visuais.',
  },
  {
    id: 'egn',
    name: 'EGN',
    category: 'Escola de Gastronomia e Negócios',
    logoUrl: '/images/partners/egn.png',
    url: 'https://links.chefgabipaludo.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadBQ77dFHrvtk4a1dp_ELlyehMg-JIxUA0k5gqpfnE2sfi-Azn2pH92uPiWJg_aem_2sjMnrqs7OgLYacCmiItRQ',
    tagline: 'Formação estratégica e gestão gastronômica de sucesso.',
  },
  {
    id: 'miria-paula',
    name: 'MIRIA PAULA',
    category: 'Confeitaria | Especialista em Pão de Mel',
    logoUrl: '/images/partners/miria-paula.png',
    url: 'https://linksmiriapaula.vercel.app/',
    tagline: 'Confeiteira & Especialista em Pão de Mel artesanal de alto padrão.',
  },
  {
    id: 'fabrine-fernandes',
    name: 'FABRINE FERNANDES',
    category: 'Neuropsicopedagoga',
    logoUrl: '/images/partners/fabrine-fernandes.png',
    url: 'https://wa.me/5519971242720?text=Ol%C3%A1%20Fabrine%2C%20estava%20navegando%20no%20site%20da%20Easy%20Byz%20e%20estou%20em%20busca%20de%20atendimento.%20Voc%C3%AA%20pode%20me%20ajudar%3F',
    tagline: 'Atendimento neuropsicopedagógico e desenvolvimento cognitivo individualizado.',
    buttonText: 'Falar no WhatsApp',
  },
  {
    id: 'andreia-cakes',
    name: 'ANDREIA CAKES',
    category: 'Confeitaria | Cursos & Treinamentos',
    logoUrl: '/images/partners/andreia-cakes.png',
    url: 'https://andreiacakesusa.com/cursos',
    tagline: 'Os Segredos da Confeitaria nos EUA: Formação do zero à confeitaria lucrativa.',
  },
  {
    id: 'alem-da-marca',
    name: 'ALÉM DA MARCA',
    category: 'Empresa especializada em registro de marcas',
    logoUrl: '/images/partners/alem-da-marca.png',
    url: 'https://wa.me/5519971200605?text=Ol%C3%A1%20equipe%20da%20Al%C3%A9m%20da%20Marca%2C%20estava%20no%20site%20da%20Easy%20Byz%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20de%20como%20posso%20registrar%20a%20minha%20marca.',
    tagline: 'Quero ajuda para registrar a minha marca.',
    buttonText: 'Quero Ajuda para Registrar a Minha Marca',
  },
  {
    id: 'astrine',
    name: 'ASTRINE',
    category: 'Mkt para restaurantes',
    logoUrl: '/images/partners/astrine.png',
    url: 'https://wa.me/5519991977730?text=Ol%C3%A1%20equipe%20da%20Astrine%2C%20estava%20navegando%20no%20site%20da%20Easy%20Byz%20e%20gostaria%20de%20ter%20uma%20an%C3%A1lise%20gratuita%20do%20meu%20restaurante.',
    tagline: 'Transformamos restaurantes em sucesso de vendas através do Método Menu.\n\nSe você fatura a partir de R$50 mil por mês e tem espaço para crescer suas vendas, entre em contato e solicite uma análise gratuita.',
    buttonText: 'Quero Minha Análise Gratuita',
  },
  {
    id: 'l3-marketing',
    name: 'L3 MARKETING',
    category: 'Gestão de Tráfego Pago',
    logoUrl: '/images/partners/l3-marketing.png',
    url: 'https://wa.me/5519997357490?text=Ol%C3%A1%20equipe%20da%20L3%20MARKETING%20estava%20navegando%20no%20site%20da%20Easy%20Byz%20e%20gostaria%20de%20fazer%20tr%C3%A1fego%20pago%20no%20meu%20neg%C3%B3cio.%20Voc%C3%AA%20pode%20me%20ajudar%3F',
    tagline: 'Gestão estratégica de tráfego pago para atrair clientes qualificados e alavancar os resultados do seu negócio.',
    buttonText: 'Falar no WhatsApp',
  },
  {
    id: 'simpmais',
    name: 'SIMPMAIS',
    category: 'Soluções contábeis e empresáriais (Abertura, alteração, baixa, regularização - MEI e Simples Nacional)',
    logoUrl: '/images/partners/simpmais.png',
    url: 'https://wa.me/?text=Ol%C3%A1%20equipe%20SIMPMAIS%2C%20estava%20navegando%20no%20site%20da%20Easy%20Byz%20e%20estou%20em%20busca%20de%20ajuda%20com%20a%20minha%20MEI%20e%2Fou%20Simples%20Nacional%2C%20voc%C3%AA%20pode%20me%20ajudar%3F',
    tagline: 'Soluções contábeis e empresariais completas para MEI e Simples Nacional: abertura, alteração, baixa e regularização para seu negócio crescer com segurança.',
    buttonText: 'Falar no WhatsApp',
  },
  {
    id: 'grafike',
    name: 'GRAFIKE',
    category: 'Gráfica digital, de pequenos e grandes formatos, orientada em transformar ideias em resultados',
    logoUrl: '/images/partners/grafike.png',
    url: 'https://wa.me/5519989021390?text=Ol%C3%A1%20equipe%20GRAFIKE%2C%20estava%20navegando%20no%20site%20da%20Easy%20Byz%20e%20estou%20em%20busca%20de%20um%20or%C3%A7amento%2C%20voc%C3%AA%20pode%20me%20ajudar%3F',
    tagline: 'A Grafike oferece todo o suporte para que você, ou sua empresa tenham sempre os melhores materiais de comunicação, sejam institucionais ou comerciais, como cartões, catálogos, adesivos, banners e placas de sinalização.',
    buttonText: 'Falar no WhatsApp',
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'post-1',
    imageUrl: '/images/instagram/chega.png',
    title: 'Transforme seu Atendimento',
    subtitle: 'Automação inteligente de agendamentos para empreendedoras.',
    url: 'https://www.instagram.com/p/DXNnIHVirFa/',
    likes: '248',
    comments: '34',
  },
  {
    id: 'post-2',
    imageUrl: '/images/instagram/pdf.png',
    title: 'Design & Tecnologia',
    subtitle: 'Sistemas intuitivos sob medida com padrão internacional.',
    url: 'https://www.instagram.com/p/DWm2TdWAbrE/?img_index=1',
    likes: '312',
    comments: '45',
  },
  {
    id: 'post-3',
    imageUrl: '/images/instagram/eb.png',
    title: 'Sem Taxas Abusivas',
    subtitle: '100% do lucro do seu serviço fica com você.',
    url: 'https://www.instagram.com/p/DXhSn9gimXM/',
    likes: '194',
    comments: '28',
  },
];
