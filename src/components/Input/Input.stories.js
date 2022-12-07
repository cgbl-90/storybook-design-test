import React from "react";
import Input from "./Input";

export default {
  title: "Forms/Input",
  component: Input,
};

export const Big = () => <Input variant="big" placeholder="Big size"/>;
export const Small = () => <Input variant="small" placeholder="Small size" />;

// In V.6 you can change the names of stories

Big.storyName = "Big Input";
Small.storyName = "Small Input";