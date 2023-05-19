var readline= require('readline-sync');
var opcao= null
var nome= null
var snome= null
var idade= null
var assento= null
var origem= null
var destino= null
var dispo= 0
var dispob= null
console.log('+--------Passagens aérias--------+')
console.log('|    0 - Encerrar o programa     |')
console.log('|    1 - Comprar passagem        |')
console.log('|    2 - Consultar voos          |')
console.log('|    3 - Emitir ticket           |')
console.log('|    4 - Comprar passagem        |')
console.log('+--------------------------------+')
while(opcao!=0){
    
        opcao= readline.question("Selecione a opcao: ")
        if(opcao == 1){
            console.log("+ _ _ _ _ _ _Passagens Aereas _ _ _ _ _ _+")
            console.log("você esta em -> comprar passagens")
            nome=readline.question(" Digite o nome: ")
            snome=readline.question(" Digete seu sobrenome: ")
            idade=readline.question(" Digite sua idade(Aqui pode até de menor): ")
            assento=readline.question(" Digite seu assento: ")
            origem=readline.question(" Digite sua origem (Presidente Prudente): ")
            while(origem!="Presidente Prudente"){
                origem=readline.question(" Digite sua origem novamente: ")
            }
            destino=readline.question(" Digite seu destino (So temos Dublin): ")
            while(destino!="Dublin"){
                destino=readline.question(" Digite seu destino novamente: ")
            }
            console.log("*************RESUMO***********")
            console.log("Nome: "+nome)
            console.log("Sobrenome: "+snome)
            console.log("Idade: "+idade)
            console.log("Assento: "+assento)
            console.log("Origem: "+origem)
            console.log("Destino: "+destino)
            console.log("Valor: 1.500.99")
            
        }
        else if(opcao ==2){
            console.log("+ _ _ _ _ _ _Passagens Aereas _ _ _ _ _ _+")
            console.log("você esta em -> Consulta de Voos")
            console.log("Origem X Destino")
            console.log("---------------------")
            console.log("Presidente Prudente      Dublin")
            console.log("Presidente Prudente  Fechado    Ceara")
            console.log("Presidente Prudente  Fechado    Sao Paulo")
            console.log("Presidente Prudente  Fechado    New York")
            console.log('+--------Passagens aérias--------+')

        console.log('Você está em --> Consultar voos')
        console.log('')
        console.log('+-----------------------------------------------+')
        console.log('|         Origem          |              Destino      |')
        console.log('+-------------------------|---------------------+')
        console.log('|  Presidente Prudente    |              Dublin       |')
        console.log('|  Presidente Prudente    Fechado        Ceará        |')
        console.log('|  Presidente Prudente    Fechado        São Paulo    |')
        console.log('|  Presidente Prudente    Fechado        New York     |')
        console.log('+-----------------------------------------------+')
        }
            else if(opcao ==3){
                console.log("+ _ _ _ _ _ _Passagens Aereas _ _ _ _ _ _+")
                console.log("você esta em -> Mapa de Assentos")
                console.log("--------------------------------")
                for(dispo=0;dispo<13;dispo++)
                console.log("A"+dispo)
                if(dispo=assento){
                    console.log("O assento "+assento+" está ocupado")
                }
                
                
                for(dispob =0;dispob<13;dispob++)
                
                console.log ("B"+dispob)
                if(dispob=assento){
                    console.log("O assento "+assento+" está ocupado")
                }
                console.log("--------------------------------")
            }
        
        else if(opcao ==4){
            console.log("+ _ _ _ _ _ _Passagens Aereas _ _ _ _ _ _+")
            console.log("você esta em -> Emitir Ticket")
            console.log("*******************************")
            console.log("* OBRIGADO POR VIAJAR CONOSCO *")
            console.log("* Cliente: "+nome+" "+snome+" *")
            console.log("* Idade: "+idade+"        Assento: "+assento+" *")
            console.log("* Origem/Destino: "+origem+" > "+destino+" *")
            console.log("* Status do Voo: confirmardo *")
            console.log("* Valor: 1.500.99 *")
            console.log("*******************************")
        }
    }