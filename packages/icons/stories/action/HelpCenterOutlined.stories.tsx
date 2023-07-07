import type { Meta, StoryObj } from '@storybook/react';

import HelpCenterOutlined from '../../lib/action/HelpCenterOutlined';

const meta: Meta<typeof HelpCenterOutlined> = {
  component: HelpCenterOutlined,
  tags: ['autodocs'],
  title: 'action/HelpCenterOutlined',
};

export default meta;
type Story = StoryObj<typeof HelpCenterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
