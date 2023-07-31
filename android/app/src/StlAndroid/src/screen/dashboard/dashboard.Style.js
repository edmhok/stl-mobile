import {StyleSheet} from 'react-native';

export const DashboardStyle = StyleSheet.create({
  dashboardContainer: {
    backgroundColor: '#E6E6E6',
    paddingHorizontal: 50,
    paddingVertical: 30,
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  dashboardBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 130,
    backgroundColor: '#0D99FF',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutBtn: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '50%',
    height: 50,
    backgroundColor: 'dodgerblue',
    borderRadius: 15,
  }
});
