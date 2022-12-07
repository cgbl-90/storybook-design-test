import React from "react";
import Images from "./Images";

export default {
  title: "Images",
  component: Images,
};

const Template = (args) => <Images {...args} />;

export const BigImage = Template.bind({});
BigImage.args = {
  variant: "bg_img",
  children: "Big Image",
};

export const SmallImage = Template.bind({});
SmallImage.args = {
  variant: "sm_img",
  children: "Small Image",
};

// This component still needs an image to showcase
