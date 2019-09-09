import React, { Component } from 'react'
import { TextInput, ScrollView, Button, StyleSheet, Text, View } from 'react-native'
import { black, white } from 'ansi-colors'
// Cria o componente e seta ele como o padrão para exportação, pode se ter mais de um componente e alterar a qual você quer exportar
export default class App extends Component {
    // O Construtor herda as classes pais dos componentes do React
    constructor(props) {
        super(props);
        // O state, em React, é onde guardamos os dados do nosso componente
        this.state = {
            texto: 'A',
            x: '0',
            y: '0'
        };
    }
    // Craição de uma funcao padrão
    funcao(){
        // A unica forma de alterar o estado de um componente é ultilizando o setState
        // Sempre que o State é alterado a página atualiza, assim trazendo os novos dados para a tela
        this.setState({texto: (this.state.texto == 'A')?'B':'A'})
    }

    render() {
        return (
            // Cria um Hambiente de Visualização com possibilidade de rolagem
            <ScrollView style={styles.container}>
                {/* O Text é ultilizado como uma tag qualquer de texto do HTML */}
                <Text style={styles.texto}>
                    Digite o Primeiro Numero
                </Text>
                {/* O unico tipo de input do react é o TextInput */}
                <TextInput
                    style={{ color: 'white', backgroundColor: 'green' }}
                    onChangeText={(x) => this.setState({ x })}
                    value={this.state.x}
                    keyboardType={'numeric'}
                />
                <Text style={styles.texto}>
                    Digite o Segundo Numero
                </Text>
                <TextInput
                    style={{ color: 'white', backgroundColor: 'green' }}
                    onChangeText={(y) => this.setState({ y })}
                    value={this.state.y}
                    keyboardType={'numeric'}
                />
                {/* Sempre que houver alguma alteração dos valores de x e y será apresentado aqui */}
                <Text style={styles.texto}>
                    {this.state.x} + {this.state.y} = {parseInt(this.state.x) + parseInt(this.state.y)}
                </Text>
                {/* Aqui é apresentado oque esta guardado na variavel de texto do state */}
                <Text style={styles.texto1}>
                    {this.state.texto}
                </Text>
                {/* Criação do botão que quando pressionado chama a função de alteração da variavel texto do state */}
                <Button
                    onPress={()=> this.funcao()}
                    title={'Click Aqui'}
                />
            </ScrollView>
        );
    }
}


// O css presente é sempre em sass , uma forma de se ultilizar o css mas com a escrita em js
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: '100%',
        backgroundColor: 'black',
    },
    texto: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    },
    botao: {
        margin: 20
    },
    texto1:{
        marginTop: 50,
        color: 'white',
        textAlign: 'center',
        fontSize: 60
    }
})
