import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Hint } from '.';
import { Button } from '../button';

const meta = {
  title: 'Example/Hint',
  component: Hint,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    children: <Button>Button with hint</Button>,
    display: "Hint",
    placement: "top",
  },
};

export const Bottom: Story = {
  args: {
    children: <Button>Button with hint</Button>,
    display: "Hint",
    placement: "bottom",
  },

};

export const Left: Story = {
  args: {
    children: <Button>Button with hint</Button>,
    display: "Hint",
    placement: "left",
  },

};

export const Right: Story = {
  args: {
    children: <Button>Button with hint</Button>,
    display: "Hint",
    placement: "right",
  },

};
