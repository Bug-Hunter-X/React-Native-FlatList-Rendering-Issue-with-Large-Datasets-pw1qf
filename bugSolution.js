```javascript
import React, { memo } from 'react';
import { FlatList, Text, View } from 'react-native';

const Item = memo(({ item }) => (
  <View style={{ height: 60, backgroundColor: 'lightgray', justifyContent: 'center', padding: 10 }}>
    <Text>{item.title}</Text>
  </View>
));

const LargeList = () => {
  const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, title: `Item ${i}` }));

  const renderItem = ({ item }) => <Item item={item} key={item.id}/>; //Using unique key

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id} //Using keyExtractor for better performance
    />
  );
};

export default LargeList;
```