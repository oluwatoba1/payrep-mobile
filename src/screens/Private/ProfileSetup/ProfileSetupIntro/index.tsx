import {View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {MainLayout} from '@components/Layout';
import {Typography} from '@components/Forms';
import IconImages from '@assets/images/appIcons';
import {ProfileStackParamList} from '@navigation/types';
import {ProfileStep} from '@components/Miscellaneous';
import UserProfileCard from '@components/UserProfileCard';
import {useAppSelector} from '@store/hooks';
import {styles} from './styles';
import useToast from '@hooks/useToast';

interface IStep {
  title: string;
  description: string;
  stage: number;
  screen: keyof ProfileStackParamList;
}

const profileCompletion = {
  tierStage: 'Tier 1 Account',
  body: 'In compliance with CBN policies, kindly fill all up the informations',
  dailyLimit: '20,000',
  balanceLimit: 'Unlimited',
};

const steps: IStep[] = [
  {
    title: 'BVN',
    description: 'Fill the form 😊',
    stage: 1,
    screen: 'BvnVerification',
  },
  {
    title: 'Residential Address',
    description: 'Fill the form 😊',
    stage: 2,
    screen: 'LocationDetails',
  },
  {
    title: 'Means of identification',
    description: 'Fill the form 😊',
    stage: 3,
    screen: 'MeansOfIdentification',
  },
  {
    title: 'PEP status',
    description: 'Fill the form 😊',
    stage: 4,
    screen: 'Pep',
  },
  {
    title: 'Source of income',
    description: 'Fill the form 😊',
    stage: 5,
    screen: 'SourceOfIncome',
  },
];

const profileSetupMap: Record<string, number> = {
  BVN_VERIFICATION: 1,
  LOCATION: 2,
  IDENTIFICATION: 3,
  PEP: 4,
  SOURCE_OF_INCOME: 5,
};

type ProfileCompletionIntroProps = StackScreenProps<
  ProfileStackParamList,
  'ProfileCompletionIntro'
>;

export default function ProfileCompletionIntro({
  navigation: {navigate},
}: ProfileCompletionIntroProps) {
  const stage = useAppSelector(
    state => state.auth.customer?.stage || 'NATIONALITY',
  );
  const {showToast} = useToast();
  console.log(stage);

  return (
    <MainLayout
      rightTitle="Complete Profile"
      keyboardAvoidingType="scroll-view"
      backAction={() => {}}>
      <View style={styles.userCardContainer}>
        <UserProfileCard
          profileImage={IconImages.users.defaultUser}
          username="Musa Abdullahi"
          mobileNumber="(070653263623)"
        />
      </View>
      {/* <CustomCard
                    visible={true}
                    customContainerStyle={styles.cardContainer}
                > */}
      <View style={styles.cardContent}>
        <View>
          <Typography
            title={profileCompletion.tierStage}
            type="subheading-sb"
          />
          <Typography title={profileCompletion.body} type="body-r" />
        </View>
        <View style={styles.limitContainer}>
          <View style={styles.limitItem}>
            <Typography
              type="label-r"
              title="Daily Limit: "
              style={styles.limitText}
            />
            <Typography
              type="label-r"
              title={profileCompletion.dailyLimit}
              style={styles.limitText}
            />
          </View>
          <View style={styles.limitItem}>
            <Typography
              type="label-r"
              title="Balance Limit: "
              style={styles.limitText}
            />
            <Typography
              type="label-r"
              title={profileCompletion.balanceLimit}
              style={styles.limitText}
            />
          </View>
        </View>
        {steps.map((step, index) => (
          <ProfileStep
            key={index}
            index={index + 1}
            title={step.title}
            description={step.description}
            completed={(profileSetupMap[stage] || 0) >= index + 1}
            isLastStep={index === steps.length - 1}
            handleNavigation={() => {
              if ((profileSetupMap[stage] || 0) + 1 === step.stage) {
                navigate(step.screen as keyof ProfileStackParamList);
              } else if ((profileSetupMap[stage] || 0) + 1 > step.stage) {
                showToast('warning', 'This step has already been completed');
              } else {
                showToast('warning', 'The next step is not yet completed');
              }
            }}
          />
        ))}
      </View>
    </MainLayout>
  );
}
