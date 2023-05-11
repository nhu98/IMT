import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { pxToPercentage } from '@src/core/libs/utils';
import React, { useState } from 'react';
import { RadioButtonIcon } from '@src/assets/icons';

interface Detail {
  imageUrl: string;
  title: string;
  description: string;
  timeNumber: string;
  detailId: string;
}

interface DateItem {
  title: string;
  details: Detail[];
  dateId: string;
}

interface YearItem {
  year: string;
  date: DateItem[];
  yearId: string;
}

interface Props {
  item: YearItem;
}

export const Picture = ({ item }: Props) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleToggleItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  // @ts-ignore
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textYear}>{item.year}</Text>
        {item.date.map((itemDate) => (
          <View key={itemDate.dateId}>
            <Text style={styles.monthText}>{itemDate.title}</Text>
            <View style={styles.row}>
              {itemDate.details.map((detail) => (
                <View key={detail.detailId} style={styles.detail}>
                  <TouchableOpacity
                    onPress={() => handleToggleItem(detail.detailId)}
                    style={[
                      styles.imageContainer,
                      selectedItems.includes(detail.detailId) &&
                        styles.selectedImageContainer,
                    ]}>
                    <View style={styles.imageWrapper}>
                      <ImageBackground
                        source={{ uri: `${detail.imageUrl}` }}
                        style={styles.image}>
                        <Text style={styles.titleImage}>{detail.title}</Text>
                        <Text style={styles.descriptionImage}>
                          {detail.description}
                        </Text>
                        <Text style={styles.numberImage}>
                          {detail.timeNumber}
                        </Text>
                      </ImageBackground>
                    </View>
                    {selectedItems.includes(detail.detailId) && (
                      <View style={styles.selectedIconContainer}>
                        {/* Icon for selected item */}
                      </View>
                    )}
                    {!selectedItems.includes(detail.detailId) &&
                      RadioButtonIcon({
                        width: pxToPercentage(20),
                        height: pxToPercentage(20),
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        borderRadius: 999, // Use a large enough value to make it a circle
                        justifyContent: 'center',
                        alignItems: 'center',
                      })}
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: pxToPercentage(14),
  },
  textYear: {
    color: '#3C3775',
    fontSize: pxToPercentage(16),
    fontWeight: '500',
    marginBottom: pxToPercentage(12),
  },
  monthText: {
    color: '#3C3775',
    fontSize: pxToPercentage(14),
    fontWeight: '500',
    marginBottom: pxToPercentage(8),
  },
  titleImage: {
    position: 'absolute',
    bottom: pxToPercentage(28),
    left: pxToPercentage(4),
    color: 'white',
    fontSize: pxToPercentage(15),
    fontWeight: '500',
  },
  descriptionImage: {
    position: 'absolute',
    bottom: pxToPercentage(8),
    left: pxToPercentage(4),
    color: 'white',
    fontSize: pxToPercentage(12),
  },
  numberImage: {
    position: 'absolute',
    bottom: pxToPercentage(8),
    right: pxToPercentage(4),
    color: 'white',
    fontSize: pxToPercentage(12),
  },
  image: {
    width: pxToPercentage(164),
    height: pxToPercentage(164),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    position: 'relative',
    flex: 1,
    resizeMode: 'cover',
  },
  detail: {
    padding: pxToPercentage(5),
  },
  row: {
    flexDirection: 'row',
    marginBottom: pxToPercentage(12),
  },
  selectedImageContainer: {
    borderWidth: 2,
    borderColor: 'blue', // Customize the border color for selected items
  },
  selectedIconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'blue', // Customize the background color for selected items
    borderRadius: 999, // Use a large enough value to make it a circle
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
});
