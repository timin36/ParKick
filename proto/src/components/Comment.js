import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

const Comment = (props) => {

  const [dat, setDat] = useState([]); //comment json 
 
    useEffect(() => {
        const url = 'http://118.67.131.50/parklots/com/no/'+props.num;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setDat(data);
            }).catch(()=>{console.log("헐! 댓글이 없나봐여");
                          setDat("평가가 없습니다")});
    }, []);

  return(
      <Text style ={styles.te}>{dat.map( (com, index) => {
        return (
          <Text key = {index}>{com.comment.comment}{"\n"}</Text>
        )
      })}</Text>
  )
}
const styles = StyleSheet.create({
  te: {
     color: 'black',
     fontSize: 20,
   }
})
export default Comment