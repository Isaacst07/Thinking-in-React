# produtos-web

Implementação do exemplo **"Thinking in React"** da documentação oficial do React
(https://react.dev/learn/thinking-in-react) — uma tabela de produtos filtrável por
texto e por disponibilidade em estoque.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) para estilização
- Deploy: Vercel

## Estrutura dos componentes

Seguindo a decomposição proposta pela documentação do React:

```
FilterableProductTable      (estado: filterText, inStockOnly)
├── SearchBar                (input de busca + checkbox "em estoque")
└── ProductTable             (monta as linhas filtradas)
    ├── ProductCategoryRow   (cabeçalho de categoria)
    └── ProductRow           (linha de um produto)
```

- `src/types.ts` — tipo `Product`
- `src/data.ts` — dados estáticos dos produtos
- `src/components/*` — um arquivo por componente

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```
