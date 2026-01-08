# 🎯 Plano de Adaptação - Template W3CRM para PIXUP PAY

## 📋 Análise das Imagens Recebidas

Baseado nas imagens do dashboard PIXUP PAY, identifiquei as seguintes funcionalidades e páginas:

### 1. **Dashboard Principal (Visão Geral)**
- **Cards de Métricas:**
  - Total Cash-in: R$ 0,00
  - Taxas Cash-in: R$ 0,00
  - Ticket Médio: R$ 0,00
  - Total Cash-out: R$ 0,00
  - Taxas Cash-out: R$ 0,00
  - Transações: 0
  - MEDs: R$ 0,00
  - Tarifas: R$ 0,00
  - Saldo Disponível: R$ 0,00

- **Gráfico de Barras:**
  - "Entradas e Saídas" (Depósitos vs Saques)
  - Filtros: Últimos 7 dias, Mês Atual, Semestre
  - Eixo Y: Valores em R$ (0 a R$ 360.000,00)
  - Legenda: Depósitos (azul) e Saques (vermelho)

- **Relatório do Mês Atual:**
  - Entradas: PIX, Taxas, Quantidade de PIX, Total Entradas
  - Saídas: PIX

### 2. **Página de Usuários**
- **Cards de Estatísticas:**
  - Cadastros totais: 12812
  - Cadastros ativos: 3272
  - Cadastros pendentes: 9479
  - Cadastros Bloqueados: 61

- **Filtros Avançados:**
  - Status (dropdown)
  - Bloqueado (dropdown)
  - Telefone (input - somente números)
  - Usuário (input - login)
  - Nome (input - Razão/Nome)
  - Email (input)
  - Documento CPF/CNPJ (input - somente números)
  - Data início / Data fim (datetime)
  - Adquirente Cashin / Cashout (dropdown)

- **Tabela de Usuários:**
  - Colunas: ID, Usuário, Saldo, Saldo Bloqueado, Faturamento, Nome, Número, CPF/CNPJ, Email, Adq. Cashin, Adq. Cashout
  - Paginação: "Mostrando 1 a 50 de 12.812 registros"
  - Controles de página anterior/próxima

### 3. **Página Entradas PIX (Extrato > Entradas PIX)**
- **Cards:**
  - Pagamentos Gerados: 0
  - Pagamentos Confirmados: R$ 0,00
  - Taxas: R$ 0,00
  - Splits: R$ 0,00

- **Top Lists:**
  - Top 3 Adquirentes (Conv., Pagas/Geradas, Valor Confirmado)
  - Top 3 Usuários (Conv., Pagas/Geradas, Valor Confirmado, Adquirente)

- **Filtros:**
  - Status (dropdown)
  - Usuário (input)
  - Adquirente (dropdown)
  - Data inicial / Data final (datetime)
  - ID da transação (2 inputs)
  - E2E (End-to-End ID - input)
  - Botões: Filtros avançados, Limpar, Filtrar

- **Tabela de Transações:**
  - Colunas: ID da transação, Data gerado, Data confirmado, Usuário, Código da instituição, Código E2E, Valor, Taxa, Split, Adquirente, Postback, Status
  - Paginação: "Mostrando 1 a 50 de 11.461 registros"

### 4. **Página Chaves Bloqueadas**
- **Filtros:**
  - Usuário (input)
  - Documento CPF/CNPJ (input)
  - Chave PIX (input - email/celular/aleatória)
  - Tipo da chave (dropdown)
  - Motivo (contém - input)
  - Período (data início / data fim)

- **Tabela:**
  - Colunas: ID, Usuário, CPJ/CNPJ, Chave PIX, Data bloqueio, Motivo, Ação
  - Ação: ícone de cadeado (desbloquear)

### 5. **Página Logs de Atividade**
- **Filtros:**
  - Mostrar registros (dropdown - 50)
  - Data (date picker)
  - Pesquisar (search input)

- **Tabela:**
  - Colunas: Data e hora, Admin, Usuário, Alterações, IP
  - Alterações: mostra mudanças de status, documentação, etc.

### 6. **Página Adquirentes Globais**
- **Filtros:**
  - Nome (input)
  - Status (dropdown)
  - Tipo (dropdown)
  - Chave PIX (input)
  - Banco Razão (input)
  - CNPJ Banco (input - somente números)
  - Cidade (input)

- **Tabela:**
  - Colunas: ID, Nome Adquirente, Prioridade Cashin, Prioridade Cashout, Chave PIX, Ações
  - Ações: ícone para editar/visualizar

---

## 🗂️ Estrutura de Menu Proposta

```
PIXUP PAY
├── Dashboard
├── Usuários
├── Extrato
│   ├── Entradas PIX
│   ├── Saídas PIX
│   ├── Saídas USDT
│   ├── Transferência Interna
│   └── Splits de pagamento
├── Chaves Bloqueadas
├── Logs de atividade
├── Adquirentes
└── MEDPIX
```

---

## 📁 Estrutura de Pastas e Arquivos

### Páginas a Criar/Adaptar:

```
src/app/
├── (dashboard)/
│   └── dashboard/
│       └── page.jsx              # Dashboard principal (Visão Geral)
├── (usuarios)/
│   └── usuarios/
│       └── page.jsx              # Página de Usuários
├── (extrato)/
│   ├── entradas-pix/
│   │   └── page.jsx              # Entradas PIX
│   ├── saidas-pix/
│   │   └── page.jsx              # Saídas PIX
│   ├── saidas-usdt/
│   │   └── page.jsx              # Saídas USDT
│   ├── transferencia-interna/
│   │   └── page.jsx              # Transferência Interna
│   └── splits-pagamento/
│       └── page.jsx              # Splits de Pagamento
├── (chaves)/
│   └── chaves-bloqueadas/
│       └── page.jsx              # Chaves Bloqueadas
├── (logs)/
│   └── logs-atividade/
│       └── page.jsx              # Logs de Atividade
├── (adquirentes)/
│   └── adquirentes/
│       └── page.jsx              # Adquirentes Globais
└── (medpix)/
    └── medpix/
        └── page.jsx              # MEDPIX
```

### Componentes a Criar:

```
src/components/
├── pixup/
│   ├── MetricCard.jsx            # Card de métrica (Total Cash-in, etc.)
│   ├── EntradasSaidasChart.jsx   # Gráfico de barras Entradas/Saídas
│   ├── RelatorioMensal.jsx       # Relatório do mês atual
│   ├── UserStatsCards.jsx        # Cards de estatísticas de usuários
│   ├── UserFilters.jsx           # Filtros da página de usuários
│   ├── UserTable.jsx             # Tabela de usuários
│   ├── TransactionFilters.jsx    # Filtros de transações
│   ├── TransactionTable.jsx      # Tabela de transações
│   ├── TopAdquirentes.jsx        # Top 3 Adquirentes
│   ├── TopUsuarios.jsx           # Top 3 Usuários
│   ├── ChaveBloqueadaFilters.jsx # Filtros de chaves bloqueadas
│   ├── ChaveBloqueadaTable.jsx   # Tabela de chaves bloqueadas
│   ├── LogsFilters.jsx           # Filtros de logs
│   ├── LogsTable.jsx             # Tabela de logs
│   ├── AdquirenteFilters.jsx     # Filtros de adquirentes
│   └── AdquirenteTable.jsx       # Tabela de adquirentes
└── shared/
    ├── Pagination.jsx            # Componente de paginação reutilizável
    ├── DateRangePicker.jsx       # Seletor de período de datas
    └── StatusBadge.jsx           # Badge de status
```

---

## 🎨 Design e Estilo

### Tema Dark
- Background escuro (como nas imagens)
- Cards com fundo escuro
- Textos claros
- Acentos em azul para links/ícones importantes

### Cores Principais (identificadas nas imagens)
- **Azul**: Logo PIXUP, links ativos, botões principais
- **Vermelho**: Saques no gráfico, valores negativos
- **Verde**: Botões secundários (Limpar)
- **Laranja**: Botões (Limpar)

### Layout
- Sidebar fixa à esquerda (dark)
- Conteúdo principal à direita
- Cards de métricas em grid (3 colunas)
- Tabelas responsivas com scroll horizontal quando necessário

---

## 🔧 Implementação - Fase por Fase

### FASE 1: Estrutura Base e Menu ✅

#### 1.1 Atualizar Menu
- [ ] Editar `src/layouts/nav/Menu.jsx`
- [ ] Remover itens não utilizados
- [ ] Adicionar itens do PIXUP PAY
- [ ] Configurar submenu de "Extrato"

#### 1.2 Criar Estrutura de Rotas
- [ ] Criar pastas de grupos de rotas
- [ ] Criar arquivos `page.jsx` para cada rota

---

### FASE 2: Dashboard Principal

#### 2.1 Cards de Métricas
- [ ] Criar componente `MetricCard.jsx`
- [ ] Criar componente `DashboardMetrics.jsx` (grid de cards)
- [ ] Integrar na página do dashboard
- [ ] Conectar com API (ou mock data inicialmente)

#### 2.2 Gráfico de Entradas e Saídas
- [ ] Criar componente `EntradasSaidasChart.jsx`
- [ ] Usar Recharts ou ApexCharts (já no projeto)
- [ ] Implementar filtros de período (7 dias, Mês Atual, Semestre)
- [ ] Configurar cores: azul (depósitos) e vermelho (saques)

#### 2.3 Relatório Mensal
- [ ] Criar componente `RelatorioMensal.jsx`
- [ ] Estruturar tabela de entradas e saídas
- [ ] Formatar valores em Real (R$)

---

### FASE 3: Página de Usuários

#### 3.1 Cards de Estatísticas
- [ ] Criar componente `UserStatsCards.jsx`
- [ ] Cards: Total, Ativos, Pendentes, Bloqueados
- [ ] Valores dinâmicos (API/mock)

#### 3.2 Filtros Avançados
- [ ] Criar componente `UserFilters.jsx`
- [ ] Implementar todos os campos de filtro
- [ ] Validações (CPF/CNPJ, email, etc.)
- [ ] Date pickers para período

#### 3.3 Tabela de Usuários
- [ ] Criar componente `UserTable.jsx`
- [ ] Usar `react-table` (já no projeto)
- [ ] Implementar ordenação por colunas
- [ ] Implementar paginação
- [ ] Formatação de valores monetários

---

### FASE 4: Página Entradas PIX

#### 4.1 Cards de Métricas
- [ ] Reutilizar componente `MetricCard.jsx`
- [ ] Cards: Gerados, Confirmados, Taxas, Splits

#### 4.2 Top Lists
- [ ] Criar componente `TopAdquirentes.jsx`
- [ ] Criar componente `TopUsuarios.jsx`
- [ ] Layout em duas colunas lado a lado

#### 4.3 Filtros e Tabela
- [ ] Criar `TransactionFilters.jsx`
- [ ] Criar `TransactionTable.jsx`
- [ ] Implementar filtros avançados (toggle)
- [ ] Colunas da tabela conforme especificação

---

### FASE 5: Páginas Restantes

#### 5.1 Chaves Bloqueadas
- [ ] Criar página e componentes
- [ ] Filtros específicos
- [ ] Ação de desbloqueio (modal/confirmação)

#### 5.2 Logs de Atividade
- [ ] Criar página e componentes
- [ ] Filtro de data
- [ ] Campo de pesquisa
- [ ] Formatação de alterações (diferença antes/depois)

#### 5.3 Adquirentes
- [ ] Criar página e componentes
- [ ] Filtros múltiplos
- [ ] Tabela com prioridades
- [ ] Ações de edição

#### 5.4 Outras Páginas de Extrato
- [ ] Saídas PIX
- [ ] Saídas USDT
- [ ] Transferência Interna
- [ ] Splits de Pagamento

---

### FASE 6: Componentes Compartilhados

#### 6.1 Paginação
- [ ] Componente reutilizável
- [ ] Controles: Anterior, Próximo, números de página
- [ ] Mostrar "Mostrando X a Y de Z registros"

#### 6.2 Date Range Picker
- [ ] Componente para seleção de período
- [ ] Integração com `react-datepicker` (já no projeto)

#### 6.3 Status Badge
- [ ] Badges coloridos para status
- [ ] Pendente (amarelo), Confirmado (verde), Bloqueado (vermelho), etc.

---

### FASE 7: Integração com API

#### 7.1 Estrutura de API
- [ ] Criar `src/lib/api/`
- [ ] Configurar cliente HTTP
- [ ] Endpoints:
  - `/api/dashboard/metrics`
  - `/api/users`
  - `/api/transactions`
  - `/api/chaves-bloqueadas`
  - `/api/logs`
  - `/api/adquirentes`

#### 7.2 Hooks Customizados
- [ ] `useDashboardMetrics.js`
- [ ] `useUsers.js`
- [ ] `useTransactions.js`
- [ ] `useChavesBloqueadas.js`
- [ ] `useLogs.js`
- [ ] `useAdquirentes.js`

---

## 📝 Formatação e Utilitários

### Formatação de Valores

```javascript
// src/lib/utils/format.js

// Formatar para Real Brasileiro
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

// Formatar CPF
export const formatCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

// Formatar CNPJ
export const formatCNPJ = (cnpj) => {
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
};

// Formatar Telefone
export const formatPhone = (phone) => {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};

// Formatar Data
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(new Date(date));
};
```

---

## 🎨 Componente Base: MetricCard

```javascript
// src/components/pixup/MetricCard.jsx
"use client"

import React from 'react';

const MetricCard = ({ title, value, icon, color = "primary" }) => {
  return (
    <div className="col-xl-3 col-sm-6">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">{title}</h6>
              <h3 className="mb-0">{value}</h3>
            </div>
            <div className={`icon-box bg-${color}-light`}>
              {icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
```

---

## 📊 Componente: EntradasSaidasChart

```javascript
// src/components/pixup/EntradasSaidasChart.jsx
"use client"

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EntradasSaidasChart = () => {
  const [period, setPeriod] = useState('7dias'); // 7dias, mes, semestre

  const data = [
    // Dados mockados - substituir por dados reais da API
    { date: '31/12', deposits: 180000, withdrawals: 90000 },
    { date: '01/01', deposits: 150000, withdrawals: 120000 },
    // ...
  ];

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h4 className="card-title">Entradas e Saídas</h4>
        <div className="btn-group" role="group">
          <button 
            type="button" 
            className={`btn btn-sm ${period === '7dias' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setPeriod('7dias')}
          >
            Últimos 7 dias
          </button>
          <button 
            type="button" 
            className={`btn btn-sm ${period === 'mes' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setPeriod('mes')}
          >
            Mês Atual
          </button>
          <button 
            type="button" 
            className={`btn btn-sm ${period === 'semestre' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setPeriod('semestre')}
          >
            Semestre
          </button>
        </div>
      </div>
      <div className="card-body">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis 
              tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`}
            />
            <Legend />
            <Bar dataKey="deposits" fill="#0D99FF" name="Depósitos" />
            <Bar dataKey="withdrawals" fill="#FF5E5E" name="Saques" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EntradasSaidasChart;
```

---

## 🔄 Próximos Passos Imediatos

### 1. Atualizar Menu
- Editar `src/layouts/nav/Menu.jsx` com a estrutura do PIXUP PAY

### 2. Criar Estrutura de Rotas
- Criar todas as pastas necessárias
- Criar arquivos `page.jsx` básicos

### 3. Criar Dashboard Principal
- Componentes de cards
- Gráfico de entradas/saídas
- Relatório mensal

### 4. Implementar Página de Usuários
- Cards de estatísticas
- Filtros
- Tabela

---

## 📚 Referências e Recursos

### Bibliotecas Já Instaladas
- ✅ `react-table` - Para tabelas
- ✅ `recharts` - Para gráficos
- ✅ `react-datepicker` - Para seleção de datas
- ✅ `react-bootstrap` - Para componentes UI
- ✅ `formik` + `yup` - Para formulários e validação

### Bibliotecas Adicionais Recomendadas
- [ ] `date-fns` - Manipulação de datas (se ainda não tiver)
- [ ] `axios` - Cliente HTTP (se preferir ao fetch nativo)

---

## ⚠️ Notas Importantes

1. **Dados Mock Inicialmente**: Começar com dados mockados e depois conectar à API real
2. **Responsividade**: Garantir que todas as páginas sejam responsivas
3. **Performance**: Usar lazy loading para componentes pesados
4. **Validações**: Implementar validações de CPF/CNPJ, email, etc.
5. **Acessibilidade**: Manter padrões de acessibilidade (ARIA labels, etc.)

---

**Data de Criação**: Dezembro 2024  
**Status**: Planejamento  
**Próxima Revisão**: Após implementação da Fase 1

