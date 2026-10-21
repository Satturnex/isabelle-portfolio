# Portfólio — Isabelle Ferreira

Portfólio estático feito com HTML5, CSS3 e JavaScript puro. Sem framework, backend ou etapa de build.

## Executar localmente

1. Extraia a pasta do projeto.
2. Abra `index.html` no navegador.

Para uma experiência mais próxima de hospedagem, você também pode abrir a pasta com a extensão **Live Server** do VS Code.

## Estrutura

```text
isabelle-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── isabelle-retrato.jpg  (adicione a foto original)
└── README.md
```

## Personalização antes de publicar

- **Foto:** coloque uma fotografia autorizada em `assets/isabelle-retrato.jpg`. O espaço reservado aparece automaticamente enquanto o arquivo não existir.
- **WhatsApp:** no `index.html`, substitua `https://wa.me/?text=...` pelo link com o número comercial correto no formato internacional, por exemplo `https://wa.me/55DDDNUMERO?text=...`. Não publique um número sem autorização.
- **Instagram:** confirme se `@belleferrer_` continua sendo o perfil correto.
- **Resultados:** valide os números, período e contexto. As métricas vieram dos prints fornecidos.
- **Projetos:** os três cartões de portfólio são conceitos gráficos demonstrativos, não cases reais. Troque-os por trabalhos autorizados antes de publicar.
- **Textos:** confirme com Isabelle a formação, experiência e serviços oferecidos.
- **Fontes:** o site usa Google Fonts online. Se não houver internet, haverá fallback para fontes locais do sistema.

## Publicação

Pode ser hospedado como site estático no GitHub Pages, Netlify ou Vercel. Não há variáveis de ambiente nem dependências para instalar.

## Recursos implementados

- Layout responsivo para desktop, tablet e celular
- Menu mobile acessível
- Animações de entrada com IntersectionObserver
- Respeito à preferência `prefers-reduced-motion`
- Links de contato para WhatsApp e Instagram
- Ano do rodapé atualizado automaticamente
- Espaço reservado para fotografia original
