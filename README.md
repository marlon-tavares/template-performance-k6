# technical-tests-k6

Este repositório contém scripts de testes de carga utilizando o K6. A seguir, você encontrará instruções detalhadas sobre como instalar o K6 e rodar os testes em diferentes sistemas operacionais.

## Tabela de Conteúdos

- [Pré-requisitos](#pré-requisitos)
- [Instalação do K6](#instalação-do-k6)
  - [Windows](#windows)
  - [Linux](#linux)
  - [macOS](#macos)
- [Rodando o Projeto](#rodando-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)

## Pré-requisitos

- Node.js (opcional, caso utilize ferramentas adicionais)
- Git (para clonar o repositório)

## Instalação do K6

### Windows

1. **Usando Chocolatey**
   - Abra o PowerShell como administrador e execute:
     ```bash
     choco install k6
     ```

2. **Usando Scoop**
   - Se você prefere Scoop, execute:
     ```bash
     scoop install k6
     ```

3. **Download Direto**
   - Baixe o binário do K6 [aqui](https://github.com/grafana/k6/releases).
   - Extraia o arquivo e mova o binário para um diretório que esteja no seu `PATH`.

### Linux

1. **Usando o APT (Debian/Ubuntu)**
   - Execute os seguintes comandos:
     ```bash
     sudo apt update
     sudo apt install -y k6
     ```

2. **Usando o RPM (CentOS/Fedora)**
   - Execute:
     ```bash
     sudo yum install -y k6
     ```

3. **Download Direto**
   - Baixe o binário do K6 [aqui](https://github.com/grafana/k6/releases).
   - Extraia o arquivo e mova o binário para um diretório que esteja no seu `PATH`.

### macOS

1. **Usando Homebrew**
   - Abra o terminal e execute:
     ```bash
     brew install k6
     ```

2. **Download Direto**
   - Baixe o binário do K6 [aqui](https://github.com/grafana/k6/releases).
   - Extraia o arquivo e mova o binário para um diretório que esteja no seu `PATH`.

## Rodando o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/{{seu-user-git}}/technical-tests-k6.git

2. Execute o seguinte comando para executar o teste:
   ```bash
   k6 run load-test.js

## Análise
   - Na pasta de report tem um relatório html de uma execução e uma análise detalhada.
