import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { Card, Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AirbnbRating } from 'react-native-ratings';

export default function CommentPage({ comment }) {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.shops.oneShop.Comments);
  const navigation = useNavigation();
  return (
   
      <Card style={{ margin: 10 }}>
        <Card.Content style={{backgroundColor: 'white'}}>
          <Text variant="titleLarge">{comment.body}</Text>
          
          <AirbnbRating
          
            isDisabled={true}
            count={5}
            defaultRating={comment.stars}
            size={20}
          />
          {/* <Text variant="bodyMedium">{comment.stars}</Text> */}
        </Card.Content>
      </Card>
   
  );
}
