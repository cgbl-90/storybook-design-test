import React from "react";
import Button from "./Button";
import Center from "../Center/Center"; // decorators: [(Story) => <Center><Story /></Center>],

export default {
  title: "Forms/Button",
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Warning = () => <Button variant="warning">Warning</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

// Sample code for local/story decorators
// Arg syntax is mandatory
const Template = (args) => <Button {...args} />;
export const BtnDecorator = Template.bind({});

BtnDecorator.args = {
  variant: "warning",
  children: "Decorator sample",
};
BtnDecorator.title = "Centered button";
BtnDecorator.decorators = [(Story) => <Center>{Story}</Center>];

// https://storybook.js.org/docs/react/writing-stories/decorators
