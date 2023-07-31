import {StyleSheet} from 'react-native';

export const ExStyle = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6E6',
    padding: 15,
    flex: 1,
    alignContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 5,
  },
  contentBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#000',
    fontWeight: 500,
  },
  amountTotal: {
    top: 10,
    fontSize: 16,
    color: '#000',
  },
  formInput: {
    top: 10,
    width: '100%',
  },
  schedNumber: {
    top: 10,
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  drop: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 9,
    borderRadius: 4,
  },
  numberInput: {
    width: '100%',
    fontSize: 15,
    height: 50,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    color: '#000',
  },
  loginBtns: {
    alignItems: 'center',
    width: '100%',
    top: 20,
  },
  addOpacity: {
    backgroundColor: '#0D99FF',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    width: '50%',
    height: 40,
    marginTop: 40,

  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',

  },
  horizontalLines: {
    backgroundColor: '#898989',
    width: '80%',
    height: 3,
    marginTop: 15,
    borderRadius: 10,
    alignSelf: 'center',
  },
  resTable: {
    width: '100%',
    height: 100,
    padding: 10,
  },
  logsText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
  },
  saveOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 45,
    backgroundColor: 'steelblue',
    borderRadius: 5,
  },
  btnDel: {
    backgroundColor: 'crimson',
    padding: 10,
    borderRadius: 10,
    height: 40,
    alignSelf: 'center',
  },
  resView: {
    backgroundColor:'white',
    alignContent: 'space-around',
    flexDirection: 'row',
    padding: 10,
    borderBottomColor:'#E6E6E6',
    borderBottomWidth: 10,
  },
  rightC: {
    flex:1,
    display: 'flex',
    flexDirection:'row',
    alignContent: 'center',
    justifyContent: 'center',
  }
});
