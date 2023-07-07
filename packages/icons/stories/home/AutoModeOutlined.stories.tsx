import type { Meta, StoryObj } from '@storybook/react';

import AutoModeOutlined from '../../lib/home/AutoModeOutlined';

const meta: Meta<typeof AutoModeOutlined> = {
  component: AutoModeOutlined,
  tags: ['autodocs'],
  title: 'home/AutoModeOutlined',
};

export default meta;
type Story = StoryObj<typeof AutoModeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
