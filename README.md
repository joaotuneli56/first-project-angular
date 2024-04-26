# INRODUÇÃO AO ANGULAR

![alt text](IMG/angular.png)



# Projeto Angular

Este documento fornece uma visão geral do Angular, detalhando componentes, estruturas, estilos, instalação, criação de projetos, e mais.

## O que é o Angular?

Angular é uma plataforma de desenvolvimento robusta para construir aplicações web e mobile:

- Construída com TypeScript.
- Baseada em componentes.
- Possui arquitetura modular, o que possibilita reutilização de recursos.
- Oferece uma variedade de bibliotecas para:
  - Gerenciamento de formulários.
  - Comunicação cliente-servidor.
  - Roteamento.
  - E outros.

## Pré-requisitos

Para trabalhar com Angular, você deve ter conhecimento básico em:

- HTML
- CSS
- JavaScript
- JSON

## Instalação e Criação de Projeto

### Instalar o CLI do Angular

```bash
npm install -g @angular/cli
```

Caso encontre problemas com permissões, utilize o comando no PowerShell:

```powershell
Set-ExecutionPolicy RemoteSigned
```

### Criar o projeto

```bash
ng new nome_projeto
```

### Executar o projeto

```bash
ng serve
```

## Estrutura do Projeto Angular

- `node_modules`: Dependências do projeto.
- `src`: Código fonte da aplicação.
  - `src/app`: Componentes, services, etc.
- Os componentes são divididos entre arquivos TS, HTML, CSS e testes.

### Criar um Componente

```bash
ng generate component components/first-component
```

## Componente

Os componentes são a base para criação de aplicações Angular:

- Cada componente possui um decorator que define:
  - Um seletor.
  - Um template HTML.
  - Uma classe TypeScript para comportamento.

## Interpolação de Dados

Utilize interpolação para renderizar dados dinâmicos nos templates:

```typescript
@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponent {
  data = "Dados dinâmicos";
}
```

## CSS no Angular

- **Global**: Utilize o arquivo `style.css`.
- **Scoped**: Estilos específicos no componente para evitar replicação desnecessária.

## Compartilhando Dados Entre Componentes

Utilize o decorator `@Input` para passar dados de um componente pai para um componente filho.

## Diretivas

Angular permite criar diretivas para estender HTML com novos comportamentos:

- **ngStyle**: Aplicar estilos inline.
- **ngIf**: Trabalhar com condições.

## CLI (Command Line Interface)

Principais comandos:

- `ng build`: Compila a aplicação.
- `ng serve`: Constrói e serve a aplicação.
- `ng generate`: Gera ou modifica arquivos.
- `ng test`: Executa testes unitários.
- `ng e2e`: Compila e executa testes end-to-end.

## Bibliotecas Próprias do Angular

- **Angular Router**: Para navegação e roteamento avançado.
- **Angular Forms**: Sistema para validação de formulários.
- **Angular HttpClient**: Comunicação cliente-servidor.
- **Angular Animations**: Animações baseadas nos estados da aplicação.
- **Angular PWA**: Inclui service worker e web application manifest para aplicações progressivas.
- **Angular Schematics**: Ferramenta para scaffolding e atualizações automáticas.

## Referência

Para mais informações, visite a [documentação oficial do Angular](https://angular.io/guide/what-is-angular).
```

Este arquivo README.md pode ser incluído no diretório raiz do seu projeto Angular para servir como um guia ou ponto de referência para novos desenvolvedores na equipe ou para quem está aprendendo a trabalhar com Angular.