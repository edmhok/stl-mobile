import {StyleSheet} from 'react-native';

export const BetStyle = StyleSheet.create({
  betContainer: {
    backgroundColor: '#E6E6E6',
    paddingHorizontal: 50,
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  content: {
    width: '100%',
    top: 30,
  },
  titleSaveBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  betTitle: {
    fontSize: 25,
    color: '#000',
    fontWeight: 500,
  },
  betTotal: {
    top: 10,
    fontSize: 16,
    color: '#000',
  },
  formInput: {
    top: 10,
  },
  SchedNumber: {
    top: 10,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  drop: {
    height: 50,
    width: '40%',
    backgroundColor: '#fff',
    borderWidth: 9,
    borderColor: 'red',
    borderRadius: 10,
  },
  numberInput: {
    width: '40%',
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
  signinBtnOpacity: {
    backgroundColor: '#0D99FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    width: '50%',
    height: 40,
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  horizontalLines: {
    backgroundColor: '#898989',
    width: '100%',
    height: 8,
    borderRadius: 10,
    marginBottom: 10,
    top: 40,
  },
  betTable: {
    width: '100%',
    height: 100,
    top: 50,
  },
  betLogsText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
  },
  saveOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 45,
    backgroundColor: '#0D99FF',
    borderRadius: 5,
  },
});
