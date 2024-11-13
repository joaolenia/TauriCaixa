# Instruções para Instalação

Siga as instruções abaixo para instalar e configurar a aplicação.

## Passos para Instalação

### 1. Baixar a pasta de recursos

Faça o download da pasta `recursos`.

### 2. Abrir a pasta no terminal

Acesse a pasta `recursos` pelo terminal.

### 3. Executar a aplicação Spring Boot

No terminal, execute o seguinte comando para iniciar a aplicação Spring Boot:

```bash
java -jar api.jar

```

**Importante:** Certifique-se de que você tenha o **Java 17 ou superior** instalado no seu sistema.

Após executar o comando, a aplicação Spring Boot será iniciada e deverá rodar na porta `8080`. **Verifique se a porta 8080 está disponível no seu sistema para evitar conflitos.**

### 4. Testar a aplicação

Para testar a aplicação Spring Boot, abra o navegador e acesse o seguinte endereço:

```bash
http://localhost:8080/h2-caixa
```

Se tudo estiver funcionando corretamente, o console do banco H2 será exibido. Caso queira visualizar o banco de dados, siga os passos abaixo:

- No campo **JDBC URL** do console H2, insira o seguinte:

  ```bash
  jdbc:h2:file:./caixa
  ```

- Preencha os campos de login com:
  - **Username**: `root`
  - **Password**: `1234`

- Clique em **Connect**.

Caso não consiga conectar ao banco, não se preocupe, o importante é que o console do H2 seja exibido corretamente.

### 5. Instalar o aplicativo

No **Gerenciador de Arquivos**, localize a pasta `recursos` que você baixou e encontre o arquivo `.msi`.

Clique duas vezes no arquivo para iniciar o instalador. Em seguida, basta seguir as instruções do instalador, clicando em **Next** até o final, e, por fim, em **Finish**.

Após a instalação, o aplicativo estará pronto para uso.

