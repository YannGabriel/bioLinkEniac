# 🧬 Projeto BioLink com React + TailwindCSS

Este repositório contém um projeto de cartão digital responsivo — estilo **BioLink** — desenvolvido com **React 19**, **TailwindCSS 3**, **Vite** e **TypeScript**. Ideal para criar um mini-portfólio pessoal e responsivo, como mostrado abaixo.

## 📸 Preview

![preview](./src/assets//images//finalResult.png)

## 🚀 O que está incluído?

- Header com nome, imagem e título
- Botão de destaque para portfólio
- Links para redes sociais com ícones
- Destaque para o último projeto
- Embed de faixa do Spotify
- Layout responsivo mobile-first

## 📁 Estrutura de Pastas (Nova)

```
src/
├── assets/
│   └── images/
│       └── userImage.png
│
├── components/
│   ├── atoms/
│   │   └── Button.tsx
│   │
│   ├── molecules/
│   │   ├── ButtonGroup/
│   │   │   └── index.tsx
│   │   ├── HeaderUser/
│   │   │   └── index.tsx
│   │   ├── LastProject/
│   │   │   └── index.tsx
│   │   ├── PortfolioButton/
│   │   │   └── index.tsx
│   │   └── SpotifyMusic/
│   │       └── index.tsx
│   │
│   └── organisms/
│       └── ButtonsSection/
│           └── index.tsx
│
├── styles/
│   ├── App.css
│   └── Layout.tsx
│
├── config/
│   └── social_medias.json
│
├── main.tsx
├── App.tsx
├── vite-env.d.ts
```

## 📦 Tecnologias Utilizadas

- **React 19**
- **TailwindCSS 3.4.17**
- **TypeScript 5.8**
- **Vite 6**
- **React Icons**
- ESLint + Plugins (para padronização e qualidade de código)

## 📌 Organização baseada em Atomic Design

- **atoms/** – Botões e elementos básicos reutilizáveis
- **molecules/** – Grupos funcionais de componentes
- **organisms/** – Seções maiores e compostas
- **styles/** – Estilos globais e layout
- **config/** – Arquivos estáticos e configurações

## 📄 Licença

MIT © Yann Gabriel
