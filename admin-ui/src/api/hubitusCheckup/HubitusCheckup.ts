import { User } from "../user/User";

export type HubitusCheckup = {
  id: string;
  currentHabitus: string | null;
  testResult: string | null;
  countResult: string | null;
  suggest: string | null;
  testTime: Date;
  user?: User;
};
