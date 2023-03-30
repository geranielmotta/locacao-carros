import { CarDetailsParams } from "../../screens/CarDetails";
import { ConfirmationParams } from "../../screens/Confirmation";
import { SchedulingParams } from "../../screens/Scheduling";
import { SchedulingDetailsParams } from "../../screens/SchedulingDetails";
import { SignUpSecondStepParams } from "../../screens/SignUp/SignUpSecondStep";

export type RootStackParamList = {
    Splash: undefined;
    SignIn: undefined;
    SignUpFirstStep: undefined;
    SignUpSecondStep: SignUpSecondStepParams;
    Home: undefined;
    CarDetails: CarDetailsParams;
    Scheduling: SchedulingParams;
    SchedulingDetails: SchedulingDetailsParams;
    Confirmation: ConfirmationParams;
    MyCars: undefined;
};