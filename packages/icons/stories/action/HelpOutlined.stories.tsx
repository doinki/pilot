import type { Meta, StoryObj } from '@storybook/react';

import HelpOutlined from '../../lib/action/HelpOutlined';

const meta: Meta<typeof HelpOutlined> = {
  component: HelpOutlined,
  tags: ['autodocs'],
  title: 'action/HelpOutlined',
};

export default meta;
type Story = StoryObj<typeof HelpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
