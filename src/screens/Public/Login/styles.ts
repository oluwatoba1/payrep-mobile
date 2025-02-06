import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';
import {PNR, PNSB} from '../../../theme/Fonts';
import {scale, scaleHeight} from '../../../utils/Helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary['base'],
  },
  top: {
    width: '100%',
    height: scale(812),
    backgroundColor: Colors.primary['base'],
    paddingTop: scale(107),
    flex: 1,
  },
  logo: {
    height: scale(178),
    width: scale(178),
    alignSelf: 'center',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    marginTop: scale(324),
    // Background color is not meant to be white,
    // it is meant to be colors.appbackground but
    // because of some textinput feature, I set to white, final review to decide which to go with
    backgroundColor: 'white',
    flexShrink: scale(0),
    borderTopLeftRadius: scale(32),
    borderTopRightRadius: scale(32),
  },
  overlayContent: {
    paddingHorizontal: scale(24),
    paddingTop: scale(32),
    paddingBottom: scale(0),

    // borderWidth: 2,
  },
  overlayHeading: {
    fontSize: scale(24),
    color: Colors.gray[700],
    fontFamily: PNSB,
    paddingBottom: scale(16),
    letterSpacing: scale(-0.48),
    lineHeight: scale(31.2),
  },
  overlayText: {
    fontSize: scale(16),
    color: Colors.gray[600],
    fontFamily: PNR,
    lineHeight: scale(23.2),
    
  },
  inputGroup: {
    paddingBottom: scaleHeight(10),
  },
  createAccount: {
    fontSize: scale(16),
    color: Colors.gray[600],
    fontFamily: PNR,
    lineHeight: scale(21),
    
    textAlign: 'center',
    paddingTop: scale(16),
  },
  caLink: {
    color: Colors.primary[600],
  },
  forgotPass: {
    fontSize: scale(14),
    color: Colors.gray[600],
    fontFamily: PNSB,
    lineHeight: scale(21),
    
    textAlign: 'center',
    paddingTop: scale(8),
    paddingBottom: scale(16),
  },
  biometricsContainer: {
    borderWidth: 0.5,
    height: scale(48),
    width: scale(48),
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.gray['300'],
    backgroundColor: Colors.gray['100'],
    marginBottom: scaleHeight(16)
  },
  biometricsIcon: {
    height: scale(24),
    width: scale(24),
  },
  bottomItemContainer: {
    justifyContent:"center", 
    alignItems:"center",
    marginTop:scaleHeight(16)
  },
  accountButton: {
    flexDirection:'row', 
    gap:scaleHeight(4)
  },
  cbnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scaleHeight(4)
  }
});

export default styles;
