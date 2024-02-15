import { Meta } from "@storybook/react";
import FormInput, {TypeForm} from "../../../../components/atoms/FormInput";

export default {
    title: 'Components/atoms/Input',
    component: FormInput,
} as Meta;

const Template = (args: TypeForm) => <FormInput {...args} />

export const Default1 = Template.bind({});
Default1.args = {
  label: 'Masukan Nama',
  placeholder: "masukan nama"
};
