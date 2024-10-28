# Análise do Teste de Carga - K6 Load Test: 2024-10-28 00:10

## Resumo Geral

- **Total de Requisições**: 109,485
- **Requisições Falhadas**: 0
- **Limiares Violados**: 0
- **Checagens Falhadas**: 0

O teste de carga foi bem-sucedido, sem falhas em requisições ou checagens, indicando que o endpoint está robusto sob a carga testada.

## Métricas de Requisição

### Durabilidade das Requisições

| Métrica                   | Contagem | Taxa | Média (ms) | Máximo (ms) | Mediana (ms) | Mínimo (ms) | 90º Percentil (ms) | 95º Percentil (ms) |
|--------------------------|----------|------|------------|-------------|---------------|-------------|---------------------|---------------------|
| `http_req_duration`      | -        | -    | 234.36     | 27,119.75   | 166.00        | 121.21      | 297.10              | 663.36              |
| `http_req_waiting`       | -        | -    | 192.14     | 27,119.68   | 156.03        | 121.10      | 228.77              | 267.37              |
| `http_req_connecting`    | -        | -    | 0.56       | 132.91      | -             | -           | -                   | -                   |
| `http_req_tls_handshaking`| -        | -    | 0.59       | 288.01      | -             | -           | -                   | -                   |
| `http_req_sending`       | -        | -    | 0.04       | 1.06        | 0.06          | -           | 0.08                | 0.09                |
| `http_req_receiving`     | -        | -    | 42.17      | 19,008.62   | -             | -           | 50.08               | 210.48              |
| `http_req_blocked`       | -        | -    | 1.15       | 413.26      | -             | -           | -                   | -                   |
| `iteration_duration`      | -        | -    | 1,235.88   | 28,120.13   | 1,167.91      | 1,121.36    | 1,311.68            | 1,663.64            |

### Análise das Métricas

1. **Total de Requisições**: O total de 109,485 requisições indica uma carga significativa e bem distribuída ao longo do teste.

2. **Requisições Falhadas**: A ausência de requisições falhadas é um indicativo de que o endpoint se comportou conforme o esperado, mesmo sob carga.

3. **Durabilidade das Requisições**:
   - **Duração Média das Requisições**: A média de `http_req_duration` foi de 234.36 ms, o que é aceitável para muitas aplicações, embora o valor máximo de 27,119.75 ms sugira que houve picos de latência em algum ponto.
   - **90º e 95º Percentis**: Com valores de 297.10 ms e 663.36 ms, respectivamente, a maioria das requisições foi processada rapidamente, mas há outliers que podem afetar a experiência do usuário.

4. **Espera e Conexão**:
   - O tempo médio de espera (`http_req_waiting`) foi de 192.14 ms, que é uma métrica crítica para a percepção do usuário.
   - O tempo de conexão foi bastante baixo, com um máximo de 132.91 ms, sugerindo que a maioria das conexões foi estabelecida rapidamente.

5. **Recepção de Dados**:
   - O tempo médio de recebimento (`http_req_receiving`) foi de 42.17 ms, indicando que a maior parte do tempo foi gasto em espera e não na recepção de dados.

6. **Duração das Iterações**: A duração média das iterações foi de 1,235.88 ms, o que também pode incluir tempos de espera e latências, indicando um tempo total razoável para completar as requisições.

## Conclusão

O teste de carga demonstrou que o endpoint é capaz de lidar com um alto volume de requisições sem falhas. No entanto, os picos de latência observados sugerem a necessidade de uma investigação adicional para otimizar a performance, especialmente durante momentos de carga máxima.

### Recomendações

- **Monitoramento Contínuo**: Implementar monitoramento contínuo para identificar e mitigar picos de latência.
- **Análise de Bottlenecks**: Investigar as causas dos picos de latência para otimizar o desempenho.
- **Testes de Stress Adicionais**: Realizar testes de stress com limites superiores para avaliar a escalabilidade do sistema.

---

Para qualquer dúvida ou mais informações, entre em contato!
