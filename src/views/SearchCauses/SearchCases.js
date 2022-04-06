
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";


export default function searchCases() {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [searchTimer, setSearchTimer] = useState(null);

    async function fetchData(text) {
        console.log(text);
    

        fetch(`http://192.168.1.7/karam/public/api/causes-search/t?name=${text}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWI1NzBiZS0zNmE3LTQ1YTEtYTMwMi01ZjIzMzA4N2ZjMjAiLCJqdGkiOiI2NzhlZWU4Yjc3NWVkYWEwY2MzNWEyMDhhODgyMjYzNTc5YjU2YmNjNmVlYTc2ZDExNzg3OWEwNDk5NTBmNmE4YmY4MTZjYjY4ZWJiNTk3OSIsImlhdCI6MTY0ODM3ODA5Mi4wMDEwMiwibmJmIjoxNjQ4Mzc4MDkyLjAwMTAzNywiZXhwIjoxNjc5OTE0MDkxLjg5NjU0OCwic3ViIjoiMSIsInNjb3BlcyI6W119.Ta85AZGH0luZlfztq7Z8a9XUgZJk9ITiRMGFijCWaZPTzhtwMVXXCQJpgcsZpamBw0iWCejkQLMCmy95BDfpUZZmBU0N_Lumc9a8w2rdtkQbiE4-yzOqFINjoPEIdfcwYrRFEYZjjP3-6Quyi_hY4g_v1A7_9Roe4ol0i04bYioLIdE7KZjgfW-FDY-rjrHHooFuO_uqMUZcgW9Oq98ugomQVUylamDQY_Icbhs45pcbmQfILKin5W__k5K7VLRCE5sU10p6TBZxCgch4w8LzgU2xQ5Ns0TgJTvSlmbqoqGi9WJzsH0NJXLdR6nCbsPpPeB3MCvKnOMs1mHCmyQnbxrqEzy4ZPYUyzLGxqKnh5wttQOENUyaJEeXXWwvzPQGjkeN7vUjMIa-JOR-RM_zBczuRjtonZX_5pGVxmh6jjxxUPV3vYVL5qKsgn1HX3MidPXbwZ6grpF2gkvZVlGMtml8ekBEGCejqYUKt1-4kAoSb-OEeU838Svx5-HxqsG0LjaPQ3ISOSfZWsrqGkewJ5FQdGRW3r3KjPVyCi_r1wjCo7U64PU03JGY74d_BS_h19jkiBgtqnRhPy6KFUTOEcDp6TiZPE0pRtryqVRZMVOC55L3yHOammdnAmwuDBzbsqsHZOvihJml0dITyVDtKZWkQZxMsvbLk30xCxmnhYQ',
          }
        })
          //Sending the currect offset with get request
          .then((response) => response.json())
          .then((responseJson) => {
            //Successful response from the API Call
            console.log(responseJson);
            if (responseJson.length > 0) {
            //  setOffset(offset + 1);
              //After the response increasing the offset for the next API call.
              //setDataSource([...dataSource, ...responseJson.data]);
              console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaa  " ,responseJson );
             // setResults(responseJson);
             // setLoading(false);
            } else {
           //   setIsListEnd(true);
            //  setLoading(false);
            }
          })
          .catch((error) => {
            console.error(error);
          });
    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search"
                onChangeText={(text) => {
                    if (searchTimer) {
                        clearTimeout(searchTimer);
                    }
                    setInput(text);
                    setSearchTimer(
                        setTimeout(() => {
                            fetchData(text);
                        }, 2000),
                    );
                }}
                value={input}
            />
            <FlatList
                data={results}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title.rendered}</Text>
                        <Text>{item.excerpt.rendered}</Text>
                    </View>
                )}
                keyExtractor={(item) => "" + item.id}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
