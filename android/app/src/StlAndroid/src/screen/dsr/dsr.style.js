import {StyleSheet} from 'react-native';

export const DsrStyle = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6E6',
    padding: 15,
    flex: 1,
    alignContent: 'center',
  },
  contentBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#000',
    fontWeight: 500,
    alignSelf:'flex-start',
    paddingBottom: 40,
  },
  schedNumber: {
    top: 10,
    alignSelf:'center',
    width: '100%',

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
  selectPicker: {
    top: 10,
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#000',
    alignSelf:'flex-start',

  },
  drop: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
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
    height: 'auto',
    padding: 10,
  },
  logsText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
  },
  resView: {
    backgroundColor:'white',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    borderBottomColor:'#E6E6E6',
    borderBottomWidth: 20,
  },
  resTab: {
    backgroundColor: '#E6E6E6',
    flexDirection: 'column',
  },
  
});
