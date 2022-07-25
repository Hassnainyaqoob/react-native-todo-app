import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

function App() {

  const [inpValue, setInpValue] = useState([])
  const [data, setData] = useState("")



  let HandleChange = () => {
    setData()
    let main = Object.values(data)
    inpValue.push(main)
    console.log(inpValue);
  }

  let editHandle = () => {

  }

  let deleteHandle = (i) => {
    let array = [...inpValue]
    array.splice(i, 1)
    setInpValue(array)
  }

  //   let deleteAll = () => {
  //     setTodos([])
  // }
  return (
    <View style={styles.container}>

      <View style={styles.todoWordMain}>
        <Text style={styles.todoword}>Todo App</Text>
      </View>

      <View style={styles.printBtn}>

        {inpValue.map((v, i) => (
          <>
            <Text key={i} style={{ color: "black", fontSize: 20, marginLeft: 13, marginTop: 23 }}>{v}</Text>
            <TouchableOpacity onPress={editHandle} style={{ backgroundColor: "black", width: 70, height: 39, alignItems: "center" }}   >
              <Text style={{ color: "lightgray", marginTop: 8 }} >Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteHandle(i)} style={{ backgroundColor: "black", width: 75, height: 39, alignItems: "center", marginRight: 35 }}   >
              <Text style={{ color: "lightgray", marginTop: 8 }} >Delete</Text>
            </TouchableOpacity>
          </>

        ))}

      </View>
      <View style={styles.inpbtnMain}>

        <TextInput placeholder='Add Todo' value={data} onChangeText={(e) => setData(e)} placeholderTextColor={"black"} style={styles.inp} />
        <TouchableOpacity onPress={HandleChange} style={styles.touchOpcay} >
          <Text style={styles.touchopcyText} >Add</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  todoWordMain: {
    flex: 0.5,
    alignItems: "center"
  },
  todoword: {
    color: "black",
    fontFamily: 'sans-serif-light',
    // fontFamily:"",
    fontSize: 30,
    // fontWeight: "bold",
    marginTop: 40
  },
  printBtn: {
    flex: 2,
    // justifyContent:"flex-start"
    // flexDirection: "row",


  },

  inpbtnMain: {
    marginHorizontal: 6,
    justifyContent: "flex-end",
    flexDirection: "row"
  },

  inp: {
    backgroundColor: "lightgray",
    borderRadius: 25,
    marginTop: 2,
    flex: 4,
    paddingHorizontal: 16,
    marginBottom: 5
  }
  ,
  touchOpcay: {
    backgroundColor: "black",
    borderRadius: 25,
    padding: 5,
    alignItems: "center",
    flex: 1,
    marginBottom: 3,
    marginLeft: 3

  },

  touchopcyText: {
    marginTop: 9,
    color: "lightgray"
  }


})

