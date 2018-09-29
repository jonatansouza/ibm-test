# Teste IBM

## Pré Requisitos

Instalar NodeJS [clique aqui](https://nodejs.org/en/download/)


## Problema 1

### Problema do Miojo:
 
João é um fanático por miojos; ele os adora, e, como era de se esperar, ele levou vários pacotes quando foi acampar com seus colegas. Como João só gosta de miojos feitos com o tempo exato, ele se deseperou ao perceber que havia esquecido seu relógio em casa.
 
Por sorte, ele conseguiu, no caminho, comprar duas ampulhetas de durações diferentes. Por exemplo, se o miojo precisa de 3 minutos para ficar pronto, e João tiver uma ampulheta de 5 minutos e outra de 7, uma possível forma de cozinhar o miojo é:
 
João começa virando as duas ampulhetas ao mesmo tempo.
Quando a areia da ampulheta de 5 minutos se esgotar, João torna a virá-la.
João começa a preparar o miojo quando a areia da ampulheta de 7 minutos acabar.
João tira o miojo do fogo quando a ampulheta de 5 minutos acabar novamente.
Dessa forma, o miojo ficará 3 minutos no fogo (do minuto 7 ao minuto 10).
 
Assim, apesar do miojo levar apenas três minutos para ser cozido, ele precisa de 10 minutos para ficar pronto.

Faça um programa que, dado o tempo de preparo do miojo, e os tempos das duas ampulhetas (ambos maiores que o tempo do miojo), determina o tempo mínimo necessário para o miojo ficar pronto ou se não é possível cozinhar o miojo no tempo exato com as ampulhetas disponíveis.

````
node miojo.js 7 5 3

````

## Problema 2
### Descubra o Assassino:
 
O empresário Bill G. Ates foi assassinado e o corpo dele foi deixado na frente da delegacia de polícia. O detetive Lin Ust Orvalds foi escolhido para investigar este caso. Após uma série de investigações, ele organizou uma lista com prováveis assassinos, os locais do crime e quais armas poderiam ter sido utilizadas.
 
#### Suspeitos:
<ul>
    <li>Charles B. Abbage
    <li>Donald Duck Knuth
    <li>Ada L. Ovelace
    <li>Alan T. Uring
    <li>Ivar J. Acobson   
    <li>Ras Mus Ler Dorf
</ul>

#### Locais:
<ul>
    <li> Redmond
    <li> Palo Alto
    <li>San Francisco
    <li>Tokio
    <li>Restaurante no Fim do Universo
    <li>São Paulo
    <li>Cupertino
    <li>Helsinki
    <li>Maida Vale
    <li>Toronto
</ul>

#### Armas:

<ul>
    <li>Peixeira
    <li>DynaTAC 8000X (o primeiro aparelho celular do mundo)
    <li>Trezoitão
    <li>Trebuchet
    <li>Maça
    <li>Gládio
</ul>

#### Descrição
Uma testemunha foi encontrada, mas ela só consegue responder se Lin fornecer uma teoria. Para cada teoria ele "chuta" um assassino, um local e uma arma. A testemunha então responde com um número. Se a teoria estiver correta (assassino, local e arma corretos), ela responde 0. Se a teoria está errada, um valor 1,2 ou 3 é retornado. 1 indica que o assassiona está incorreto; 2 indica que o local está incorreto; 3 indica que a arma está incorreta. Se mais de uma suposição está incorreta, ela retorna um valor arbitrário entre as que estão incorretos (isso é totalmente aleatório).
 
Por exemplo, se o assassino for Donald Duck Knuth usando um trezoitão em Tokio:
Teoria: 1, 1, 1
Retorno: 1, ou 2, ou 3 (todos estão incorretos) 
Teoria: 3, 1, 3
Retorno: 1, ou 3 (somente o local está correto)
Teoria: 5, 3, 4
Retorno: 1 (somente o assassino está incorreto)
Teoria: 2, 3, 4
Retorno: 0 (todos corretos, você solucionou o caso)
Você precisa desenvolver um programa que resolva o problema no menor número de tentativas possível. 


````
node investigator.js

````

As teorias serão apresentadas e o usuário deve informar se estão corretas de acordo com a descrição