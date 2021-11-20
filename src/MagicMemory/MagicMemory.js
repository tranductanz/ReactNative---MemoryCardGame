import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Clock } from './components/ClockTimer/ClockTimer';
import { ScreenStack } from './HomeScreen';
const backCard = require('./assets/images/back.png')
const background = require('./assets/images/background.png');

const animal1 = require('./assets/animals/1.png');
const animal2 = require('./assets/animals/2.png');
const animal3 = require('./assets/animals/3.png');
const animal4 = require('./assets/animals/4.png');
const animal5 = require('./assets/animals/5.png');
const animal6 = require('./assets/animals/6.png');
const animal7 = require('./assets/animals/7.png');
const animal8 = require('./assets/animals/8.png');
const animal9 = require('./assets/animals/9.png');
const animal10 = require('./assets/animals/10.png');
const animal11 = require('./assets/animals/11.png');
const animal12 = require('./assets/animals/12.png');

const cardImages = [
    {
        hinhAnh: animal1,
        matched: false,
        isClick: false,
    },
    {
        hinhAnh: animal2,
        matched: false,
        isClick: false,
    },
    {
        hinhAnh: animal3,
        matched: false,
        isClick: false,
    },
    {
        hinhAnh: animal4,
        matched: false,
        isClick: false,
    },
    {
        hinhAnh: animal5,
        matched: false,
        isClick: false,
    },
    {
        hinhAnh: animal6,
        matched: false,
        isClick: false,
    },
    {
        hinhAnh: animal7,
        matched: false,
        isClick: false,
    },
    {
        hinhAnh: animal8,
        matched: false,
        isClick: false,
    },
    {
        hinhAnh: animal9,
        matched: false,
        isClick: false,
    },
    {
        hinhAnh: animal10,
        matched: false,
        isClick: false,
    },
    {
        hinhAnh: animal11,
        matched: false,
        isClick: false,
    },
    {
        hinhAnh: animal12,
        matched: false,
        isClick: true,
    },

]



export default function MagicMemory(props) {


    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);

    useEffect(() => {




        const shuffleCards = () => {
            const shuffledCards = [...cardImages, ...cardImages]
                .sort(() => Math.random() - 0.5)
                .map((card) => ({ ...card, id: Math.random() }))
            setCards(shuffledCards);
            setTurns(0);
        }
        shuffleCards();
    }, [])



    const handleChoice = (card) => {
        if (choiceOne !== null) {
            setChoiceTwo(card)
        }
        else {
            setChoiceOne(card);
        }
    }



    // compare 2 selected Cards
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
    }
    useEffect(() => {
        setTimeout(() => {
            console.log(choiceOne, 'one')
            console.log(choiceTwo, 'two')
            if (choiceOne && choiceTwo) {
                if (choiceOne.hinhAnh === choiceTwo.hinhAnh) {
                    console.log('cards MATCH !!')
                    setCards(prevCards => {
                        return prevCards.map(card => {
                            console.log(card.matched, 'matched');

                            if (card.hinhAnh === choiceOne.hinhAnh) {
                                return {
                                    ...card,
                                    matched: true
                                }
                            }

                            else {
                                return card;
                            }
                        })
                    })
                    resetTurn();
                }
                // else if (choiceOne.matched) {
                //     console.log('done');
                // }
                else {
                    console.log('not match')
                    resetTurn();
                }
            }
        }, 350)
    }, [choiceOne, choiceTwo])

    // console.log(cards, 'cards DAta');

    // console.log(cards, 'cards')
    const { navigation, route } = props;
    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={{ width: width, height: height }}>
                <SafeAreaView mode="margin" edges={['left', 'right', 'bottom']}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={styles.btnBack} onPress={navigation.popToTop}>
                            <Text style={{ fontSize: 20, color: 'red', padding: 5, borderRadius: 10 }}>Back To Menu</Text>
                        </TouchableOpacity>
                        <Clock />
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {cards.map(card => (
                            <TouchableOpacity
                                style={{ marginLeft: 5, }}
                                onPress={() => handleChoice(card)}
                                key={card.id}>
                                {card === choiceOne || card === choiceTwo || card.matched
                                    ? <Image style={{ margin: 5, width: (width / 11), height: (height / 3) - 25 }} source={card.hinhAnh} />
                                    : <Image style={{ margin: 5, width: width / 11, height: (height / 3) - 25 }} source={backCard} />}
                            </TouchableOpacity>
                        ))}
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

})