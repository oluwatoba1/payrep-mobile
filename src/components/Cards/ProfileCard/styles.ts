import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';
import {scale} from '../../../utils/Helpers';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
  profileContainer: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 2,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  list: {
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  lastCard: {
    borderBottomWidth: 0,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    
    color: '#333',
  },
  subText: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});
