import React from 'react'
import { View } from 'react-native'

export function CTMapList({
  data,
  renderItem,
  ListHeaderComponent,
  ListHeaderComponentStyle,
  ListFooterComponent,
  ListFooterComponentStyle,
  ListEmptyComponent,
  style,
  horizontal,
  ItemSeparatorComponent,
  numColumns
}) {
  const createGroup = () => {
    const dataGroup = []
    let groupCount = 0
    let group = []
    // eslint-disable-next-line array-callback-return
    data.map((item, index) => {
      if (groupCount === 0 && index !== 0) {
        dataGroup.push(group)
        group = []
      }
      group.push(item)
      groupCount++
      if (groupCount === numColumns) groupCount = 0
      if (data.length - 1 === index) dataGroup.push(group)
    })
    return dataGroup
  }

  return (
    <View style={style}>
      <View style={ListHeaderComponentStyle}>{ListHeaderComponent && ListHeaderComponent}</View>
      {(!data || data.length === 0) && ListEmptyComponent && ListEmptyComponent}
      {((numColumns && numColumns === 1) || !numColumns) && (
        <View style={{ flexDirection: horizontal ? 'row' : 'column' }}>
          {data &&
            data.map((item, index) => (
              <View key={String(index)}>
                <View>{renderItem && renderItem({ item, index })}</View>
                {data.length - 1 !== index && ItemSeparatorComponent}
              </View>
            ))}
        </View>
      )}
      {numColumns && numColumns !== 1 && (
        <View>
          {createGroup() &&
            createGroup().map((item, index) => (
              <View key={String(index)} style={{ flexDirection: 'row' }}>
                {item.map((item2, index2) => (
                  <View key={String(index2)} style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>{renderItem && renderItem({ item: item2, index: index2 })}</View>
                    {data.length - 1 !== index && ItemSeparatorComponent}
                  </View>
                ))}
              </View>
            ))}
        </View>
      )}

      <View style={ListFooterComponentStyle}>{ListFooterComponent && ListFooterComponent}</View>
    </View>
  )
}