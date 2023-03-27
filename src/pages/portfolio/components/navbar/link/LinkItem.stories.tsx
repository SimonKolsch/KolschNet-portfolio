import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LinkItem } from "./index";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Portfolio/Component/Navbar/LinkItem",
  component: LinkItem,
  decorators: [withRouter],
  argTypes: {},
} as ComponentMeta<typeof LinkItem>;

const Template: ComponentStory<typeof LinkItem> = (args) => (
  <LinkItem {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "Hallo",
  to: "test",
};
