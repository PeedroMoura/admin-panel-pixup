# 📋 Guia Completo de Reformulação - W3CRM Template

## 📌 Índice

1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Análise da Estrutura Atual](#análise-da-estrutura-atual)
3. [Planejamento e Preparação](#planejamento-e-preparação)
4. [Fase 1: Limpeza e Otimização](#fase-1-limpeza-e-otimização)
5. [Fase 2: Customização de Identidade Visual](#fase-2-customização-de-identidade-visual)
6. [Fase 3: Estrutura de Menu e Navegação](#fase-3-estrutura-de-menu-e-navegação)
7. [Fase 4: Páginas e Rotas](#fase-4-páginas-e-rotas)
8. [Fase 5: Integração com Backend](#fase-5-integração-com-backend)
9. [Fase 6: Otimização e Performance](#fase-6-otimização-e-performance)
10. [Checklist Completo](#checklist-completo)
11. [Comandos Úteis](#comandos-úteis)
12. [Solução de Problemas Comuns](#solução-de-problemas-comuns)

---

## 🔍 Visão Geral do Projeto

### Informações Técnicas

- **Framework**: Next.js 14.2.17 (App Router)
- **React**: 18.3.1
- **Node.js**: Requerido (versão 18+ recomendada)
- **Gerenciador de Pacotes**: npm
- **Tipo**: Template de Dashboard/CRM Administrativo
- **Arquitetura**: Baseada em App Router do Next.js 14

### Tecnologias Principais

| Categoria | Tecnologias |
|-----------|-------------|
| **Framework Core** | Next.js 14, React 18 |
| **UI Components** | React-Bootstrap 2.10.5, RSuite 5.74.2 |
| **Formulários** | Formik 2.4.6, Yup 1.4.0, CKEditor 43.3.1 |
| **Gráficos** | ApexCharts, Chart.js 5.2.0, Recharts 2.13.3 |
| **Utilitários** | React-Select, React-Datepicker, SweetAlert2 |
| **Estilização** | SCSS/CSS, Bootstrap |

### Estrutura de Diretórios

```
src/
├── app/                    # Rotas do Next.js (App Router)
│   ├── (aikit)/           # Grupo de rotas: AI Kit
│   ├── (apps)/            # Grupo de rotas: Aplicações
│   ├── (bootstrap)/       # Grupo de rotas: Componentes Bootstrap
│   ├── (charts)/          # Grupo de rotas: Gráficos
│   ├── (cms)/             # Grupo de rotas: CMS
│   ├── (dashboard)/       # Grupo de rotas: Dashboards
│   ├── (ecommerce)/       # Grupo de rotas: E-commerce
│   ├── (email)/           # Grupo de rotas: Email
│   ├── (error)/           # Grupo de rotas: Páginas de Erro
│   ├── (forms)/           # Grupo de rotas: Formulários
│   ├── (plugins)/         # Grupo de rotas: Plugins
│   ├── (table)/           # Grupo de rotas: Tabelas
│   ├── (widget)/          # Grupo de rotas: Widgets
│   ├── layout.jsx         # Layout raiz
│   ├── page.js            # Página inicial
│   └── not-found.jsx      # Página 404
├── assets/                # Recursos estáticos
│   ├── css/              # CSS compilados
│   ├── scss/             # SCSS fonte
│   ├── images/           # Imagens
│   └── icons/            # Ícones SVG
├── components/            # Componentes React reutilizáveis
├── constants/             # Constantes e configurações
├── context/               # Context API (ThemeContext)
└── layouts/               # Componentes de layout
    └── nav/              # Componentes de navegação
```

---

## 📊 Análise da Estrutura Atual

### Pontos Fortes ✅

1. **Arquitetura Modular**: Componentes bem organizados por funcionalidade
2. **Sistema de Temas**: ThemeContext permite customização completa
3. **App Router**: Uso correto do sistema de rotas do Next.js 14
4. **Componentes Reutilizáveis**: Estrutura facilitando reutilização
5. **Sistema de Layout**: Layout flexível e configurável

### Pontos de Atenção ⚠️

1. **Muitas Dependências**: 40+ pacotes podem impactar bundle size
2. **Páginas Desnecessárias**: Muitas páginas de exemplo podem ser removidas
3. **Assets Pesados**: Imagens e ícones podem ser otimizados
4. **Estilos Mistos**: CSS e SCSS em múltiplos locais
5. **Configuração de Menu**: Centralizada, mas precisa ser adaptada

---

## 🎯 Planejamento e Preparação

### Antes de Começar

1. **Backup do Projeto**
   ```bash
   # Criar uma cópia completa do projeto original
   cp -r projeto-original projeto-backup
   ```

2. **Instalar Dependências**
   ```bash
   npm install
   ```

3. **Verificar Ambiente**
   ```bash
   node --version  # Deve ser 18+
   npm --version   # Deve ser 9+
   ```

4. **Rodar Projeto Original**
   ```bash
   npm run dev
   # Acessar http://localhost:3000
   # Testar todas as funcionalidades principais
   ```

### Checklist de Planejamento

- [ ] Identificar funcionalidades necessárias
- [ ] Listar páginas que serão utilizadas
- [ ] Definir identidade visual (cores, logo, fontes)
- [ ] Mapear estrutura de menu desejada
- [ ] Definir integrações necessárias (API, autenticação)
- [ ] Estabelecer cronograma de customização

---

## 🧹 Fase 1: Limpeza e Otimização

### 1.1 Remover Páginas Não Utilizadas

**Arquivos a Analisar e Possivelmente Remover:**

```
src/app/
├── (aikit)/          # ⚠️ Avaliar: Remover se não usar AI Kit
├── (apps)/           # ⚠️ Manter: Geralmente necessário
├── (bootstrap)/      # ⚠️ Avaliar: Manter se precisar de exemplos
├── (charts)/         # ⚠️ Manter: Útil para dashboards
├── (cms)/            # ⚠️ Avaliar: Remover se não usar CMS
├── (ecommerce)/      # ⚠️ Avaliar: Remover se não usar e-commerce
├── (email)/          # ⚠️ Manter: Geralmente útil
├── (error)/          # ✅ Manter: Páginas de erro são essenciais
├── (forms)/          # ⚠️ Avaliar: Manter exemplos ou criar próprios
├── (plugins)/        # ⚠️ Avaliar: Remover plugins não utilizados
├── (table)/          # ⚠️ Manter: Tabelas são essenciais
└── (widget)/         # ⚠️ Avaliar: Manter se usar widgets
```

**Passos para Remoção:**

1. Identificar páginas não utilizadas
2. Verificar se algum componente depende delas
3. Remover pastas de rotas não utilizadas
4. Atualizar menu em `src/layouts/nav/Menu.jsx`

### 1.2 Limpar Dependências Não Utilizadas

**Análise de Dependências:**

```json
// package.json - Dependências principais
{
  "@ckeditor/ckeditor5-build-classic": "^43.3.1",  // ⚠️ Se não usar editor
  "lightgallery": "^2.8.1",                        // ⚠️ Se não usar galeria
  "react-apexcharts": "^1.5.0",                    // ⚠️ Se usar apenas Chart.js
  "recharts": "^2.13.3",                           // ⚠️ Se usar apenas ApexCharts
  "react-sparklines": "^1.7.0",                    // ⚠️ Se não usar sparklines
  "react-svg-worldmap": "^2.0.0-alpha.16"          // ⚠️ Se não usar mapas
}
```

**Comando para Identificar Dependências Não Utilizadas:**

```bash
# Instalar ferramenta de análise (opcional)
npm install -g depcheck

# Analisar dependências
depcheck
```

**Processo de Remoção:**

1. Executar `depcheck` para identificar dependências não usadas
2. Testar cada remoção individualmente
3. Remover dependências uma por uma
4. Testar aplicação após cada remoção

### 1.3 Otimizar Assets

**Localização de Assets:**

```
src/assets/
├── images/        # ⚠️ Remover imagens não utilizadas
├── icons/         # ⚠️ Manter apenas ícones necessários
└── scss/          # ⚠️ Limpar estilos não utilizados
```

**Processo:**

1. Identificar imagens não referenciadas no código
2. Converter imagens para formatos otimizados (WebP quando possível)
3. Remover ícones SVG não utilizados
4. Limpar arquivos SCSS não importados

---

## 🎨 Fase 2: Customização de Identidade Visual

### 2.1 Sistema de Cores

**Arquivo Principal:** `src/context/ThemeContext.jsx`

**Configuração de Cores Padrão:**

```javascript
// ThemeContext.jsx - Linhas 12-29
const initialState = {
  primaryColor: "color_1",        // ⚠️ Alterar para sua cor primária
  secondaryColor: "color_1",      // ⚠️ Alterar para sua cor secundária
  navigationHader: "color_4",     // ⚠️ Cor do cabeçalho
  haderColor: "color_4",          // ⚠️ Cor do header
  sidebarColor: "color_1",        // ⚠️ Cor da sidebar
  // ...
};
```

**Arquivos SCSS de Cores:**

```
src/assets/scss/
├── abstract/_variable.scss      # Variáveis de cores
├── base/_colors.scss            # Definições de cores
└── layout/theme/                # Temas de cores
    ├── _color.scss
    ├── _color-variable.scss
    └── _primary-color.scss
```

**Passos para Customizar Cores:**

1. **Definir Paleta de Cores**
   - Escolher cor primária
   - Escolher cor secundária
   - Definir cores de destaque
   - Escolher cores neutras

2. **Atualizar Variáveis SCSS**
   - Editar `src/assets/scss/abstract/_variable.scss`
   - Atualizar valores de `$primary-color`, `$secondary-color`, etc.

3. **Atualizar ThemeContext**
   - Modificar valores iniciais em `ThemeContext.jsx`
   - Ajustar opções de cores disponíveis

4. **Testar Aplicação**
   - Verificar todas as páginas
   - Testar modo claro/escuro
   - Validar contraste e acessibilidade

### 2.2 Logo e Branding

**Localização de Arquivos:**

```
src/assets/images/              # Logo padrão do template
public/                         # Arquivos estáticos (logo aqui)
```

**Arquivos a Substituir:**

1. **Logo Principal**
   - Localizar onde o logo é usado: `src/layouts/nav/Header.jsx` ou `NavHader.jsx`
   - Substituir imagem em `src/assets/images/` ou `public/`
   - Atualizar referências no código

2. **Favicon**
   - Substituir `src/app/favicon.ico`
   - Substituir `public/favicon.ico`
   - Adicionar outros tamanhos se necessário (32x32, 16x16)

3. **Metadata**
   - Editar `src/app/layout.jsx` (linhas 16-19)
   ```javascript
   export const metadata = {
     title: "W3CRM - React Nextjs Admin Dashboard Template", // ⚠️ Alterar
     description: "Elevate your administrative efficiency...", // ⚠️ Alterar
   };
   ```

### 2.3 Tipografia

**Arquivo de Fontes:** `src/assets/scss/base/_fonts.scss`

**Configuração no ThemeContext:**

```javascript
// ThemeContext.jsx - Linhas 110-116
const fontFamily = [
  { value: "poppins", label: "Poppins" },      // ⚠️ Padrão
  { value: "roboto", label: "Roboto" },
  { value: "nunito", label: "Nunito" },
  { value: "opensans", label: "Open Sans" },
  { value: "HelveticaNeue", label: "HelveticaNeue" },
];
```

**Passos:**

1. Escolher fonte corporativa
2. Adicionar fonte ao projeto (Google Fonts ou local)
3. Atualizar `_fonts.scss`
4. Atualizar `ThemeContext.jsx` se necessário

---

## 🗂️ Fase 3: Estrutura de Menu e Navegação

### 3.1 Configuração do Menu

**Arquivo Principal:** `src/layouts/nav/Menu.jsx`

**Estrutura Atual:**

```javascript
// Menu.jsx - Exemplo de estrutura
export const MenuList = [
  {
    title: 'YOUR COMPANY',          // ⚠️ Alterar título
    classsChange: 'menu-title'
  },
  {
    title: 'Dashboard',
    classsChange: 'mm-collapse',
    iconStyle: SVGICON.Home,
    content: [
      {
        title: 'Dashboard Light',   // ⚠️ Personalizar
        to: '/dashboard',
      },
      // ...
    ],
  },
  // ...
];
```

### 3.2 Tipos de Itens de Menu

**Menu Simples (sem submenu):**

```javascript
{
  title: 'Employees',
  iconStyle: SVGICON.Employe,
  to: '/employee',
}
```

**Menu com Submenu:**

```javascript
{
  title: 'Tasks',
  classsChange: 'mm-collapse',
  iconStyle: SVGICON.Task,
  content: [
    {
      title: 'Tasks',
      to: '/task',
    },
    {
      title: 'Task Summary',
      to: '/task-summary',
    },
  ]
}
```

### 3.3 Ícones

**Localização:** `src/constants/theme.jsx` (seção SVGICON)

**Como Adicionar Novo Ícone:**

1. Importar ícone SVG ou usar ícone do RSuite
2. Adicionar ao objeto `SVGICON` em `src/constants/theme.jsx`
3. Referenciar no menu

### 3.4 Passos para Reestruturar Menu

1. **Mapear Estrutura Desejada**
   - Listar todas as páginas/sessões necessárias
   - Organizar hierarquicamente
   - Definir ícones para cada item

2. **Editar Menu.jsx**
   - Remover itens não utilizados
   - Adicionar novos itens
   - Reorganizar ordem
   - Atualizar títulos

3. **Criar Rotas Correspondentes**
   - Verificar se rotas existem em `src/app/`
   - Criar novas rotas se necessário
   - Garantir que `to:` corresponde às rotas

4. **Testar Navegação**
   - Testar todos os links
   - Verificar submenus
   - Validar comportamento responsivo

---

## 📄 Fase 4: Páginas e Rotas

### 4.1 Sistema de Rotas do Next.js 14

**Estrutura de Rotas:**

```
src/app/
├── layout.jsx          # Layout raiz (aplicado a todas as rotas)
├── page.js             # Rota: / (página inicial)
├── (dashboard)/        # Grupo de rotas (não aparece na URL)
│   ├── dashboard/
│   │   └── page.jsx    # Rota: /dashboard
│   └── employee/
│       └── page.jsx    # Rota: /employee
└── not-found.jsx       # Rota: /404 (Next.js automático)
```

### 4.2 Criando Nova Página

**Exemplo: Criar página `/products`**

1. **Criar Diretório e Arquivo:**
   ```
   src/app/products/page.jsx
   ```

2. **Estrutura Básica:**
   ```javascript
   import PageTitle from "@/layouts/PageTitle";

   export default function ProductsPage() {
     return (
       <>
         <PageTitle activeMenu="Produtos" motherMenu="Loja" />
         <div className="row">
           <div className="col-xl-12">
             <div className="card">
               <div className="card-header">
                 <h4 className="card-title">Produtos</h4>
               </div>
               <div className="card-body">
                 {/* Conteúdo da página */}
               </div>
             </div>
           </div>
         </div>
       </>
     );
   }
   ```

3. **Adicionar ao Menu:**
   - Editar `src/layouts/nav/Menu.jsx`
   - Adicionar item de menu apontando para `/products`

### 4.3 Removendo Páginas

**Processo Seguro:**

1. Verificar dependências
   ```bash
   # Buscar referências no código
   grep -r "nome-da-rota" src/
   ```

2. Remover arquivos e diretórios
   ```bash
   # Exemplo: remover rota de exemplo
   rm -rf src/app/(ecommerce)/ecom-product-grid
   ```

3. Remover do menu
   - Editar `Menu.jsx`
   - Remover item correspondente

4. Testar aplicação
   - Verificar se não há erros
   - Testar rotas relacionadas

### 4.4 Páginas Especiais

**Páginas de Erro:**

```
src/app/(error)/
├── page-error-400/page.jsx    # Erro 400
├── page-error-403/page.jsx    # Erro 403
├── page-error-404/page.jsx    # Erro 404
├── page-error-500/page.jsx    # Erro 500
└── page-error-503/page.jsx    # Erro 503
```

**Páginas de Autenticação:**

```
src/app/(error)/
├── login/page.jsx             # Login
├── page-register/page.jsx     # Registro
└── page-lock-screen/page.jsx  # Tela de bloqueio
```

**Nota:** Páginas em `(error)` não usam o layout padrão (definido em `Layout.jsx`)

---

## 🔌 Fase 5: Integração com Backend

### 5.1 Configuração de API

**Estrutura Recomendada:**

```
src/
├── lib/
│   ├── api/
│   │   ├── client.js         # Cliente HTTP (axios/fetch)
│   │   ├── auth.js           # Autenticação
│   │   └── endpoints.js      # Endpoints da API
│   └── utils/
│       └── constants.js      # Constantes (URLs, etc.)
```

**Exemplo de Cliente API:**

```javascript
// src/lib/api/client.js
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const token = localStorage.getItem('token'); // ou cookies

    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // ... outros métodos (put, delete, etc.)
}

export default new ApiClient(API_URL);
```

### 5.2 Variáveis de Ambiente

**Arquivo:** `.env.local` (criar na raiz do projeto)

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_NAME=Meu CRM
```

**Uso:**

```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

### 5.3 Autenticação

**Estratégias Comuns:**

1. **JWT (JSON Web Tokens)**
   - Armazenar token em `localStorage` ou `cookies`
   - Enviar token em cada requisição
   - Implementar refresh token

2. **NextAuth.js** (Recomendado para Next.js)
   ```bash
   npm install next-auth
   ```
   - Integração nativa com Next.js
   - Suporte a múltiplos providers
   - Gerenciamento de sessão

**Exemplo Básico de Autenticação:**

```javascript
// src/lib/auth.js
export const login = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  
  const data = await response.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
  }
  return data;
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
```

### 5.4 Proteção de Rotas

**Middleware do Next.js 14:**

```javascript
// src/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token');
  const { pathname } = request.nextUrl;

  // Rotas públicas
  const publicRoutes = ['/login', '/page-register'];
  const isPublicRoute = publicRoutes.includes(pathname);

  // Se não autenticado e tentando acessar rota privada
  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Se autenticado e tentando acessar rota pública
  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
```

---

## ⚡ Fase 6: Otimização e Performance

### 6.1 Otimização de Bundle

**Análise de Bundle:**

```bash
# Instalar analyzer
npm install @next/bundle-analyzer

# Adicionar ao next.config.mjs
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // ... outras configurações
});

# Executar análise
ANALYZE=true npm run build
```

**Estratégias de Otimização:**

1. **Lazy Loading de Componentes**
   ```javascript
   import dynamic from 'next/dynamic';
   
   const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
     loading: () => <p>Carregando...</p>,
     ssr: false, // Se não precisar de SSR
   });
   ```

2. **Code Splitting Automático**
   - Next.js já faz isso automaticamente com App Router
   - Evitar imports desnecessários de bibliotecas grandes

3. **Remover Dependências Não Utilizadas**
   - Executar `depcheck`
   - Remover bibliotecas pesadas não usadas

### 6.2 Otimização de Imagens

**Next.js Image Component:**

```javascript
import Image from 'next/image';

<Image
  src="/logo.png"
  alt="Logo"
  width={200}
  height={50}
  priority // Para imagens above-the-fold
/>
```

**Processo:**

1. Converter imagens para formatos otimizados (WebP)
2. Usar componente `Image` do Next.js
3. Implementar lazy loading para imagens abaixo da dobra

### 6.3 Otimização de CSS/SCSS

**Análise:**

1. Identificar CSS não utilizado
2. Remover estilos não referenciados
3. Minificar CSS em produção (já feito pelo Next.js)

**Ferramentas Úteis:**

```bash
# PurgeCSS (remover CSS não usado)
npm install @fullhuman/postcss-purgecss
```

### 6.4 Performance Metrics

**Ferramentas:**

1. **Lighthouse** (Chrome DevTools)
   - Executar auditoria de performance
   - Verificar métricas Core Web Vitals

2. **Next.js Analytics**
   ```bash
   npm install @vercel/analytics
   ```

3. **Web Vitals**
   ```bash
   npm install web-vitals
   ```

---

## ✅ Checklist Completo

### Pré-Customização

- [ ] Backup completo do projeto original
- [ ] Dependências instaladas e projeto funcionando
- [ ] Ambiente de desenvolvimento configurado
- [ ] Testado projeto original completamente
- [ ] Documentação lida e entendida

### Limpeza

- [ ] Páginas não utilizadas identificadas
- [ ] Páginas não utilizadas removidas
- [ ] Dependências não utilizadas identificadas
- [ ] Dependências não utilizadas removidas
- [ ] Assets não utilizados removidos
- [ ] Imagens otimizadas

### Identidade Visual

- [ ] Paleta de cores definida
- [ ] Variáveis de cores atualizadas no SCSS
- [ ] ThemeContext atualizado com novas cores
- [ ] Logo substituído
- [ ] Favicon atualizado
- [ ] Metadata atualizada (title, description)
- [ ] Tipografia customizada (se necessário)

### Menu e Navegação

- [ ] Estrutura de menu planejada
- [ ] Menu.jsx atualizado
- [ ] Ícones configurados
- [ ] Rotas criadas/removidas conforme necessário
- [ ] Navegação testada em todas as páginas
- [ ] Menu responsivo testado

### Páginas

- [ ] Páginas necessárias identificadas
- [ ] Páginas desnecessárias removidas
- [ ] Novas páginas criadas (se necessário)
- [ ] Páginas de erro customizadas
- [ ] Páginas de autenticação customizadas

### Backend/API

- [ ] Estrutura de API definida
- [ ] Cliente HTTP configurado
- [ ] Variáveis de ambiente configuradas
- [ ] Sistema de autenticação implementado
- [ ] Proteção de rotas implementada
- [ ] Integração com backend testada

### Performance

- [ ] Bundle analisado
- [ ] Code splitting implementado onde necessário
- [ ] Imagens otimizadas
- [ ] CSS otimizado
- [ ] Performance metrics verificadas
- [ ] Lighthouse score aceitável (> 80)

### Testes Finais

- [ ] Todas as rotas funcionando
- [ ] Menu funcionando corretamente
- [ ] Autenticação funcionando
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] Navegadores principais testados
- [ ] Sem erros no console
- [ ] Build de produção sem erros

### Documentação

- [ ] README atualizado
- [ ] Instruções de instalação documentadas
- [ ] Variáveis de ambiente documentadas
- [ ] Estrutura de API documentada
- [ ] Guia de deploy criado (se necessário)

---

## 🛠️ Comandos Úteis

### Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar build de produção localmente
npm run start

# Linting
npm run lint
```

### Análise e Limpeza

```bash
# Analisar dependências não usadas
npx depcheck

# Analisar bundle size
ANALYZE=true npm run build

# Verificar tamanho de node_modules
du -sh node_modules

# Limpar cache do Next.js
rm -rf .next
```

### Git (Controle de Versão)

```bash
# Inicializar repositório (se ainda não feito)
git init

# Adicionar arquivos
git add .

# Commit inicial
git commit -m "Initial commit - Template base customizado"

# Criar branch para desenvolvimento
git checkout -b desenvolvimento

# Verificar status
git status

# Ver histórico
git log
```

### Deploy

```bash
# Build para produção
npm run build

# Verificar build localmente
npm run start

# Deploy no Vercel (recomendado para Next.js)
vercel

# Ou usando Git
git push origin main  # Vercel detecta automaticamente
```

---

## 🔧 Solução de Problemas Comuns

### Erro: "Module not found"

**Causa:** Dependência não instalada ou import incorreto

**Solução:**
```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install

# Verificar import
# Usar alias @/ para src/
import Component from '@/components/Component'
```

### Erro: "Cannot find module '@/...'"

**Causa:** Configuração de paths incorreta

**Solução:**
```json
// jsconfig.json deve conter:
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Build Falhando

**Causa:** Erros de sintaxe ou imports incorretos

**Solução:**
```bash
# Ver erros detalhados
npm run build

# Verificar linting
npm run lint

# Limpar cache
rm -rf .next
npm run build
```

### Estilos Não Aplicando

**Causa:** CSS/SCSS não importado corretamente

**Solução:**
- Verificar imports em `src/app/layout.jsx`
- Verificar se arquivo SCSS está sendo compilado
- Verificar ordem de imports

### Menu Não Aparecendo

**Causa:** Erro no Menu.jsx ou layout não aplicado

**Solução:**
- Verificar se `Menu.jsx` está correto
- Verificar se `Layout.jsx` está importando Menu
- Verificar console do navegador para erros

### Performance Lenta

**Causa:** Muitas dependências ou assets pesados

**Solução:**
1. Analisar bundle: `ANALYZE=true npm run build`
2. Remover dependências não usadas
3. Implementar lazy loading
4. Otimizar imagens
5. Verificar se está usando `Image` do Next.js

---

## 📚 Recursos Adicionais

### Documentação Oficial

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [React 18 Documentation](https://react.dev)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [RSuite Components](https://rsuitejs.com/)

### Ferramentas Úteis

- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- [Depcheck](https://www.npmjs.com/package/depcheck)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Comunidade

- [Next.js Discord](https://nextjs.org/discord)
- [Stack Overflow - Next.js](https://stackoverflow.com/questions/tagged/next.js)
- [GitHub Issues - Next.js](https://github.com/vercel/next.js/issues)

---

## 📝 Notas Finais

### Boas Práticas

1. **Sempre fazer backup antes de mudanças grandes**
2. **Testar após cada mudança significativa**
3. **Comentar código complexo**
4. **Manter estrutura consistente**
5. **Documentar decisões importantes**

### Recomendações

1. **Usar Git desde o início** para controle de versão
2. **Criar branches para features** diferentes
3. **Testar em múltiplos navegadores**
4. **Validar acessibilidade** (WCAG)
5. **Manter dependências atualizadas** (com cuidado)

### Próximos Passos

Após completar a customização:

1. Implementar testes (Jest, React Testing Library)
2. Configurar CI/CD
3. Otimizar SEO (se aplicável)
4. Implementar monitoramento de erros (Sentry)
5. Documentar API e funcionalidades

---

## 📞 Suporte

Se encontrar problemas durante a customização:

1. Verificar documentação oficial
2. Consultar issues no GitHub do template
3. Buscar em fóruns da comunidade
4. Revisar logs de erro detalhadamente

---

**Última Atualização:** Dezembro 2024  
**Versão do Template:** W3CRM v1.0  
**Versão do Next.js:** 14.2.17

---

*Este guia foi criado para facilitar o processo de customização do template W3CRM. Siga os passos com atenção e sempre faça backups antes de mudanças significativas.*

