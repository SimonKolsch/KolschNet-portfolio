import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LinkItem } from "./index";
import { withRouter } from "storybook-addon-react-router-v6";
import { Box } from "@mantine/core";

export default {
  title: "Portfolio/Component/Navbar/LinkItem",
  component: LinkItem,
  decorators: [withRouter],
  argTypes: {},
} as ComponentMeta<typeof LinkItem>;

const Template: ComponentStory<typeof LinkItem> = (args) => (
  <Box sx={{ width: "200px" }}>
    <LinkItem {...args} />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {
  title: "Hallo",
  to: "test",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  title: "Hallo",
  to: "test",
  tooltip: "Nice Tooltip",
};
