/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { HubitusCheckupWhereUniqueInput } from "../../hubitusCheckup/base/HubitusCheckupWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class HubitusCheckupUpdateManyWithoutUsersInput {
  @Field(() => [HubitusCheckupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HubitusCheckupWhereUniqueInput],
  })
  connect?: Array<HubitusCheckupWhereUniqueInput>;

  @Field(() => [HubitusCheckupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HubitusCheckupWhereUniqueInput],
  })
  disconnect?: Array<HubitusCheckupWhereUniqueInput>;

  @Field(() => [HubitusCheckupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HubitusCheckupWhereUniqueInput],
  })
  set?: Array<HubitusCheckupWhereUniqueInput>;
}

export { HubitusCheckupUpdateManyWithoutUsersInput as HubitusCheckupUpdateManyWithoutUsersInput };