import type { Meta, StoryObj } from '@storybook/react';

import HelpOutlineOutlined from '../../lib/action/HelpOutlineOutlined';

const meta: Meta<typeof HelpOutlineOutlined> = {
  component: HelpOutlineOutlined,
  tags: ['autodocs'],
  title: 'action/HelpOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof HelpOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
