import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import CommentPage from './CommentPage';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { addNewComment, loadShops } from '../../Redux/ShopSlice/ShopSlice';
import { ScrollView } from 'react-native';
import styles from '../../styles/stylesall';

export default function AllComments() {
  const [input, setInput] = useState('');
  const [number, setNumber] = useState(1);
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user.id);
  const shop = useAppSelector((state) => state.shops.oneShop);

  const SubmitHandler = () => {
    const obj = {
      body: input,
      stars: number,
      shopid: shop.id,
      userid: user,
    };
    
    dispatch(
      addNewComment({
        body: input,
        stars: number,
        shopid: shop.id,
        userid: user,
      })
    );
    dispatch(loadShops());
    setInput('');
    setNumber(1);
  };
  console.log(number);
  return (
    <>
      <ScrollView style={styles.main}>
        {shop.Comments.map((comment) => (
          <CommentPage comment={comment} key={comment.id} />
        ))}
      </ScrollView>
      <TextInput
      placeholder='Введите комментарий...'
      style={{backgroundColor: '#bad9ed'}}
        onChangeText={(newText) => setInput(newText)}
        value={input}
      ></TextInput>
      <AirbnbRating
        count={5}
        defaultRating={number}
        onFinishRating={(s) => setNumber(s)}
        size={20}
      />
      <Button textColor='black' onPress={SubmitHandler}> Отправить</Button>
    </>
  );
}
